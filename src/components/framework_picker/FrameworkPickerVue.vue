<template>
  <div class="framework-picker" ref="canvasContainer">
    <div v-if="outOfQuestions && !singleAnswer" class="question">
      <span>No more questions!</span>
    </div>
    <div v-if="!outOfQuestions && !singleAnswer" class="question">
      <span>{{ currentQuestion.title }}</span>
      <p>{{ currentQuestion.description }}</p>
      <button class="no" @click="pickOption($event, currentQuestion.no)">
        No
      </button>
      <button class="yes" @click="pickOption($event, currentQuestion.yes)">
        Yes
      </button>
    </div>
    <div class="frameworks">
      <template v-if="!pickForMe" v-for="framework in compatibleFrameworks">
        <div
          class="framework"
          v-if="framework.criteria"
          @click="navigate(framework.slug)"
        >
          <img :src="framework.icon" />
          <span>{{ framework.name }}</span>
        </div>
      </template>
      <template v-else>
        <div
          class="framework"
          v-if="highestScoreItem"
          @click="navigate(highestScoreItem.slug)"
        >
          <img :src="highestScoreItem.icon" />
          <span>{{ highestScoreItem.name }}</span>
        </div>
      </template>
    </div>
    <div class="actions">
      <button class="my-button" @click="askAgain($event)">Ask again</button>
      <button class="my-button" @click="reset($event)">Reset</button>
      <button
        v-if="compatibleFrameworks.length > 1"
        class="my-button pick-for-me"
        :class="{ active: pickForMe }"
        @click="clickPickForMe"
      >
        Pick for me
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive, watch, computed } from "vue";
import type { Ref } from "vue";
import type { Framework, Criteria, Question, QuestionOption } from "./types.ts";
import { Languages } from "./types.ts";
import { questions } from "./questions.ts";
import { frameworks } from "./frameworks.ts";

let pickForMe = ref(false);
let singleAnswer = ref(false);
let outOfQuestions = ref(false);
let index = 0;
let currentQuestion: Ref<Question> = ref(questions[index]);
let selectedOptions: Ref<Criteria> = ref({});

const navigate = (slug: string) => {
  window.location.href = "/" + slug;
};
const compareCriteria = (left: Criteria, right: Criteria) => {
  return Object.keys(left).every((key: string) => {
    const optionValue = left[key];
    const frameworkCriteriaValue = right[key];
    if (frameworkCriteriaValue === undefined) return true;
    return optionValue === undefined || frameworkCriteriaValue === optionValue;
  });
};
const nextCompatibleQuestion = () => {
  index += 1;
  if (index > questions.length - 1) {
    outOfQuestions.value = true;
    return false;
  }
  while (
    index <= questions.length - 1 &&
    !compareCriteria(selectedOptions.value, questions[index].criteria)
  ) {
    index += 1;
    if (index > questions.length - 1) {
      outOfQuestions.value = true;
      return false;
    }
  }
  return true;
};
const pickOption = (event: MouseEvent, option: QuestionOption) => {
  selectedOptions.value = Object.assign(selectedOptions.value, option.effect);
  if (compatibleFrameworks.value.length === 1) {
    singleAnswer.value = true;
    return;
  }
  if (nextCompatibleQuestion()) currentQuestion.value = questions[index];
};
const compatibleFrameworks = computed(() => {
  return frameworks.filter((framework) => {
    return Object.keys(selectedOptions.value).every((key: string) => {
      const optionValue = selectedOptions.value[key];
      const frameworkCriteriaValue = framework.criteria[key];
      if (frameworkCriteriaValue === undefined) return true;
      return (
        optionValue === undefined || frameworkCriteriaValue === optionValue
      );
    });
  });
});
const clickPickForMe = (event: MouseEvent) => {
  pickForMe.value = !pickForMe.value;
};
const reset = (event: MouseEvent) => {
  index = -1;
  if (nextCompatibleQuestion()) currentQuestion.value = questions[index];
  outOfQuestions.value = false;
  selectedOptions.value = {};
  singleAnswer.value = false;
};
const askAgain = (event: MouseEvent) => {
  index = -1;
  if (nextCompatibleQuestion()) currentQuestion.value = questions[index];
  outOfQuestions.value = false;
};
const highestScoreItem = computed(() => {
  return compatibleFrameworks.value.reduce(
    (prev, current) => (prev.score > current.score ? prev : current),
    {}
  );
});
</script>

<style>
.framework-picker {
  margin: 0.5cm auto 0 auto;
}
.my-button {
  background-color: var(--sl-color-accent);
  border: 1px solid var(--sl-color-accent-high);
  margin: 0 auto;
  display: block;
  border-radius: 0.5rem;
  padding: 0.5rem;
  cursor: pointer;
}
.actions {
  width: fit-content;
  margin: auto;
  display: block;
}
.actions button {
  display: inline-block;
  margin: 0.5rem;
}
.pick-for-me.active {
  background-color: var(--success);
  border: 1px solid var(--success-border);
}
.question {
  width: 100%;
  background-color: var(--sl-color-gray-6);
  border: 1px solid var(--sl-color-gray-5);
  border-radius: 0.5rem;
  padding: 1rem;
}
.question > span {
  font-size: 1.5rem;
}
.question > p {
  font-size: 1rem;
}
.question button.no,
.question button.yes {
  cursor: pointer;
  font-size: 1.5rem;
  border-radius: 1rem;
  outline: none;
  border: none;
  width: calc(50% - 0.375rem);
}
.question button.no {
  background-color: red;
  margin-right: 0.75rem;
}
.question button.yes {
  background-color: green;
}
.frameworks {
  grid-template-columns: repeat(
    3,
    1fr
  ); /* Example: 3 columns with equal width */
  grid-auto-flow: row; /* Items flow in rows (downward) */
  gap: 10px; /* Gap between grid items */
}
.framework {
  grid-column: 2 / 3; /* Starts at column 2 and ends at column 3 */
  grid-row: 1 / 2; /* Starts at row 1 and ends at row 2 */
  cursor: pointer;
  display: inline-block;
  min-width: 2.8cm;
  width: 20%;
  margin: 1rem;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: var(--sl-color-gray-6);
  border: 1px solid var(--sl-color-gray-5);
}
.framework span {
  text-align: center;
  width: 100%;
  display: inline-block;
}
</style>
