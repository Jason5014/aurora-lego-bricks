import { shallowMount } from '@vue/test-utils';
import LText from '../../src/components/LText';
import { textDefaultProps } from '../../src/defaultProps';

describe('LText.vue', () => {
	it('default LText render', () => {
		const msg = 'text';
		const props = {
			...textDefaultProps,
			text: msg
		};

		const wrapper = shallowMount(LText, { props });
		// should have the right text
		expect(wrapper.text()).toBe(msg);
		// should be default div tag
		expect(wrapper.element.tagName).toBe('DIV');
		// shoule have contain css attr
		expect(wrapper.attributes().style.includes('font-size')).toBeTruthy();
		// shoule not have prop has bean filtered
		expect(wrapper.attributes().style.includes('actionType')).toBeFalsy();
	});
});
