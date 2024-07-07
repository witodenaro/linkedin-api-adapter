import { localStorage } from '../../localStorage'
import { ProfileUrn } from '../../utils/urn'
import { getProfile } from './getProfile'

class CurrentUserProfileGetter {
  async getCurrentUserProfile() {
    const userId = this.getUserId()

    const profileUrn = ProfileUrn.fromId(userId)

    return getProfile(profileUrn)
  }

  getUserId() {
    const userId = localStorage.getUserId()

    if (!userId) {
      throw new Error('User is not logged in')
    }

    return userId
  }
}

const getter = new CurrentUserProfileGetter()

export const getCurrentUserProfile = getter.getCurrentUserProfile.bind(getter)
