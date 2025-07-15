<script setup>
import TheHeaderGptPage from '../components/global/TheHeaderGptPage.vue';
import GptPageHeroSection from '../components/sections/cursor/GptPageHeroSection.vue';
import GptMainSkillsSections from '../components/sections/cursor/GptMainSkillsSections.vue';
import GptAdvantagesAndDisadvantagesSection from '../components/sections/cursor/GptAdvantagesAndDisadvantagesSection.vue';
import BaseButton from '../components/base/BaseButton.vue';
</script>

<template>
	<div class="gpt-cursor-bg">
		<TheHeaderGptPage />
		<GptPageHeroSection />
		<GptMainSkillsSections />
		<GptAdvantagesAndDisadvantagesSection />
		<BaseButton href="https://www.cursor.com/" />
	</div>
</template>

<style lang="scss" scoped>
.gpt-cursor-bg {
	min-height: 100vh;
	background: radial-gradient(circle at center, #151922 19%, #181920 200%);
	padding-bottom: 80px;

	@include vp-1023 {
		padding-bottom: 60px;
	}
}
</style>
