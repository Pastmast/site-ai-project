<script setup>
import TheHeaderGptPage from '../components/global/TheHeaderGptPage.vue';
import GptPageHeroSection from '../components/sections/qwen/GptPageHeroSection.vue';
import GptMainSkillsSections from '../components/sections/qwen/GptMainSkillsSections.vue';
import GptAdvantagesAndDisadvantagesSection from '../components/sections/qwen/GptAdvantagesAndDisadvantagesSection.vue';
import BaseButton from '../components/base/BaseButton.vue';
</script>

<template>
	<div class="gpt-qwen-bg">
		<TheHeaderGptPage />
		<GptPageHeroSection />
		<GptMainSkillsSections />
		<GptAdvantagesAndDisadvantagesSection />
		<BaseButton href="https://chat.qwen.ai/" />
	</div>
</template>

<style lang="scss" scoped>
.gpt-qwen-bg {
	min-height: 100vh;
	background: radial-gradient(circle at center, #17204d 19%, #181920 200%);
	padding-bottom: 80px;

	@include vp-1023 {
		padding-bottom: 60px;
	}
}
</style>
