// model for a customer in typescript
export interface Customer {
  customerId: number;
  firstName: string;
  lastName: string;
  birthdate: Date;
  phoneNumbers: any[];
  emails: any[];
  addresses: any[];
}
