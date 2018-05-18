import Vue from 'vue'
import VueRouter from 'vue-router'
import TriviaApp from './components/TriviaApp.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
    routes:[
        {path: '/', component:TriviaApp}
    ],
    mode: 'history'
})