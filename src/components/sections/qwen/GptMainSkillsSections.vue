<script setup></script>

<template>
	<section id="section-gpt-main-skills" class="gpt-main-skills-block">
		<div class="container">
			<div class="gpt-main-skills-block__skills">
				<div class="gpt-main-skills-block__skills-inner">
					<img
						class="gpt-main-skills-block__skills-icon"
						src="/images/GPT-skills-icon.webp"
						alt="Навыки Qwen"
						width="260px"
						height="260px"
					/>
					<h2 class="gpt-main-skills-block__skills-title">Основные возможности</h2>
				</div>
				<ul class="gpt-main-skills-block__skills-description">
					<li class="gpt-main-skills-block__skills-text">
						Обработка текста, изображений, аудио и видео (Qwen-VL, Qwen-Audio, Qwen2.5-Omni).
					</li>
					<li class="gpt-main-skills-block__skills-text">
						Поддержка 119 языков, включая английский, китайский, русский, арабский и другие.
					</li>
					<li class="gpt-main-skills-block__skills-text">
						Контекст до 128,000 токенов, подходит для анализа длинных документов и сложных диалогов.
					</li>
					<li class="gpt-main-skills-block__skills-text">
						Использует Mixture-of-Experts для активации части параметров, повышая эффективность.
					</li>
					<li class="gpt-main-skills-block__skills-text">
						Применение: чат-боты, генерация контента, анализ данных, автоматизация в e-commerce, финансах,
						здравоохранении.
					</li>
				</ul>
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>
.container {
	@include vp-1023 {
		padding: 0 20px;
	}
}

.gpt-main-skills-block {
	margin-bottom: clamp(40px, 6vw, 50px);

	@include vp-1023 {
		margin-bottom: 60px;
	}

	@include vp-767 {
		margin-bottom: 40px;
	}

	&__skills {
		width: 100%;
		max-width: 1300px;
		margin: 0 auto;
		min-height: clamp(200px, 30vw, 460px);
		display: flex;
		padding: clamp(5px, 2vw, 40px) clamp(7px, 2vw, 50px) clamp(10px, 2vw, 40px) 0px;
		align-items: center;
		justify-content: center;
		gap: clamp(10px, 3vw, 30px);
		border-radius: 40px;
		background: linear-gradient(
			45deg,
			rgba(255, 255, 255, 0.03),
			rgba(100, 109, 237, 0.1),
			rgba(93, 102, 205, 0.1),
			rgba(255, 255, 255, 0.03)
		);
		background-size: 120% 100%;
		backdrop-filter: blur(12px);
		-webkit-backdrop-filter: blur(12px);
		box-shadow: inset 0 0 10px rgba(188, 188, 188, 0.035), 0 4px 30px rgba(0, 0, 0, 0.1);

		@include vp-1023 {
			width: 728px;
			min-height: 330px;
			gap: 0px;
			padding: 20px 20px 20px 0px;
		}

		@include vp-767 {
			width: 335px;
			min-height: 345px;
			padding: 5px 7px 10px 11px;
			flex-direction: column;
			gap: 15px;
		}
	}

	&__skills-inner {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding-right: 0;
		border-right: 2px solid rgb(255, 255, 255);
		gap: 20px;

		@include vp-767 {
			border: none;
			gap: 5px;
		}
	}

	&__skills-icon {
		width: clamp(70px, 20vw, 350px);
		height: clamp(71px, 20vw, 320px);
		opacity: 75%;

		@include vp-1023 {
			width: 180px;
			height: 180px;
		}

		@include vp-767 {
			width: 70px;
			height: 71.03px;
		}
	}

	&__skills-title {
		font-weight: 300;
		font-size: clamp(16px, 4vw, 44px);
		line-height: 48px;
		text-align: center;
		letter-spacing: 0.07em;
		color: #ffffff;
		opacity: 85%;

		@include vp-1023 {
			font-size: 24px;
			line-height: 106.29%;
			width: 250px;
		}

		@include vp-767 {
			font-weight: 400;
			font-size: 16px;
			width: 138px;
		}
	}

	&__skills-description {
		width: 800px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin: 0;
		font-weight: 400;
		font-size: 22px;
		line-height: 28px;
		letter-spacing: 0.03em;
		color: #ffffff;
		opacity: 0.8;
		gap: 30px;

		@include vp-1023 {
			width: 426px;
			font-size: 15px;
			line-height: 18px;
			font-weight: 300;
			letter-spacing: 0.07em;
			gap: 10px;
		}

		@include vp-767 {
			width: 317px;
			font-weight: 300;
			font-size: 11px;
			line-height: 13px;
			gap: 8px;
			padding: 0 0 0 10px;
		}
	}

	&__skills-title {
		margin: 0;
	}
}
</style>
