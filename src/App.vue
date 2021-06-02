<template>	
	<div class="container mb-20">
  <Covid19 />
	<Player/>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Covid19 from './components/covid19/index.vue'
import Player from './components/player/index.vue'
export default defineComponent({
  name: 'App',
  components: {
    Covid19,
		Player
  }
})
</script>
