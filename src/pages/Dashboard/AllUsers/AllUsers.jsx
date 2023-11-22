import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";
import toast from "react-hot-toast";


const AllUsers = () => {

    const axiosSecure = useAxiosSecure();

    const { data : users = [], refetch } = useQuery({
        queryKey:['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/api/v1/getUsers');
            return res.data;
        }
    })

    const handleMakeAdmin = (user) => {
        axiosSecure.patch(`/api/v1/updateUserAdmin/${user._id}`)
        .then(res => {
            console.log(res.data);
            if(res.data.modifiedCount > 0) {
                refetch();
                toast.success(`${user.name} is admin now !`)
            }
        })
    }


    const handleUserDelete = (user) => {
        
        Swal.fire({
            title: "Are you sure?",
            text: "Want to remove user !",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Remove!"

          }).then((result) => {
            if (result.isConfirmed) {
            
              axiosSecure.delete(`/api/v1/deleteUser/${user._id}`)
              .then(res => {
                refetch();
                if(res.data.deletedCount > 0) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
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
          heading={"All USERS?"}
          subTitle={"---How Many ??---"}
        ></SectionTitle>
      </div>
       

       
      <div className="flex justify-between">
        <h2 className="text-xl font-bold">Total Users : {users.length}</h2>
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
          <th>Email</th>
          <th>Role</th>
          <th>Action</th>
        </tr>
      </thead>
  
      <tbody>
  
        {
          users.map((user, index) =>  <tr key={user._id}>
              <th>
                {index + 1}
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={user.image} alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <span className="badge badge-ghost badge-sm">{user.name}</span>
              </td>
              <td>{user.email}</td>
              <th>

              {
                user.role === 'admin' ? 'Admin' : <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost btn-xs"><FaUsers className="text-xl  text-[#BB8506]"></FaUsers></button>
              }

              </th>

              <th>
                <button onClick={() => handleUserDelete(user)} className="btn btn-ghost btn-xs"><FaTrashAlt className="text-xl text-[#BB8506]"></FaTrashAlt></button>
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

export default AllUsers;