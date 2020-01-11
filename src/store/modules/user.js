


const state = {
    openId:null
};

const mutations = {
    SET_OPENID: (state, openId) => {
        console.log(openId,444)
        state.openId = openId
    }
};




export default {
    namespaced: true,
    state,
    mutations
}