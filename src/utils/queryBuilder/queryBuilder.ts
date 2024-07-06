export class ExplicitUrlVariables {
  static fromObject(object: Record<string, string[]>) {
    const entries = Object.entries(object)

    const concattedEntries = ExplicitUrlVariables.concatEntries(entries)

    return `List(${concattedEntries})`
  }

  static concatEntries(entries: [string, string[]][]) {
    return entries.map(ExplicitUrlVariables.formatEntry).join(',')
  }

  static formatEntry([key, value]: [string, string[]]) {
    return ExplicitUrlVariables.concat(key, value)
  }

  static concat(field: string, value: Array<string>) {
    const joinedValues = value.join(',')

    return `(key:${field},value:List(${joinedValues}))`
  }
}

export class UrlVariables {
  static fromObject(object: Record<string, any>) {
    const entries = Object.entries(object)

    const concatted = UrlVariables.concatEntries(entries)

    return `(${concatted})`
  }

  static concatEntries(entries: [string, string][]) {
    return entries.map(UrlVariables.formatEntry).join(',')
  }

  static formatEntry([key, value]: [string, string]) {
    return UrlVariables.concat(key, value)
  }

  static concat(key: string, value: string) {
    return `${key}:${value}`
  }
}
