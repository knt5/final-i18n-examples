import { init, isInitialized } from 'final-i18n';
import { getLocales } from 'expo-localization';
import { fallbackLocale } from './constants';
import { isSupportedLocale } from './utils';

if (!isInitialized()) {
	const localeList = getLocales();
	const languageCode = localeList[0]?.languageCode;

	init({
		locale: isSupportedLocale(languageCode) ? languageCode : fallbackLocale,
	});
}
