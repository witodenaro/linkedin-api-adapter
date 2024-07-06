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

export enum GeolocationTypes {
  MARKET_AREA = 'MARKET_AREA',
  COUNTRY_REGION = 'COUNTRY_REGION',
  ADMIN_DIVISION_1 = 'ADMIN_DIVISION_1',
  CITY = 'CITY',
}
