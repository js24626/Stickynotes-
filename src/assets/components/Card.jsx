import React from 'react';
import { FaFileAlt } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"

function FileCard({ data,reference }) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} dragElastic={0.2} className="relative flex-shrink-0 w-48 h-60 rounded-[40px] bg-zinc-900/90 px-8 py-10 overflow-hidden text-white">
      <FaFileAlt />
      <p className="text-sm leading-tight mt-4 font-semibold">{data.desc}</p>

      <div className="footer absolute bottom-0 w-full left-0">
        <div className="flex items-center justify-between px-8 py-3">
          <h5>{data.filesize}</h5>

          <span className="w-7 h-7 bg-zinc-500 rounded-full flex items-center justify-center">
            {data.close ? <IoClose /> : <FaDownload size=".7em" color="#000000" />}
          </span>
        </div>

        {data.tag.isOpen && (
         <div className={`tag w-full py-3 bg-blue-900 flex items-center justify-center`}>
         <h3 className="text-sm">{data.tag.tagTitle}</h3>
       </div>
       
        )}
      </div>
    </motion.div>
    
  );
}

export default FileCard;
