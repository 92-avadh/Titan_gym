"use client";

import React from 'react';
import { motion } from 'framer-motion';

export const WhatsAppButton: React.FC = () => {
  const phoneNumber = "1234567890"; // Mock number
  const message = "Hi! I am interested in joining Titan Fitness Club. I would like to book a free trial.";
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25d366] text-white rounded-full shadow-[0_0_20px_rgba(37,211,102,0.4)] cursor-pointer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ 
        scale: 1.1,
        boxShadow: "0 0 30px rgba(37,211,102,0.7)"
      }}
      whileTap={{ scale: 0.9 }}
    >
      <svg
        className="w-8 h-8 fill-current"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.864.002-2.637-1.019-5.117-2.875-6.973C16.597 1.91 14.121.89 11.49.889c-5.44 0-9.862 4.42-9.866 9.865-.001 1.779.475 3.51 1.378 5.011l-.955 3.49 3.58-.938zm11.391-7.828c-.279-.14-1.65-.815-1.906-.907-.256-.092-.443-.139-.629.14-.186.279-.718.907-.88 1.092-.163.186-.325.21-.604.07-.279-.14-1.18-.435-2.247-1.387-.83-.74-1.39-1.653-1.553-1.932-.163-.279-.017-.431.122-.57.125-.125.279-.325.419-.488.14-.163.186-.279.279-.465.093-.186.046-.349-.023-.488-.069-.14-.629-1.517-.861-2.073-.226-.543-.454-.469-.629-.478-.162-.008-.349-.01-.535-.01-.186 0-.488.07-.743.349-.256.279-.977.953-.977 2.325s1.001 2.7 1.14 2.885c.14.186 1.968 3.005 4.767 4.21.666.287 1.186.458 1.59.587.67.213 1.28.183 1.762.11.539-.08 1.651-.675 1.884-1.326.233-.652.233-1.21.163-1.325-.07-.11-.256-.208-.536-.348z" />
      </svg>
    </motion.a>
  );
};

export default WhatsAppButton;
