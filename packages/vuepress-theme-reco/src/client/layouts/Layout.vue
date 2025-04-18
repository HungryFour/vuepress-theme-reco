<template>
  <GenericContainer :width-style="frontmatter.home === true ? 'full' : 'max-width'">
    <component v-if="frontmatter.home === true" :is="HomePageComponent" />

    <Transition
      v-else
      name="fade-slide-y"
      mode="out-in"
      @before-enter="onBeforeEnter"
      @before-leave="onBeforeLeave"
    >
      <Page :key="page.path" />
    </Transition>
  </GenericContainer>
</template>

<script lang="ts" setup>
import { onMounted, watch, computed, shallowRef, resolveDynamicComponent } from 'vue'
import { usePageFrontmatter, useRoute } from 'vuepress/client'

import Home from '@components/Home/index.vue'
import Page from '@components/Page/index.vue'
import GenericContainer from '@components/GenericContainer/index.vue'

import {
  usePageData,
  useMagicCard,
  useScrollPromise,
  useThemeLocaleData,
} from '@composables/index.js'

import { RecoThemeHomePageFrontmatter, RecoThemeData } from '../../types'

const page = usePageData()
const frontmatter = usePageFrontmatter<RecoThemeHomePageFrontmatter>()
const themeData = useThemeLocaleData()

// Determine the component to render for the homepage
const HomePageComponent = computed(() => {
  const customComponentName = themeData.value?.homeComponent
  if (customComponentName && typeof customComponentName === 'string') {
    // Attempt to resolve the component dynamically. Requires the component to be globally registered or available in the scope.
    // VuePress automatically registers components in .vuepress/components
    const resolved = resolveDynamicComponent(customComponentName) // Use Vue's built-in dynamic component resolution
    // Return the resolved component, or fallback to default Home if not found (or handle error)
    // Using shallowRef might be beneficial if the component is complex or changes often, but direct return is usually fine.
    return resolved || Home // Fallback to default Home if custom component not found
  } else {
    return Home // Default Home component
  }
})

// handle scrollBehavior with transition
const scrollPromise = useScrollPromise()
const onBeforeEnter = scrollPromise.resolve
const onBeforeLeave = scrollPromise.pending

const { initMagicCard } = useMagicCard()
onMounted(() => {
  initMagicCard()
})

const route = useRoute()
watch(route, () => {
  initMagicCard()
})
</script>
