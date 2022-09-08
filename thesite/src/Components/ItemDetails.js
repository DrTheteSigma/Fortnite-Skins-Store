import React from "react";
import "react-router-dom";
import { useParams } from "react-router-dom";
import data from "./Data";

const ItemDetails = ({ addtolist }) => {
  const pageID = useParams().id;
  const imgsrc = data.cards[pageID].link;
  const title = data.cards[pageID].title;
  const price = data.cards[pageID].price;
  const id = data.cards[pageID].id;
  const link = data.cards[pageID].link;


  const theClick = () => {
    addtolist({ title: title, price: price, count: 1, id: id , link: link });
  };
  return (
    <div className="itemview">
      <img src={imgsrc} className="Pic"></img>

      <div>
        <h2>{data.cards[pageID].title}</h2>
        <h1>{data.cards[pageID].price}$</h1>
        <button onClick={theClick}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ItemDetails;
