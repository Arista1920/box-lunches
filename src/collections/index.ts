import * as c from '../../.collections'

export type order = 'desc' | 'cresc'

export interface OrderOptions {
  field: string
  order: 'cresc'
  isDate: false
}

const matcher = (regexp: RegExp, fields?: string[]): (obj: Object) => boolean => {
  return (obj) => {
    const fields1 = fields || Object.keys(obj)
    let found = false
    fields1.forEach(key => {
      if (!found) {
        if ((typeof obj[key] == 'string') && regexp.exec(obj[key])) {
          found = true
        }
      }
    })
    return found
  }
}

export const getCollection = (
  collectionName: string,
  orderOptions?: OrderOptions,
): Collection<any> => {
  let collection = new Collection()
  collection.elements = !!c[collectionName] ? c[collectionName] : []
  if (orderOptions) {
    collection = collection.sort(orderOptions)
  }
  return collection
}

export class Collection<T> {
  elements: T[]

  paginate(page_size: number, page_number: number): this {
    this.elements = this.elements.slice((page_number - 1) * page_size, page_number * page_size)
    return this
  }

  filter(callback: any): this {
    this.elements = this.elements.filter(callback)
    return this
  }

  search(test: string | string[], fields?: string[]): this {
    if (test == undefined || test == null) {
      return this
    }
    if (typeof test == 'string') {
      const regex = new RegExp("\\b" + test, 'i')
      this.elements = this.filter(matcher(regex, fields)).elements
    } else {
      let found = []
      test.forEach(t => {
        const regex = new RegExp("\\b" + t + "\\b", 'i')
        found = [...found, ...this.filter(matcher(regex, fields)).elements]
      })
    }
    return this
  }

  sort(orderOptions: OrderOptions): this {
    this.elements = this.elements.sort((a: any, b: any) => {
      let aa: any = a[orderOptions.field]
      let bb: any = b[orderOptions.field]
      if (orderOptions.isDate) {
        aa = +new Date(a[orderOptions.field])
        bb = +new Date(b[orderOptions.field])
        if (orderOptions.order == 'cresc') {
          return aa - bb
        } else {
          return bb - aa
        }
      } else {
        if (orderOptions.order == 'cresc') {
          return aa < bb ? -1 : 1
        } else {
          return aa > bb ? -1 : 1
        }
      }
    })
    return this
  }
}
