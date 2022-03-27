// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
//引入组件
import About from '../src/components/About'
import Main from '../src/view/Main'
import Home from '../src/components/Home'

//创建并暴露一个路由器
export default new VueRouter({
	routes: [
		{
            path: '/home',
            name: 'home',
            component: Home,
		}
	]
})
