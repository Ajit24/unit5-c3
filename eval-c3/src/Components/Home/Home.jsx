import { BookCard } from "../BookCard/BookCard";
import { SortAndFilterButtons } from "../SortAndFilterButtons/SortAndFilterButtons";
import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
export const Home = () => {
  // get all books when user lands on the page
  // populate them as mentioned below

  const [list, setList] = useState([])

  useEffect(() => {
    axios.get("http://localhost:8080/products").then(({data}) => {
          console.log(data);
          setList([...data])
        })
  },[])

  const Main = styled.div`
    /* Apply some responsive styling to children */
  `;

  return (
    <div className="homeContainer">
      <h2 style={{ textAlign: "center" }}>Home</h2>
      <SortAndFilterButtons
        handleSort={
          "give handleSort function to this component, that sorts books"
        }
      />

      <Main className="mainContainer">
        {/* 
            Iterate over books that you get from network
            populate a <BookCard /> component
            pass down books id, imageUrl, title, price and anything else that you want to 
            show in books Card.
        */}
        {
          list.map((e) => (
            <div>
            
              <p> Title:{e.title}</p>
              <p>author:{e.author}</p>
              <p>description:{e.description}</p>
            <img src={e.image_url} alt = ""/>
            </div>
          ))
        }
      </Main>
    </div>
  );
};