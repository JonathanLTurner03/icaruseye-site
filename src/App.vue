<template>
  <Layout class="pt-3">
    <router-view />
    <Footer />
  </Layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Layout from '@/components/Layout.vue'
import Footer from '@/components/Footer.vue'

export default defineComponent({
  name: 'App',
  components: { Layout, Footer }
})
</script>

<style>
/* any global app-level styles */

</style>
