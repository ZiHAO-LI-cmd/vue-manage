import Vue from "vue";
import Vuex from 'vuex'

Vue.use(Vuex)

//准备mutations——用于操作数据（state）
const mutations = {
	collapseMenu(state) {
        console.log('mutations中的JIA被调用了')
        state.isCollapse = !state.isCollapse;
    }
}
//准备state——用于存储数据
const state = {
	isCollapse: false
}

export default new Vuex.Store({
    state,
    mutations,
})