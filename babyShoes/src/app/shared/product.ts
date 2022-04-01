import { Review } from './review';
import { Size } from './size';
import { Color } from './color';

export class Product {
    id: string;
    name: string;
    image: string;
    category: string;
    group: string;
    featured: boolean;
    label: string;
    price: string;
    description: string;
    details: string;
    reviews: Review[];
    sizes: Size[];
    colors: Color[];
}
