<template>
  <code ref="code"><slot/></code>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import hljs from 'highlight.js';

const code = ref<HTMLElement|null>(null);
onMounted(() => {
  if (code.value) hljs.highlightElement(code.value);
});
</script>
