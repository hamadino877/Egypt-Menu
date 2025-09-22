import React from 'react';

const Header: React.FC = () => {
  return (
    <header 
      className="w-full h-[450px] relative bg-cover bg-center flex items-center justify-center text-center p-4 shadow-[0_5px_20px_rgba(0,0,0,0.5)] select-none"
      style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1616262441994-48f8c2536c0d)' }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[rgba(13,13,13,0.5)] to-[#0d0d0d]"></div>
      <div className="relative z-10 text-[#F8F8F8]">
        <h1 className="text-5xl md:text-6xl font-black text-[#FFC107] m-0 mb-2 shadow-[2px_2px_4px_rgba(0,0,0,0.7)]">
          النيل غورمية
          <span className="text-2xl md:text-3xl font-normal text-[#BDBDBD] ms-3 block sm:inline-block">| Al-Nile Gourmet</span>
        </h1>
        <p className="text-xl text-[#BDBDBD] m-0 shadow-[1px_1px_3px_rgba(0,0,0,0.7)]">
          تجربة طعام مصرية أصيلة، حيث تلتقي النكهات الغنية والتراثية لتقدم لك أشهى الأطباق المحضرة بحب. | An authentic Egyptian dining experience, where rich and traditional flavors come together to bring you the most delicious dishes made with love.
        </p>
      </div>
    </header>
  );
};

export default Header;
