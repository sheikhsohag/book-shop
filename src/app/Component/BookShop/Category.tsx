import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Category {
  id: number;
  name: string;
  image: string;
}

interface CategoryProps {
  cat: Category;
}

function Category({ cat }: CategoryProps) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - (left + width / 2);
    const y = e.clientY - (top + height / 2);
    const rotateX = (y / height) * -40;
    const rotateY = (x / width) * 40;
    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div className="flex flex-col w-full h-full"> {/* Changed to h-full */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.3 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="w-full h-[70%] flex justify-center items-center" /* Fixed ratio */
      >
        <motion.img
          src={cat.image}
          alt={cat.name}
          className="w-full h-full object-cover rounded-lg shadow-md"
          animate={{ rotateX: rotate.x, rotateY: rotate.y }}
          transition={{ type: "spring", stiffness: 500, damping: 5 }}
        />
      </motion.div>

      <div className="w-full h-[30%] flex justify-center items-center p-4">
        <h3 className="text-xl font-semibold">{cat.name}</h3>
      </div>
    </div>
  );
}

export default Category;