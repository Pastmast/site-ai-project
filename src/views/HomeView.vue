<script setup>
import TheHeaderHome from '../components/global/TheHeaderHome.vue';
import HomeHeroSection from '../components/sections/home/HomeHeroSection.vue';
import GptSection from '../components/sections/home/GptSection.vue';
import AiAndHumanSection from '../components/sections/home/AiAndHumanSection.vue';
import GenerateSection from '../components/sections/home/GenerateSection.vue';

import { onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

onMounted(() => {
	if (window.location.hash && route.hash && performance.getEntriesByType('navigation')[0]?.type === 'reload') {
		router.replace({ hash: '' });
	}
});
</script>

<template>
	<TheHeaderHome />
	<HomeHeroSection />
	<GptSection />
	<AiAndHumanSection />
	<GenerateSection />
</template>

<style lang="scss" scoped></style>
