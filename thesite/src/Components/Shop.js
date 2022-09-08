import React from "react";
import { Link } from "react-router-dom";
import data from "../Components/Data";

const Shop = () => {
  return (
    <div className="cards">
      {data.cards.map((card) => {
        return (
          <div className="card" key={card.id}>
            <Link to={`/shop/${card.id}`}>
              {" "}
              <img src={card.link}></img>
              <div> {card.title}</div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Shop;
