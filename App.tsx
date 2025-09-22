
import React from 'react';
import Header from './components/Header';
import MenuCategory from './components/MenuCategory';
import { menuData } from './constants';
import type { MenuCategory as MenuCategoryType } from './types';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <Header />
      <main className="max-w-7xl mx-auto -mt-24 sm:-mt-28 p-4 sm:p-6 lg:p-8 relative z-10 w-full">
        <div className="space-y-12">
          {menuData.map((category: MenuCategoryType, index: number) => (
            <MenuCategory key={index} category={category} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default App;
