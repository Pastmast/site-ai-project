<script setup>
function scrollToSection(sectionId) {
	const element = document.getElementById(sectionId);
	if (element) {
		element.scrollIntoView({ behavior: 'smooth', block: 'start' });
	}
}
</script>

<template>
	<header class="header-home">
		<div class="container">
			<nav class="main-nav">
				<ul class="main-nav__list">
					<li class="main-nav__item">
						<router-link class="main-nav__link" :to="{ path: '/', hash: '#section-gpt' }">На главную</router-link>
					</li>
					<li class="main-nav__item">
						<button class="main-nav__link" @click="scrollToSection('section-hero')">О нейросети</button>
					</li>
					<li class="main-nav__item">
						<button class="main-nav__link" @click="scrollToSection('section-gpt-main-skills')">Возможности</button>
					</li>
					<li class="main-nav__item">
						<button class="main-nav__link" @click="scrollToSection('section-gpt-advantages-and-disadvantages')">
							Преимущества и недостатки
						</button>
					</li>
				</ul>
			</nav>
		</div>
	</header>
</template>

<style lang="scss" scoped>
.header-home {
	@include vp-767 {
		margin-bottom: 10px;
	}

	.container {
		padding: 0 143px;

		@include vp-1023 {
			padding: 0 20px;
		}

		@include vp-767 {
			padding: 0 4px;
		}
	}

	.main-nav {
		padding: 5px 0;

		&__list {
			list-style: none;
			display: flex;
			align-items: center;
			padding: 0;
			justify-content: space-between;

			@include vp-767 {
				gap: 4px;
			}
		}

		&__link {
			background-color: transparent;
			font-weight: 400;
			font-size: 20px;
			line-height: 36px;
			border: none;
			cursor: pointer;
			color: #ffffff;
			transition: $transition-300;
			flex-wrap: wrap;

			@include vp-1023 {
				font-size: 14px;
			}

			@include vp-767 {
				font-size: 10px;
				line-height: 11px;
				text-align: center;
				border: 1px solid rgba(233, 233, 233, 0.81);
				border-radius: 40px;
				width: 88px;
				height: 40px;
				align-items: center;
				display: flex;
				justify-content: center;
			}
		}

		&__link:hover {
			color: #e2e1e1;
		}
	}
}
</style>
