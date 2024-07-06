const voyagerFields = ['voyager-web:badges', 'voyager-web:connectedTimestamp']

export const getUserId = () => {
  const id = voyagerFields.reduce<string | null>((discoveredId, key) => {
    if (discoveredId) {
      return discoveredId
    }

    const storedValue = localStorage.getItem(key)

    if (!storedValue) {
      return null
    }

    const parsedValue = parseOrNull(storedValue)

    if (parsedValue[0]?._id) {
      return parsedValue[0]._id
    }

    return null
  }, null)

  return id
}

function parseOrNull(value: string) {
  try {
    return JSON.parse(value)
  } catch (error) {
    return null
  }
}
