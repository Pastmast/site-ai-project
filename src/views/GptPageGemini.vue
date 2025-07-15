<script setup>
import TheHeaderGptPage from '../components/global/TheHeaderGptPage.vue';
import GptPageHeroSection from '../components/sections/gemini/GptPageHeroSection.vue';
import GptMainSkillsSections from '../components/sections/gemini/GptMainSkillsSections.vue';
import GptAdvantagesAndDisadvantagesSection from '../components/sections/gemini/GptAdvantagesAndDisadvantagesSection.vue';
import BaseButton from '../components/base/BaseButton.vue';
</script>

<template>
	<div class="gpt-gemini-bg">
		<TheHeaderGptPage />
		<GptPageHeroSection />
		<GptMainSkillsSections />
		<GptAdvantagesAndDisadvantagesSection />
		<BaseButton href="https://gemini.google.com/" />
	</div>
</template>

<style lang="scss" scoped>
.gpt-gemini-bg {
	min-height: 100vh;
	background: radial-gradient(circle at center, #0b1f37 19%, #181920 200%);
	padding-bottom: 80px;

	@include vp-1023 {
		padding-bottom: 60px;
	}
}
</style>
