import { FaEye } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const AllCraftCard = ({craft,setCrafts, crafts}) => {


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
      } = craft;


      const handleDelete = (_id) => {
        console.log(_id);
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            fetch(`https://m-57-assignment-10-craftster-server.vercel.app/addCraftItem/${_id}`, {
                method: "DELETE"
            })
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
                if (data.deletedCount > 0) {
                    Swal.fire({
                      title: "Deleted!",
                      text: "Your Craft has been deleted.",
                      icon: "success"
                    });
                    // delete craft items from the UI
                    const updatedCrafts = crafts.filter((craft) => craft._id!== _id);
                    setCrafts(updatedCrafts);
                }
              });
          }
        });
      };

  return (
    <div>
      <div className="card card-side shadow-2xl">
        <figure>
          <img className="rounded-lg" src={image_url} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{item_name}</h2>
          <p>{short_description}</p>
          <div className="card-actions justify-end">
            <div className="join space-x-4 text-xl">
              {/* <button className="tooltip join-item" data-tip="View Details">
                <FaEye></FaEye>
              </button> */}

              <Link to={`/craftCardDetails/${_id}`}>
                <button className="tooltip join-item" data-tip="View Details">
                  <FaEye></FaEye>
                </button>
              </Link>
              <button
                onClick={() => handleDelete(_id)}
                className="tooltip join-item"
                data-tip="Delete"
              >
                <MdDelete></MdDelete>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCraftCard;
