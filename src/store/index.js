import Vue from "vue";
import Vuex from 'vuex'

Vue.use(Vuex)


//准备state——用于存储数据
const state = {
	isCollapse: false,
    tabList: [
        {
            path: '/',
            name: 'home',
            label: '首页',
            icon: 'home'
        }
    ]
}

//准备mutations——用于操作数据（state）
const mutations = {
	collapseMenu(state) {
        console.log('mutations中的JIA被调用了')
        state.isCollapse = !state.isCollapse;
    },
    selectMenu(state, val) {
        if (val.name !== 'home') {
            state.currentMenu = val
            const result = state.tabList.findIndex(item => item.name === val.name)
            if (result !== -1) {
                state.tabList.push(val)
            }
        } else {
            state.currentMenu = null
        }
    }
}

export default new Vuex.Store({
    state,
    mutations,
})