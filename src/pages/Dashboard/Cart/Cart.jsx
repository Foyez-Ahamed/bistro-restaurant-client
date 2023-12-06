import Swal from "sweetalert2";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useCart from "../../../hooks/useCart";
import { FaTrashAlt } from "react-icons/fa";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart, refetch] = useCart();

  const totalItems = cart.length;

  const totalPrice = cart.reduce((total, sum) => total + sum.price, 0);

  const axiosSecure = useAxiosSecure();

  const handleCartRemove = (id) => {

    Swal.fire({
        title: "Are you sure?",
        text: "Want to remove food from cart !😑",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, remove it!"
      }).then((result) => {

        if (result.isConfirmed) {

        axiosSecure.delete(`/api/v1/cancelCarts/${id}`)
        .then(res => {
            if(res.data.deletedCount > 0){
                refetch();
                Swal.fire({
                  position: "top",
                  icon: "success",
                  title: "Item deleted successfully",
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
          heading={"ADD MORE?"}
          subTitle={"---My Cart---"}
        ></SectionTitle>
      </div>

      <div className="flex justify-between">
        <h1 className="text-xl font-bold">Total items : {totalItems}</h1>
        <h2 className="text-xl font-bold">Total price : {totalPrice}</h2>

        {
           cart.length ? <Link to='/dashboard/payment'><button className="px-5  bg-gray-200 border-b-4 rounded-md text-[#BB8506] border-[#BB8506] hover:bg-[#111827] cursor-pointer">
           Pay
         </button> </Link> :

          <button disabled className="px-5  bg-gray-200 border-b-4 rounded-md text-[#BB8506] border-[#BB8506] cursor-pointer">
          Pay
        </button>
        }

      </div>

      <div className="mt-10">
        
      <div className="overflow-x-auto">
    <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          #
        </th>
        <th>Image</th>
        <th>Items</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>

    <tbody>

      {
        cart.map((item, index) =>  <tr key={item._id}>
            <th>
              {index + 1}
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
              </div>
            </td>
            <td>
              <span className="badge badge-ghost badge-sm">{item.name}</span>
            </td>
            <td>${item.price}</td>
            <th>
              <button onClick={() => handleCartRemove(item._id)} className="btn btn-ghost btn-xs"><FaTrashAlt className="text-xl text-red-600"></FaTrashAlt></button>
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

export default Cart;
