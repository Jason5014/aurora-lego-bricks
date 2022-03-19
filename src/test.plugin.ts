import { App } from 'vue';

import Hello from './components/Hello';

const plugin = {
	install: (app: App) => {
		// 全局方法
		app.config.globalProperties.$echo = () => {
			console.log('a plugin');
		};
		// 全局组件
		app.component('hello', Hello);
		// 全局provider
		app.provide('test', { message: '全局 provide' });
	}
};

export default plugin;