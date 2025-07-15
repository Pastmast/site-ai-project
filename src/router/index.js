import { createRouter, createWebHistory } from 'vue-router';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: () => import('../views/HomeView.vue'),
	},
	{
		path: '/chatgpt',
		name: 'GptPageChatGpt',
		component: () => import('../views/GptPageChatGpt.vue'),
	},
	{
		path: '/grok',
		name: 'GptPageGrok',
		component: () => import('../views/GptPageGrok.vue'),
	},
	{
		path: '/deepseek',
		name: 'GptPageDeepSeek',
		component: () => import('../views/GptPageDeepSeek.vue'),
	},
	{
		path: '/qwen',
		name: 'GptPageQwen',
		component: () => import('../views/GptPageQwen.vue'),
	},
	{
		path: '/gemini',
		name: 'GptPageGemini',
		component: () => import('../views/GptPageGemini.vue'),
	},
	{
		path: '/cursor',
		name: 'GptPageCursor',
		component: () => import('../views/GptPageCursor.vue'),
	},
];

const router = createRouter({
	history: createWebHistory('/site-ai-project/'),
	routes,
	scrollBehavior(to, from, savedPosition) {
		if (from.name === undefined) {
			return { top: 0 };
		}
		if (to.hash) {
			return {
				el: to.hash,
				behavior: 'smooth',
			};
		}
		return { top: 0 };
	},
});

export default router;
