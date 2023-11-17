import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import './feature.css';

const Featured = () => {
  return (
    <section className="featuredBg bg-fixed text-white">
      <div className="bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.08)]">
      <div className="py-10">
        <SectionTitle
          heading={"FROM OUR MENU"}
          subTitle={"---Check it out---"}
        ></SectionTitle>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center px-12 lg:px-36 gap-6 pb-20">
        <div>
          <img src={featuredImg} alt="" />
        </div>

        <div>
          <p>
            March 20, 2023 WHERE CAN I GET SOME? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Error voluptate facere, deserunt
            dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad
            laudantium tempore consequatur consequuntur omnis ullam maxime
            tenetur.
          </p>
          <button className="mt-5 px-5 py-2 border-b-4 rounded-md text-[#fff] border-[#fff]">Read More</button>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Featured;
