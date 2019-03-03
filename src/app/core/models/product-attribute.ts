import { AttributeValue } from './attribute-value'
import { Attribute } from './attribute'

export interface ProductAttribute {
  attribute?: Attribute,
  values?: AttributeValue[]
}