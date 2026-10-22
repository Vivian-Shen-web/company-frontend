import { defineStore } from 'pinia'
import type { LocaleType } from '@/locales/config'
import store from '../'
import { LOCALE_KEY } from '@/enums/cacheEnum'
import StorageFactory from '@/utils/storage'

const storage = StorageFactory.getStorage()

interface LocaleState {
  locale: LocaleType
}

export const useLocaleStore = defineStore({
  id: 'locale',
  state: (): LocaleState => ({
    locale: storage.getItem(LOCALE_KEY) || 'zh_CN'
  }),
  getters: {
    getLocale(): LocaleType {
      return this.locale ?? 'zh_CN'
    }
  },
  actions: {
    setLocale(locale: LocaleType) {
      this.locale = locale
      storage.setItem(LOCALE_KEY, locale)
    }
  }
})

// Need to be used outside the setup
export function useLocaleStoreWithOut() {
  return useLocaleStore(store)
}
