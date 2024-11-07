import { FaPython } from "react-icons/fa";
import { SiPowerbi, SiMysql, SiDatabricks  } from "react-icons/si";
import { TbLetterR } from "react-icons/tb";
import { BiLogoPostgresql } from "react-icons/bi";
import { motion } from "framer-motion";
import { text } from "framer-motion/client";
//import { Tooltip } from "../components/Tooltip.jsx";

const Technologies = () => {
  return <div className="border-b border-neutral-800 pb-24">
    <motion.h1 
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0, y:-100}}
        transition={{duration:0.5}}
        className="my-20 text-center text-4xl"> Technologies</motion.h1>
    <motion.div 
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0, y:100}}
        transition={{duration:0.5}}
        className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
            whileHover={{scale: 1.8}}
            animate={{y:0, opacity:1}}
            className="rounded-2xl bourder-4 border-neutral-800 p-4">
            <FaPython className="text-7xl text-yellow-600"/>
        </motion.div>
        <motion.div 
            whileHover={{scale: 1.8}}
            animate={{y:0, opacity:1}}
            className="rounded-2xl bourder-4 border-neutral-800 p-4">
            <TbLetterR className="text-7xl text-sky-500" />
        </motion.div>
        <motion.div 
            whileHover={{scale: 1.8}}
            animate={{y:0, opacity:1}}
            className="rounded-2xl bourder-4 border-neutral-800 p-4">
            <SiPowerbi className="text-7xl text-yellow-500" />
        </motion.div>
        <motion.div 
            whileHover={{scale: 1.8}}
            animate={{y:0, opacity:1}}
            className="rounded-2xl bourder-4 border-neutral-800 p-4">
            <SiDatabricks className="text-7xl text-red-600" />
        </motion.div>
        <motion.div 
            whileHover={{scale: 1.8}}
            animate={{y:0, opacity:1}}
            className="rounded-2xl bourder-4 border-neutral-800 p-4">
            <SiMysql className="text-7xl text-orange-400" />
        </motion.div>
        <motion.div 
            whileHover={{scale: 1.8 }}
            animate={{y:0, opacity:1}}
            className="rounded-2xl bourder-4 border-neutral-800 p-4">
            <BiLogoPostgresql className="text-7xl text-sky-700"/>
        </motion.div>
    </motion.div>
  </div>
}   

export default Technologies