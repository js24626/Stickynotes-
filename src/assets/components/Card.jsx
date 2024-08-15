import React, { useState } from 'react';
import { FaFileAlt } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

function Card({ data, reference, onClose }) {

  const [text, setText] = useState(data.desc);

 
  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <motion.div 
      drag 
      dragConstraints={reference} 
      whileDrag={{ scale: 1.2 }} 
      dragElastic={0.2} 
      className="relative flex-shrink-0 w-48 h-60 rounded-[40px] bg-zinc-900/90 px-8 py-10 overflow-hidden text-white"
    >
      <FaFileAlt />
      
    
      <textarea
    
        value={text }
        onChange={handleTextChange}
        className="text-sm leading-tight mt-4 font-semibold w-full h-24 p-2 resize-none bg-transparent border-none outline-none text-white"
      />

      <div className="footer absolute bottom-0 w-full left-0">
        <div className="flex items-center justify-between px-8 py-3">
          <h5>{data.filesize}</h5>
          <span 
            className="w-7 h-7 bg-zinc-500 rounded-full flex items-center justify-center cursor-pointer"
            onClick={onClose} 
          >
            <IoClose />
          </span>
        </div>

        {data.tag.isOpen && (
          <div className={`tag w-full py-3 bg-red-900 flex items-center justify-center`}>
            <h3 className="text-sm">{data.tag.tagTitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
