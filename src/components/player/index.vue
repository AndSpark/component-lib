<template>
<div class="fixed flex items-center overflow-hidden px-4 bottom-0 left-0 w-full h-20 bg-gray-50 border-t border-gray-400">
	<div class="h-16 px-4 overflow-hidden relative">
	<img class="h-full rounded-lg" src="../../assets/cover.jpg" />
	<div class="cursor-pointer absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 transition duration-300 rounded-full border-2 border-white w-10 h-10 flex items-center justify-center text-2xl font-bold text-white hover:scale-110">
		<span class="ml-1 transform rotate-90 ">▲</span>
	</div>
	</div>
	<div>
		<p class="font-light">LIKE YOU DO</p>
		<P class="text-sm font-bold">JJ LIN</P>
	</div>
	<div class="flex flex-1 items-center">
		<span>←</span>
		<span class="flex-1 h-1 bg-gray-400"></span>
		<span>→</span>
	</div>
	<div>
		-3:10
	</div>
	<div>下一首</div>
	<div>
	</div>
</div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'

export default defineComponent({ 
	name:'Player',
	setup(){
		fetch('http://m8.music.126.net/20210602214002/34c11dfb73126250010a48bc5d57a7ea/ymusic/0fd6/4f65/43ed/a8772889f38dfcb91c04da915b301617.mp3')
	}
})
</script>

<style>

</style>