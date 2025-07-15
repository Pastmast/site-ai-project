<script setup>
import TheHeaderGptPage from '../components/global/TheHeaderGptPage.vue';
import GptPageHeroSection from '../components/sections/chatGPT/GptPageHeroSection.vue';
import GptMainSkillsSections from '../components/sections/chatGPT/GptMainSkillsSections.vue';
import GptAdvantagesAndDisadvantagesSection from '../components/sections/chatGPT/GptAdvantagesAndDisadvantagesSection.vue';
import BaseButton from '../components/base/BaseButton.vue';
</script>

<template>
	<div class="gpt-chatgpt-bg">
		<TheHeaderGptPage />
		<GptPageHeroSection />
		<GptMainSkillsSections />
		<GptAdvantagesAndDisadvantagesSection />
		<BaseButton href="https://chatgpt.com/" />
	</div>
</template>

<style lang="scss" scoped>
.gpt-chatgpt-bg {
	min-height: 100vh;
	background: radial-gradient(circle at center, #0a1c4d 19%, #181920 200%);
	padding-bottom: 80px;

	@include vp-1023 {
		padding-bottom: 60px;
	}
}
</style>
