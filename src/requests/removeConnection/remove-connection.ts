import linkedinApi from '../api/api'
import { ProfileUrn } from '../getProfile'

export interface Options {
  inviteMessage?: string
}

class ConnectionRemover {
  private url: string =
    '/voyager/api/voyagerRelationshipsDashMemberRelationships/dash/connections'

  _getParams() {
    return {
      action: 'removeFromMyConnections',
    }
  }

  _getBody(profileUrn: ProfileUrn) {
    return {
      connectedMember: profileUrn,
    }
  }

  async removeConnection(profileUrn: ProfileUrn) {
    const params = this._getParams()
    const body = this._getBody(profileUrn)

    await linkedinApi.post(this.url, body, {
      params,
    })
  }
}

const connectionRemover = new ConnectionRemover()

export const removeConnection = connectionRemover.removeConnection.bind(connectionRemover)
