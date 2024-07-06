class Cookies {
  private cookies: URLSearchParams

  constructor() {
    this.cookies = new URLSearchParams(
      document.cookie.replaceAll('&', '%26').replaceAll('; ', '&')
    )
  }

  get(name: string) {
    return this.cookies.get(name)
  }

  getCsrfToken() {
    const token = this.get('JSESSIONID')

    if (!token) {
      throw new CookieAccessError()
    }

    return this.removeQuotes(token)
  }

  removeQuotes(value: string) {
    if (value.startsWith('"')) {
      value = value.slice(1)
    }

    if (value.endsWith('"')) {
      value = value.slice(0, -1)
    }

    return value
  }
}

class CookieAccessError extends Error {
  constructor() {
    super('Library has no access to "document.cookie"')
  }
}

export default new Cookies()
