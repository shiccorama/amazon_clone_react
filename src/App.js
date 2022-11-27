import { useState } from "react"
import './App.css';
import Header from "./components/Header";
import Banner from "./components/Banner";
import ProductFeed from "./components/ProductFeed";
import { GetServerSideProps } from "next";

function App({products}) {
  return (

    <div className="App bg-gray-100">
      <head>
        <title>
          Amazon 2.0
        </title>
      </head>
    {/* Header */}
      <Header />
      <main className="max-w-screen-2xl mx-auto">
        {/* Banner */}
        <Banner />

        {/* ProductFeed */}
        <ProductFeed />
        <p>{products}</p>



      </main>



    </div>
  );
}

export default App;








