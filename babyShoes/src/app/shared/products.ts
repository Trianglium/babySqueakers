import { Product } from './product';

export class Products {
    id: "0";
    name: "Squeaky High Tops";
    image: "images/hightops.png";
    category: "sneakers";
    group: "converse";
    featured: true;
    label: "NEW";
    price: "14.99";
    description: "Unisex High Tops with a rubber sole. Comes in a variety of colors and has interchangable laces. Great for Summer!";
    details: "";
    reviews: [
      {
        "rating": 5,
        "comment": "I'll never lose my kid again these shoes are awesome and I appreciated the quick responses I recieved to my messages. Thanks Elaine!",
        "author": "Carl Martin",
        "date": '2012-10-16T17:57:28.556094Z'
      },
      {
        "rating": 5,
        "comment": "The seller was so pleasent and got my shoes to me two days before I expected them to come! LOVE baby squekers",
        "author": "Utah Mom",
        "date": '2011-12-02T17:57:28.556094Z'
      },
      {
        "rating": 5,
        "comment": "Pretty Quality shoes considering the price! I love the noises it makes, no more losing my toddler at the mall (Ha, take THAT cps!) ",
        "author": "Renea's Mom",
        "date": '2013-12-02T17:57:28.556094Z'
      },
      {
        "rating": 5,
        "comment": "shoes :) *hugs*",
        "author": "Stevie Brocker",
        "date": '2015-09-02T17:04:28.556094Z'
      }
    ];
    sizes: [
      {
        "age": "0 - 6 Months",
        "us": "2.0 - 3.0",
        "inches": "3.75"
      },
      {
        "age": "6 - 12 Months",
        "us": "3.5 - 4.0",
        "inches": "4.25"
      },
      {
        "age": "12 - 18 Months",
        "us": "4.5 - 5.0",
        "inches": "4.75"
      }
    ];
    colors: [
      {
        "name": "Teal",
        "group": ["Blue", "Green"]
      },
      {
        "name": "Lavendar",
        "group": ["Purple"]
      },
      {
        "name": "Plaid",
        "group": ["Pattern", "Black", "Red"]
      },
      {
        "name": "Salmon",
        "group": ["pink", "red", "orange"]
      },
      {
        "name": "Polka dot",
        "group": ["Pattern", "Black", "White"]
      }
    ];
}
