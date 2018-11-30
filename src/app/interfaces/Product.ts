export interface Transactions{
  id: string;
  operation: string;
  outputs: Output[];
  inputs: Input[];
  metadata: Metadata;
  asset: Data;
  version: string;
}

export interface Metadata {
  action: string;
  date: string;
}

export interface Data {
  data: DataInstance;
}

export interface DataInstance {
  type: string;
  item: string;
}

export interface Output {
  condition: Condition;
  amount: number;
  public_keys: string[];
}

export interface Input {

}

export interface Condition {
  details: Detail
  uri: string;
}

export interface Detail {
  type: string;
  public_key: string;
}


export interface Review {
  username: string;
  comments: string;
}

export interface Product {
  name: string;
  shortdescription: string;
  longdescription: string;
  productimageurl: string;
  price: number;
  rating: number;
  review: Review[]
}
