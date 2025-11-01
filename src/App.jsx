
import { useState } from "react";
import Home from "./pages/Home";
import Editor from "./pages/Editor";
import History from "./pages/History";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import { Spinner } from "./components/ui/spinner";
import { Toaster } from "react-hot-toast";

function App() {


  return (
    <>
      <BrowserRouter>
           <Toaster position="top-right" />
        <Routes>
            <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/editor" element={<Editor />} />
            <Route path="/history" element={<History />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
