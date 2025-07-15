<script setup></script>

<template>
	<section id="section-hero" class="hero-block">
		<div class="container">
			<div class="hero-block__inner">
				<img
					class="hero-block__img"
					src="/images/gpt-page-gemini-img.jpg"
					alt="Gemini Hero"
					width="1728px"
					height="760px"
				/>
				<div class="hero-block__info">
					<p class="hero-block__descriptions">
						Создатели: Google DeepMind, при участии Сергея Брина и команд Google Research. <br />Компания: Google,
						основана в 1998 году, лидер в области ИИ.
					</p>
				</div>
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>
.hero-block {
	position: relative;
	margin-bottom: clamp(60px, 8vw, 120px);

	@include vp-1023 {
		margin-bottom: 60px;
	}

	@include vp-767 {
		margin-bottom: 90px;
	}

	.container {
		padding: 0;
	}

	&__img {
		width: 100%;
		height: clamp(140px, 35vw, 630px);
		object-fit: cover;
		object-position: center 35%;
		border-radius: 40px;
		opacity: 75%;
		z-index: 1;
		box-shadow: 0px 15px 40px 14px rgba(5, 6, 10, 0.82);

		@include vp-1023 {
			width: 100%;
			height: 320px;
			object-position: center 45%;
		}

		@include vp-767 {
			width: 100%;
			height: 140px;
			border-radius: 40px 40px 0 0;
			object-position: center 20%;
		}
	}

	&__info {
		width: 100%;
		max-width: 1350px;
		padding: clamp(4px, 2vw, 15px) clamp(3px, 2vw, 30px);
		min-height: auto;
		z-index: 10;
		position: absolute;
		bottom: 0;
		border-bottom-left-radius: 40px;
		background: rgba(19, 19, 19, 0.6);
		background-blend-mode: color-burn;
		box-shadow: inset 0px 0px 2px -3px rgba(255, 255, 255, 0.2);
		backdrop-filter: blur(15px);

		@include vp-1023 {
			max-width: 768px;
			border-radius: 0 0 40px 40px;
			padding: 10px 15px;
		}

		@include vp-767 {
			max-width: 100%;
			min-height: 50px;
			border-radius: 0 0 20px 20px;
			bottom: -55px;
			box-shadow: inset 0px 0px 0px -0px rgba(255, 255, 255, 0.2);
			padding: 4px 3px 4px 10px;
			background: rgba(0, 0, 0, 0.412);
			opacity: 0.9;
			backdrop-filter: blur(15px);
		}
	}

	&__descriptions {
		font-weight: 600;
		font-size: 27px;
		line-height: 32px;
		letter-spacing: 0.07em;
		color: #f0f0f0;
		margin: 0;
		text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
		opacity: 95%;

		@include vp-1023 {
			font-size: 17px;
			line-height: 22px;
		}

		@include vp-767 {
			font-weight: 600;
			font-size: 12px;
			line-height: 12px;
			text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
		}
	}
}
</style>
