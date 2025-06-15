import React from "react";
import Item from "../components/item";

const Home = () => {
  return (
    <section>
      <div className="gap-8 grid grid-cols-[repeat(auto-fit,minmax(225px,1fr))] px-8 py-6 max-w-7xl mx-auto">
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </section>
  );
};

export default Home;
