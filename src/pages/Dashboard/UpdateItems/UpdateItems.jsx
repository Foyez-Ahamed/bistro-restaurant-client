import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const image_hosting = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting}`;

const UpdateItems = () => {
  
    const items = useLoaderData();

  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
    
  const {
    register,
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
   
    // image upload to image bb then get url // 
    const imageFile = {image : data.image[0]};

    const res = await axiosPublic.post(image_hosting_api, imageFile, {
        headers: {
            'content-type' : 'multipart/form-data'
        }
    })

    // now send the menu item data to the server with image url // 

    if(res.data.success){
      const menuItem = {
        name : data.name,
        category : data.category,
        price : parseFloat(data.price),
        recipe : data.recipe,
        image : res.data.data.display_url
      }

      const updateMenu = await axiosSecure.patch(`/api/v1/updateMenu/${items._id}`, menuItem);

      console.log(updateMenu.data);

      if(updateMenu.data.modifiedCount > 0){
        Swal.fire({
          position: "top",
          icon: "success",
          title: `${data.name} updated to the menu successfully`,
          showConfirmButton: false,
          timer: 1500
        });
        // reset();
      }

    }
  };
    

   return (
    <div>

      <div>
        <SectionTitle
          heading={"UPDATE ITEMS"}
          subTitle={"---New one ?---"}
        ></SectionTitle>
      </div>

      <section className="flex justify-center items-center w-full md:w-full shadow-xl rounded-xl p-3 mx-auto bg-slate-100 mt-10">
        <div>
          <div className="mt-10">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col md:flex-col lg:flex-row gap-6">
                <div className="form-control">
                  <label>Recipe Name*</label>
                  <input
                    type="text"
                    defaultValue={items.name}
                    {...register("name")}
                    placeholder="Recipe Name"
                    name="name"
                    className="input mt-2  w-full md:w-[390px] lg:w-[800px]"
                  />{" "}
                </div>
              </div>

              <div className="flex flex-col md:flex-col lg:flex-row gap-6 mt-3">
                <div className="form-control">
                  <label>Category*</label>
                  <select
                    name="category"
                    defaultValue={items.category}
                    {...register("category")}
                    className="input mt-2 w-full md:w-[390px] lg:w-[390px]"
                  >
                    <option value="salad">salad</option>
                    <option value="pizza">pizza</option>
                    <option value="soup">soup</option>
                    <option value="dessert">dessert</option>
                    <option value="drinks">drinks</option>
                  </select>
                </div>

                <div className="form-control">
                  <label>Price*</label>
                  <input
                    type="text"
                    {...register("price", {required: true})}
                    placeholder="Price"
                    defaultValue={items.price}
                    name="price"
                    className="input mt-2  w-full md:w-[390px] lg:w-[390px]"
                  />{" "}
                </div>
              </div>

              <div className="flex flex-col md:flex-col lg:flex-row gap-6 mt-3">
                <div className="form-control">
                  <label>Recipe Details*</label>
                  <textarea
                    name="recipe"
                    defaultValue={items.recipe}
                    {...register("recipe")}
                    className="textarea textarea-bordered mt-2  w-full md:w-[390px] lg:w-[800px]"
                    placeholder="Bio"
                  ></textarea>{" "}
                </div>
              </div>

              <div className="flex flex-col md:flex-col lg:flex-row gap-6 mt-4">
                <input
                  type="file"
                  
                  {...register("image", {required:true})}
                  className="file-input file-input-ghost w-full max-w-xs"
                />
              </div>

              <button
                className="px-5 py-2 bg-gray-200 border-b-4 rounded-md text-[#BB8506] border-[#BB8506] hover:bg-[#111827] flex justify-center items-center gap-2 mt-5"
              >
                Update Items <FaUtensils></FaUtensils>
              </button>

            </form>
          </div>
        </div>
      </section>

    </div>
  );
};

export default UpdateItems;
