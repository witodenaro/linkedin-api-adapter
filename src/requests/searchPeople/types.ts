import { ProfileUrn } from '../getProfile'

export enum SearchNetwork {
  FIRST_CONNECTIONS = 'F',
  SECOND_CONNECTIONS = 'S',
}

export enum SearchRequestOrigin {
  GLOBAL_SEARCH_HEADER = 'GLOBAL_SEARCH_HEADER',
}

export enum SearchResultType {
  PEOPLE = 'PEOPLE',
}

export enum SearchIntent {
  SEARCH_SRP = 'SEARCH_SRP',
}

export interface SearchPeopleResponse {
  data: {
    searchDashClustersByAll: {
      metadata: {
        entityResultAttributes: null
        totalResultCount: number
        searchAlert: null
        _type: string
        secondaryFilterCluster: null
        _recipeType: string
        lazyRightRail: null
        queryType: null
        primaryResultType: SearchResultType.PEOPLE
        paginationToken: null
      }
      paging: {
        count: number;
        start: number;
        total: number
      }
      elements: [Cluster<any>, SearchResultsCluster, Cluster<any>]
    }
  }
}

interface Cluster<I> {
  image: null
  quickFilterActions: []
  clusterRenderType: 'LIST'
  dismissable: false
  totalResultCount: null
  controlName: null
  description: null
  title: null
  actionTypeName: null
  navigationText: null
  feature: null
  navigationCardAction: null
  position: number
  items: I[]
  results: []
  trackingId: string
}

interface SearchResultsCluster extends Cluster<UserProfileSearchResultItem> {}

interface UserProfileSearchResultItem {
  item: {
    entityResult: SearchedPersonEntity | null
  }
}

export interface SearchedPersonEntity {
  title: {
    text: FullName
    attributesV2: []
  }
  entityUrn: string
  primarySubtitle: {
    text: Headline
  }
  badgeText: {
    text: string
    accessibilityText: ConnectionDegreeText
  }
  image: {
    attributes: [
      {
        detailData: {
          nonEntityProfilePicture: {
            profile: {
              entityUrn: ProfileUrn
            }
            vectorImage: null
          }
        }
        tintColor: null
        tapTargets: []
        displayAspectRatio: null
      },
    ]
    accessibilityText: FullName
  }
  secondarySubtitle: {
    text: City
  }
  navigationUrl: Url
}

type FullName = string
type Headline = string
type ConnectionDegreeText = string
type City = string
type Url = string
