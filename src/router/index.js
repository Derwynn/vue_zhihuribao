import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)
import index from '@/components/index.vue'
import nav from '@/components/nav.vue'
import details from '@/components/details.vue'
import comment from '@/components/comment.vue'
import longcomment from '@/components/longcomment.vue'
import shortcomment from '@/components/shortcomment.vue'
import collection from '@/components/collection.vue'




export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            component: index,
            children: [
                { path: 'nav', component: nav },
            ]
        },

        { path: '/collection', component: collection },
        { path: '/details/:id', component: details },

        {
            path: '/comment/:id',
            component: comment,
            children: [
                { path: 'longcomment', component: longcomment },
                { path: 'shortcomment', component: shortcomment },
            ]
        },

        // { path: '*', redirect: '/' },
    ]
})