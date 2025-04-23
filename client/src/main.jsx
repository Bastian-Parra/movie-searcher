import React from "react";
import { createRoot } from "react-dom/client";

import { BrowserRouter, Route, Routes } from "react-router-dom";

// Pages
import IndexPage from "./pages/IndexPage.jsx";
import DetailPage from "./pages/DetailPage.jsx";
import Populars from "./components/Populars.jsx";
import NowPlaying from "./components/NowPlaying.jsx";
import Header from "./components/Header.jsx";
import Container from "./components/Container.jsx";
import TopRated from "./components/TopRated.jsx";
import Upcoming from "./components/Upcoming.jsx";
import Footer from "./components/Footer.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/nowplaying" element={<NowPlaying />} />
        <Route path="/populars" element={<Populars />} />
        <Route path="/toprated" element={<TopRated />} />
        <Route path="/upcoming" element={<Upcoming />} />
        <Route path="/detail/:id" element={<DetailPage />} />
      </Routes>
      <Footer />
    </Container>
  </BrowserRouter>
);
