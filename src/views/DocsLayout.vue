<!-- src/views/DocsLayout.vue -->
<template>
    <router-view />
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

/**
 * Example: auto‐generate a small TOC for the right panel
 * by scraping <h2> elements in the rendered doc.
 */
const headers = ref<{ id: string; text: string }[]>([])

onMounted(() => {
    // whenever you navigate, rebuild your mini‐TOC:
    const els = Array.from(
        document.querySelectorAll<HTMLElement>('.layout__content h2[id]')
    )
    headers.value = els.map(el => ({
        id: el.id,
        text: el.innerText
    }))
})
</script>

<style scoped>
.details__title {
    font-size: 0.75rem;
    text-transform: uppercase;
    margin-bottom: 0.5rem;
    color: #9ca3af;
}

.details__list {
    list-style: none;
    padding: 0;
}

.details__list li+li {
    margin-top: 0.5rem;
}

.details__list a {
    color: #e5e7eb;
    text-decoration: none;
    font-size: 0.85rem;
}

.details__list a:hover {
    text-decoration: underline;
}
</style>
