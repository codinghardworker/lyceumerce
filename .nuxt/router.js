import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _ea28bf5c = () => interopDefault(import('..\\pages\\about\\about-dark.vue' /* webpackChunkName: "pages/about/about-dark" */))
const _6c6bebea = () => interopDefault(import('..\\pages\\about\\about-light.vue' /* webpackChunkName: "pages/about/about-light" */))
const _6ad12244 = () => interopDefault(import('..\\pages\\blog-details\\blog-details-dark.vue' /* webpackChunkName: "pages/blog-details/blog-details-dark" */))
const _ed92af90 = () => interopDefault(import('..\\pages\\blog-details\\blog-details-light.vue' /* webpackChunkName: "pages/blog-details/blog-details-light" */))
const _31076552 = () => interopDefault(import('..\\pages\\blog-grid\\blog-grid-dark.vue' /* webpackChunkName: "pages/blog-grid/blog-grid-dark" */))
const _ec6e722c = () => interopDefault(import('..\\pages\\blog-grid\\blog-grid-light.vue' /* webpackChunkName: "pages/blog-grid/blog-grid-light" */))
const _04efcc52 = () => interopDefault(import('..\\pages\\blog-list\\blog-list-dark.vue' /* webpackChunkName: "pages/blog-list/blog-list-dark" */))
const _32ed3fea = () => interopDefault(import('..\\pages\\blog-list\\blog-list-light.vue' /* webpackChunkName: "pages/blog-list/blog-list-light" */))
const _5f37d5a4 = () => interopDefault(import('..\\pages\\blog\\blog-dark.vue' /* webpackChunkName: "pages/blog/blog-dark" */))
const _53fbdae4 = () => interopDefault(import('..\\pages\\blog\\blog-light.vue' /* webpackChunkName: "pages/blog/blog-light" */))
const _954a579c = () => interopDefault(import('..\\pages\\contact\\contact-dark.vue' /* webpackChunkName: "pages/contact/contact-dark" */))
const _e03997ec = () => interopDefault(import('..\\pages\\contact\\contact-light.vue' /* webpackChunkName: "pages/contact/contact-light" */))
const _dcdc6540 = () => interopDefault(import('..\\pages\\homepage\\home1-dark.vue' /* webpackChunkName: "pages/homepage/home1-dark" */))
const _3a8b609c = () => interopDefault(import('..\\pages\\homepage\\home1-light.vue' /* webpackChunkName: "pages/homepage/home1-light" */))
const _f4498302 = () => interopDefault(import('..\\pages\\homepage\\home2-dark.vue' /* webpackChunkName: "pages/homepage/home2-dark" */))
const _611fd946 = () => interopDefault(import('..\\pages\\homepage\\home2-light.vue' /* webpackChunkName: "pages/homepage/home2-light" */))
const _7a24af9e = () => interopDefault(import('..\\pages\\homepage\\home3-dark.vue' /* webpackChunkName: "pages/homepage/home3-dark" */))
const _6454c61e = () => interopDefault(import('..\\pages\\homepage\\home3-light.vue' /* webpackChunkName: "pages/homepage/home3-light" */))
const _6e6e20bd = () => interopDefault(import('..\\pages\\homepage\\home4-dark.vue' /* webpackChunkName: "pages/homepage/home4-dark" */))
const _0d8d0e42 = () => interopDefault(import('..\\pages\\homepage\\home4-light.vue' /* webpackChunkName: "pages/homepage/home4-light" */))
const _62b791dc = () => interopDefault(import('..\\pages\\homepage\\home5-dark.vue' /* webpackChunkName: "pages/homepage/home5-dark" */))
const _e3c3a8c0 = () => interopDefault(import('..\\pages\\homepage\\home5-light.vue' /* webpackChunkName: "pages/homepage/home5-light" */))
const _570102fb = () => interopDefault(import('..\\pages\\homepage\\home6-dark.vue' /* webpackChunkName: "pages/homepage/home6-dark" */))
const _2302de61 = () => interopDefault(import('..\\pages\\homepage\\home6-light.vue' /* webpackChunkName: "pages/homepage/home6-light" */))
const _4b4a741a = () => interopDefault(import('..\\pages\\homepage\\home7-dark.vue' /* webpackChunkName: "pages/homepage/home7-dark" */))
const _9030ddbc = () => interopDefault(import('..\\pages\\homepage\\home7-light.vue' /* webpackChunkName: "pages/homepage/home7-light" */))
const _3f93e539 = () => interopDefault(import('..\\pages\\homepage\\home8-dark.vue' /* webpackChunkName: "pages/homepage/home8-dark" */))
const _4ccc43e3 = () => interopDefault(import('..\\pages\\homepage\\home8-light.vue' /* webpackChunkName: "pages/homepage/home8-light" */))
const _1c7e42ac = () => interopDefault(import('..\\pages\\project-details2\\project-details2-dark.vue' /* webpackChunkName: "pages/project-details2/project-details2-dark" */))
const _3f830edc = () => interopDefault(import('..\\pages\\project-details2\\project-details2-light.vue' /* webpackChunkName: "pages/project-details2/project-details2-light" */))
const _597c4198 = () => interopDefault(import('..\\pages\\showcase\\showcase-dark.vue' /* webpackChunkName: "pages/showcase/showcase-dark" */))
const _6fef7364 = () => interopDefault(import('..\\pages\\showcase\\showcase-light.vue' /* webpackChunkName: "pages/showcase/showcase-light" */))
const _724499d2 = () => interopDefault(import('..\\pages\\showcase2\\showcase2-dark.vue' /* webpackChunkName: "pages/showcase2/showcase2-dark" */))
const _7032226a = () => interopDefault(import('..\\pages\\showcase2\\showcase2-light.vue' /* webpackChunkName: "pages/showcase2/showcase2-light" */))
const _73270072 = () => interopDefault(import('..\\pages\\showcase3\\showcase3-dark.vue' /* webpackChunkName: "pages/showcase3/showcase3-dark" */))
const _e8c6e06c = () => interopDefault(import('..\\pages\\showcase3\\showcase3-light.vue' /* webpackChunkName: "pages/showcase3/showcase3-light" */))
const _b5038c1c = () => interopDefault(import('..\\pages\\works\\works-dark.vue' /* webpackChunkName: "pages/works/works-dark" */))
const _b7a6f36c = () => interopDefault(import('..\\pages\\works\\works-light.vue' /* webpackChunkName: "pages/works/works-light" */))
const _3c1a0512 = () => interopDefault(import('..\\pages\\works2\\works2-dark.vue' /* webpackChunkName: "pages/works2/works2-dark" */))
const _3debc1ac = () => interopDefault(import('..\\pages\\works2\\works2-light.vue' /* webpackChunkName: "pages/works2/works2-light" */))
const _16154f60 = () => interopDefault(import('..\\pages\\works3\\works3-dark.vue' /* webpackChunkName: "pages/works3/works3-dark" */))
const _439933ac = () => interopDefault(import('..\\pages\\works3\\works3-light.vue' /* webpackChunkName: "pages/works3/works3-light" */))

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
    component: _ea28bf5c,
    name: "about-about-dark"
  }, {
    path: "/about/about-light",
    component: _6c6bebea,
    name: "about-about-light"
  }, {
    path: "/blog-details/blog-details-dark",
    component: _6ad12244,
    name: "blog-details-blog-details-dark"
  }, {
    path: "/blog-details/blog-details-light",
    component: _ed92af90,
    name: "blog-details-blog-details-light"
  }, {
    path: "/blog-grid/blog-grid-dark",
    component: _31076552,
    name: "blog-grid-blog-grid-dark"
  }, {
    path: "/blog-grid/blog-grid-light",
    component: _ec6e722c,
    name: "blog-grid-blog-grid-light"
  }, {
    path: "/blog-list/blog-list-dark",
    component: _04efcc52,
    name: "blog-list-blog-list-dark"
  }, {
    path: "/blog-list/blog-list-light",
    component: _32ed3fea,
    name: "blog-list-blog-list-light"
  }, {
    path: "/blog/blog-dark",
    component: _5f37d5a4,
    name: "blog-blog-dark"
  }, {
    path: "/blog/blog-light",
    component: _53fbdae4,
    name: "blog-blog-light"
  }, {
    path: "/contact/contact-dark",
    component: _954a579c,
    name: "contact-contact-dark"
  }, {
    path: "/contact/contact-light",
    component: _e03997ec,
    name: "contact-contact-light"
  }, {
    path: "/homepage/home1-dark",
    component: _dcdc6540,
    name: "homepage-home1-dark"
  }, {
    path: "/homepage/home1-light",
    component: _3a8b609c,
    name: "homepage-home1-light"
  }, {
    path: "/homepage/home2-dark",
    component: _f4498302,
    name: "homepage-home2-dark"
  }, {
    path: "/homepage/home2-light",
    component: _611fd946,
    name: "homepage-home2-light"
  }, {
    path: "/homepage/home3-dark",
    component: _7a24af9e,
    name: "homepage-home3-dark"
  }, {
    path: "/homepage/home3-light",
    component: _6454c61e,
    name: "homepage-home3-light"
  }, {
    path: "/homepage/home4-dark",
    component: _6e6e20bd,
    name: "homepage-home4-dark"
  }, {
    path: "/homepage/home4-light",
    component: _0d8d0e42,
    name: "homepage-home4-light"
  }, {
    path: "/homepage/home5-dark",
    component: _62b791dc,
    name: "homepage-home5-dark"
  }, {
    path: "/homepage/home5-light",
    component: _e3c3a8c0,
    name: "homepage-home5-light"
  }, {
    path: "/homepage/home6-dark",
    component: _570102fb,
    name: "homepage-home6-dark"
  }, {
    path: "/homepage/home6-light",
    component: _2302de61,
    name: "homepage-home6-light"
  }, {
    path: "/homepage/home7-dark",
    component: _4b4a741a,
    name: "homepage-home7-dark"
  }, {
    path: "/homepage/home7-light",
    component: _9030ddbc,
    name: "homepage-home7-light"
  }, {
    path: "/homepage/home8-dark",
    component: _3f93e539,
    name: "homepage-home8-dark"
  }, {
    path: "/homepage/home8-light",
    component: _4ccc43e3,
    name: "homepage-home8-light"
  }, {
    path: "/project-details2/project-details2-dark",
    component: _1c7e42ac,
    name: "project-details2-project-details2-dark"
  }, {
    path: "/project-details2/project-details2-light",
    component: _3f830edc,
    name: "project-details2-project-details2-light"
  }, {
    path: "/showcase/showcase-dark",
    component: _597c4198,
    name: "showcase-showcase-dark"
  }, {
    path: "/showcase/showcase-light",
    component: _6fef7364,
    name: "showcase-showcase-light"
  }, {
    path: "/showcase2/showcase2-dark",
    component: _724499d2,
    name: "showcase2-showcase2-dark"
  }, {
    path: "/showcase2/showcase2-light",
    component: _7032226a,
    name: "showcase2-showcase2-light"
  }, {
    path: "/showcase3/showcase3-dark",
    component: _73270072,
    name: "showcase3-showcase3-dark"
  }, {
    path: "/showcase3/showcase3-light",
    component: _e8c6e06c,
    name: "showcase3-showcase3-light"
  }, {
    path: "/works/works-dark",
    component: _b5038c1c,
    name: "works-works-dark"
  }, {
    path: "/works/works-light",
    component: _b7a6f36c,
    name: "works-works-light"
  }, {
    path: "/works2/works2-dark",
    component: _3c1a0512,
    name: "works2-works2-dark"
  }, {
    path: "/works2/works2-light",
    component: _3debc1ac,
    name: "works2-works2-light"
  }, {
    path: "/works3/works3-dark",
    component: _16154f60,
    name: "works3-works3-dark"
  }, {
    path: "/works3/works3-light",
    component: _439933ac,
    name: "works3-works3-light"
  }, {
    path: "/",
    component: _6e6e20bd,
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
