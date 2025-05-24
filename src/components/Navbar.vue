<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-4">
    <router-link class="navbar-brand" to="/">IcarusEye</router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navMenu"
      aria-controls="navMenu"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navMenu">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/docs">Docs</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/api">API</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Navbar'
})
</script>
