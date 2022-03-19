import { App } from 'vue';

import { default as components } from './components';

const { LText } = components;

const install = (app: App) => {
	Object.values(components).forEach(component => {
		app.component(component.name, component);
	});
};

export {
	install,
	LText,
};

 export default { install };
