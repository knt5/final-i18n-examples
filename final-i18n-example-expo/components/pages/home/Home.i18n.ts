import type { Translations } from '@/i18n/types';

export const translations: Translations = {
	en: {
		title: 'Welcome!',
		japanese: 'Japanese',
		subtitle: {
			step1: 'Step 1: {{ markA }} Try it {{ markB }}',
		},
	},
	ja: {
		title: 'ようこそ！',
		japanese: '日本語',
		subtitle: {
			step1: 'ステップ1: {{ markB }} やってみよう {{ markA }}',
		},
	},
} as const;
