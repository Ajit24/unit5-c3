import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export const BookDetailsPage = () => {
  // Get book details based on ID whenever user lands on the page
  // ID will come from route
  const { id } = useParams();
  const [bookdata, setbookdata] = useState({});

  const getbook = () => {
    axios.get(`http://localhost:8080/books/${id}`).then((res) => {
      setbookdata(res.data);
      console.log(res.data);
    });
  };

  useEffect(() => {
    getbook();
  }, []);

  return (
    <>
      <div className="bookContainer">
        <h2 className="title">{bookdata.title}</h2>
        <img className="image" src={bookdata.imageUrl} alt="#dsfd" />
        <div className="author">{bookdata.author}</div>
        <div className="description">{bookdata.description}</div>
        <div className="price">{bookdata.price}</div>
        <div className="section">{bookdata.section}</div>
        <div className="isbnNumber">{bookdata.isbnNumber}</div>
        <ul className="reviews">
          {/* Reviews will be an array, iterate over them and create a new <li> for every review */}
        </ul>
      </div>
    </>
  );
};