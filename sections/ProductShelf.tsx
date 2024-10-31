import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Slider from "../components/ui/Slider.tsx";
import { clx } from "../sdk/clx.ts";


export interface Props {
  /** @format rich-text */
  title?: string;
  products?: ProductProps[];
}

export interface ProductProps {
  /** @format rich-text */
  name?: string;
  /** @format textarea */
  description?: string;
  price?: number;
  image?: ImageWidget;
}

export default function ProductShelf({ title = "Featured Products", products = defaultProducts }: Props) {
  return (
    <div class="container mx-auto py-8 overflow-hidden">
      <h2 class="text-2xl font-bold mb-4 text-center">{title}</h2>
      <Slider class="carousel carousel-center sm:carousel-end gap-5 sm:gap-10 w-full">
        {products.map((product, index) => (
          <Slider.Item
            index={index}
            class={clx(
              "carousel-item",
              "first:pl-5 first:sm:pl-0",
              "last:pr-5 last:sm:pr-0",
            )}
          >
            <figure class="px-4 pt-4">
              <Image src={product.image?.toString()} alt={product.name} width={200} height={200} class="rounded" />
            </figure>
            <div class="card-body">
              <h3 class="card-title">{product.name}</h3>
              <p>{product.description}</p>
              <div class="card-actions justify-end">
                <span class="text-xl font-bold">${product.price?.toFixed(2)}</span>
                <button class="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </Slider.Item>
        ))}
      </Slider>
    </div>
  );
}

const defaultProducts: ProductProps[] = [
  {
    name: "Product 1",
    description: "This is the first product",
    price: 19.99,
    image: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/ff6bb37e-0eab-40e1-a454-86856efc278e",
  },
  {
    name: "Product 2", 
    description: "This is the second product",
    price: 24.99,
    image: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/ff6bb37e-0eab-40e1-a454-86856efc278e",
  },
  {
    name: "Product 3",
    description: "This is the third product", 
    price: 32.99,
    image: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/ff6bb37e-0eab-40e1-a454-86856efc278e",
  },
  {
    name: "Product 4",
    description: "This is the fourth product",
    price: 12.99, 
    image: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/ff6bb37e-0eab-40e1-a454-86856efc278e",
  },
  {
    name: "Product 5",
    description: "This is the fifth product",
    price: 9.99,
    image: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/ff6bb37e-0eab-40e1-a454-86856efc278e", 
  },
  {
    name: "Product 6",
    description: "This is the sixth product",
    price: 29.99,
    image: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/ff6bb37e-0eab-40e1-a454-86856efc278e",
  },
  {
    name: "Product 7",
    description: "This is the seventh product",
    price: 39.99,
    image: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/ff6bb37e-0eab-40e1-a454-86856efc278e",
  },
  {
    name: "Product 8",
    description: "This is the eighth product",
    price: 16.99,
    image: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/ff6bb37e-0eab-40e1-a454-86856efc278e",
  },
  {
    name: "Product 9",
    description: "This is the ninth product",
    price: 22.99,
    image: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/ff6bb37e-0eab-40e1-a454-86856efc278e",
  },
  {
    name: "Product 10",
    description: "This is the tenth product",
    price: 27.99,
    image: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/ff6bb37e-0eab-40e1-a454-86856efc278e",
  },
];