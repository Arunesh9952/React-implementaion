import React from "react";

const categories = [
  {
    title: "Two Wheelers",
    image: "https://example.com/two-wheelers.jpg",
  },
  {
    title: "Four Wheelers",
    image: "https://example.com/four-wheelers.jpg",
  },
  {
    title: "Six Wheelers",
    image: "https://example.com/six-wheelers.jpg",
  },
];

const Navbar = () => (
  <nav className="bg-gray-800 text-white p-4 flex justify-between">
    <div className="text-lg font-bold">E-Auction Platform</div>
    <div className="flex gap-6">
      <a href="#" className="hover:underline">HOME</a>
      <a href="#" className="hover:underline">ABOUT US</a>
      <a href="#" className="hover:underline">LOGIN</a>
      <a href="#" className="hover:underline">SIGNUP</a>
    </div>
  </nav>
);

const CategoryCard = ({ title, image }) => (
  <div className="bg-white shadow-md rounded-lg overflow-hidden w-64 text-center">
    <img src={image} alt={title} className="w-full h-40 object-cover" />
    <div className="p-4">
      <h3 className="text-lg font-semibold">{title}</h3>
      <button className="mt-2 px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-900">
        VIEW MORE
      </button>
    </div>
  </div>
);

const AppTwo= () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center gap-6 p-10 bg-gray-100">
        {categories.map((category) => (
          <CategoryCard key={category.title} {...category} />
        ))}
      </div>
    </div>
  );
};

export default AppTwo;