const routes = [
    {path: "/",component:eventsNow},
    {path: "/eventsNow",component:eventsNow},
    {path: "/eventsFuture",component:eventsFuture},
    {path: "/eventsPast",component:eventsPast},
    {path: "/tags",component:tags},
    {path: "/eventsInfo/:id",component:eventsInfo,name:"eventInfo"},
    {path: "/eventsTags/:id",component:eventsTags,name:"eventTags"},
    {path: "/subApp",component:submitApp}
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
})

const app = Vue.createApp({})
app.use(router)
app.mount('#app')