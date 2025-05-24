<!-- src/components/Layout.vue -->
<template>
  <div class="layout">
    <!-- Left Explorer -->
    <aside class="layout__sidebar">
      <div class="explorer">
        <h6 class="explorer__title">IcarusEye</h6>
        <input
          v-model="filter"
          class="explorer__search"
          placeholder="Search…"
        />

        <ul class="explorer__list">
          <li
            v-for="item in filteredNav"
            :key="item.path"
            class="explorer__item"
          >
            <div class="explorer__item-header">
              <router-link
                :to="item.path"
                class="explorer__link"
                :class="{ 'explorer__link--active': route.path === item.path }"
              >
                {{ item.label }}
              </router-link>
              <span
                v-if="item.children"
                class="explorer__link"
                @click="toggle(item)"
              >
                {{ item.open ? '▾' : '▸' }}
              </span>
            </div>

            <ul
              v-if="item.children && item.open"
              class="explorer__sublist"
            >
              <li
                v-for="child in item.children"
                :key="child.path"
                class="explorer__subitem"
              >
                <router-link
                  :to="child.path"
                  class="explorer__sublink"
                  :class="{ 'explorer__link--active': route.path === child.path }"
                >
                  {{ child.label }}
                </router-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </aside>

    <!-- Main Content -->
    <main class="layout__content">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

interface NavItem {
  label:   string
  path:    string
  children?: NavItem[]
  open?:    boolean
}

const route  = useRoute()
const filter = ref('')

// 1) Use import.meta.glob with eager:true
const docsModules = import.meta.glob('../views/docs/*.vue', { eager: true })

// 2) Build children from its keys
const docChildren: NavItem[] = Object.keys(docsModules)
  .filter((file) => !file.endsWith('index.vue'))
  .map((file) => {
    const name = file
      .split('/')
      .pop()!
      .replace(/\.(vue)$/, '')

    const label = name
      .replace(/[-_]/g, ' ')
      .replace(/\b\w/g, (c) => c.toUpperCase())

    return { label, path: `/docs/${name}` }
  })

// 3) Plug into your nav
const navItems = ref<NavItem[]>([
  { label: 'Home', path: '/' },
  {
    label: 'Documentation',
    path: '/docs',
    open: true,
    children: docChildren
  },
  { label: 'API', path: '/api' }
])

function toggle(item: NavItem) {
  item.open = !item.open
}

const filteredNav = computed(() =>
  navItems.value
    .map(item => {
      if (!filter.value) return item
      const matchParent = item.label
        .toLowerCase()
        .includes(filter.value.toLowerCase())
      if (matchParent) return item

      if (item.children) {
        const kids = item.children.filter(c =>
          c.label.toLowerCase().includes(filter.value.toLowerCase())
        )
        if (kids.length) return { ...item, children: kids, open: true }
      }

      return null
    })
    .filter((i): i is NavItem => Boolean(i))
)
</script>



<style scoped lang="scss">

.layout {
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  height: 100%;
  overflow: hidden;
  background-color: #101119;  /* one single background */
}

/* panels share padding & scroll, but no individual bg */
.layout__sidebar,
.layout__content,
.layout__details {
  padding: 1rem;
  overflow-y: auto;
  background: transparent;
  color: #e5e7eb;            /* make sure text stays visible */
}

/* vertical “lines” between columns */
.layout__sidebar {
  border-right: 1px solid rgba(255,255,255,0.1);
}
.layout__content {
  border-left:  1px solid rgba(255,255,255,0.1);
  border-right: 1px solid rgba(255,255,255,0.1);
}
.layout__details {
  border-left:  1px solid rgba(255,255,255,0.1);
}
/* Explorer heading */
.explorer__title {
  font-size: 0.75rem;
  text-transform: uppercase;
  color: #9ca3af;           // muted gray
  margin-bottom: 0.75rem;
}

/* Search box */
.explorer__search {
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  background: #374151;      // slightly lighter slate
  border: none;
  border-radius: 4px;
  color: #f9fafb;
  &::placeholder { color: #9ca3af; }
}

/* List resets */
.explorer__list,
.explorer__sublist {
  list-style: none;
  margin: 0;
  padding: 0;
}

/* Parent items */
.explorer__item {
  margin-bottom: 0.5rem;
}

.explorer__item-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.explorer__link {
  display: block;
  text-decoration: none;
  color: #d1d5db;
  padding: 0.25rem 0;
  border-radius: 2px;
  transition: background 0.2s, color 0.2s;

  &:hover {
    background: rgba(255,255,255,0.05);
    color: #f9fafb;
  }

  &--active {
    color: #ffffff;
    font-weight: 600;
  }
}

/* Toggle arrow */
.explorer__toggle {
  font-size: 0.8rem;
  color: #9ca3af;
  cursor: pointer;
  user-select: none;

  &:hover { color: #d1d5db; }
}

/* Nested list */
.explorer__sublist {
  margin-top: 0.5rem;
  padding-left: 1rem;
}

@media (max-width: 1600px) {
  .layout {
    grid-template-columns: 1fr 3fr;
  }
}

@media (max-width: 480px) {
  .layout {
    display: flex;
  }
  .layout__sidebar {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 70vw;
    max-width: 320px;
    height: 100vh;
    background: #181a23;
    z-index: 1000;
    box-shadow: 2px 0 12px rgba(0,0,0,0.2);
    transition: transform 0.3s;
    transform: translateX(-100%);
  }
  .layout__sidebar--open {
    display: block;
    transform: translateX(0);
  }
  .hamburger {
    display: block;
    position: fixed;
    top: 1rem;
    left: 1rem;
    z-index: 1100;
    width: 2rem;
    height: 2rem;
    background: none;
    border: none;
    cursor: pointer;
    color: #e5e7eb;
    font-size: 2rem;
  }
  .layout__content {
    width: 100vw;
  }

}

</style>

