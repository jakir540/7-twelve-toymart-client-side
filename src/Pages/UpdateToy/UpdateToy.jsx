import React from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateToy = () => {
  const { id } = useParams();
  console.log({ id });
  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;

    const name = form.name.value;
    const email = form.email.value;

    const photo = form.photo.value;
    const rating = form.rating.value;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    const category = form.category.value;
    const insertBody = {
      name,
      email,
      photo,
      rating,
      price,
      category,
      quantity,
      description,
    };
    console.log(insertBody);

    fetch(`https://7-twelve-toymart-server.vercel.app/updateToy/${id}`, {
   
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body:JSON.stringify(insertBody)
    }).then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "updated Successfully",
            showConfirmButton: false,
            timer: 2000,
          });
        }
      });
  };

  return (
    <div>
      this is update Toy Component
      <div>
        <h1 className="text-center text-4xl text-orange-500 text-bold mt-10">
          Add A Toy
        </h1>
        <div className=" w-[600px]  bg-slate-200 mx-auto h-[700px] my-16 rounded-lg shadow-2xl">
          <form onSubmit={handleUpdate}>
            <div className="flex flex-col items-center mt-16 p-12  ">
              <div className="flex gap-8 mt-3">
                <input
                  className="p-3  mb-6 mt-4  shadow-2xl rounded-md "
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                />

                <input
                  className="p-3  mb-6 mt-4  shadow-2xl rounded-md "
                  type="text"
                  name="sellerName"
                  placeholder="Seller Name"
                />
              </div>

              <div className="flex gap-8 mt-3">
                <input
                  className="p-3  mb-6  shadow-2xl rounded-md "
                  type="email"
                  name="email"
                  placeholder="Seller Email"
                />

                <input
                  className="p-3  mb-6 shadow-2xl rounded-md "
                  type="text"
                  name="category"
                  defaultValue="category"
                />
              </div>

              <div className="flex gap-8 mt-3">
                <input
                  className="p-3  shadow-2xl rounded-md mb-6 "
                  type="text"
                  name="price"
                  defaultValue="price"
                />

                <input
                  className="p-3  mb-6 shadow-2xl rounded-md "
                  type="text"
                  name="rating"
                  defaultValue="rating"
                />
              </div>

              <div className="flex gap-8 mt-3">
                <input
                  className="p-3  shadow-2xl rounded-md mb-6 "
                  type="text"
                  name="quantity"
                  defaultValue="10"
                />

                <input
                  className="p-3  mb-6 shadow-2xl rounded-md "
                  type="url"
                  name="photo"
                  defaultValue="URL"
                />
              </div>

              <textarea
                className="p-3  mb-6 mt-5 shadow-2xl rounded-md "
                type="text"
                name="description"
                cols={40}
                defaultValue="description"
              />

              <button
                type="submit"
                className="bg-slate-500 p-3 mt-10 btn border-none w-32"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateToy;
