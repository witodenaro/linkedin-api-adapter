import { CountryCodes } from '../../types/CountryCodes'

export type Response = {
  data: {
    identityDashProfilesByMemberIdentity: IdentityDashProfilesByMemberIdentity
  }
}

export interface IdentityDashProfilesByMemberIdentity {
  elements: ProfileElement[]
}

export interface ProfileElement {
  followingState: {
    entityUrn: string
    followerCount: 45364
    following: false
  }
  connections: {
    paging: {
      count: number
      start: number
      total: number
    }
  }
  location: {
    preferredGeoPlace: null
    countryCode: CountryCodes
    postalCode: string | null
  }
}
