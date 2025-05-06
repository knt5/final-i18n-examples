import { localeList } from './constants';
import { Locale } from './types';

export function isSupportedLocale(locale?: string | null): locale is Locale {
	return (
		!!locale && localeList.some(supportedLocale => locale === supportedLocale)
	);
}
