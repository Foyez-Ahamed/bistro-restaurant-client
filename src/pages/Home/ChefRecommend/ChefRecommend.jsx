import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";


const ChefRecommend = () => {

    const [recommend, setRecommend] = useState([]);

    useEffect(() => {
        fetch('recommends.json')
        .then(res => res.json())
        .then(data => setRecommend(data))
    },[])

    return (
        <section>
            <div>
                <SectionTitle heading={'CHEF RECOMMENDS'} subTitle={'---Should Try---'}></SectionTitle>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    recommend.map(item => <div key={item.id} className="card bg-base-100 shadow-xl">
                    <figure>
                      <img src={item.image}alt="items" className="rounded-xl w-full" />
                    </figure>
                    <div className="card-body items-center text-center">
                      <h2 className="card-title">{item.name}</h2>
                      <p>{item.description}</p>
                      <div className="card-actions">
                        <button className="px-5 py-2 bg-gray-200 border-b-4 rounded-md text-[#BB8506] border-[#BB8506]">Add to Cart</button>
                      </div>
                    </div>
                  </div>)
                }
            </div>
        </section>
    );
};

export default ChefRecommend;