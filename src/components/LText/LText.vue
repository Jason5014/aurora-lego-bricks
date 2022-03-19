<template>
	<component :is="tag" :style="styleProps" :class="prefixCls">{{text}}</component>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { useComponentCommon } from '../../hooks';
import { textDefaultProps, textStylePropNames, transformToComponentProps } from '../../defaultProps';

const defaultTextProps = transformToComponentProps(textDefaultProps);

export default defineComponent({
	name: 'l-text',
	props: {
		tag: {
			type: String,
			default: 'div',
		},
		...defaultTextProps,
	},
	setup(props) {
		const { styleProps } = useComponentCommon(props, textStylePropNames);

		return {
			prefixCls: 'l-text-component',
			styleProps,
		};
	}
});
</script>