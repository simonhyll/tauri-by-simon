<template>
  <div class="tip-box">
    <div class="tip-rue">
      <img :src="imageSrc" />
    </div>
    <div class="tip-content">
      <span class="tip-header">{{ title }}</span>
      <slot />
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";
const props = defineProps({
  title: { type: String, default: "Psst!" },
});
const imageSrc = ref(import.meta.env.BASE_URL+"/icon.png");
</script>

<style>
.tip-box {
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  border: 1px solid var(--sl-color-gray-5);
  background-color: var(--sl-color-gray-6);
  padding: 10px;
  overflow: hidden;
}
.tip-link {
  margin: 0 auto;
  overflow: hidden;
}
.tip-rue {
  display: flex;
  flex-direction: column;
  padding-right: 15px;
  min-width: 90px !important;
  max-width: 90px !important;
}
.tip-content {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  max-width: 100%;
  margin: 0 !important;
  padding: 0 !important;
  padding-right: 10px !important;
  color: var(--sl-color-text);
  overflow: hidden;
}
.tip-content * {
  text-align: left;
}
.tip-content span {
  margin-bottom: 5px;
}
.tip-header {
  font-size: large;
  font-weight: bold;
  margin-bottom: 0px !important;
}
.tip-rue > img {
  animation: floating 2s ease-in-out infinite;
}
.stagger > *:nth-child(2n) .tip-box {
  transform: translateY(var(--stagger-height)) !important;
}
.features .tip-box {
  min-height: 200px !important;
  padding: 30px;
  max-width: 800px;
  margin: 20px auto 0px auto;
}
.features .tip-header {
  font-size: 1.7rem;
}
.features .tip-content {
  margin-right: 100px !important;
}
.features .tip-rue {
  position: absolute;
  right: 0;
  animation: none !important;
  height: 100%;
  min-width: 140px !important;
}
.features .tip-rue > img {
  animation: none !important;
}
</style>
