<template>
	<div>
		Weekly reset in: {{days}} Days {{hours}} Hours {{minutes}} Minutes {{seconds}} Seconds
	</div>
</template>

<script setup>
	import { ref } from 'vue'

	var days = ref(0)
	var hours = ref(0)
	var minutes = ref(0)
	var seconds = ref(0)
</script>