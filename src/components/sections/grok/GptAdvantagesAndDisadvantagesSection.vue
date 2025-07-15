<script setup></script>

<template>
	<section id="section-gpt-advantages-and-disadvantages" class="gpt-advantages-and-disadvantages-block">
		<div class="container">
			<div class="gpt-advantages-and-disadvantages-block__wrapper">
				<div class="gpt-advantages-and-disadvantages-block__advantages">
					<img
						class="gpt-advantages-and-disadvantages-block__advantages-icon"
						src="/images/GPT-advantages-icon.webp"
						alt="Преимущества Grok"
						width="90px"
						height="90px"
					/>
					<h2 class="gpt-advantages-and-disadvantages-block__advantages-title">Преимущества</h2>
					<ul class="gpt-advantages-and-disadvantages-block__advantages-description">
						<li class="gpt-advantages-and-disadvantages-block__advantages-text">
							Превосходит GPT-4o и Claude 3.5 в математических и научных задачах (93.3% на AIME 2025).
						</li>
						<li class="gpt-advantages-and-disadvantages-block__advantages-text">
							Реал-тайм доступ к данным X, что дает преимущество в актуальности.
						</li>
						<li class="gpt-advantages-and-disadvantages-block__advantages-text">
							Юмор и сарказм в ответах, вдохновленные «Автостопом по галактике».
						</li>
						<li class="gpt-advantages-and-disadvantages-block__advantages-text">
							Прозрачность: пользователи видят процесс мышления модели.
						</li>
					</ul>
				</div>
				<div class="gpt-advantages-and-disadvantages-block__advantages">
					<img
						class="gpt-advantages-and-disadvantages-block__advantages-icon"
						src="/images/GPT-disadvantages-icon.webp"
						alt="Недостатки Grok"
						width="90px"
						height="90px"
					/>
					<h2 class="gpt-advantages-and-disadvantages-block__advantages-title">Недостатки</h2>
					<ul class="gpt-advantages-and-disadvantages-block__advantages-description">
						<li class="gpt-advantages-and-disadvantages-block__advantages-text">
							Высокое энергопотребление (Colossus с 200,000 GPU).
						</li>
						<li class="gpt-advantages-and-disadvantages-block__advantages-text">
							Ограниченный доступ: требует подписки X Premium+ ($40/мес) или SuperGrok ($30/мес).
						</li>
						<li class="gpt-advantages-and-disadvantages-block__advantages-text">
							Проблемы с модерацией контента, особенно в «unhinged» режиме.
						</li>
						<li class="gpt-advantages-and-disadvantages-block__advantages-text">
							Не полностью открытый исходный код (Grok-1 открыт, Grok-3 — проприетарный).
						</li>
					</ul>
				</div>
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>
.container {
	@include vp-767 {
		padding: 0 20px;
	}
}

.gpt-advantages-and-disadvantages-block {
	margin-bottom: clamp(40px, 6vw, 80px);

	@include vp-1023 {
		margin-bottom: 60px;
	}

	@include vp-767 {
		margin-bottom: 40px;
	}

	&__wrapper {
		display: flex;
		justify-content: center;
		margin: 0 auto;
		align-items: center;
		gap: clamp(10px, 3vw, 35px);
		flex-wrap: wrap;

		@include vp-1023 {
			gap: 22px;
		}

		@include vp-767 {
			gap: 30px;
			flex-direction: column;
		}
	}

	&__advantages {
		width: 100%;
		max-width: 633px;
		min-height: clamp(290px, 30vw, 595px);
		display: flex;
		padding: clamp(13px, 2vw, 30px) clamp(10px, 2vw, 25px);
		align-items: center;
		flex-direction: column;
		gap: clamp(6px, 2vw, 30px);
		border-radius: 40px;
		background: linear-gradient(
			45deg,
			rgba(255, 255, 255, 0.03),
			rgba(100, 237, 219, 0.101),
			rgba(93, 179, 205, 0.1),
			rgba(255, 255, 255, 0.03)
		);
		background-size: 120% 100%;
		backdrop-filter: blur(12px);
		-webkit-backdrop-filter: blur(12px);
		box-shadow: inset 0 0 10px rgba(188, 188, 188, 0.035), 0 4px 30px rgba(0, 0, 0, 0.1);

		@include vp-1023 {
			width: 343px;
			min-height: 380px;
			padding: 20.54px 10px 18px 10px;
			gap: 13px;
		}

		@include vp-767 {
			width: 335px;
			min-height: 290px;
			padding: 13px 15px 8px;
			gap: 6px;
		}
	}

	&__advantages-icon {
		width: clamp(60px, 10vw, 150px);
		height: clamp(60px, 10vw, 150px);
		opacity: 82%;

		@include vp-1023 {
			width: 100px;
			height: 95px;
		}

		@include vp-767 {
			width: 60px;
			height: 60px;
		}
	}

	&__advantages-title {
		margin: 0 0 10px;
		font-weight: 200;
		font-size: clamp(16px, 4vw, 40px);
		line-height: clamp(19px, 4vw, 48px);
		text-align: center;
		letter-spacing: 0.07em;
		color: #ffffff;
		opacity: 85%;

		@include vp-1023 {
			font-weight: 400;
			font-size: 24px;
			line-height: 29px;
		}

		@include vp-767 {
			font-weight: 400;
			font-size: 16px;
			line-height: 19px;
		}
	}

	&__advantages-description {
		margin: 0;
		font-weight: 200;
		font-size: 20px;
		line-height: 26px;
		letter-spacing: 0.03em;
		color: #ffffff;
		opacity: 0.9;
		display: flex;
		flex-direction: column;
		gap: 20px;

		@include vp-1023 {
			font-weight: 300;
			font-size: 12px;
			line-height: 15px;
			letter-spacing: 0.07em;
			gap: 10px;
		}

		@include vp-767 {
			gap: 13px;
			font-weight: 300;
			font-size: 11px;
			line-height: 13px;
			padding: 0 0 0 10px;
			width: 278px;
		}
	}
}
</style>
