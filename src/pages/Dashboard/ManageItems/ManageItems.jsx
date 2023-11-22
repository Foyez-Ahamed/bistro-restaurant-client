import { FaEdit, FaTrashAlt, } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ManageItems = () => {
   
    const [menu, refetch] = useMenu();
    const axiosSecure = useAxiosSecure();

    const handleDeleteItem = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "Want to delete items from menu",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              
              axiosSecure.delete(`/api/v1/removeMenu/${id}`)
              .then(res => {
                if(res.data.deletedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "top",
                        icon: "success",
                        title: "Item has been removed",
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
              })  

            
            }
          });
    }

  return (
    <div>

      <div>
        <SectionTitle
          heading={"MANAGE ITEMS"}
          subTitle={"---HURRY UP---"}
        ></SectionTitle>
      </div>

      <div className="flex justify-between">
        <h2 className="text-xl font-bold">Total Items : {menu.length} </h2>
      </div>


      <div className="mt-10">
        
        <div className="overflow-x-auto">
      <table className="table">
      {/* head */}
      <thead className="bg-[#BB8506] text-white font-bold">
        <tr>
          <th>
            #
          </th>
          <th>Image</th>
          <th>Name</th>
          <th>Price</th>
          <th>Manage</th>
          <th>Action</th>
        </tr>
      </thead>
  
      <tbody>
  
        {
          menu.map((menu, index) =>  <tr key={menu._id}>
              <th>
                {index + 1}
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={menu.image} alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <span className="badge badge-ghost badge-sm">{menu.name}</span>
              </td>

              <td>
                ${menu.price}
              </td>

              <th>
                <Link to={`/dashboard/updateItems/${menu._id}`}><button className="btn btn-ghost btn-xs"><FaEdit className="text-xl text-[#BB8506]"></FaEdit></button></Link>
              </th>
              
              <th>
                <button onClick={() => handleDeleteItem(menu._id)} className="btn btn-ghost btn-xs"><FaTrashAlt className="text-xl text-[#BB8506]"></FaTrashAlt></button>
              </th>

            </tr>)
        }
  
      </tbody>
    </table>
  </div>
  
      </div>

    </div>
  );
};

export default ManageItems;
