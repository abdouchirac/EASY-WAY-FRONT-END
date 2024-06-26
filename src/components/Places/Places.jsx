import React from "react";
import PlaceCard from "./PlaceCard";
import Img1 from "../../assets/places/boat.jpg";
import Img2 from "../../assets/places/tajmahal.jpg";
import Img3 from "../../assets/places/water.jpg";
// import Img4 from "../../assets/places/place4.jpg";
// import Img5 from "../../assets/places/place5.jpg";
// import Img6 from "../../assets/places/place6.jpg";

const PlacesData = [
  {
    img: Img1,
    title: "Boat",
    // location: "USA",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
    // price: 6700,
    // type: "Cultural Relax",
  },
  {
    img: Img2,
    title: "Fast and Safe",
    // location: "India",
    description:
      "Experience speedy and secure rides with our trusted drivers. Your safety and comfort are our top priorities, guaranteed every time you ride with us.",
    // price: 6700,
    // type: "Cultural Relax",
  },
  {
    img: Img3,
    title: "Experience Drivers",
    // location: "US",
    description:
      "Benefit from skilled and experienced drivers who prioritize your journey's smoothness and safety. They're committed to providing you with the best travel experience possible.",
    // price: 6200,
    // type: "Cultural Relax",
  },
  
  
  
];

const Places = ({ handleOrderPopup }) => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
          Why Choose Us
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {PlacesData.map((item, index) => (
              <PlaceCard
                handleOrderPopup={handleOrderPopup}
                key={index}
                {...item}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Places;
