<template>
    <Layout class="pt-3">
        <template #default>
            <div class="blank-page">
                <!-- Main Content -->
            </div>
            <Footer />
        </template>

        <template #details>
            <div class="details">
                <!-- Right Column Details -->
            </div>
        </template>
    </Layout>
</template>

<!-- Script Details -->
<script lang="ts">
import { defineComponent } from "vue";
import Layout from '@/components/Layout.vue'
import Footer from '@/components/Footer.vue'

export default defineComponent({
    name: "Template",
    components: { Layout, Footer }
});
</script>
<style scoped>
/* Scoped Content for Page */
</style>