
import React from 'react';
import type { MenuCategory as MenuCategoryType } from '../types';
import MenuItemCard from './MenuItemCard';

interface MenuCategoryProps {
  category: MenuCategoryType;
}

const MenuCategory: React.FC<MenuCategoryProps> = ({ category }) => {
  return (
    <section>
      <div className="text-center mb-10 p-4 bg-[rgba(26,26,26,0.7)] backdrop-blur-sm rounded-2xl border border-[rgba(255,193,7,0.2)] shadow-[0_4px_15px_rgba(0,0,0,0.3)]">
        <h2 className="text-4xl font-extrabold m-0 mb-2 text-[#FFC107]">{category.category_ar}</h2>
        <h3 className="text-xl font-normal text-[#BDBDBD] m-0">{category.category_en}</h3>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-8">
        {category.items.map((item, index) => (
          <MenuItemCard key={index} item={item} />
        ))}
      </div>
    </section>
  );
};

export default MenuCategory;
