import Nav from "./Components/Nav";
import About from "./Components/About";
import Shop from "./Components/Shop";
import ItemDetails from "./Components/ItemDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShoppingCart from "./Components/ShoppingCart";
import { useEffect, useState } from "react";
import Signin from "./Components/Signin";
import Signup from "./Components/Signup";
import Account from "./Components/Account";
import { AuthContextProvider} from "./Components/context/AuthContext";
import { UserAuth } from "./Components/context/AuthContext";

import ProtectedRoutes from "./Components/ProtectedRoutes";
import { addDoc, collection, doc, getDoc, onSnapshot, query, QuerySnapshot, setDoc } from "firebase/firestore";
import { db } from "./firebase";
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


  //read

  
  //create
  /*
  const [idEmail, SetIdEmail] = useState()
  const handleemailid = (emailid) =>{
    SetIdEmail(emailid)
    

  }
*/

  //read data
  
  useEffect(() => {
    const q = query(collection(db, "cart"))
    const unsubscribe =  onSnapshot(q, (querySnapshot)=>{
      let objarray = []
      querySnapshot.forEach((doc)=>{
        objarray.push({...doc.data(), id: doc.id })
      })
      console.log(objarray[0].items)
      setItems(objarray[0].items)
    })
    
  }, [])
  




  

  

  const createTodo = async (e) =>{

    await setDoc(doc(db, "cart", "test"), {
     items
    });
    
  }
  //update
  createTodo()
  

  return (
    <AuthContextProvider>
    <Router>
      <div className="App">
        <Nav></Nav>

        

        <Routes>
          <Route path="/" element={<Signin></Signin>}></Route>
          <Route path="/signup" element={<Signup></Signup>}></Route>
          <Route path="/account" element={<Account></Account>}></Route>

          <Route path="/about" element={<About></About>} />
          <Route path="/shop" element={<Shop></Shop>} />
          <Route
            path="/shop/:id"
            element={<ItemDetails addtolist={addtolist}></ItemDetails>}
          ></Route>
          <Route
            path="/cart"
            element={<ProtectedRoutes><ShoppingCart items={items} subtract={subtract} addition={addition}></ShoppingCart></ProtectedRoutes>}
          ></Route>
        </Routes>

      </div>
    </Router>
    </AuthContextProvider>
  );
}

export default App;
