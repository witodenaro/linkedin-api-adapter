import { describe, expect, test, vi } from 'vitest'
import { PeopleSearcher } from './searchPeople'

vi.mock('../api/api', () => ({ default: null }))

describe('People searcher', () => {
  test('Creates valid params by payload', () => {
    const params = new PeopleSearcher()._getParams({
      start: 0,
      count: 10,
      keywords: 'Software',
    })

    expect(params).toEqual({
      queryId: 'voyagerSearchDashClusters.2e313ab8de30ca45e1c025cd0cfc6199',
      variables:
        '(start:0,keywords:Software,origin:GLOBAL_SEARCH_HEADER,query:(flagshipSearchIntent:SEARCH_SRP,queryParameters:List((key:network,value:List(F)),(key:resultType,value:List(PEOPLE)))))',
    })
  })

  test('Accept geoUrn optionally', () => {
    const params = new PeopleSearcher()._getParams({
      start: 0,
      count: 10,
      geoUrns: ['102713980'],
      keywords: 'Software',
    })

    expect(params).toEqual({
      queryId: 'voyagerSearchDashClusters.2e313ab8de30ca45e1c025cd0cfc6199',
      variables:
        '(start:0,keywords:Software,origin:GLOBAL_SEARCH_HEADER,query:(flagshipSearchIntent:SEARCH_SRP,queryParameters:List((key:network,value:List(F)),(key:resultType,value:List(PEOPLE)),(key:geoUrn,value:List(102713980)))))',
    })
  })
})
