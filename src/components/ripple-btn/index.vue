<template>
	<a href="javascript:;" :class="[size,color]" class="ripple-btn" @click="ripple($event)">
		<slot> 按钮 </slot>
		<span class="ripple" v-for="a in ripples" :key="a.time" :style="a.rippleStyle"></span>
	</a>
</template>

<script lang="ts">
import { defineComponent,  PropType, reactive, toRefs } from 'vue'
type Size = 'mini' | 'small' | 'normal' | 'large'
type Color = 'blue' | 'red' | 'green' | 'yellow' | string
export default defineComponent({
	name: 'RippleBtn',
	props: {
		size: {
			type: String as PropType<Size>,
			default: 'normal',
		},
		color:{
			type:String as PropType<Color>,
			default: 'blue',
		}
	},
	setup(props) {
		const state = reactive({
			ripples: [] as any[]
		})

		const ripple = (e:any) => {
			const left = e.offsetX + 'px';
			const top = e.offsetY + 'px';
			const rippleStyle = {
				left,top
			}
			state.ripples.push({
				rippleStyle,
				time:new Date().getTime()
			})
			setTimeout(() => {
				state.ripples.shift()
			}, 1000)
		}

		return {
			...toRefs(state),
			ripple,
		}
	},
})
</script>

<style scoped>
.ripple-btn {
	@apply relative overflow-hidden inline-block border border-white bg-red-400 bg-opacity-80 text-lg py-2 px-8 transition duration-300 rounded-sm;
}
.ripple-btn:hover {
	@apply bg-opacity-100;
}

.ripple-btn .ripple {
	animation: ripple 1s forwards;
	@apply absolute w-80 h-80 -ml-40 -mt-40 transform origin-center rounded-full bg-white pointer-events-none;
}

@keyframes ripple {
	from {
		transform: scale(0);
		opacity: 0.6;
	}
	to {
		transform: scale(1);
		opacity: 0.1;
	}
}
.small {
	@apply py-2 px-4 text-base;
}
.blue {
	@apply bg-blue-400;
}
</style>
