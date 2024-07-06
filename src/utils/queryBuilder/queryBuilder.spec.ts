import { expect, test, describe } from 'vitest'
import { ExplicitUrlVariables, UrlVariables } from './QueryBuilder'

describe('QueryString', () => {
  test('Returns concatenated query string', () => {
    const query = ExplicitUrlVariables.fromObject({
      network: ['F'],
    })

    expect(query).toBe('List((key:network,value:List(F)))')
  })
})

describe('QueryVariables', () => {
  test('Returns concatenated query variables', () => {
    const variables = UrlVariables.fromObject({
      start: 0,
      keywords: 'Software',
    })

    expect(variables).toBe('(start:0,keywords:Software)')
  })
})
