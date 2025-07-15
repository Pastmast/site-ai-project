<script setup></script>

<template>
	<section id="section-ai-and-human" class="ai-and-human-block">
		<div class="container">
			<div class="ai-and-human-block__inner">
				<img
					class="ai-and-human-block__img"
					src="/images/home-gpt-and-human-img.webp"
					alt="AI and Human"
					width="1322px"
					height="380px"
				/>
				<div class="ai-and-human-block__text">
					<p class="ai-and-human-block__description">
						Теория автоматизации утверждает, что нейросети вскоре заменят людей во многих профессиях, особенно в
						рутинных и аналитических задачах, таких как бухгалтерия, логистика или даже частично медицина и
						юриспруденция. Это связано с их способностью обрабатывать большие данные, обучаться и выполнять задачи
						быстрее и точнее человека.
					</p>
				</div>
			</div>
			<div class="ai-and-human-block__wrapper">
				<div class="ai-and-human-block__profi">
					<img
						class="ai-and-human-block__profi-icon"
						src="/images/home-tools-icon.webp"
						alt="Tools"
						width="90px"
						height="90px"
					/>
					<p class="ai-and-human-block__profi-description">
						Необходимо осваивать новые навыки: фокусироваться на креативных, социальных и междисциплинарных профессиях,
						где человеческий фактор незаменим (например, психология, управление, искусство).
					</p>
				</div>

				<div class="ai-and-human-block__profi">
					<img
						class="ai-and-human-block__profi-icon"
						src="/images/home-brain-icon.webp"
						alt="Brain"
						width="90px"
						height="90px"
					/>
					<p class="ai-and-human-block__profi-description">
						Необходимо учиться работать с ИИ: изучать, как использовать нейросети как инструмент для повышения
						продуктивности. Стоит понимать для каких целей использовать ту или иную нейросеть.
					</p>
				</div>
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>
.container {
	@include vp-1023 {
		padding: 0;
	}
}

.ai-and-human-block {
	margin-bottom: clamp(40px, 8vw, 100px);

	@include vp-1023 {
		margin-bottom: 60px;
	}

	@include vp-767 {
		margin-bottom: 40px;
	}

	&__inner {
		position: relative;
		margin: 0 auto clamp(30px, 4vw, 60px);
		width: 100%;
		max-width: 1322px;
		padding: 0;
		min-height: clamp(180px, 25vw, 290px);
		display: flex;
		align-items: center;
		border-radius: 40px;
		box-shadow: 0px 15px 40px 14px rgba(5, 6, 10, 0.82);

		@include vp-1023 {
			max-width: 768px;
			margin: 0 auto 40px;
			min-height: 196px;
		}

		@include vp-767 {
			max-width: 375px;
			height: 192px;
			margin: 0 auto 30px;
			display: flex;
			flex-direction: column;
			box-shadow: 0px 5px 10px 4px rgba(5, 6, 10, 0.82);
		}
	}

	&__img {
		width: 100%;
		height: clamp(86px, 30vw, 380px);
		overflow: hidden;
		border-top-left-radius: 40px;
		border-top-right-radius: 40px;
		border-bottom-left-radius: 40px;
		border-bottom-right-radius: 40px;
		opacity: 70%;

		@include vp-1023 {
			max-width: 768px;
			height: 196px;
		}

		@include vp-767 {
			max-width: 375px;
			height: 86px;
			border-top-left-radius: 40px;
			border-top-right-radius: 40px;
			border-bottom-left-radius: 0px;
			border-bottom-right-radius: 0px;
		}
	}

	&__text {
		position: absolute;
		z-index: 10;
		padding: clamp(6px, 1vw, 15px) clamp(10px, 2vw, 20px) clamp(8px, 2vw, 15px);
		width: 100%;
		max-width: 100%;
		bottom: 0;
		border-radius: 20px;
		box-shadow: inset 0px 0px 2px -3px rgba(255, 255, 255, 0.2);
		backdrop-filter: blur(15px);
		background: rgba(13, 13, 13, 0.4);

		@include vp-1023 {
			max-width: 768px;
			left: 0;
			border-radius: 20px 20px 40px 40px;
			padding: 6px 19.61px 6px 17.55;
		}

		@include vp-767 {
			max-width: 375px;
			bottom: 0px;
			border-radius: 0px 0px 20px 20px;
			padding: 6px 10px 8px 17px;
		}
	}

	&__description {
		font-weight: 200;
		font-size: 25px;
		line-height: 32px;
		letter-spacing: 0.07em;
		color: #ffffff;
		opacity: 0.9;
		margin: 0;

		@include vp-1023 {
			font-size: 14px;
			line-height: 17px;
		}

		@include vp-767 {
			font-weight: 200;
			font-size: 12px;
			line-height: 12px;
		}
	}

	&__wrapper {
		display: flex;
		justify-content: center;
		margin: 0 auto;
		align-items: center;
		gap: clamp(15px, 3vw, 35px);
		flex-wrap: wrap;

		@include vp-1023 {
			padding: 0 20px;
			gap: 28px;
		}

		@include vp-767 {
			gap: 30px;
			flex-direction: column;
		}
	}

	&__profi {
		width: 100%;
		max-width: 633px;
		min-height: clamp(170px, 20vw, 260px);
		display: flex;
		padding: clamp(13px, 2vw, 20px) clamp(10px, 2vw, 20px) clamp(5px, 2vw, 20px) clamp(10px, 2vw, 20px);
		align-items: center;
		flex-direction: column;
		gap: clamp(11px, 2vw, 30px);
		border-radius: 40px;
		background: linear-gradient(
			45deg,
			rgba(255, 255, 255, 0.03),
			rgba(100, 149, 237, 0.1),
			rgba(184, 156, 232, 0.1),
			rgba(255, 255, 255, 0.03)
		);
		background-size: 120% 100%;
		backdrop-filter: blur(12px);
		-webkit-backdrop-filter: blur(12px);
		box-shadow: inset 0 0 10px rgba(188, 188, 188, 0.035), 0 4px 30px rgba(0, 0, 0, 0.1);

		@include vp-1023 {
			width: 350px;
			min-height: 170px;
			padding: 13px 19.99px 20.69px 20px;
			gap: 11px;
		}

		@include vp-767 {
			width: 335px;
			min-height: 180px;
			padding: 20px 16px 20px 16px;
			gap: 15px;
		}
	}

	&__profi-icon {
		width: clamp(50px, 7vw, 90px);
		height: clamp(50px, 7vw, 90px);
		opacity: 82%;

		@include vp-1023 {
			width: 55px;
			height: 55px;
		}

		@include vp-767 {
			width: 50px;
			height: 50px;
		}
	}

	&__profi-description {
		margin: 0;
		font-weight: 300;
		font-size: 18px;
		line-height: 24px;
		letter-spacing: 0.03em;
		color: #ffffff;
		opacity: 0.9;

		@include vp-1023 {
			font-size: 12px;
			line-height: 15px;
			letter-spacing: 0.07em;
		}

		@include vp-767 {
			font-weight: 300;
			font-size: 12px;
			line-height: 15px;
			letter-spacing: 0.07em;
		}
	}
}
</style>
