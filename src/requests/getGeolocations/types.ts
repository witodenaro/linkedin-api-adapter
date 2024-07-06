export type GetGeolocationsResponse = {
  data: {
    searchDashReusableTypeaheadByType: {
      elements: GeolocationElement[]
    }
  }
}

export type GeolocationElement = {
  trackingUrn: string // 'urn:li:fsd_geo:100984163'
  title: {
    textDirection: 'USER_LOCALE'
    text: string
    accessibilityText: null
  }
  target: {
    geo: {
      entityUrn: string
    }
  }
}
