import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "login",
        component: () =>
            import("../views/login.vue"),
    },
    {
        path: "/HelloWorld",
        name: "HelloWorld",
        component: () =>
            import("../components/HelloWorld.vue"),
    },
    {
        path: '/:catchAll(.*)',
        component: () => import('../views/404.vue')
    }

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;