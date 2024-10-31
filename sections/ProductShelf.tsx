import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Slider from "deco-sites/std/components/Slider.tsx";

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
    <div className="container mx-auto py-8 overflow-hidden">
      <h2 className="text-2xl font-bold mb-4 text-center">{title}</h2>
      <Slider className="gap-4" itemsPerPage={{
        desktop: { 0: 5 },
        tablet: { 0: 3 },
        phone: { 0: 2 },
      }}>
        {products.map((product, index) => (
          <div key={index} className="card bordered w-full md:w-1/2 lg:w-1/5">
            <figure className="px-4 pt-4">
              <Image src={product.image} alt={product.name} width={200} height={200} className="rounded" />
            </figure>
            <div className="card-body">
              <h3 className="card-title">{product.name}</h3>
              <p>{product.description}</p>
              <div className="card-actions justify-end">
                <span className="text-xl font-bold">${product.price?.toFixed(2)}</span>
                <button className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>
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