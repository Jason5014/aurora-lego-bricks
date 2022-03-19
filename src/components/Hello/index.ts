import { App } from 'vue';

import Hello from './Hello.vue';

Hello.install = (app: App) => {
	app.component(Hello.name, Hello);
};

export default Hello;