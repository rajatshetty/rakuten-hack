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
