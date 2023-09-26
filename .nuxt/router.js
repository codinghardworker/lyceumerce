import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _f08c9d94 = () => interopDefault(import('..\\pages\\about\\about-dark.vue' /* webpackChunkName: "pages/about/about-dark" */))
const _095ff786 = () => interopDefault(import('..\\pages\\about\\about-light.vue' /* webpackChunkName: "pages/about/about-light" */))
const _b5a457b0 = () => interopDefault(import('..\\pages\\blog-details\\blog-details-dark.vue' /* webpackChunkName: "pages/blog-details/blog-details-dark" */))
const _cb1f9a58 = () => interopDefault(import('..\\pages\\blog-details\\blog-details-light.vue' /* webpackChunkName: "pages/blog-details/blog-details-light" */))
const _588f5b94 = () => interopDefault(import('..\\pages\\blog-grid\\blog-grid-dark.vue' /* webpackChunkName: "pages/blog-grid/blog-grid-dark" */))
const _3d357686 = () => interopDefault(import('..\\pages\\blog-grid\\blog-grid-light.vue' /* webpackChunkName: "pages/blog-grid/blog-grid-light" */))
const _b0be8d94 = () => interopDefault(import('..\\pages\\blog-list\\blog-list-dark.vue' /* webpackChunkName: "pages/blog-list/blog-list-dark" */))
const _334c20f4 = () => interopDefault(import('..\\pages\\blog-list\\blog-list-light.vue' /* webpackChunkName: "pages/blog-list/blog-list-light" */))
const _7aede1dc = () => interopDefault(import('..\\pages\\blog\\blog-dark.vue' /* webpackChunkName: "pages/blog/blog-dark" */))
const _287c552a = () => interopDefault(import('..\\pages\\blog\\blog-light.vue' /* webpackChunkName: "pages/blog/blog-light" */))
const _eda459d4 = () => interopDefault(import('..\\pages\\contact\\contact-dark.vue' /* webpackChunkName: "pages/contact/contact-dark" */))
const _367011a6 = () => interopDefault(import('..\\pages\\contact\\contact-light.vue' /* webpackChunkName: "pages/contact/contact-light" */))
const _7c9d3c08 = () => interopDefault(import('..\\pages\\homepage\\home1-dark.vue' /* webpackChunkName: "pages/homepage/home1-dark" */))
const _0e5e5f80 = () => interopDefault(import('..\\pages\\homepage\\home1-light.vue' /* webpackChunkName: "pages/homepage/home1-light" */))
const _940a59ca = () => interopDefault(import('..\\pages\\homepage\\home2-dark.vue' /* webpackChunkName: "pages/homepage/home2-dark" */))
const _b979db7e = () => interopDefault(import('..\\pages\\homepage\\home2-light.vue' /* webpackChunkName: "pages/homepage/home2-light" */))
const _ab77778c = () => interopDefault(import('..\\pages\\homepage\\home3-dark.vue' /* webpackChunkName: "pages/homepage/home3-dark" */))
const _3827c502 = () => interopDefault(import('..\\pages\\homepage\\home3-light.vue' /* webpackChunkName: "pages/homepage/home3-light" */))
const _c2e4954e = () => interopDefault(import('..\\pages\\homepage\\home4-dark.vue' /* webpackChunkName: "pages/homepage/home4-dark" */))
const _65e7107a = () => interopDefault(import('..\\pages\\homepage\\home4-light.vue' /* webpackChunkName: "pages/homepage/home4-light" */))
const _da51b310 = () => interopDefault(import('..\\pages\\homepage\\home5-dark.vue' /* webpackChunkName: "pages/homepage/home5-dark" */))
const _61f12a84 = () => interopDefault(import('..\\pages\\homepage\\home5-light.vue' /* webpackChunkName: "pages/homepage/home5-light" */))
const _f1bed0d2 = () => interopDefault(import('..\\pages\\homepage\\home6-dark.vue' /* webpackChunkName: "pages/homepage/home6-dark" */))
const _12544576 = () => interopDefault(import('..\\pages\\homepage\\home6-light.vue' /* webpackChunkName: "pages/homepage/home6-light" */))
const _7b6a08b6 = () => interopDefault(import('..\\pages\\homepage\\home7-dark.vue' /* webpackChunkName: "pages/homepage/home7-dark" */))
const _e88adff4 = () => interopDefault(import('..\\pages\\homepage\\home7-light.vue' /* webpackChunkName: "pages/homepage/home7-light" */))
const _6fb379d5 = () => interopDefault(import('..\\pages\\homepage\\home8-dark.vue' /* webpackChunkName: "pages/homepage/home8-dark" */))
const _209f42c7 = () => interopDefault(import('..\\pages\\homepage\\home8-light.vue' /* webpackChunkName: "pages/homepage/home8-light" */))
const _6dcf6c8e = () => interopDefault(import('..\\pages\\project-details2\\project-details2-dark.vue' /* webpackChunkName: "pages/project-details2/project-details2-dark" */))
const _33fcb1a4 = () => interopDefault(import('..\\pages\\project-details2\\project-details2-light.vue' /* webpackChunkName: "pages/project-details2/project-details2-light" */))
const _f6e9d108 = () => interopDefault(import('..\\pages\\showcase\\showcase-dark.vue' /* webpackChunkName: "pages/showcase/showcase-dark" */))
const _b2894c00 = () => interopDefault(import('..\\pages\\showcase\\showcase-light.vue' /* webpackChunkName: "pages/showcase/showcase-light" */))
const _14f586b6 = () => interopDefault(import('..\\pages\\showcase2\\showcase2-dark.vue' /* webpackChunkName: "pages/showcase2/showcase2-dark" */))
const _239ed206 = () => interopDefault(import('..\\pages\\showcase2\\showcase2-light.vue' /* webpackChunkName: "pages/showcase2/showcase2-light" */))
const _15d7ed56 = () => interopDefault(import('..\\pages\\showcase3\\showcase3-dark.vue' /* webpackChunkName: "pages/showcase3/showcase3-dark" */))
const _3f093f66 = () => interopDefault(import('..\\pages\\showcase3\\showcase3-light.vue' /* webpackChunkName: "pages/showcase3/showcase3-light" */))
const _bb676a54 = () => interopDefault(import('..\\pages\\works\\works-dark.vue' /* webpackChunkName: "pages/works/works-dark" */))
const _412091e6 = () => interopDefault(import('..\\pages\\works\\works-light.vue' /* webpackChunkName: "pages/works/works-light" */))
const _3da76cf6 = () => interopDefault(import('..\\pages\\works2\\works2-dark.vue' /* webpackChunkName: "pages/works2/works2-dark" */))
const _1129b3c6 = () => interopDefault(import('..\\pages\\works2\\works2-light.vue' /* webpackChunkName: "pages/works2/works2-light" */))
const _12fa7f98 = () => interopDefault(import('..\\pages\\works3\\works3-dark.vue' /* webpackChunkName: "pages/works3/works3-dark" */))
const _73b8c848 = () => interopDefault(import('..\\pages\\works3\\works3-light.vue' /* webpackChunkName: "pages/works3/works3-light" */))
const _7d0fa9c5 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about/about-dark",
    component: _f08c9d94,
    name: "about-about-dark"
  }, {
    path: "/about/about-light",
    component: _095ff786,
    name: "about-about-light"
  }, {
    path: "/blog-details/blog-details-dark",
    component: _b5a457b0,
    name: "blog-details-blog-details-dark"
  }, {
    path: "/blog-details/blog-details-light",
    component: _cb1f9a58,
    name: "blog-details-blog-details-light"
  }, {
    path: "/blog-grid/blog-grid-dark",
    component: _588f5b94,
    name: "blog-grid-blog-grid-dark"
  }, {
    path: "/blog-grid/blog-grid-light",
    component: _3d357686,
    name: "blog-grid-blog-grid-light"
  }, {
    path: "/blog-list/blog-list-dark",
    component: _b0be8d94,
    name: "blog-list-blog-list-dark"
  }, {
    path: "/blog-list/blog-list-light",
    component: _334c20f4,
    name: "blog-list-blog-list-light"
  }, {
    path: "/blog/blog-dark",
    component: _7aede1dc,
    name: "blog-blog-dark"
  }, {
    path: "/blog/blog-light",
    component: _287c552a,
    name: "blog-blog-light"
  }, {
    path: "/contact/contact-dark",
    component: _eda459d4,
    name: "contact-contact-dark"
  }, {
    path: "/contact/contact-light",
    component: _367011a6,
    name: "contact-contact-light"
  }, {
    path: "/homepage/home1-dark",
    component: _7c9d3c08,
    name: "homepage-home1-dark"
  }, {
    path: "/homepage/home1-light",
    component: _0e5e5f80,
    name: "homepage-home1-light"
  }, {
    path: "/homepage/home2-dark",
    component: _940a59ca,
    name: "homepage-home2-dark"
  }, {
    path: "/homepage/home2-light",
    component: _b979db7e,
    name: "homepage-home2-light"
  }, {
    path: "/homepage/home3-dark",
    component: _ab77778c,
    name: "homepage-home3-dark"
  }, {
    path: "/homepage/home3-light",
    component: _3827c502,
    name: "homepage-home3-light"
  }, {
    path: "/homepage/home4-dark",
    component: _c2e4954e,
    name: "homepage-home4-dark"
  }, {
    path: "/homepage/home4-light",
    component: _65e7107a,
    name: "homepage-home4-light"
  }, {
    path: "/homepage/home5-dark",
    component: _da51b310,
    name: "homepage-home5-dark"
  }, {
    path: "/homepage/home5-light",
    component: _61f12a84,
    name: "homepage-home5-light"
  }, {
    path: "/homepage/home6-dark",
    component: _f1bed0d2,
    name: "homepage-home6-dark"
  }, {
    path: "/homepage/home6-light",
    component: _12544576,
    name: "homepage-home6-light"
  }, {
    path: "/homepage/home7-dark",
    component: _7b6a08b6,
    name: "homepage-home7-dark"
  }, {
    path: "/homepage/home7-light",
    component: _e88adff4,
    name: "homepage-home7-light"
  }, {
    path: "/homepage/home8-dark",
    component: _6fb379d5,
    name: "homepage-home8-dark"
  }, {
    path: "/homepage/home8-light",
    component: _209f42c7,
    name: "homepage-home8-light"
  }, {
    path: "/project-details2/project-details2-dark",
    component: _6dcf6c8e,
    name: "project-details2-project-details2-dark"
  }, {
    path: "/project-details2/project-details2-light",
    component: _33fcb1a4,
    name: "project-details2-project-details2-light"
  }, {
    path: "/showcase/showcase-dark",
    component: _f6e9d108,
    name: "showcase-showcase-dark"
  }, {
    path: "/showcase/showcase-light",
    component: _b2894c00,
    name: "showcase-showcase-light"
  }, {
    path: "/showcase2/showcase2-dark",
    component: _14f586b6,
    name: "showcase2-showcase2-dark"
  }, {
    path: "/showcase2/showcase2-light",
    component: _239ed206,
    name: "showcase2-showcase2-light"
  }, {
    path: "/showcase3/showcase3-dark",
    component: _15d7ed56,
    name: "showcase3-showcase3-dark"
  }, {
    path: "/showcase3/showcase3-light",
    component: _3f093f66,
    name: "showcase3-showcase3-light"
  }, {
    path: "/works/works-dark",
    component: _bb676a54,
    name: "works-works-dark"
  }, {
    path: "/works/works-light",
    component: _412091e6,
    name: "works-works-light"
  }, {
    path: "/works2/works2-dark",
    component: _3da76cf6,
    name: "works2-works2-dark"
  }, {
    path: "/works2/works2-light",
    component: _1129b3c6,
    name: "works2-works2-light"
  }, {
    path: "/works3/works3-dark",
    component: _12fa7f98,
    name: "works3-works3-dark"
  }, {
    path: "/works3/works3-light",
    component: _73b8c848,
    name: "works3-works3-light"
  }, {
    path: "index",
    component: _7d0fa9c5,
    name: "index"
  }, {
    path: "/",
    component: _c2e4954e,
    name: "homepage-home4-dark"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
