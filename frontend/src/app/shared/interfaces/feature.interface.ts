import {UnitEnum} from "../enums/unit.enum"
import {CurrencyEnum} from "../enums/currency.enum";

export interface ClientInterface {
  name: string,
  unit: UnitEnum,
  price: number,
  currency: CurrencyEnum
}


