import Vue from 'vue'
import Vuex from 'vuex'

import {TriviaModule} from './TriviaModule'
import {ChuckModule} from './ChuckModule'

Vue.use(Vuex)

export const store = new Vuex.Store({
    modules:{
        ChuckModule,
        TriviaModule
    }
})