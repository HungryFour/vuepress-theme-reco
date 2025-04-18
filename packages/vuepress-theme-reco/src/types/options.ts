import type { LocaleData } from 'vuepress/shared'
import type { ThemeData } from '@vuepress/plugin-theme-data'
import type { ViteBundlerOptions } from '@vuepress/bundler-vite'
import type { WebpackBundlerOptions } from '@vuepress/bundler-webpack'

import type { SocialLink } from './page.js'
import type { NavbarConfig, SeriesConfig } from './nav.js'
import type { PageOptions } from '../../../@vuepress-reco/plugin-page/src/types/index.js'

export type RecoThemeData = ThemeData<RecoThemeLocaleData>

export interface RecoThemeLocaleData extends LocaleData {
  /**
   * Home path of current locale
   *
   * Used as the link of back-to-home and navbar logo
   */
  home?: string

  /**
   * Default color mode
   *
   * @default 'auto'
   */
  colorMode?: 'light' | 'dark' | 'auto'


  /**
   * If show colorMode switch
   */
  colorModeSwitch?: boolean

  /**
   * Array of routes where navbar should be hidden
   * 
   * @example ['/posts/', '/tags/t1/1.html']
   */
  hideNavbarRoutes?: string[]

  password?: string | Array<string>

  /**
   * Navbar config
   *
   * Set to `false` to disable navbar in current locale
   */
  navbar?: false | NavbarConfig

  /**
   * Navbar logo config
   *
   * Logo to display in navbar
   */
  logo?: null | string

  /**
   * Navbar repository config
   *
   * Used for the repository link of navbar
   */
  repo?: null | string

  /**
   * Navbar repository config
   *
   * Used for the repository text of navbar
   */
  repoLabel?: string

  /**
   * Navbar language selection config
   *
   * Language name of current locale
   *
   * Displayed inside the language selection dropdown
   */
  selectLanguageName?: string

  /**
   * Series config
   *
   * Set to `false` to disable series in current locale
   */
  series?: false | SeriesConfig

  /**
   * Page meta - edit link config
   *
   * Whether to show "Edit this page" or not
   */
  editLink?: boolean

  /**
   * Page meta - edit link config
   *
   * The text to replace the default "Edit this page"
   */
  editLinkText?: string

  /**
   * Page meta - edit link config
   *
   * Pattern of edit link
   *
   * @example ':repo/edit/:branch/:path'
   */
  editLinkPattern?: string

  /**
   * Page meta - edit link config
   *
   * Use `repo` config by default
   *
   * Set this config if your docs is placed in a different repo
   */
  docsRepo?: string

  /**
   * Page meta - edit link config
   *
   * Set this config if the branch of your docs is not 'master'
   */
  docsBranch?: string

  /**
   * Page meta - edit link config
   *
   * Set this config if your docs is placed in sub dir of your `docsRepo`
   */
  docsDir?: string

  /**
   * Page meta - last updated config
   *
   * Whether to show "Last Updated" or not
   */
  lastUpdated?: boolean

  /**
   * Page meta - last updated config
   *
   * The text to replace the default "Last Updated"
   */
  lastUpdatedText?: string


  /**
   * The Name of author
   */
  author?: string


  /**
   * The avatar of author
   */
  authorAvatar?: string

  /**
   * Friendship links
   */
  friendshipLinks?: Array<{
    logo: string
    link: string
    title: string
  }>

  autoSetSeries?: boolean

  /**
   * Auto set categories
   *
   * @default false
   */
  autoSetBlogCategories?: boolean

  /**
   * Automatically add categories and tags to the header navigation bar
   * when autoAddCategoryToNavbar is true, all defaults are taken.
   */
  autoAddCategoryToNavbar?: boolean | AutoAddCategoryToNavbarOptions

  catalogTitle?: string

  pages?: Array<PageOptions>

  commentConfig?: {
    type: string
    options: Record<string, any>
  },

  categoriesText?: string

  tagsText?: string

  viteBundlerOptions?: ViteBundlerOptions

  webpackBundlerOptions?: WebpackBundlerOptions

  bulletin?: {
    title?: string
    width?: string
    body?: Array<{
      type: string
      [key: string]: any
    }>
  }

  tip?: string
  info?: string
  warning?: string
  danger?: string
  details?: string
  notFound?: string
  backToHome?: string
  inputPasswordText?: string
  unlockSucessText?: string
  unlockFailuerText?: string

  algolia?: Record<string, any>

  primaryColor?: string

  socialLinks?: Array<SocialLink>

  /**
   * Custom component name for the homepage layout.
   * The component should be globally registered (e.g., placed in .vuepress/components).
   */
  homeComponent?: string
}

export type AutoAddCategoryToNavbarOptions = {
  location?: number // default 0
  showIcon?: boolean // default false
}
