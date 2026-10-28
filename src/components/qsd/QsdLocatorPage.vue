<script setup lang="ts">
import { EnvironmentOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons-vue'
import { computed, ref, watch } from 'vue'
import { GoogleMap, Marker } from 'vue3-google-map'

import QsdBreadcrumb from '@/components/qsd/QsdBreadcrumb.vue'
import {
  partnerMapsUrl,
  searchNetworkPartners,
  type NetworkPartner,
  type NetworkPartnerType
} from '@/services/qsd/networkPartners'
import { asset } from '@/services/qsd/qsdData'
import { useQsdStore } from '@/stores/modules/qsd'

defineOptions({
  name: 'QsdLocatorPage'
})

const props = defineProps<{
  current: string
  heroImage: string
  partnerType: NetworkPartnerType
}>()

const qsdStore = useQsdStore()

const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY
const mapCenter = { lat: 28.6139, lng: 77.209 }
const mapRef = ref<any>()
const autocompleteRef = ref<HTMLDivElement>()
const partners = ref<NetworkPartner[]>([])
const activeId = ref('')
const loading = ref(false)

const partnerLabel = computed(() =>
  props.partnerType === 'dealer' ? 'dealers' : 'service centres'
)

const loadPartners = async (lat: number, lng: number) => {
  loading.value = true
  try {
    partners.value = await searchNetworkPartners({ type: props.partnerType, lat, lng })
    activeId.value = ''
    const map = mapRef.value?.map as google.maps.Map | undefined
    map?.panTo({ lat, lng })
    map?.setZoom(11)
  } finally {
    loading.value = false
  }
}

const focusPartner = (partner: NetworkPartner) => {
  activeId.value = partner.id
  const map = mapRef.value?.map as google.maps.Map | undefined
  map?.panTo({ lat: partner.lat, lng: partner.lng })
  map?.setZoom(14)
}

const handlePlaceSelect = async (event: Event) => {
  const placePrediction = (
    event as unknown as { placePrediction?: google.maps.places.PlacePrediction }
  ).placePrediction
  if (!placePrediction) return

  const place = placePrediction.toPlace()
  await place.fetchFields({ fields: ['displayName', 'formattedAddress', 'location'] })
  const location = place.location
  if (!location) return

  await loadPartners(location.lat(), location.lng())
}

const mountPlaceAutocomplete = () => {
  if (!autocompleteRef.value || autocompleteRef.value.childElementCount > 0) return

  const autocomplete = new google.maps.places.PlaceAutocompleteElement({
    includedRegionCodes: ['in']
  })
  autocomplete.style.width = '100%'
  autocomplete.addEventListener('gmp-select', handlePlaceSelect)
  autocompleteRef.value.appendChild(autocomplete)
}

watch(
  () => mapRef.value?.ready,
  (ready) => {
    if (ready) mountPlaceAutocomplete()
  }
)
</script>

<template>
  <section class="qsd-locator">
    <QsdBreadcrumb :current="current" />
    <img class="qsd-locator__hero" :src="asset(heroImage)" :alt="current" />
    <div class="qsd-locator__search">
      <div ref="autocompleteRef" class="qsd-locator__autocomplete"></div>
    </div>
    <div class="mx-auto mt-10 w-full max-w-[1200px] px-4">
      <div class="grid gap-6 lg:grid-cols-[minmax(0,1fr)_340px]">
        <div
          class="h-[clamp(320px,40vw,540px)] overflow-hidden rounded-xl border border-[#e5e7eb] bg-[#f3f4f6]"
        >
          <GoogleMap
            ref="mapRef"
            :api-key="apiKey"
            :libraries="['places', 'marker']"
            :center="mapCenter"
            :zoom="10"
            :map-type-control="false"
            :street-view-control="false"
            :fullscreen-control="false"
            style="width: 100%; height: 100%"
          >
            <Marker
              v-for="partner in partners"
              :key="partner.id"
              :options="{
                position: { lat: partner.lat, lng: partner.lng },
                title: partner.name
              }"
              @click="focusPartner(partner)"
            />
          </GoogleMap>
        </div>
        <aside
          class="h-[clamp(320px,40vw,540px)] overflow-y-auto rounded-xl border border-[#e5e7eb] bg-white"
        >
          <p v-if="loading" class="px-5 py-6 text-[14px] text-[#6b7280]">Searching...</p>
          <p v-else-if="partners.length === 0" class="px-5 py-6 text-[14px] text-[#6b7280]">
            Search a city to see nearby {{ partnerLabel }}.
          </p>
          <article
            v-for="partner in partners"
            v-show="!loading"
            :key="partner.id"
            class="cursor-pointer border-b border-[#ececec] px-5 py-5 last:border-b-0"
            :class="activeId === partner.id ? 'bg-[#f5f8fb]' : 'hover:bg-[#fafafa]'"
            @click="focusPartner(partner)"
          >
            <h3 class="text-[15px] font-semibold leading-snug text-[#0f172a]">
              {{ partner.name }}
            </h3>
            <p class="mt-2 text-[13px] leading-relaxed text-[#6b7280]">{{ partner.address }}</p>
            <div
              class="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-[13px] text-[#6b7280]"
            >
              <span class="inline-flex items-center gap-1.5">
                <PhoneOutlined class="text-[#e07b39]" />{{ partner.phone }}
              </span>
              <span class="inline-flex items-center gap-1.5">
                <MailOutlined class="text-[#e07b39]" />{{ partner.email }}
              </span>
            </div>
            <a
              class="mt-3 inline-flex items-center gap-2 rounded-md border border-[#d1d5db] px-4 py-2 text-[12px] font-medium text-[#374151] hover:bg-[#f9fafb]"
              :href="partnerMapsUrl(partner)"
              target="_blank"
              rel="noopener"
              @click.stop
            >
              <EnvironmentOutlined /> View in Maps
            </a>
          </article>
        </aside>
      </div>
    </div>
    <section class="qsd-locator__cta">
      <div class="page-shell qsd-locator__cta-inner">
        <h2>Ready to electrify your fleet?</h2>
        <div class="qsd-locator__cta-actions">
          <button class="qsd-locator__quote" type="button" @click="qsdStore.openInquiry">
            Request a Quote
          </button>
          <RouterLink class="qsd-locator__dealer" to="/dealer">Find a Dealer</RouterLink>
        </div>
      </div>
    </section>
  </section>
</template>
