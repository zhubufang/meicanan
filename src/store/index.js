import Vue from 'vue'
import Vuex from 'vuex'

import * as getters from './getters'
import user from './modules/user'
import transition from './modules/transition'
import createLogger from 'vuex/dist/logger'



Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
    modules: {
        user,
        transition
    },
    getters,
    strict: debug,
    plugins: debug ? [createLogger()] : []
})

export default store