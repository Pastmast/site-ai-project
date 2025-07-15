<script setup>
const props = defineProps({
	href: {
		type: String,
		default: 'https://chatgpt.com/',
	},
});
</script>

<template>
	<a class="button-gpt" :href="props.href" aria-label="Ссылка на ChatGPT" target="_blank">Перейти к использованию</a>
</template>

<style lang="scss" scoped>
.button-gpt {
	margin: 0 auto;
	width: clamp(160px, 40vw, 500px);
	height: clamp(35px, 8vw, 70px);
	padding: clamp(10px, 2vw, 20px);
	border-radius: 40px;
	background: linear-gradient(
		45deg,
		rgba(255, 255, 255, 0.03),
		rgba(100, 149, 237, 0.1),
		rgba(93, 102, 205, 0.1),
		rgba(255, 255, 255, 0.03)
	);
	background-size: 120% 100%;
	backdrop-filter: blur(12px);
	-webkit-backdrop-filter: blur(12px);
	box-shadow: inset 0 0 10px rgba(188, 188, 188, 0.035), 0 4px 30px rgba(0, 0, 0, 0.1);
	display: block;
	display: flex;
	align-items: center;
	justify-content: center;
	font-weight: 600;
	font-size: 23px;
	letter-spacing: 0.07em;
	color: #ffffff;
	opacity: 0.9;
	cursor: pointer;
	transition: $transition-300;

	@include vp-1023 {
		width: 372px;
		height: 48px;
		padding: 13px;
		font-weight: 600;
		font-size: 18px;
		line-height: 22px;
	}

	@include vp-767 {
		width: 202px;
		height: 35px;
		padding: 10px;
		font-weight: 600;
		font-size: 12px;
		line-height: 15px;
		opacity: 0.9;
	}
}

.button-gpt:hover {
	opacity: 1;
}
</style>
