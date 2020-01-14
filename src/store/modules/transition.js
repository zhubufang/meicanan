


const state = {
    pageState:''
};

const mutations = {
    SETPAGESTATE: (state, pageState) => {
        state.pageState = pageState
    }
};

const actions = {
    setPageState({commit,state}, pageState) {
        
    }
};




export default {
    namespaced: true,
    state,
    mutations,
    actions
}