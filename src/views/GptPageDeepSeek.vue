<script setup>
import TheHeaderGptPage from '../components/global/TheHeaderGptPage.vue';
import GptPageHeroSection from '../components/sections/deepseek/GptPageHeroSection.vue';
import GptMainSkillsSections from '../components/sections/deepseek/GptMainSkillsSections.vue';
import GptAdvantagesAndDisadvantagesSection from '../components/sections/deepseek/GptAdvantagesAndDisadvantagesSection.vue';
import BaseButton from '../components/base/BaseButton.vue';
</script>

<template>
	<div class="gpt-deepseek-bg">
		<TheHeaderGptPage />
		<GptPageHeroSection />
		<GptMainSkillsSections />
		<GptAdvantagesAndDisadvantagesSection />
		<BaseButton href="https://chat.deepseek.com/" />
	</div>
</template>

<style lang="scss" scoped>
.gpt-deepseek-bg {
	min-height: 100vh;
	background: radial-gradient(circle at center, #0a1c4d 19%, #181920 200%);
	padding-bottom: 80px;

	@include vp-1023 {
		padding-bottom: 60px;
	}
}
</style>
