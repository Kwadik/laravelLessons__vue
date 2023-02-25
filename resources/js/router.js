import Vue from "vue"
import VueRouter from "vue-router"
import PostComponent from "./components/PostComponent";
import TagComponent from "./components/TagComponent";

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/people',
            name: 'person.index',
            component: () => import('./components/Person/Index'),
        },
        {
            path: '/people/create',
            name: 'person.create',
            component: () => import('./components/Person/Create'),
        },
    ],
})
