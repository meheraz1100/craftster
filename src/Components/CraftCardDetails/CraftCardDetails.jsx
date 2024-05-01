import { IoArrowBackCircle } from "react-icons/io5";
import { NavLink, useLoaderData } from "react-router-dom";

const CraftCardDetails = () => {

  
  const crafts = useLoaderData()

  const {
    _id,
    email,
    name,
    item_name,
    image_url,
    subcatagory,
    short_description,
    price,
    rating,
    customization,
    processing_time,
    stockStatus,
  } = crafts;
  
  console.log(_id)


  return (
    <div>
      <NavLink to="/allCrafts" className="text-4xl">
        <button><IoArrowBackCircle /></button>
      </NavLink>
      <div className="card card-side bg-base-100 shadow-xl my-4">
        <figure>
          <img
            src={image_url}
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Image Name: {item_name}</h2>
          <p>Short Description: {short_description}</p>
          <p>Subcatagory: {subcatagory}</p>
          <p>Price: ${price}</p>
          <p>Rating: {rating} Ster</p>
          <p>Customization: {customization}</p>
          <p>Processing time: {processing_time}</p>
          <p>Stock Status: {stockStatus}</p>
        </div>
      </div>
    </div>
  );
};

export default CraftCardDetails;
