import { computed } from 'vue'
import { useRoute } from 'vuepress/client'

// 声明全局变量，由服务端传递过来
declare const __HIDE_NAVBAR_ROUTES__: string[]

export function useHideNavbar() {
  const route = useRoute()
  
  // 获取全局配置
  const shouldHideNavbar = computed(() => {
    // 获取hideNavbarRoutes配置
    const hideNavbarRoutes = __HIDE_NAVBAR_ROUTES__ || []
    
    // 如果当前路由在hideNavbarRoutes中，则隐藏导航栏
    return Array.isArray(hideNavbarRoutes) && hideNavbarRoutes.some((path: string) => {
      // 1. 精确匹配
      if (route.path === path) {
        return true
      }
      
      // 2. 通配符匹配，如 /tags/* 匹配 /tags/ 开头的所有路径
      if (path.includes('*')) {
        const pattern = path.replace('*', '')
        return route.path.startsWith(pattern)
      }

      // 3. 前缀匹配，如 /posts/ 匹配 /posts/xxx 
      if (path.endsWith('/') && route.path.startsWith(path)) {
        return true
      }

      return false
    })
  })

  return { shouldHideNavbar }
} 