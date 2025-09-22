import type { MenuCategory } from './types';

export const menuData: MenuCategory[] = [
  {
    "category_ar": "الشوربة",
    "category_en": "Soups",
    "items": [
      {
        "name_ar": "شوربة عدس",
        "name_en": "Lentil Soup",
        "price": 18.00,
        "image": ["https://placehold.co/600x400/D4B88C/4A403A?text=Lentil+Soup"]
      },
      {
        "name_ar": "شوربة مأكولات بحرية",
        "name_en": "Seafood Soup",
        "price": 35.00,
        "image": ["https://placehold.co/600x400/D4B88C/4A403A?text=Seafood+Soup"]
      }
    ]
  },
  {
    "category_ar": "المقبلات والسلطات",
    "category_en": "Appetizers & Salads",
    "items": [
      {
        "name_ar": "بابا غنوج",
        "name_en": "Baba Ghanoush",
        "price": 22.00,
        "image": ["https://placehold.co/600x400/D4B88C/4A403A?text=Baba+Ghanoush"]
      },
      {
        "name_ar": "سلطة طحينة",
        "name_en": "Tahini Salad",
        "price": 20.00,
        "image": ["https://placehold.co/600x400/D4B88C/4A403A?text=Tahini+Salad"]
      },
      {
        "name_ar": "سلطة خضراء",
        "name_en": "Green Salad",
        "price": 15.00,
        "image": ["https://placehold.co/600x400/D4B88C/4A403A?text=Green+Salad"]
      }
    ]
  },
  {
    "category_ar": "الأطباق الرئيسية",
    "category_en": "Main Dishes",
    "items": [
      {
        "name_ar": "ملوخية بالفراخ",
        "name_en": "Molokhia with Chicken",
        "price": 55.00,
        "image": ["https://placehold.co/600x400/D4B88C/4A403A?text=Molokhia"]
      },
      {
        "name_ar": "كشري",
        "name_en": "Koshary",
        "price": 40.00,
        "image": ["https://placehold.co/600x400/D4B88C/4A403A?text=Koshary"]
      },
      {
        "name_ar": "فتة لحم",
        "name_en": "Fattah with Beef",
        "price": 65.00,
        "image": ["https://placehold.co/600x400/D4B88C/4A403A?text=Fattah"]
      }
    ]
  },
  {
    "category_ar": "المشويات",
    "category_en": "Grills",
    "items": [
      {
        "name_ar": "طبق مشاوي مشكل",
        "name_en": "Mixed Grills Platter",
        "sizes": [
          { "size_ar": "صغير", "size_en": "Small", "price": 75 },
          { "size_ar": "كبير", "size_en": "Large", "price": 120 }
        ],
        "image": ["https://placehold.co/600x400/D4B88C/4A403A?text=Mixed+Grills"]
      },
      {
        "name_ar": "كفتة",
        "name_en": "Kofta",
        "sizes": [
          { "size_ar": "نص كيلو", "size_en": "Half KG", "price": 85 },
          { "size_ar": "كيلو", "size_en": "KG", "price": 160 }
        ],
        "image": ["https://placehold.co/600x400/D4B88C/4A403A?text=Kofta"]
      },
      {
        "name_ar": "شيش طاووق",
        "name_en": "Shish Tawook",
        "price": 60.00,
        "image": ["https://placehold.co/600x400/D4B88C/4A403A?text=Shish+Tawook"]
      }
    ]
  },
  {
    "category_ar": "مأكولات بحرية",
    "category_en": "Seafood",
    "items": [
      {
        "name_ar": "سمك بلطي مشوي",
        "name_en": "Grilled Tilapia",
        "price": 70.00,
        "image": ["https://placehold.co/600x400/D4B88C/4A403A?text=Grilled+Fish"]
      },
      {
        "name_ar": "جمبري مقلي",
        "name_en": "Fried Prawns",
        "price": 95.00,
        "image": ["https://placehold.co/600x400/D4B88C/4A403A?text=Fried+Prawns"]
      }
    ]
  },
  {
    "category_ar": "حلويات",
    "category_en": "Desserts",
    "items": [
      {
        "name_ar": "أم علي",
        "name_en": "Umm Ali",
        "price": 25.00,
        "image": ["https://placehold.co/600x400/D4B88C/4A403A?text=Umm+Ali"]
      },
      {
        "name_ar": "كنافة بالقشطة",
        "name_en": "Konafa with Cream",
        "price": 30.00,
        "image": ["https://placehold.co/600x400/D4B88C/4A403A?text=Konafa"]
      }
    ]
  },
  {
    "category_ar": "مشروبات",
    "category_en": "Beverages",
    "items": [
      {
        "name_ar": "كركديه",
        "name_en": "Hibiscus",
        "price": 10.00,
        "image": ["https://placehold.co/600x400/D4B88C/4A403A?text=Hibiscus"]
      },
      {
        "name_ar": "تمر هندي",
        "name_en": "Tamarind",
        "price": 10.00,
        "image": ["https://placehold.co/600x400/D4B88C/4A403A?text=Tamarind"]
      }
    ]
  }
];
