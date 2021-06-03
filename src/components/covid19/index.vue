<template>
	<div
		class="shadow-lg p-6 text-center bg-blue-400 rounded-3xl text-white font-light"
	>
		<h2 class="text-3xl lg:text-5xl font-bold select-none">新冠疫情实况追踪</h2>
		<p class="text-lg mt-4 lg:text-xl">数据来源于新浪提供的接口地址</p>
		<p>
			<a
				class="hover:text-blue-200 break-all "
				href="https://interface.sina.cn/news/wap/fymap2020_data.d.json"
				target="_blank"
				>https://interface.sina.cn/news/wap/fymap2020_data.d.json</a
			>
		</p>
		<div class="flex flex-wrap">
			<div class="relative w-full h-auto p-8 lg:w-2/5 lg:p-16">
				<social-distancing class="w-full h-auto" />
			
			</div>

			<div class="relative w-full p-4 lg:w-3/5 lg:p-16">
				<p class="text-3xl relative">{{areaData.name}}
					<button class="text-xl absolute right-0 ml-10 mt-1 rounded-full bg-blue-500 bg-opacity-80 w-8 h-8 focus:outline-none transform rotate-90" @click="randomArea">⇵</button>
				</p>
				<p class="my-2">最近更新于 {{ data.cachetime }}</p>
				
					<div class="flex flex-wrap w-full text-xl justify-between">
						<div class="w-full lg:w-1/2 p-4">
							<div class="card">
								<h3 class="text-lg lg:text-2xl">累计确诊</h3>
								<p class="text-xl lg:text-base">新增: {{ areaData.conadd }}</p>
								<p class="text-xl lg:text-base">总计: {{ areaData.conNum }}</p>
							</div>
						</div>
						<div class="w-full lg:w-1/2 p-4">
							<div class="card">
								<h3 class="text-lg lg:text-2xl">现有确诊</h3>
								<p class="text-xl lg:text-base">总计: </p>
								<p class="text-xl lg:text-base">{{ areaData.econNum }}</p>
							</div>
						</div>
						<div class="w-full lg:w-1/2 p-4">
							<div class="card">
								<h3 class="text-lg lg:text-2xl">累计治愈</h3>
								<p class="text-xl lg:text-base">新增: {{ areaData.cureadd }}</p>
								<p class="text-xl lg:text-base">总计: {{ areaData.cureNum }}</p>
							</div>
						</div>
						<div class="w-full lg:w-1/2 p-4">
							<div class="card">
								<h3 class="text-lg lg:text-2xl">累计死亡</h3>
								<p class="text-xl lg:text-base">新增: {{ areaData.deathadd }}</p>
								<p class="text-xl lg:text-base">总计: {{ areaData.deathNum }}</p>
							</div>
						</div>
					</div>
				
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, toRefs } from 'vue'
import SocialDistancing from './icon/SocialDistancing.vue'
import RippleBtn from '../ripple-btn/index.vue'
export default defineComponent({
	name: 'covid-19',
	components: {
		SocialDistancing,
		RippleBtn
	},
	setup() {
		const state = reactive({
			data: {} as any,
			areaData:{} as any
		})

		// const areaData = computed(() => state.data.otherlist.find(v => v.name === state.nowArea))

		const randomArea = () => {
			let otherlist = state.data.otherlist
			let r = Math.floor(Math.random() * otherlist.length)
			state.areaData = otherlist[r]
		}

		fetch('fymap2020_data.d.json').then(async res => {
			state.data = (await res.json()).data
			const othertotal = state.data.othertotal
			state.areaData = {
				name:'全球',
				conNum:othertotal.certain,
				conadd:othertotal.certain_inc,
				cureNum:othertotal.recure,
				cureadd:othertotal.recure_inc,
				deathNum:othertotal.die,
				deathadd:othertotal.die_inc,
				econNum:othertotal.ecertain
			}
		})

		return {
			...toRefs(state),
			randomArea
		}
	},
})
</script>

<style scoped>
::-webkit-scrollbar {
	width: 4px;
	height: 8px;
	background-color: #f5f5f5;
}
/*定义滚动条轨道
 内阴影+圆角*/
::-webkit-scrollbar-track {
	-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
	border-radius: 10px;
	background-color: #ffffff;
}
/*定义滑块
 内阴影+圆角*/
::-webkit-scrollbar-thumb {
	border-radius: 10px;
	-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
	@apply bg-blue-400;
}

.card {
	@apply w-full p-3 bg-blue-300 bg-opacity-50 rounded-xl shadow-lg border-2 border-white transition duration-500;
}
.card:hover {
	@apply shadow-xl transform -translate-y-1;
}
.slide-fade-enter-active {
	transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
	transition: all 0.3s ease-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
	transform: translateX(-30px);
	opacity: 0;
}
</style>
