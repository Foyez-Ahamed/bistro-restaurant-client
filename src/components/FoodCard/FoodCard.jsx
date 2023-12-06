import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";

const FoodCard = ({ item }) => {
  const {_id, image, name, recipe, price } = item || {};
  const {user} = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();

  const [, refetch] = useCart();

  const handleAddToCart = () => {

  
    if(user && user.email){
      //send to database//

     const cartItem = {
       menuId : _id,
       email : user.email,
       name,
       image,
       price
     }

     axiosSecure.post('/api/v1/createCarts', cartItem)
     .then(res => {
      console.log(res.data);
      if(res.data.insertedId){
        Swal.fire({
          position: "top",
          icon: "success",
          title: `${name} has been saved cart`,
          showConfirmButton: false,
          timer: 1500
        });

        // refetch cart to update the cart count // 
        refetch();

      }
     })

    } 
    else {
      Swal.fire({
        title: "You are not login",
        text: "Please login for add to cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login"
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login', {state: {from : location}})
        }
      });
    }
  }

  return (
    <div>
      <div className="card lg:h-[420px] bg-base-100 shadow-xl relative">
        <figure>
          <img
            src={image}
            alt="menu"
            className="rounded-xl w-full h-[230px]"
          />
        </figure>
        <div className="card-body items-center text-center ">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <p className="absolute top-4 right-4 text-white bg-black rounded-md px-2">${price}</p>
          <div className="card-actions">

        
         <button onClick={handleAddToCart} className="px-5 py-2 bg-gray-200 border-b-4 rounded-md text-[#BB8506] border-[#BB8506] hover:bg-[#111827]">Add to Cart</button>
        

          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
