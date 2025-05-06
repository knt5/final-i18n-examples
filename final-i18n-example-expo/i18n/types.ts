import type { Translation } from 'final-i18n';
import { localeList } from './constants';

export type Locale = (typeof localeList)[number];

export type Translations = Record<Locale, Translation>;
