import { Product } from '../interfaces/Product';

export const MOCKPRODUCTS: Product[] = [
  {
    name: 'Iphone 4S',
    shortdescription: 'GSM Unlocked, 16 GB',
    price: 63,
    longdescription: 'Renewed products look and work like new. These pre-owned products have been inspected and tested by Amazon-qualified suppliers, which typically perform a full diagnostic test and a thorough cleaning process. Packaging and accessories may be generic. This product is backed by the Amazon Renewed 90-day guarantee',
    productimageurl: 'https://images-na.ssl-images-amazon.com/images/I/41ua5HiV45L.jpg',
    rating: 4,
    review: [{ username: "rshetty47@gmail.com", comments: "Its is the best product is have bought on rakuten so far" }, { username: "arun@gmail.com", comments: "A moderate product" }, { username: "sharathgg5@gmail.com", comments: "Its is the not that great but worth for money"}]
  },
  {
    name: 'Iphone SE',
    shortdescription: '16GB GSM Unlocked Silver',
    longdescription: '4G LTE DUAL SIM GSM SUPPORT. Take the hassle out of carrying two phones at once by using the all new A5L, which allows you to easily switch between two numbers and data plans using the built-in dual SIM feature. The NUU Mobile A5L works on GSM networks such as T-Mobile, AT&T, and other carriers that operate on those networks',
    price: 179,
    productimageurl: 'https://images-na.ssl-images-amazon.com/images/I/61WFtumsmwL._SY741_.jpg',
    rating: 3,
    review: []
  },
  {
    name: 'Iphone 5S',
    shortdescription: '64GB LTE CDMA/GSM Unlocked',
    longdescription: '4‑inch LED‑backlit widescreen Multi‑Touch display, 1136‑by‑640‑pixel resolution at 326 ppi. A9 chip with 64‑bit architecture, Embedded M9 motion coprocessor',
    price: 104,
    productimageurl: 'https://images-na.ssl-images-amazon.com/images/I/71ON1viUEaL._SX679_.jpg',
    rating: 4,
    review: []
  },
  {
    name: 'Iphone 6',
    shortdescription: 'Rose Gold [Locked to Simple mobile prepaid]',
    longdescription: 'This iPhone is carrier locked; customers must have had their locked device activated on Simple Mobile service for no fewer than 12 months, redeemed air time cards in no fewer than 12 months, and not have had their telephone number recycled or ported.',
    price: 399,
    productimageurl: 'https://images-na.ssl-images-amazon.com/images/I/419smKsnVyL._SY879_.jpg',
    rating: 2,
    review: []
  },
  {
    name: 'Iphone 6S',
    shortdescription: 'Rose Gold [Simple mobile prepaid]',
    longdescription: 'Simple mobile 30-day service plans are on a lightning-fast, Nationwide network that is powered by T-Mobile, to give customers reliability & speed.',
    price: 399,
    productimageurl: 'https://images-na.ssl-images-amazon.com/images/I/51TY89An0pL._SY879_.jpg',
    rating: 1,
    review: []
  }
]
