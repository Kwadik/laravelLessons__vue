import Vue from "vue"
import VueRouter from "vue-router"

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
        {
            path: '/people/:id/edit',
            name: 'person.edit',
            component: () => import('./components/Person/Edit'),
        },
        {
            path: '/people/:id',
            name: 'person.show',
            component: () => import('./components/Person/Show'),
        },
    ],
})
