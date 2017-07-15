export interface Dict<T> {
  [name: string]: T
}

export type ReadonlyDict<T> = Readonly<Dict<T>>

export const epsilon = Symbol('epsilon')

export class DefaultDict<T> {
  private getDefaultValue: () => T
  readonly dict: Dict<T> = {}

  constructor(getDefaultValue: () => T) {
    this.getDefaultValue = getDefaultValue
  }

  get(key: string) {
    if (!(key in this.dict)) {
      this.dict[key] = this.getDefaultValue()
    }
    return this.dict[key]
  }

  set(key: string, value: T) {
    this.dict[key] = value
    return this
  }

  entries() {
    return Object.entries(this.dict)
  }
}
