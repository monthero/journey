import { createContextProvider } from '@solid-primitives/context';
import * as i18n from '@solid-primitives/i18n';
import { createResource, createSignal } from 'solid-js';
import { en } from './en';
import { pt } from './pt';

export type Locale = 'en' | 'pt';
export const defaultLocale: Locale = 'en';

export type LocaleOption = {
  label: string;
  value: Locale;
  title?: string;
  disabled?: boolean;
};
export const localeOptions: LocaleOption[] = [
  { title: 'English', value: 'en', label: 'EN' },
  { title: 'Português', value: 'pt', label: 'PT' },
];

export type RawLocaleDictionary = typeof en;

export type LocaleDictionary = i18n.Flatten<RawLocaleDictionary>;
const locales: Record<Locale, RawLocaleDictionary> = { en, pt };

async function fetchLocaleDictionary(locale: Locale): Promise<LocaleDictionary> {
  const localeDict: RawLocaleDictionary = locales[locale];
  return i18n.flatten(localeDict);
}

export const [LocaleProvider, useLocaleHook] = createContextProvider(
  (props: { initialLocale: Locale }) => {
    const [locale, setLocale] = createSignal<Locale>(props.initialLocale);
    const [localeDict] = createResource(locale, fetchLocaleDictionary);
    localeDict();
    const t = i18n.translator(localeDict, i18n.resolveTemplate);
    return { locale, setLocale, t };
  }
);

export const useLocale = () => {
  // biome-ignore lint/style/noNonNullAssertion: <explanation>
  const { locale, setLocale, t } = useLocaleHook()!;
  return { locale, setLocale, t };
};
