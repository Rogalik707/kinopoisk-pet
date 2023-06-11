import { createRouter, createWebHistory } from "vue-router"
import filmsPage from "@/pages/FilmsPage.vue";
import accountPage from "@/pages/AccountPage.vue";
import favoriteFilmsPage from "@/pages/FavoriteFilmsPage.vue";


const routes = [
    {
        path: '/',
        component: filmsPage
    },
    {
        path: '/account',
        component: accountPage,
    },
    {
        path: '/favorites',
        component: favoriteFilmsPage,
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;