// import { SortAndFilterButtons } from "../SortAndFilterButtons/SortAndFilterButtons";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export const Mythology = () => {
  // get all books when user lands on the page
  // populate them as mentioned below

  // const Main = styled.div`
  //   /* Apply some responsive styling to children */
  // `;
  const [bookdata, setbookdata] = useState([]);

  const getbook = () => {
    axios.get("http://localhost:8080/books").then((res) => {
      var filt = res.data;

      var filt2 = filt.filter((e) => {
        return e.section == "Mythology";
      });

      setbookdata(filt2);

      // console.log(res.data);
    });
  };

  useEffect(() => {
    getbook();
  }, []);

  const nameasc = () => {
    axios.get("http://localhost:8080/books").then((res) => {
      var filt = res.data;
      filt.sort((a, b) => {
        return a.title - b.title;
      });
      console.log(filt);

      setbookdata(filt);
    });
  };
  const namedsc = () => {
    axios.get("http://localhost:8080/books").then((res) => {
      var filt = res.data;
      filt.sort((a, b) => {
        return b.title - a.title;
      });
      console.log(filt);

      setbookdata(filt);
    });
  };
  const pricedsc = () => {
    axios.get("http://localhost:8080/books").then((res) => {
      var filt = res.data;
      filt.sort((a, b) => {
        return b.price - a.price;
      });
      console.log(filt);

      setbookdata(filt);
    });
  };
  const priceasc = () => {
    axios.get("http://localhost:8080/books").then((res) => {
      var filt = res.data;
      filt.sort((a, b) => {
        return a.price - b.price;
      });
      console.log(filt);

      setbookdata(filt);
    });
  };

  return (
    <div className="homeContainer">
      <h2 style={{ textAlign: "center" }}>Mythology</h2>
      <div className="sortButtons">
        {/*
        Create 4 sorting buttons here to sort by following criteria:
        sort title in Ascending order  class: sortByTitleAsc
        sort title in Descending order class: sortByTitleDesc
        sort price asending order      class: sortByPriceAsc
        sort price descending order    class: sortByPriceDesc
        on every button click, call the reusable sorting function
        you received from Parent component, 
        and sort the data.
      */}
        <button
          className="sortByTitleAsc"
          onClick={() => {
            nameasc();
          }}
        >
          sortByTitleAsc
        </button>
        <button
          className="sortByTitleDesc"
          onClick={() => {
            namedsc();
          }}
        >
          sortByTitleDesc
        </button>
        <button
          className="sortByPriceAsc"
          onClick={() => {
            priceasc();
          }}
        >
          sortByPriceAsc
        </button>
        <button
          className="sortByPriceDesc"
          onClick={() => {
            pricedsc();
          }}
        >
          sortByPriceDesc
        </button>
      </div>
      {/* <SortAndFilterButtons
        handleSort={
          "give handleSort function to this component, that sorts books"
        }
      /> */}

      <div className="mainContainer">
        {/* 
            Iterate over books that you get from network
            populate a <BookCard /> component
            pass down books id, imageUrl, title, price and anything else that you want to 
            show in books Card.
        */}

        {bookdata.map((el) => {
          return (
            <Link to={`/bookdetailspage/${el.id}`}>
              <div className="bookCard">
                <img src={`${el.imageUrl}`} alt="" />
                <h2 className="title">{el.title}</h2>
                <p className="price">{el.price}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};