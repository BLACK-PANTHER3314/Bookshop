import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import { Link } from "react-router-dom";
import axios from "axios";

function Course() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:3000");
        const result = res.data;
        console.log(result);
        setBook(res.data);
      } catch {
        (error) => console.log(error);
      }
    };
    getBook();
  }, []);
  return (
    <>
      <div className="max-w-screen-2x1 container my-10 mx-auto md:px-20 px-4">
        <div className="pt-20 text-center  ">
          <h1 className="text-2xl md: text-4xl">
            We're delighted have you{" "}
            <span className="text-pink-500">Here! :)</span>{" "}
          </h1>
          <p className="pt-5 mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            maxime quis reprehenderit nobis veritatis quas fugit nemo asperiores
            dolor at voluptas facere maiores, temporibus vel quod aspernatur?
            Modi, unde eos.
          </p>
          <Link
            to="/"
            className="bg-pink-500 text-white px-4 py-2 rounded-md  mt-5 hover:bg-pink-700 duration-300 "
          >
            {" "}
            Back
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-10">
          {book.map((item) => {
            return (
              <div className=" " key={item._id}>
                <div className="card bg-base-100 w-95 shadow-xl px-5 hover:scale-105 duration-200 cursor-pointer mb-5  ">
                  <figure>
                    <img src={item.image} alt="Shoes" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">
                      {item.name}
                      <div className="badge badge-secondary">
                        {item.category}
                      </div>
                    </h2>
                    <p>{item.title}</p>
                    <div className="card-actions justify-between">
                      <div className="badge badge-outline">${item.price}</div>
                      <div className="badge badge-outline cursor-pointer hover:bg-pink-500 duration-500 hover:text-white">
                        Buy Now
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Course;
