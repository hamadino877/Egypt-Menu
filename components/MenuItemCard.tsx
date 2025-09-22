
import React from 'react';
import type { MenuItem } from '../types';
import ImageGallery from './ImageGallery';

interface MenuItemCardProps {
  item: MenuItem;
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({ item }) => {
  return (
    <div className="bg-[#1A1A1A] rounded-2xl overflow-hidden shadow-[0_4px_15px_rgba(0,0,0,0.5)] transition-all duration-400 ease-in-out hover:-translate-y-2.5 hover:shadow-[0_15px_30px_rgba(255,193,7,0.3)] hover:border-[#FFC107] border border-transparent flex flex-col select-none group">
      <ImageGallery images={item.image} alt={`${item.name_ar} - ${item.name_en}`} />
      <div className="p-6 flex-grow flex flex-col justify-center text-center">
        <h3 className="text-xl font-bold mb-4 text-[#FFC107]">
          {item.name_ar} | {item.name_en}
        </h3>
        {item.sizes ? (
          <div className="space-y-1">
            {item.sizes.map((size, index) => (
              <p key={index} className="text-lg text-[#BDBDBD]">
                {size.size_ar} | {size.size_en}: <span className="text-[#FFD54F] font-bold">{size.price.toFixed(2)} درهم | AED</span>
              </p>
            ))}
          </div>
        ) : (
          <p className="text-2xl font-extrabold text-[#FFD54F] mt-2">
            {item.price?.toFixed(2)} درهم | AED
          </p>
        )}
      </div>
    </div>
  );
};

export default MenuItemCard;
