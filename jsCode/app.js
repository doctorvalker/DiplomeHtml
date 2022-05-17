const routes = [
    {path: "/",component:eventsNow},
    {path: "/eventsNow",component:eventsNow},
    {path: "/eventsFuture",component:eventsFuture},
    {path: "/eventsPast",component:eventsPast},
    {path: "/aboutAuthor",component:aboutAuthor}
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
})

const app = Vue.createApp({})
app.use(router)
app.mount('#app')