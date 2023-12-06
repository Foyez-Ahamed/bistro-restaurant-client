import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import CallUs from "../CallUs/CallUs";
import Category from "../Category/Category";
import ChefRecommend from "../ChefRecommend/ChefRecommend";
import ChefServices from "../ChefServices/ChefServices";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Reviews from "../Reviews/Reviews";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Boss Cafe | Home</title>
      </Helmet>

      <Banner></Banner>

      <div className="mt-16">
        <Category></Category>
      </div>

      <div className="mt-16">
        <ChefServices></ChefServices>
      </div>

      <div className="mt-16">
        <PopularMenu></PopularMenu>
      </div>

      <div className="mt-16">
        <CallUs></CallUs>
      </div>

      <div className="mt-16">
        <ChefRecommend></ChefRecommend>
      </div>

      <div className="mt-16 mb-8">
        <Featured></Featured>
      </div>

      <div className="mt-16 mb-8">
        <Reviews></Reviews>
      </div>
    </div>
  );
};

export default Home;
