import { NavLink, useLoaderData } from "react-router-dom";
import AllCraftCard from "../AllCraftsCards.jsx/AllCraftCard";
import { IoArrowBackCircle } from "react-icons/io5";
import { useState } from "react";
import { Tooltip } from "react-tooltip";

const AllCrafts = () => {
  const loadedCrafts = useLoaderData();
  const [crafts, setCrafts] = useState(loadedCrafts);

  return (
    <>
      <h1 className="text-6xl font-bold text-center">All Crafts</h1>
      <NavLink to="/" className="text-4xl tooltip" data-tip="back">
        <button>
          <IoArrowBackCircle />
        </button>
      </NavLink>
      <div className="grid md:grid-cols-2 gap-4 my-6" data-tooltip-id="my-tooltip" data-tooltip-content="Click Each Items to see Details">
      <Tooltip id="my-tooltip" />
        {crafts.map((craft) => (
          <AllCraftCard
          key={craft._id}
          craft={craft}
          crafts={crafts}
          setCrafts={setCrafts}
          ></AllCraftCard>
        ))}
      </div>
    </>
  );
};

export default AllCrafts;
