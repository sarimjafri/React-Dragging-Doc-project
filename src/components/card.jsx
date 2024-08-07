import React from "react";
import { FaFileAlt } from "react-icons/fa";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";
import { motion } from "framer-motion";


function Card({ data, reference }) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} dragElastic={0.2} className="relative flex shrink-0 w-60 h-72 rounded-[4rem] py-14 px-9 mx-4 my-4 bg-zinc-900/90 text-white p-5 overflow-hidden">
      <FaFileAlt />
      <p className="text-sm leading-tight mt-3 font-semibold">{data.desc}</p>
      <div className="footer absolute bottom-0 w-full left-0">
        <div className="flex items-center justify-between px-8 py-3 ">
          <h5>.{data.fileSize}</h5>
          {data.close ? <IoIosCloseCircle /> : <FaCloudDownloadAlt />}
        </div>
        <div className="align-bottom mt-2">
          {data.tagg.isOpen && (
            <div
              className={`tag w-full py-4 ${data.tagg.tagColor === "red"? "bg-red-600": "bg-green-600"} flex items-center justify-center`}
            >
              <h3 className="text-sm font-semibold">{data.tagg.tagTitle}</h3>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default Card;
