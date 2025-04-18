import { computed } from 'vue'

import {
  useSeriesData,
  usePageCatalog,
  useMobileMenus,
  usePageFrontmatter,
  useHideNavbar
} from '@composables/index.js'
// Import RecoThemeHomePageFrontmatter for type hint
import type { RecoThemeHomePageFrontmatter } from '../../../types'

export function useContainerClass() {
  const {
    isOpenSeries,
    isShowSeries,
  } = useSeriesData()
  const { isShowCatalog } = usePageCatalog()
  // Remove generic type hint
  const frontmatter = usePageFrontmatter()
  const { isOpenMobileMenus } = useMobileMenus()
  const { shouldHideNavbar } = useHideNavbar()

  const containerClass = computed(() => [
    {
      'series--open': isOpenSeries.value,
      'series--no': !isShowSeries.value,
      'show-series': isShowSeries.value,
      'show-catalog': isShowCatalog.value,
      'mobile-menus--active': isOpenMobileMenus.value,
      // Change comparison to truthy check to satisfy TS
      'homepage-hide-navbar': (!!frontmatter.value.home && frontmatter.value.hideNavbar === true) || shouldHideNavbar.value,
    },
    frontmatter.value.pageClass,
  ])

  return { containerClass }
}
