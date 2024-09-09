//引入createRouter
import { createRouter, createWebHashHistory } from 'vue-router'
//引入路由组件
import Home from '@/components/Home.vue'
import News from '@/components/News.vue'
import About from '@/components/About.vue'

//创建路由器
const router = createRouter({
    history: createWebHashHistory(),
    routes: [{
        path: '/home',
        component: Home
    },
    {
        path: '/news',
        component: News
    },
    {
        path: '/about',
        component: About
    }
    ]
})

export default router