import linkedinApi from '../api/api'
import { GeolocationElement, GeolocationTypes, GetGeolocationsResponse } from './types'

class GeolocationsFetcher {
  private url: string = '/voyager/api/graphql'

  private getParams(keywords: string) {
    return {
      variables: `(keywords:${keywords},query:(typeaheadFilterQuery:(geoSearchTypes:List(${GeolocationTypes.COUNTRY_REGION}))),type:GEO)`,
      queryId:
        'voyagerSearchDashReusableTypeahead.1043b2d44b336397a7560ac3243a89a0',
    }
  }

  private parseResponse(
    response: GetGeolocationsResponse
  ): GeolocationElement[] {
    return response.data.searchDashReusableTypeaheadByType.elements
  }

  async getGeolocations(searchTerm: string = '') {
    const params = this.getParams(searchTerm)

    const response = await linkedinApi.get<GetGeolocationsResponse>(this.url, {
      params,
    })

    return this.parseResponse(response.data)
  }
}

const fetcher = new GeolocationsFetcher()

export const getGeolocations = fetcher.getGeolocations.bind(fetcher)
