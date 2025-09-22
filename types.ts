
export interface MenuSize {
  size_ar: string;
  size_en: string;
  price: number;
}

export interface MenuItem {
  name_ar: string;
  name_en: string;
  price?: number;
  sizes?: MenuSize[];
  image: string[];
}

export interface MenuCategory {
  category_ar: string;
  category_en: string;
  items: MenuItem[];
}
