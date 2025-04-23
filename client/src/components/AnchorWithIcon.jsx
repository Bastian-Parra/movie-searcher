import React from "react";
import { motion } from "framer-motion";
import "../assets/styles/header.css";

const AnchorWithIcon = ({ icon, text, ref }) => {
  return (
    <motion.a href={ref} className="header-a" whileHover="hover">
      <motion.span
        variants={{
          hover: { opacity: 1, x: 0, y: 0 },
        }}
        initial={{ opacity: 0, x: -10, y: 5 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {icon}
      </motion.span>
      {text}
    </motion.a>
  );
};

export default AnchorWithIcon;
