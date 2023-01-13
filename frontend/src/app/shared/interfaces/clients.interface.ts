import { EntityEnum } from '../enums/entity.enum';

export interface ClientInterface {
  _id: string;
  name: string;
  entity: EntityEnum;
  cui: string;
  cnp: string;
  address: string;
  city: string;
  country: string;
  zipcode: string;
  contactPersonName: string;
  phone: string;
  email: string;
  website: string;
  userId: string;
}
