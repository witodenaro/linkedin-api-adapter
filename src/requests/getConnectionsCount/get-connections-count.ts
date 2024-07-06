import linkedinApi from '../api/api'
import { ProfileElement, Response } from './types'

class ConnectionsCountFetcher {
  private url: string = '/voyager/api/graphql'

  private getParams(vanityName: string) {
    return {
      variables: `(vanityName:${vanityName})`,
      queryId: 'voyagerIdentityDashProfiles.f1168e12e8d86e67d23aa6e482011a4f',
    }
  }

  private parseResponse(response: Response): ProfileElement {
    return response.data.identityDashProfilesByMemberIdentity.elements[0]
  }

  async getConnectionsCount(vanityName: string) {
    const params = this.getParams(vanityName)

    const response = await linkedinApi.get<Response>(this.url, {
      params,
    })

    return this.parseResponse(response.data)
  }
}

const fetcher = new ConnectionsCountFetcher()

export const getConnectionsCount = fetcher.getConnectionsCount.bind(fetcher)
