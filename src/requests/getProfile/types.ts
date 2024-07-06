import { CountryCodes, Languages } from 'src/types/CountryCodes'
import { GeoUrn } from '../getFirstConnections'

export interface UserProfile {
  objectUrn: string
  companyNameOnProfileTopCardShown: true
  publicIdentifier: string
  firstName: string
  profilePicture: {
    originalImageReference: {
      vectorImage: UserImage
    }
    a11yText: string
    $recipeType: string
  }
  lastName: string
  memorialized: false
  showPremiumSubscriberBadge: true
  industry: UserIndustry
  geoLocationBackfilled: false
  premium: false
  entityUrn: ProfileUrn
  headline: string
  summary: string
  supportedLocales: UserLocale[]
  industryUrn: string
  geoLocation: {
    geo: UserGeolocation
    geoUrn: GeoUrn
    postalCode: string
  }
  location: {
    countryCode: CountryCodes
    postalCode: string
  }
  primaryLocale: UserLocale
}

export interface UserLocale {
  country: CountryCodes
  language: Languages.EN
}

export interface UserGeolocation {
  countryUrn: string
  country: UserCountry
  defaultLocalizedNameWithoutCountryName: string
  entityUrn: string
  defaultLocalizedName: string
}

export interface UserCountry {
  entityUrn: string
  defaultLocalizedName: string
}

export interface UserIndustry {
  entityUrn: string
  name: string
}

export type ProfileUrn = string

export interface UserImage {
  rootUrl: string
  artifacts: UserImageArtifact[]
}

export interface UserImageArtifact {
  width: number
  fileIdentifyingUrlPathSegment: string
  expiresAt: number
  height: number
}
