import Vue from 'vue'
import store from '../store'
import router from '../router'

export function navTo(url, query) {
    store.commit("transition/SETPAGESTATE", "turn-on");
    router.push({
        path: url,
        query: query
    });
}

