import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const PaymentHistory = () => {

    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data : payments = [] } = useQuery({
        queryKey: ['payments', user.email ],
        queryFn : async() => {
            const res = await axiosSecure.get(`/api/v1/createPayments/${user.email}`);
            return res.data;
        }
    })

    console.log(payments);



  return (
    <div>
      <div>
        <SectionTitle
          heading={"HISTORY"}
          subTitle={"---At a Glance!---"}
        ></SectionTitle>
      </div>

      <div className="flex justify-between">
        <h2 className="text-xl font-bold">Total Payment : {payments.length}</h2>
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
          <th>EMAIL</th>
          <th>TRANSACTION ID</th>
          <th>TOTAL PRICE</th>
          <th>PAYMENT DATE</th>
          
        </tr>
      </thead>
  
      <tbody>
  
        {
          payments.map((payment, index) =>  <tr key={payment._id}>
              <th>
                {index + 1}
              </th>
              <td>
                {payment?.email}
              </td>
              <td>
               {payment?.transactionId}
              </td>

              <td>
                {payment.price}
               
                </td>


              <th>

              {payment.date}

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

export default PaymentHistory;
