import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: "/",
        name: "index",
        component: () => import('../views/index.vue'),
    },
    {
        path: "/recommend",
        name: "recommend",
        component: () => import('../views/recommend.vue'),
    },
    {
        path: "/tagPage/:id",
        name: "tagPage",
        component: () => import('../views/tagPage.vue'),
    },
    {
        path: "/inspect/:id",
        name: "inspect",
        component: () => import('../views/inspectPage.vue'),
    },
    {
        path: "/profile",
        name: "profile",
        component: () =>
            import('../views/profilePage.vue'),
    },
    {
        path: "/search/:id",
        name: "search",
        component: () =>
            import('../views/searchPage.vue'),
    },
]

const router = new VueRouter({
    routes
})

export default router