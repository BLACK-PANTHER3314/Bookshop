import React from "react";

import list from "../../public/list.json";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

import Cards from "./Cards";

function freebook() {
  const freeBook = list.filter((data) => data.category === "Free");  

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className=" max-w-screen-2x1 container mx-auto md:px-20 px-4">
        <div className="">
          <h1 className="font-semibold text-2xl pb-2 ">
            Free Offered Courses:
          </h1>
          <p className="pb-4">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex natus a
            adipisci id. Excepturi soluta ad vitae repellendus sit vel
            voluptates ex! Eaque consequuntur beatae alias. Tempore delectus
            eaque ad.
          </p>
        </div>

        <div className="pb-10">
          <Slider {...settings}>
            {freeBook.map((item) => {
              

              return <Cards item={item} key={item.id}  />;


              


            })}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default freebook;
