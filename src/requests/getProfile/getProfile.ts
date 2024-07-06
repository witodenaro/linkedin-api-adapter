import linkedinApi from '../api/api'
import { UserProfile } from './types'

class ConnectionsCountFetcher {
  private getUrl(profileUrn: string) {
    return `/voyager/api/identity/dash/profiles/${profileUrn}`;
  }

  private getParams() {
    return {
      decorationId:
        'com.linkedin.voyager.dash.deco.identity.profile.FullProfile-76',
    }
  }

  async getProfile(profileUrn: string): Promise<UserProfile> {
    const url = this.getUrl(profileUrn)
    const params = this.getParams()

    const response = await linkedinApi.get<UserProfile>(url, {
      params,
    })

    return response.data;
  }
}

const fetcher = new ConnectionsCountFetcher()

export const getProfile = fetcher.getProfile.bind(fetcher)
