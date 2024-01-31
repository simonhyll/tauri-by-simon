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
    <button v-if="compatibleFrameworks.length > 1" @click="clickPickForMe">
      Pick for me
    </button>
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
let selectedOptions: Criteria = reactive({});
const navigate = (slug: string) => {
  window.location.href = "/" + slug;
};
const compareCriteria = (left: Criteria, right: Criteria) => {
  console.log(selectedOptions);
  console.log(left);
  console.log(right);
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
    !compareCriteria(selectedOptions, questions[index].criteria)
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
  selectedOptions = Object.assign(selectedOptions, option.effect);
  if (compatibleFrameworks.value.length === 1) {
    singleAnswer.value = true;
    return;
  }
  if (nextCompatibleQuestion()) currentQuestion.value = questions[index];
};
const compatibleFrameworks = computed(() => {
  return frameworks.filter((framework) => {
    return Object.keys(selectedOptions).every((key: string) => {
      const optionValue = selectedOptions[key];
      const frameworkCriteriaValue = framework.criteria[key];
      if (frameworkCriteriaValue === undefined) return true;
      return (
        optionValue === undefined || frameworkCriteriaValue === optionValue
      );
    });
  });
});
const clickPickForMe = () => {
  pickForMe.value = !pickForMe.value;
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
.framework {
  cursor: pointer;
  display: inline-block;
  width: 2.85cm;
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
