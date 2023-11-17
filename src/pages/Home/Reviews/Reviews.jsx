import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { BiSolidQuoteLeft } from 'react-icons/bi';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
const Reviews = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])

    return (
        <section>
            <div>
                <SectionTitle heading={'TESTIMONIALS'} subTitle={'---What Our Clients Say---'}></SectionTitle>
            </div>

            <div className="mt-5">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {
            reviews.map(review => <SwiperSlide key={review._id}>
               
                  <div className=" px-14 space-y-4 lg:px-20">
                    <p className="flex justify-center text-6xl mb-4"><BiSolidQuoteLeft></BiSolidQuoteLeft></p>
                    <p className="flex justify-center text-6xl mb-4"> <Rating style={{ maxWidth: 100 }} value={review.rating} readOnly /></p>
                    <p>{review.details}</p>
                    <p className="text-center mt-4 font-bold text-[#CD9003]">{review.name}</p>
                  </div>
                
                </SwiperSlide> )
        }
        </Swiper>
    </div>

        </section>
    );
};

export default Reviews;