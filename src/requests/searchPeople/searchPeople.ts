import { ExplicitUrlVariables, UrlVariables } from 'src/utils/queryBuilder/QueryBuilder'
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
  F = 'F',
  S = 'S',
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
    const query = ExplicitUrlVariables.fromObject({
      network: [Network.F],
      resultType: [SearchResultType.PEOPLE],
    })

    const variables = UrlVariables.fromObject({
      start,
      keywords,
      origin: 'GLOBAL_SEARCH_HEADER',
      query: UrlVariables.fromObject({
        flagshipSearchIntent: SearchIntent.SEARCH_SRP,
        queryParameters: query,
      }),
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
