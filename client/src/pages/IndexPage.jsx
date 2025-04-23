import useMovies from "../hooks/useMovies";
import { useState } from "react";
import "../App.css"
import Container from "../components/Container";
import Populars from "../components/Populars";
import { li } from "framer-motion/client";
function IndexPage() {

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  

  return (
    <Container>
      <Populars/>
      
    </Container>
  );
}

export default IndexPage;
