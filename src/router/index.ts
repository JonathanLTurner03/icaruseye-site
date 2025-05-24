// src/router/index.ts

import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'   // ← type-only import

import Home        from '@/views/Home.vue'
import DocsLayout  from '@/views/DocsLayout.vue'
import API         from '@/views/API.vue'

// 1) Glob in all your docs pages
const docsModules = import.meta.glob('../views/docs/*.vue', { eager: true })

// 2) Build a child route for each file, using a lower-case path
const docChildren: RouteRecordRaw[] = Object.entries(docsModules).map(
  ([file, module]) => {
    const filename = file.split('/').pop()!.replace(/\.vue$/, '')    // e.g. "getting-started"
    const segment  = filename.toLowerCase()                         // "getting-started"
    const name     = filename
      .split(/[-_]/g)
      .map(w => w[0].toUpperCase() + w.slice(1))
      .join('')                                                    // "GettingStarted"

    return {
      path:      segment,                                          // will match /docs/getting-started
      name:      `Docs${name}`,                                    // e.g. "DocsGettingStarted"
      component: (module as any).default
    }
  }
)

// 3) Put it all together
const routes: RouteRecordRaw[] = [
  { path: '/', name: 'Home', component: Home },

  {
    path:      '/docs',
    component: DocsLayout,
    // redirect /docs → first child, no empty‐path child needed
    redirect:  `/docs/${docChildren[0].path}`,
    children:  docChildren
  },

  { path: '/api', name: 'API', component: API },

  // catch‐all (optional)
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
