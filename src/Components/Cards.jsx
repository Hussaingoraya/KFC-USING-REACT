import React from 'react'
import { useState } from 'react';

export default function Cards(props) {
      // Initialize counts state as an array with the length equal to the number of products
//   const [counts, setCounts] = useState(Array(props.products.length).fill(0));
// const [counts, setCounts] = useState(props.products.map(() => 0)); 
//  const incrementCount = (index) =>{
//     const newCounts = [...counts];
//     newCounts[index]++;
//     setCounts(newCounts);
//   }


//   const [totalItems, setTotalItems] = useState(0);
//   const [totalAmount, setTotalAmount] = useState(0);

  // Function to increment the count for a specific product
//   const incrementCount = (index, price) => {
//     const itemPrice = parseInt(price.replace("Rs ", ""));
//     setCounts((prevCounts) =>
//       prevCounts.map((count, i) => (i === index ? count + 1 : count))
//     );
//     setTotalItems(totalItems + 1);
//     setTotalAmount(totalAmount + itemPrice);
//   };
  return (
    <div>
        <>
        <div className="row row-cols-1 row-cols-md-4 g-4 navbarrow">
        {props.products.map((items, index) => (
          <div className="col" key={index}>
            <div className="card h-100 d-flex flex-column">
              <img
                src={items.img}
                className="card-img-top d-block mx-auto img-fluid"
                alt={items.title}
              />
              <div className="card-body">
                <h5 className="card-title">{items.title}</h5>
                <p className="card-text">{items.desc}</p>
                <p className="card-text">{items.price}</p>
              </div>
              <div className="addToCart">
                <button
                  className="btn cartButton "
                  type="button" data-bs-toggle="modal" data-bs-target="#exampleModal"
                  
                >
                  ADD TO BUCKET
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
        </>
      
    </div>
  )
}
