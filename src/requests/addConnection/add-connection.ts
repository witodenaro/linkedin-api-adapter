import linkedinApi from '../api/api'

export interface Options {
  inviteMessage?: string
}

class Connector {
  _url: string = '/voyager/api/voyagerRelationshipsDashMemberRelationships'

  _getParams() {
    return {
      action: 'verifyQuotaAndCreate',
      decorationId:
        'com.linkedin.voyager.dash.deco.relationships.InvitationCreationResult-2',
    }
  }

  _getBody(profileUrn: string, options?: Options) {
    return {
      inviteeProfileUrn: profileUrn,
      customMessage: options?.inviteMessage,
    }
  }

  async addConnection(profileUrn: string, payload: Options = {}) {
    const params = this._getParams()
    const body = this._getBody(profileUrn, payload)

    await linkedinApi.post(this._url, body, {
      params,
    })
  }
}

const connector = new Connector()

export const addConnection = connector.addConnection.bind(connector)
