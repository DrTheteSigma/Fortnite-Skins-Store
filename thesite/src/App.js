import Nav from "./Components/Nav";
import About from "./Components/About";
import Shop from "./Components/Shop";
import ItemDetails from "./Components/ItemDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShoppingCart from "./Components/ShoppingCart";
import { useState } from "react";
function App() {
  const [items, setItems] = useState([]);

  //checks if object is already in items, if yes add counter, else add new object
  const addtolist = (input) => {
    if(items.length==0){
      setItems(items.concat(input));
    }
    
    items.forEach((item) => {
      if (item.id === input.id) {
        alert("already in");
        setItems(
          items.map((item) => {
            if (item.id == input.id) {
              console.log(`The count is ${item.count}`);
              return {
                title: item.title,
                price: item.price,
                count: item.count + 1,
                id: item.id,
                link: item.link
              };
            } else {
              return {
                title: item.title,
                price: item.price,
                count: item.count,
                id: item.id,
                link: item.link
              };
            }
          })
        );
      } else {
        setItems(items.concat(input));
        
      }
    });
  };

  const subtract = (input) => {
    
    
    items.forEach((item) => {
      if (item.id === input.id) {
        setItems(
          items.map((item) => {
            if (item.id == input.id) {
              
              return {
                title: item.title,
                price: item.price,
                count: item.count - 1,
                id: item.id,
                link: item.link
              };
            } else {
              return {
                title: item.title,
                price: item.price,
                count: item.count,
                id: item.id,
                link: item.link
              };
            }
          })
        );
      } 
    });

  };

  const addition = (input) => {
    
    
    items.forEach((item) => {
      if (item.id === input.id) {
        setItems(
          items.map((item) => {
            if (item.id == input.id) {

              return {
                title: item.title,
                price: item.price,
                count: item.count + 1,
                id: item.id,
                link: item.link
              };
            } else {
              return {
                title: item.title,
                price: item.price,
                count: item.count,
                id: item.id,
                link: item.link
              };
            }
          })
        );
      } 
    });

  };

  return (
    <Router>
      <div className="App">
        <Nav></Nav>
        <Routes>
          <Route path="/about" element={<About></About>} />
          <Route path="/shop" element={<Shop></Shop>} />
          <Route
            path="/shop/:id"
            element={<ItemDetails addtolist={addtolist}></ItemDetails>}
          ></Route>
          <Route
            path="/cart"
            element={<ShoppingCart items={items} subtract={subtract} addition={addition}></ShoppingCart>}
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
