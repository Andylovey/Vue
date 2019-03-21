import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
    state : {
        count : 999
    },
    mutations : {
        increment(state) {
            state.count++
        }
    },
    actions : {
        ctm({commit}) {
            commit('increment')
        }
    },
    getters : {
        getCount : state => {
            return state.count
        }
    }
})

export default store;