import React, { lazy, Suspense, useState } from "react";
import "./App.css";
import { motion } from "framer-motion";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const Loading = lazy(() => import("./components/Loading/Loading"));
const Page = lazy(() => import("./Page/Page"));
const NotFound = lazy(() => import("../src/components/NotFound/NotFound"));

const App = () => {
  const [move, setMove] = useState(0);
  window.onscroll = () => {
    setMove(window.scrollY);
  };

  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <Routes>
          <Route path="/" element=<Page /> />
          <Route path="*" element=<NotFound /> />
        </Routes>
      </Router>
      {move > 50 ? (
        <motion.i
          class="fa-solid fa-arrow-up"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        ></motion.i>
      ) : (
        ""
      )}
    </Suspense>
  );
};

export default App;
