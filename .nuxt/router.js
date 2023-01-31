import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _ec11b490 = () => interopDefault(import('../pages/Home.vue' /* webpackChunkName: "" */))
const _236cc7a4 = () => interopDefault(import('../modules/checkout/pages/Cart.vue' /* webpackChunkName: "" */))
const _5be4c054 = () => interopDefault(import('../modules/checkout/pages/Checkout.vue' /* webpackChunkName: "" */))
const _47ae94c0 = () => interopDefault(import('../modules/checkout/pages/Checkout/Billing.vue' /* webpackChunkName: "" */))
const _7ad807ab = () => interopDefault(import('../modules/checkout/pages/Checkout/Payment.vue' /* webpackChunkName: "" */))
const _2eaf964e = () => interopDefault(import('../modules/checkout/pages/Checkout/Shipping.vue' /* webpackChunkName: "" */))
const _5b93ff00 = () => interopDefault(import('../modules/checkout/pages/Checkout/ThankYou.vue' /* webpackChunkName: "" */))
const _8b35b5f2 = () => interopDefault(import('../modules/checkout/pages/Checkout/UserAccount.vue' /* webpackChunkName: "" */))
const _01092580 = () => interopDefault(import('../pages/Cms.vue' /* webpackChunkName: "pages/Cms" */))
const _7db4c58d = () => interopDefault(import('../modules/customer/pages/MyAccount/MyAccount.vue' /* webpackChunkName: "" */))
const _24b1540a = () => interopDefault(import('../modules/customer/pages/MyAccount/AddressesDetails/AddressesDetails.vue' /* webpackChunkName: "" */))
const _5f09a689 = () => interopDefault(import('../modules/customer/pages/MyAccount/MyNewsletter.vue' /* webpackChunkName: "" */))
const _b6223492 = () => interopDefault(import('../modules/customer/pages/MyAccount/MyProfile/MyProfile.vue' /* webpackChunkName: "" */))
const _c7a2ef0a = () => interopDefault(import('../modules/customer/pages/MyAccount/MyReviews.vue' /* webpackChunkName: "" */))
const _2e5100d6 = () => interopDefault(import('../modules/customer/pages/MyAccount/MyWishlist.vue' /* webpackChunkName: "" */))
const _5408f73b = () => interopDefault(import('../modules/customer/pages/MyAccount/OrderHistory/OrderHistory.vue' /* webpackChunkName: "" */))
const _7b4b19f2 = () => interopDefault(import('../modules/customer/pages/MyAccount/AddressesDetails/AddressNew.vue' /* webpackChunkName: "" */))
const _47610136 = () => interopDefault(import('../modules/customer/pages/MyAccount/ResetPassword.vue' /* webpackChunkName: "" */))
const _ce0e029a = () => interopDefault(import('../modules/customer/pages/MyAccount/AddressesDetails/AddressEdit.vue' /* webpackChunkName: "" */))
const _a3e58e50 = () => interopDefault(import('../modules/customer/pages/MyAccount/OrderHistory/SingleOrder/SingleOrder.vue' /* webpackChunkName: "" */))
const _e9b4fe66 = () => interopDefault(import('../pages/Faq.vue' /* webpackChunkName: "pages/Faq" */))
const _4ba78930 = () => interopDefault(import('../pages/Page.vue' /* webpackChunkName: "pages/Page" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/default",
    component: _ec11b490,
    name: "home___default"
  }, {
    path: "/german",
    component: _ec11b490,
    name: "home___german"
  }, {
    path: "/default/cart",
    component: _236cc7a4,
    name: "cart___default"
  }, {
    path: "/default/checkout",
    component: _5be4c054,
    name: "checkout___default",
    children: [{
      path: "billing",
      component: _47ae94c0,
      name: "billing___default"
    }, {
      path: "payment",
      component: _7ad807ab,
      name: "payment___default"
    }, {
      path: "shipping",
      component: _2eaf964e,
      name: "shipping___default"
    }, {
      path: "thank-you",
      component: _5b93ff00,
      name: "thank-you___default"
    }, {
      path: "user-account",
      component: _8b35b5f2,
      name: "user-account___default"
    }]
  }, {
    path: "/default/Cms",
    component: _01092580,
    name: "Cms___default"
  }, {
    path: "/default/customer",
    component: _7db4c58d,
    meta: {"titleLabel":"My Account"},
    name: "customer___default",
    children: [{
      path: "addresses-details",
      component: _24b1540a,
      meta: {"titleLabel":"Addresses details"},
      name: "customer-addresses-details___default"
    }, {
      path: "my-newsletter",
      component: _5f09a689,
      meta: {"titleLabel":"My newsletter"},
      name: "customer-my-newsletter___default"
    }, {
      path: "my-profile",
      component: _b6223492,
      meta: {"titleLabel":"My profile"},
      name: "customer-my-profile___default"
    }, {
      path: "my-reviews",
      component: _c7a2ef0a,
      meta: {"titleLabel":"My reviews"},
      name: "customer-my-reviews___default"
    }, {
      path: "my-wishlist",
      component: _2e5100d6,
      meta: {"titleLabel":"My wishlist"},
      name: "customer-my-wishlist___default"
    }, {
      path: "order-history",
      component: _5408f73b,
      meta: {"titleLabel":"Order history"},
      name: "customer-order-history___default"
    }, {
      path: "addresses-details/create",
      component: _7b4b19f2,
      meta: {"titleLabel":"Addresses details"},
      name: "customer-addresses-details-new___default"
    }, {
      path: "/default/reset-password",
      component: _47610136,
      alias: "/customer/account/createPassword",
      name: "reset-password___default"
    }, {
      path: "addresses-details/edit/:addressId",
      component: _ce0e029a,
      meta: {"titleLabel":"Addresses details"},
      props: true,
      name: "customer-addresses-details-edit___default"
    }, {
      path: "order-history/:orderId",
      component: _a3e58e50,
      meta: {"titleLabel":"Order history"},
      props: true,
      name: "customer-single-order___default"
    }]
  }, {
    path: "/default/Faq",
    component: _e9b4fe66,
    name: "Faq___default"
  }, {
    path: "/default/Home",
    component: _ec11b490,
    name: "Home___default"
  }, {
    path: "/default/Page",
    component: _4ba78930,
    name: "Page___default"
  }, {
    path: "/german/cart",
    component: _236cc7a4,
    name: "cart___german"
  }, {
    path: "/german/checkout",
    component: _5be4c054,
    name: "checkout___german",
    children: [{
      path: "billing",
      component: _47ae94c0,
      name: "billing___german"
    }, {
      path: "payment",
      component: _7ad807ab,
      name: "payment___german"
    }, {
      path: "shipping",
      component: _2eaf964e,
      name: "shipping___german"
    }, {
      path: "thank-you",
      component: _5b93ff00,
      name: "thank-you___german"
    }, {
      path: "user-account",
      component: _8b35b5f2,
      name: "user-account___german"
    }]
  }, {
    path: "/german/Cms",
    component: _01092580,
    name: "Cms___german"
  }, {
    path: "/german/customer",
    component: _7db4c58d,
    meta: {"titleLabel":"My Account"},
    name: "customer___german",
    children: [{
      path: "addresses-details",
      component: _24b1540a,
      meta: {"titleLabel":"Addresses details"},
      name: "customer-addresses-details___german"
    }, {
      path: "my-newsletter",
      component: _5f09a689,
      meta: {"titleLabel":"My newsletter"},
      name: "customer-my-newsletter___german"
    }, {
      path: "my-profile",
      component: _b6223492,
      meta: {"titleLabel":"My profile"},
      name: "customer-my-profile___german"
    }, {
      path: "my-reviews",
      component: _c7a2ef0a,
      meta: {"titleLabel":"My reviews"},
      name: "customer-my-reviews___german"
    }, {
      path: "my-wishlist",
      component: _2e5100d6,
      meta: {"titleLabel":"My wishlist"},
      name: "customer-my-wishlist___german"
    }, {
      path: "order-history",
      component: _5408f73b,
      meta: {"titleLabel":"Order history"},
      name: "customer-order-history___german"
    }, {
      path: "addresses-details/create",
      component: _7b4b19f2,
      meta: {"titleLabel":"Addresses details"},
      name: "customer-addresses-details-new___german"
    }, {
      path: "/german/reset-password",
      component: _47610136,
      alias: "/customer/account/createPassword",
      name: "reset-password___german"
    }, {
      path: "addresses-details/edit/:addressId",
      component: _ce0e029a,
      meta: {"titleLabel":"Addresses details"},
      props: true,
      name: "customer-addresses-details-edit___german"
    }, {
      path: "order-history/:orderId",
      component: _a3e58e50,
      meta: {"titleLabel":"Order history"},
      props: true,
      name: "customer-single-order___german"
    }]
  }, {
    path: "/german/Faq",
    component: _e9b4fe66,
    name: "Faq___german"
  }, {
    path: "/german/Home",
    component: _ec11b490,
    name: "Home___german"
  }, {
    path: "/german/Page",
    component: _4ba78930,
    name: "Page___german"
  }, {
    path: "/default/:slug+",
    component: _4ba78930,
    name: "page___default"
  }, {
    path: "/german/:slug+",
    component: _4ba78930,
    name: "page___german"
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
