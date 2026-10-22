import { createI18n } from 'vue-i18n'
import { localeMap } from './config'
import type { App } from 'vue'
import { useLocaleStoreWithOut } from '@/stores/modules/locale'
import { setHtmlPageLang, setLoadLocalePool } from './helper'

// const langs = import.meta.glob(`./lang/*.ts`)

async function createI18nOptions() {
  const localeStore = useLocaleStoreWithOut()
  const locale = localeStore.getLocale
  // const importFn = langs[`./lang/${locale}.ts`]
  // const defaultLocal = (await importFn()) as any
  const defaultLocal = await import(`./lang/${locale}.ts`)

  const message = defaultLocal?.default?.message ?? {}

  setHtmlPageLang(locale)
  setLoadLocalePool((loadLocalePool) => {
    loadLocalePool.push(locale)
  })

  return {
    locale,
    legacy: false,
    fallbackLocale: localeMap.zh_CN, // set fallback locale
    messages: {
      [locale]: message as { [key: string]: string }
    },
    globalInjection: true,
    silentTranslationWarn: true, // true - warning off
    missingWarn: false,
    silentFallbackWarn: true
  }
}

const options = await createI18nOptions()
export const i18n = createI18n(options)
