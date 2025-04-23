import React from "react";
import { motion } from "framer-motion";
import "../assets/styles/header.css";

const TitleWithIcon = ({ icon, text }) => {
  return (
    <motion.h1 className="header-h1" whileHover="hover" initial="initial">
        {icon}
      <motion.span
        variants={{
            initial: { opacity: 0, x: -20, width: 0 },
            hover: { opacity: 1, x: 8, width: 'auto' }
          }}
        transition={{ type: 'spring', stiffness: 300, damping: 20}}
      >
        {text}
      </motion.span>
    </motion.h1>
  );
};

export default TitleWithIcon;
