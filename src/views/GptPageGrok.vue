<script setup>
import TheHeaderGptPage from '../components/global/TheHeaderGptPage.vue';
import GptPageHeroSection from '../components/sections/grok/GptPageHeroSection.vue';
import GptMainSkillsSections from '../components/sections/grok/GptMainSkillsSections.vue';
import GptAdvantagesAndDisadvantagesSection from '../components/sections/grok/GptAdvantagesAndDisadvantagesSection.vue';
import BaseButton from '../components/base/BaseButton.vue';
</script>

<template>
	<div class="gpt-grok-bg">
		<TheHeaderGptPage />
		<GptPageHeroSection />
		<GptMainSkillsSections />
		<GptAdvantagesAndDisadvantagesSection />
		<BaseButton href="https://grok.com/" />
	</div>
</template>

<style lang="scss" scoped>
.gpt-grok-bg {
	min-height: 100vh;
	background: radial-gradient(circle at center, #0f2d33 19%, #181920 200%);
	padding-bottom: 80px;

	@include vp-1023 {
		padding-bottom: 60px;
	}
}
</style>
