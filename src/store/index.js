import Vue from "vue";
import Vuex from 'vuex'
import Cookie from 'js-cookie'

Vue.use(Vuex)


//准备state——用于存储数据
const state = {
	isCollapse: false,
    tabList: [
        {
            path: '/home',
            name: 'home',
            label: '首页',
            icon: 'home'
        }
    ],
    token: '',
    currentMenu: null,
    menu: []
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
            if (result === -1) {
                state.tabList.push(val)
            }
        } else {
            state.currentMenu = null
        }
    },
    closeTag(state, val) {
        const result = state.tabList.findIndex(item => item.name === val.name)
        state.tabList.splice(result, 1)
    },
    setToken(state, val) {
        state.token = val
        Cookie.set('token', val)
    },
    clearToken(state) {
        state.token = ''
        Cookie.remove('token')
    },
    getToken(state) {
        state.token = state.token || Cookie.get('token')
    },
    setMenu(state, val){
        state.menu = []
        Cookie.set('menu', JSON.stringify(val))
    },
    clearMenu(state) {
        state.menu = []
        Cookie.remove('menu')
    },
    addMenu(state, router) {
        if (!Cookie.get('menu')) {
            return 
        }
        const menu = JSON.parse(Cookie.get('menu'))
        state.menu = menu
        const menuArray = []
        menu.forEach(item => {
            if (item.children) {
                item.children = item.children.map(item => {
                    item.component = () => import(`../view/${item.url}`)
                    return item
                })
                menuArray.push(...item.children)
            } else {
                item.component = () => import(`../view/${item.url}`)
                menuArray.push(item)
            }
        })
        //路由动态添加
        menuArray.forEach(item => {
            router.addRoute('Main', item)
        })
    }
}

export default new Vuex.Store({
    state,
    mutations,
})