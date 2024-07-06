import {
  ExplicitUrlVariables,
  UrlVariables,
} from 'src/utils/queryBuilder/QueryBuilder'
import linkedinApi from '../api/api'
import { ConnectionElement, GeoUrn } from '../getFirstConnections'

type Response = {
  elements: ConnectionElement[]
  paging: {
    count: number
    start: number
    links: any[]
  }
}

interface Params {
  start: number
  count: number
  keywords: string
  geoUrns?: GeoUrn[]
  companiesUrns?: string[]
}

enum Network {
  FIRST_CONNECTIONS = 'F',
  SECOND_CONNECTIONS = 'S',
}

enum RequestOrigin {
  GLOBAL_SEARCH_HEADER = 'GLOBAL_SEARCH_HEADER',
}

enum SearchResultType {
  PEOPLE = 'PEOPLE',
}

enum SearchIntent {
  SEARCH_SRP = 'SEARCH_SRP',
}

export class PeopleSearcher {
  private url: string = '/voyager/api/graphql'

  _getParams({ keywords, companiesUrns, count, start, geoUrns }: Params) {
    const queryParameters = ExplicitUrlVariables.fromObject({
      network: [Network.FIRST_CONNECTIONS],
      resultType: [SearchResultType.PEOPLE],
    })

    const query = UrlVariables.fromObject({
      flagshipSearchIntent: SearchIntent.SEARCH_SRP,
      queryParameters,
    })

    const variables = UrlVariables.fromObject({
      start,
      keywords,
      origin: RequestOrigin.GLOBAL_SEARCH_HEADER,
      query,
    })

    return {
      queryId: 'voyagerSearchDashClusters.2e313ab8de30ca45e1c025cd0cfc6199',
      variables,
    }
  }

  async searchPeople(start: number, count: number) {
    const params = this._getParams({
      start,
      count,
      keywords: 'Software',
      geoUrns: [],
      companiesUrns: [],
    })

    const response = await linkedinApi.get<Response>(this.url, {
      params,
    })

    return response.data.elements
  }
}

const searcher = new PeopleSearcher()

export const searchPeople = searcher.searchPeople.bind(searcher)
