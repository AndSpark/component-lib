<template>
<div class="player-root fixed flex items-center md:justify-start justify-evenly px-4 bottom-0 left-0  h-20 bg-gray-50 border border-gray-400 rounded" :class="{up:isUp,down:!isUp}">
	 <div @click="isUp = !isUp" class=" cursor-pointer absolute -top-5 left-1 border border-gray-400 bg-gray-50 w-6 h-5 flex items-center justify-center rounded-t ">
		<svg  t="1622948160880" class="icon -ml-0.5" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6221" width="14" height="14"><path d="M960 0L320 144s-48 10.896-48 48v650.56a299.264 299.264 0 0 0-80-10.56c-97.2 0-176 42.976-176 96s78.8 96 176 96 176-42.976 176-96V417.968l544-118.64V698.56a299.264 299.264 0 0 0-80-10.56c-97.2 0-176 42.976-176 96s78.8 96 176 96 176-42.976 176-96V48a48 48 0 0 0-48-48z" fill="#db639b" p-id="6222"></path></svg>
	 </div>
	<div class="h-16 px-4 overflow-hidden relative ">
		<img class="h-full rounded-lg" src="../../assets/cover.jpg" />
	</div>
	<div class="w-24 whitespace-nowrap overflow-hidden">
		<p 
		class="font-light words"
		:class="musicName && (musicName.offsetWidth  > 96) && 'move-words'" 
		:style="{animationDuration:musicName && musicName.offsetWidth / 30 + 's'}" 
		ref="musicName" 
		:text="music.name" 
		>{{music.name}}</p>
		<P class="text-sm font-bold words"
		:class="musicAuthor && (musicAuthor.offsetWidth  > 96) && 'move-words'" 
		:style="{animationDuration:musicAuthor && musicAuthor.offsetWidth / 30 + 's'}" 
		ref="musicAuthor" 
		:text="music.author" 
		>{{music.author}}</P>
	</div>
	<div class="ml-5 cursor-pointer  transition duration-300  hover:scale-110" @click="handlePlayMusicClick">
		<svg v-show="!music.isPlaying" t="1622715763495" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1420" xmlns:xlink="http://www.w3.org/1999/xlink" width="54" height="54"><path d="M515.584 64.512c-247.808 0-449.024 201.216-449.024 449.024S267.776 962.56 515.584 962.56s449.024-201.216 449.024-449.024S763.392 64.512 515.584 64.512z m0 834.048c-211.968 0-384.512-172.544-384.512-384.512s172.544-384.512 384.512-384.512S900.096 302.08 900.096 514.048 727.552 898.56 515.584 898.56z" p-id="1421" fill="#111"></path><path d="M373.76 660.992c0 40.96 28.672 57.344 64 36.864l254.464-146.944c35.328-20.48 35.328-53.76 0-74.24L437.76 329.728c-35.328-20.48-64-3.584-64 36.864v294.4z" p-id="1422" fill="#111"></path></svg>
		
		<svg v-show="music.isPlaying" t="1622716594243" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4178" width="54" height="54"><path d="M511.445333 64c-217.429333 0-408.234667 158.549333-442.197333 380.074667-37.546667 244.522667 130.304 473.173333 374.826667 510.72 23.04 3.498667 45.909333 5.205333 68.48 5.205333 217.429333 0 408.234667-158.549333 442.197333-380.074667 37.546667-244.522667-130.304-473.173333-374.826667-510.72a451.584 451.584 0 0 0-68.48-5.205333m0 64c19.498667 0 39.253333 1.536 58.752 4.48a382.72 382.72 0 0 1 251.306667 152.32 382.72 382.72 0 0 1 69.973333 285.44 382.464 382.464 0 0 1-130.56 234.026667 383.829333 383.829333 0 0 1-558.421333-65.066667 382.72 382.72 0 0 1-69.973333-285.44A382.464 382.464 0 0 1 263.04 219.733333 383.829333 383.829333 0 0 1 511.445333 128" p-id="4179" fill="#111"></path><path d="M608 352a32 32 0 0 0-32 32v256a32 32 0 0 0 64 0V384a32 32 0 0 0-32-32M416 352A32 32 0 0 0 384 384v256a32 32 0 0 0 64 0V384a32 32 0 0 0-32-32" p-id="4180" fill="#111"></path></svg>
	</div>
	<!-- <div class="flex flex-1 items-center mx-6">
		<span class="flex-1 h-1 bg-gray-400 rounded-full relative">
			<span class="h-full absolute top-0 left-0 bg-red-300 rounded-full" :style="{width:barLength}" ref="bar">
				<span class="h-2 w-2 rounded-full bg-red-400 absolute right-0 -top-0.5 " ref="point"></span>
			</span>
		</span>
	</div> -->
	
	<div class="mx-5 cursor-pointer" @click="handleNextMusicClick">
		<svg t="1622715940603" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3234" width="28" height="28"><path d="M876.80157536 495.55832832L504.75058569 203.25227701c-13.85259515-10.87412148-34.17581037-1.03563061-34.17581038 16.44167168v584.61210262c0 17.47592145 20.32321523 27.31579316 34.17581038 16.44167168l372.05098967-292.30605131C882.1067658 524.29776837 884.82702222 518.08398467 884.82702222 512s-2.71887559-12.29776837-8.02544686-16.44167168z m-414.25224692 0L90.49833876 203.25227701c-13.8512143-10.87412148-34.17581037-1.03563061-34.17581037 16.44167168v584.48368442c0 17.47592145 20.32459607 27.31303149 34.17581037 16.44029084l372.04960886-292.30743215c5.30933296-4.14252247 8.0268277-10.35630617 8.02682769-16.44029083 0-5.95418563-2.71749474-12.16796933-8.02682769-16.31187265zM959.39242667 170.2418963h-66.2803595c-4.53191958 0-8.28504494 3.49490812-8.28504495 7.76722962v667.98174816c0 4.27232151 3.75312535 7.76722963 8.28504495 7.76722962h66.2803595c4.53053874 0 8.28504494-3.49490812 8.28504494-7.76722962v-667.98174816c0-4.27232151-3.75450621-7.76722963-8.28504494-7.76722962z" p-id="3235"></path></svg>
	</div>
	<div class=" font-light">
		{{restTime}}
	</div>
	<div>
		<audio :src="music.url" ref="player" @timeupdate="handleTimeUpdate" @ended="handleNextMusicClick" ></audio>
	</div>
</div>
</template>

<script lang='ts'>
import { computed, defineComponent, reactive, Ref, ref, toRefs, watch,nextTick, onMounted } from 'vue'
import scroll from './scroll'
type music = {
	name:string;
	author:string;
	url:string;
}

interface player extends music {
	duration:number
	currentTime:number
	isPlaying:boolean
	index:number
}

export default defineComponent({ 
	name:'Player',
	setup(){
		const state = reactive({
			music:{
				name:'Miss Americana & The Heartbreak Prince',
				author:'Taylor Swift',
				url:'src/assets/1.mp3',
				index:0,
				duration:0,
				currentTime:0,
				isPlaying:false,
			} as player,
			musicList:[
				{name:'Miss Americana & The Heartbreak Prince',
				author:'Taylor Swift',
				url:'src/assets/1.mp3'},
				{name:`New Year's Day`,
				author:'Taylor Swift',
				url:'src/assets/2.mp3'},
				{name:'The Man',
				author:'Taylor Swift',
				url:'src/assets/3.mp3'}
			] as music[],
			isUp:true,
		})

		const player:Ref<HTMLAudioElement | undefined> = ref()
		const musicName = ref()
		const musicAuthor = ref()

		const restTime = computed(()=> {
			const rest = state.music.duration - state.music.currentTime
			const min = Math.floor(rest / 60) || 0
			let sec:number | string = Math.floor(rest - min * 60) || 0
			sec = sec < 10 ? '0'+ sec : sec
			return `- ${min}:${sec}`
		})

		const barLength = computed(()=> {
			const pr = state.music.currentTime / state.music.duration * 100 || 0
			return pr + '%'
		})

		watch(()=>state.music.index,async (n)=>{
			const {name,author,url} = state.musicList[n]

			state.music = {
				name,author,url,index:n,duration:0,currentTime:0,isPlaying:state.music.isPlaying
			}
			await nextTick();
			let time = musicName.value.offsetWidth / 96 
			time = time < 1 ? 0 : time
			musicName.value.style.setProperty('--duration', time * 3 + 's');
			if(state.music.isPlaying){
				(player.value as HTMLAudioElement).play()
			}
		})


		const actions = {
			handlePlayMusicClick(){
				state.music.isPlaying ? (player.value as HTMLAudioElement).pause() : (player.value as HTMLAudioElement).play()
				state.music.isPlaying = !state.music.isPlaying
			},
			handleTimeUpdate(){
				state.music.currentTime = Number((player.value as HTMLAudioElement).currentTime.toFixed(2))
				state.music.duration = Number((player.value as HTMLAudioElement).duration.toFixed(2))
			},
			handleNextMusicClick(){
				if(state.music.index === state.musicList.length - 1){
					state.music.index = 0
				}else {
					state.music.index++
				}
			}
		}



		return {
			...toRefs(state),
			...actions,
			player,restTime,barLength,musicName,musicAuthor
		}
	}
})
</script>

<style>
.up {
	transform:translateY(0)
}
.down {
	transform:translateY(100%)

}
.player-root{
	min-width: 420px;
	transition: 0.5s;
}
@media screen and (max-width:768px) {
	.player-root{
	min-width: 100%;
}
}
.words {
	width: fit-content;
}
.move-words {
	position: relative;
	animation:move 4s  linear infinite;
	padding-left:50px;
}
.move-words::after{
	position: absolute; 
	right:-100%;
	content:attr(text);
}

@keyframes move {
	0% {
		transform: translateX(0);
	}
	100% {
		transform: translateX(-100%);
	}
}

</style>