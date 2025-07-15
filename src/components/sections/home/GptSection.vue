<script setup></script>

<template>
	<section id="section-gpt" class="gpt-block">
		<div class="container">
			<div class="gpt-block__inner">
				<h2 class="gpt-block__title">Выберите любую нейросеть, чтобы узнать о ней больше</h2>
				<h2 class="gpt-block__title-mibile">
					Выберите любую нейросеть, чтобы узнать <br />о ней больше (листайте влево)
				</h2>
				<ul class="gpt-block__list">
					<li class="gpt-block__item">
						<div class="gpt-block__card">
							<router-link class="gpt-block__card-inner" :to="'/chatgpt'">
								<img
									class="gpt-block__card-img"
									src="/images/home-chatGPT-img.webp"
									alt="изображение нейросети"
									width="220px"
									height="550px"
								/>
								<img
									class="gpt-block__card-icon"
									src="/images/home-chatGPT-icon.webp"
									alt="иконка нейросети"
									width="100px"
									height="100px"
								/>
								<h3 class="gpt-block__card-title">ChatGPT</h3>
								<span class="gpt-block__card-description">Подробнее <br />о нейросети</span>
							</router-link>
						</div>
					</li>
					<li class="gpt-block__item">
						<div class="gpt-block__card">
							<router-link class="gpt-block__card-inner" :to="'/grok'">
								<img
									class="gpt-block__card-img"
									src="/images/home-grok-img.webp"
									alt="изображение нейросети"
									width="220px"
									height="550px"
								/>
								<img
									class="gpt-block__card-icon"
									src="/images/home-grok-icon.webp"
									alt="иконка нейросети"
									width="100px"
									height="100px"
								/>
								<h3 class="gpt-block__card-title gpt-block__card-title--grok">Grok</h3>
								<span class="gpt-block__card-description">Подробнее <br />о нейросети</span>
							</router-link>
						</div>
					</li>
					<li class="gpt-block__item">
						<div class="gpt-block__card">
							<router-link class="gpt-block__card-inner" :to="'/deepseek'">
								<img
									class="gpt-block__card-img"
									src="/images/home-DeepSeek-img.webp"
									alt="изображение нейросети"
									width="220px"
									height="550px"
								/>
								<img
									class="gpt-block__card-icon gpt-block__card-icon--deepseek"
									src="/images/home-DeepSeek-icon.webp"
									alt="иконка нейросети"
									width="100px"
									height="100px"
								/>
								<h3 class="gpt-block__card-title gpt-block__card-title--deepseek">DeepSeek</h3>
								<span class="gpt-block__card-description">Подробнее <br />о нейросети</span>
							</router-link>
						</div>
					</li>
					<li class="gpt-block__item">
						<div class="gpt-block__card">
							<router-link class="gpt-block__card-inner" :to="'/qwen'">
								<img
									class="gpt-block__card-img"
									src="/images/home-qwen-img.webp"
									alt="изображение нейросети"
									width="220px"
									height="550px"
								/>
								<img
									class="gpt-block__card-icon gpt-block__card-icon--qwen"
									src="/images/home-qwen-icon.webp"
									alt="иконка нейросети"
									width="100px"
									height="100px"
								/>
								<h3 class="gpt-block__card-title gpt-block__card-title--qwen">Qwen</h3>
								<span class="gpt-block__card-description">Подробнее <br />о нейросети</span>
							</router-link>
						</div>
					</li>
					<li class="gpt-block__item">
						<div class="gpt-block__card">
							<router-link class="gpt-block__card-inner" :to="'/gemini'">
								<img
									class="gpt-block__card-img"
									src="/images/home-gemini-img.webp"
									alt="изображение нейросети"
									width="220px"
									height="550px"
								/>
								<img
									class="gpt-block__card-icon gpt-block__card-icon--gemini"
									src="/images/home-gemini-icon.webp"
									alt="иконка нейросети"
									width="100px"
									height="100px"
								/>
								<h3 class="gpt-block__card-title gpt-block__card-title--gemini">Gemini</h3>
								<span class="gpt-block__card-description">Подробнее <br />о нейросети</span>
							</router-link>
						</div>
					</li>
				</ul>
				<div class="gpt-block__cursor">
					<router-link class="gpt-block__cursor-inner" :to="'/cursor'">
						<img
							class="gpt-block__cursor-img"
							src="/images/home-cursor-img.webp"
							alt="изображение нейросети"
							width="1322px"
							height="550px"
						/>
						<h3 class="gpt-block__cursor-title">Cursor AI</h3>
						<img
							class="gpt-block__cursor-icon"
							src="/images/home-cursor-icon.webp"
							alt="иконка нейросети"
							width="462px"
							height="462px"
						/>
						<p class="gpt-block__cursor-description">
							Универсальный редактор кода для программистов с искусственным интеллектом
						</p>
					</router-link>
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

.gpt-block {
	margin-bottom: clamp(40px, 8vw, 130px);

	@include vp-1023 {
		margin-bottom: 60px;
	}

	@include vp-767 {
		margin-bottom: 40px;
	}

	&__title {
		margin: 0 0 clamp(20px, 5vw, 80px) 0;
		display: flex;
		justify-content: center;
		align-items: center;
		font-weight: 600;
		font-size: clamp(15px, 3vw, 35px);
		color: #ffffff;

		@include vp-1023 {
			font-size: 22px;
			margin: 0 0 40px 0;
		}

		@include vp-767 {
			display: none;
		}
	}

	&__title-mibile {
		display: none;

		@include vp-767 {
			display: block;
			margin: 0 0 20px 0;
			font-weight: 600;
			font-size: 15px;
			line-height: 18px;
			text-align: center;
		}
	}

	&__list {
		list-style: none;
		display: flex;
		flex-wrap: wrap;
		gap: clamp(15px, 4vw, 51px);
		padding: 0;
		justify-content: center;
		margin-bottom: clamp(30px, 8vw, 100px);

		@include vp-1023 {
			gap: 32px;
			margin-bottom: 60px;
			padding: 0 20px;
		}

		@include vp-767 {
			margin-bottom: 30px;
			gap: 30px;
			overflow-x: auto;
			scroll-snap-type: x mandatory;
			-webkit-overflow-scrolling: touch;
			scrollbar-width: none;
			&::-webkit-scrollbar {
				display: none;
			}
			justify-content: flex-start;
			flex-wrap: nowrap;
		}
	}

	&__card {
		position: relative;
		width: clamp(80px, 12vw, 220px);
		padding: 0;
		min-height: clamp(281px, 30vw, 500px);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: start;
		border-radius: 40px;
		box-shadow: 0px -8px 40px -4px rgba(5, 6, 10, 0.82);
		cursor: pointer;

		@include vp-1023 {
			width: 120px;
			min-height: 390px;
		}

		@include vp-767 {
			width: 80px;
			min-height: 281px;
			box-shadow: 0px 0px 0px 0px rgba(5, 6, 10, 0.82);
		}
	}

	&__item:hover {
		.gpt-block__card-img {
			opacity: 80%;
		}
	}

	&__card-img {
		width: 100%;
		height: clamp(140px, 30vw, 550px);
		overflow: hidden;
		border-top-left-radius: 40px;
		border-top-right-radius: 40px;
		border-bottom-left-radius: 40px;
		border-bottom-right-radius: 40px;
		opacity: 60%;

		@include vp-1023 {
			height: 390px;
		}

		@include vp-767 {
			height: 281px;
		}
	}

	&__card-icon {
		position: absolute;
		width: clamp(36px, 7vw, 90px);
		height: clamp(36px, 7vw, 90px);
		opacity: 90%;
		top: clamp(4px, 1vw, 13px);
		left: clamp(2px, 0.7vw, 3px);

		@include vp-1023 {
			width: 55px;
			height: 55px;
			left: 6px;
			top: 12px;
		}

		@include vp-767 {
			width: 36px;
			height: 45px;
			left: 22px;
			top: 9.65px;
		}
	}

	&__card-icon--deepseek {
		width: clamp(30px, 7vw, 90px);
		height: clamp(20px, 5vw, 70px);
		top: clamp(8px, 2vw, 23px);
		left: clamp(5px, 1.2vw, 15px);

		@include vp-1023 {
			width: 51px;
			height: 38px;
			left: 12px;
			top: 20px;
		}

		@include vp-767 {
			width: 40px;
			height: 30px;
			left: 20px;
			top: 17px;
		}
	}

	&__card-icon--qwen {
		width: clamp(24px, 7vw, 90px);
		height: clamp(20px, 6vw, 83px);
		top: clamp(5px, 1.2vw, 15px);
		left: clamp(3px, 0.8vw, 10px);

		@include vp-1023 {
			width: 48px;
			height: 46px;
			top: 17px;
			left: 12px;
		}

		@include vp-767 {
			width: 36px;
			height: 38px;
			left: 22px;
			top: 13px;
		}
	}

	&__card-icon--gemini {
		top: clamp(5px, 1.2vw, 15px);
		left: clamp(4px, 1vw, 13px);

		@include vp-1023 {
			width: 47px;
			height: 46px;
			top: 17px;
			left: 12px;
		}

		@include vp-767 {
			width: 36px;
			height: 36px;
			left: 22px;
			top: 14px;
		}
	}

	&__card-title {
		position: absolute;
		top: clamp(30px, 8vw, 110px);
		left: clamp(3px, 1vw, 13px);
		margin: 0;
		font-weight: 700;
		font-size: clamp(13px, 2.2vw, 30px);
		color: #ffffff;
		opacity: 0.9;

		@include vp-1023 {
			font-size: 21px;
			top: 71px;
			left: 7px;
		}

		@include vp-767 {
			font-weight: 700;
			font-size: 15px;
			line-height: 18px;
			top: 55px;
			left: 6px;
		}
	}

	&__card-title--grok {
		@include vp-767 {
			left: 20px;
		}
	}

	&__card-title--deepseek {
		@include vp-767 {
			left: 3px;
		}
	}

	&__card-title--qwen {
		@include vp-767 {
			left: 18px;
		}
	}

	&__card-title--gemini {
		@include vp-767 {
			left: 15px;
		}
	}

	&__card-description {
		margin: 0;
		position: absolute;
		bottom: clamp(8px, 2vw, 26px);
		left: clamp(1px, 1vw, 13px);
		font-weight: 200;
		font-size: clamp(8px, 1.5vw, 23px);
		line-height: clamp(10px, 2vw, 29px);
		color: #ffffff;
		opacity: 0.85;

		@include vp-1023 {
			font-size: 15px;
			line-height: 18px;
			left: 12px;
			bottom: 17px;
		}

		@include vp-767 {
			left: 3px;
			bottom: 31px;
			font-weight: 400;
			font-size: 12px;
			line-height: 15px;
		}
	}

	&__cursor {
		position: relative;
		margin: 0 auto;
		width: 100%;
		max-width: 1322px;
		padding: 0;
		min-height: 550px;
		display: flex;
		align-items: center;
		border-radius: 40px;
		box-shadow: 0px 15px 40px 14px rgba(5, 6, 10, 0.82);
		cursor: pointer;

		@include vp-1023 {
			max-width: 768px;
			min-height: 260px;
		}

		@include vp-767 {
			max-width: 375px;
			min-height: 120px;
			box-shadow: 0px 5px 10px 3px rgba(5, 6, 10, 0.82);
		}
	}

	&__cursor:hover {
		.gpt-block__cursor-img {
			opacity: 90%;
		}
	}

	&__cursor-img {
		width: 1322px;
		height: 550px;
		overflow: hidden;
		border-top-left-radius: 40px;
		border-top-right-radius: 40px;
		border-bottom-left-radius: 40px;
		border-bottom-right-radius: 40px;
		opacity: 70%;
		transition: $transition-300;

		@include vp-1023 {
			min-width: 768px;
			height: 260px;
			object-fit: cover;
			object-position: center 60%;
		}

		@include vp-767 {
			min-width: 375px;
			height: 120px;
		}
	}

	&__cursor-title {
		position: absolute;
		top: clamp(90px, 20%, 145px);
		left: clamp(20px, 5%, 70px);
		margin: 0;
		font-weight: 600;
		font-size: clamp(28px, 4.8vw, 64px);
		line-height: clamp(32px, 5.7vw, 77px);
		letter-spacing: 0.07em;
		color: #ffffff;
		opacity: 0.86;

		@include vp-1023 {
			font-size: clamp(18px, 3.7vw, 38px);
			top: clamp(20px, 10vw, 55px);
			left: clamp(10px, 7vw, 53px);
			line-height: clamp(22px, 4vw, 46px);
		}

		@include vp-767 {
			font-weight: 600;
			font-size: 18px;
			line-height: 22px;
			top: 26px;
			left: 32px;
		}
	}

	&__cursor-icon {
		position: absolute;
		width: clamp(100px, 27vw, 362px);
		height: clamp(100px, 27vw, 362px);
		opacity: 85%;
		top: 0;
		left: clamp(120px, 32vw, 420px);

		@include vp-1023 {
			width: clamp(60px, 20vw, 154px);
			height: clamp(60px, 18vw, 141px);
			top: 4px;
			left: clamp(40px, 35vw, 267px);
		}

		@include vp-767 {
			width: 75.2px;
			height: 65.08px;
			left: 132px;
		}
	}

	&__cursor-description {
		margin: 0;
		width: clamp(180px, 35vw, 500px);
		position: absolute;
		top: clamp(60px, 24%, 130px);
		right: clamp(10px, 2vw, 25px);
		font-weight: 200;
		font-size: clamp(14px, 2vw, 28px);
		line-height: clamp(16px, 2.6vw, 35px);
		color: #ffffff;
		opacity: 0.8;

		@include vp-1023 {
			font-size: clamp(11px, 1.8vw, 19px);
			line-height: clamp(13px, 2vw, 23px);
			letter-spacing: 0.07em;
			width: clamp(100px, 40vw, 308px);
			top: clamp(20px, 8vw, 40px);
			right: clamp(5px, 4vw, 29px);
		}

		@include vp-767 {
			width: 156px;
			font-weight: 200;
			font-size: 11px;
			line-height: 11px;
			top: 10px;
			right: 12px;
		}
	}
}
</style>
