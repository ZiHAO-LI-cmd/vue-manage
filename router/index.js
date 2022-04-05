// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
//引入组件
import Main from '../src/view/Main'
import Home from '../src/view/home'
import User from '../src/view/user'
import Mall from '../src/view/mall'
import PageOne from '../src/view/other/pageOne.vue'
import PageTwo from '../src/view/other/pageTwo.vue'
import Login from '../src/view/Login/login.vue'

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

//创建并暴露一个路由器
export default new VueRouter({
	routes: [
		{
            path: '/home',
            name: 'home',
            component: Home,
		},
		{
            path: '/user',
            name: 'user',
            component: User,
		},
		{
			path: '/mall',
			name: 'mall',
			component: Mall,
		},
		{
			path: '/page1',
			name: 'page1',
			component: PageOne,
		},
		{
			path: '/page2',
			name: 'page2',
			component: PageTwo,
		},
		{
			path: '/login',
			name: 'login',
			component: Login,
		}
	]
})
