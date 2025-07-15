<script setup></script>

<template>
	<section id="section-generate" class="generate-block">
		<div class="container">
			<div class="generate-block__inner">
				<img
					class="generate-block__icon"
					src="/images/home-generate-img.webp"
					alt="Generate"
					width="520px"
					height="440px"
				/>
				<p class="generate-block__description">
					Текст и изображения на всех страницах этого сайта сгенерированы одной из представленных выше нейросетью.
				</p>
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

.generate-block {
	margin-bottom: clamp(30px, 6vw, 80px);

	@include vp-1023 {
		margin-bottom: 60px;
	}

	@include vp-767 {
		margin-bottom: 30px;
	}

	&__inner {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		max-width: 1322px;
		height: clamp(230px, 30vw, 410px);
		padding: clamp(8px, 2vw, 30px);
		gap: clamp(0px, 2vw, 38px);
		margin: 0 auto;
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
			max-width: 768px;
			height: 230px;
			padding: 18px 28px 19px;
			gap: 38px;
		}

		@include vp-767 {
			max-width: 335px;
			height: 274px;
			padding: 8px 7px 19px 14px;
			gap: 0;
			flex-direction: column;
		}
	}

	&__icon {
		width: clamp(209px, 30vw, 520px);
		height: clamp(193px, 25vw, 440px);
		opacity: 60%;
		animation: pulse 6s ease-in-out infinite;

		@include vp-1023 {
			width: 237px;
			height: 193px;
		}

		@include vp-767 {
			width: 209px;
			height: 195px;
		}
	}

	&__description {
		margin: 0;
		font-weight: 600;
		font-size: 28px;
		line-height: 44px;
		letter-spacing: 0.05em;
		color: #ffffff;
		opacity: 0.85;

		@include vp-1023 {
			font-size: 20px;
			line-height: 25px;
			letter-spacing: 0.22em;
		}

		@include vp-767 {
			font-weight: 500;
			font-size: 15px;
			line-height: 17px;
			letter-spacing: 0.02em;
			opacity: 0.8;
		}
	}
}

@keyframes pulse {
	0% {
		transform: scale(1);
	}
	50% {
		transform: scale(1.07);
	}
	100% {
		transform: scale(1);
	}
}
</style>
