import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCraftItem = () => {
  const craft = useLoaderData();

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

  const handleUpdateItem = (e) => {
    e.preventDefault();

    const form = e.target;

    const email = form.email.value;
    const name = form.name.value;
    const item_name = form.item_name.value;
    const image_url = form.image_url.value;
    const subcatagory = form.subcatagory.value;
    const short_description = form.short_description.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const customization = form.customization.value;
    const processing_time = form.processing_time.value;
    const stockStatus = form.stockStatus.value;

    const updatedCraftItem = {
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
    };

    console.log(
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
      stockStatus
    );

    fetch(`https://m-57-assignment-10-craftster-server.vercel.app/addCraftItem/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCraftItem),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success",
            text: "Craft Updated SuccessFully",
            icon: "success",
            confirmButtonText: "Thanks",
          });
        }
        form.reset();
      });
  };

  return (
    <div className="bg-[#F4F3F0] p-24">
      <h1 className="text-3xl font-extrabold">Update Craft : {item_name}</h1>
      <form className="card-body" onSubmit={handleUpdateItem}>
        {/* price and  rating row */}
        <div className=" md:flex">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">User Email</span>
            </label>
            <input
              defaultValue={email}
              disabled
              type="email"
              placeholder="Email"
              name="email"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">User Name</span>
            </label>
            <input
              type="text"
              defaultValue={name}
              placeholder="Name"
              className="input input-bordered w-full"
              name="name"
              required
            />
          </div>
        </div>
        {/* item name and image row */}
        <div className=" md:flex">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Item Name</span>
            </label>
            <input
              type="text"
              defaultValue={item_name}
              name="item_name"
              placeholder="name"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Image URL</span>
            </label>
            <input
              type="text"
              defaultValue={image_url}
              placeholder="Image URL"
              className="input input-bordered w-full"
              name="image_url"
              required
            />
          </div>
        </div>
        {/* Subcatagory name and short description row */}
        <div className=" md:flex">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Subcatagory Name</span>
            </label>
            <input
              type="text"
              defaultValue={subcatagory}
              placeholder="Subcatagory"
              name="subcatagory"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Short Description</span>
            </label>
            <input
              type="text"
              defaultValue={short_description}
              placeholder="Short Description"
              className="input input-bordered w-full"
              name="short_description"
              required
            />
          </div>
        </div>
        {/* price and  rating row */}
        <div className=" md:flex">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              defaultValue={price}
              placeholder="Price"
              name="price"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <input
              type="text"
              defaultValue={rating}
              placeholder="Rating"
              className="input input-bordered w-full"
              name="rating"
              required
            />
          </div>
        </div>
        {/* customization and processing row */}
        <div className=" md:flex">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">
                Customization - Example: YES or NO
              </span>
            </label>
            <input
              type="text"
              defaultValue={customization}
              placeholder="Customization"
              name="customization"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Processing Time</span>
            </label>
            <input
              type="text"
              defaultValue={processing_time}
              placeholder="Processing Time"
              className="input input-bordered w-full"
              name="processing_time"
              required
            />
          </div>
        </div>
        {/* stock status row */}
        <div className=" md:flex">
          <div className="form-control md:w-full">
            <label className="label">
              <span className="label-text">
                Stock Status - example- In stock, Made to Order
              </span>
            </label>
            <input
              type="text"
              defaultValue={stockStatus}
              placeholder="Stock Status"
              name="stockStatus"
              className="input input-bordered w-full"
              required
            />
          </div>
        </div>
        <button className="btn">Update Craft</button>
      </form>
    </div>
  );
};

export default UpdateCraftItem;
