import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuCover from '../../../assets/menu/banner3.jpg'
import dessertCover from '../../../assets/menu/dessert-bg.jpeg'
import pizzaCover from '../../../assets/menu/pizza-bg.jpg'
import saladCover from '../../../assets/menu/salad-bg.jpg'
import soupCover from '../../../assets/menu/soup-bg.jpg'
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";
const Menu = () => {

  const [menu] = useMenu();

  const offered = menu.filter(item => item.category === 'offered');

  const desserts = menu.filter(item => item.category === 'dessert');

  const pizza = menu.filter(item => item.category === 'pizza');

  const salads = menu.filter(item => item.category === 'salad');

  const soups = menu.filter(item => item.category === 'soup');




  return (
    <div>
      <Helmet>
        <title>Bistro | Menu</title>
      </Helmet>
      
      <div className="space-y-10">
        {/* main menu */}
        <Cover image={menuCover} title={'OUR MENU'} description={'Would you like to try a dish?'}></Cover>

        {/* title */}
        <SectionTitle heading={`TODAY'S OFFER`} subTitle={`---Don't miss---`}></SectionTitle>

        {/* todays offered */}
        <MenuCategory items={offered}></MenuCategory>

        {/* dessert menu */}
        {/* <Cover image={dessertCover} title={'DESSERTS'} description={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></Cover> */}

        <MenuCategory 
         items={desserts}
         title={'DESSERTS'}
         image={dessertCover}
         description={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
         >
        </MenuCategory>

        {/* pizza menu */}
        {/* <Cover image={pizzaCover} title={'PIZZA'} description={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></Cover> */}

        <MenuCategory
         items={pizza}
         title={'PIZZA'}
         image={pizzaCover}
         description={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
        >
        </MenuCategory>

        {/* salad menu */}
        {/* <Cover image={saladCover} title={'SALADS'} description={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></Cover> */}

        <MenuCategory 
        items={salads}
        title={'SALADS'}
        image={saladCover}
        description={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
        >

        </MenuCategory>

        {/* soup menu */}
        {/* <Cover image={soupCover} title={'SOUP'} description={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></Cover> */}

        <MenuCategory 
        items={soups}
        title={'SOUPS'}
        image={soupCover}
        description={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
        >
        </MenuCategory>

      </div>
    </div>
  );
};

export default Menu;
