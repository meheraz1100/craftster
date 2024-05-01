import { useContext, useState } from "react";
import { FaEye, FaPencilAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";
import Swal from "sweetalert2";

const MyWishList = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const crafts = useLoaderData();
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
  const data = crafts.filter((item) => item.email === user?.email);

  console.log(crafts);
  console.log(_id);

  const [addedCraft, setAddedCraf] = useState([]);
  const [displayCrafts, setDisplayCrafts] = useState([]);

  const handleCraftFilter = (filter) => {
    if (filter === "all") {
      setDisplayCrafts(addedCraft);
    } else if (filter === "YES") {
      const costomizable = addedCraft.filter(
        (item) => item.customization === "YES"
      );
      setDisplayCrafts(costomizable);
    } else if (filter === "NO") {
      const nonCustomizable = addedCraft.filter(
        (item) => item.customization === "NO"
      );
      setDisplayCrafts(nonCustomizable);
    } else {
      console.log("ERROR: Unknown");
    }
  };

  return (
    <>
      <div className="grid md:grid-cols-2 gap-4 my-6">
      <details className="dropdown text-center">
        <summary className="m-1 btn">Sort By</summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          <li onClick={() => handleCraftFilter("all")}>
            <a>All</a>
          </li>
          <li onClick={() => handleCraftFilter("YES")}>
            <a>Customizable</a>
          </li>
          <li onClick={() => handleCraftFilter("NO")}>
            <a>Non Customizable</a>
          </li>
        </ul>
      </details>
      <h1 className="text-3xl font-bold text-center">My Wish List</h1>
      {data.map((item) => (
        <div>
          <div key={item._id}>
            <div>
              <div className="card card-side shadow-2xl">
                <figure>
                  <img
                    className="rounded-lg"
                    src={item.image_url}
                    alt="Movie"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{item.item_name}</h2>
                  <p>{item.short_description}</p>
                  <p>Subcatagory: {item.subcatagory}</p>
                  <p>Price: $ {item.price}</p>
                  <p>Rating: {item.rating} Ster</p>
                  <p>Customization: {item.customization}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      </div>
    </>
  );
};
export default MyWishList;
