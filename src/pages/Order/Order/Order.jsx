import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import oderCoverBg from '../../../assets/shop/banner2.jpg'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import { useState } from "react";
import useMenu from "../../../hooks/useMenu";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";

const Order = () => {
  const categories = ['SALAD', 'PIZZA', 'SOUPS', 'DESSERTS', 'DRINKS'];
  const {category} = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();
  const drinks = menu.filter(item => item.category === 'drinks');

  const desserts = menu.filter(item => item.category === 'dessert');

  const pizza = menu.filter(item => item.category === 'pizza');

  const salads = menu.filter(item => item.category === 'salad');

  const soups = menu.filter(item => item.category === 'soup');

    return (
        <div>
            <Helmet>
             <title>Bistro | Order</title>
           </Helmet>

           <div className="space-y-10">
            <Cover image={oderCoverBg} title={'ORDERS'} description={'Would you like to try a dish?'}></Cover>

            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
           <TabList className='flex gap-6 cursor-pointer font-bold text-center'>
           <Tab className='hover:text-[#BB8506] hover:underline'>SALAD</Tab>
           <Tab className='hover:text-[#BB8506] hover:underline'>PIZZA</Tab>
           <Tab className='hover:text-[#BB8506] hover:underline'>SOUPS</Tab>
           <Tab className='hover:text-[#BB8506] hover:underline'>DESSERTS</Tab>
           <Tab className='hover:text-[#BB8506] hover:underline'>DRINKS</Tab>
           </TabList>

           <TabPanel>

             <OrderTab items={salads}></OrderTab>

            {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {
                    salads.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                }
            </div> */}
           </TabPanel>
           <TabPanel>
           <OrderTab items={pizza}></OrderTab>
           {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {
                    pizza.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                }
            </div> */}
           </TabPanel>
           <TabPanel>
           <OrderTab items={soups}></OrderTab>
           {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {
                    soups.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                }
            </div> */}
           </TabPanel>
           <TabPanel>
           <OrderTab items={desserts}></OrderTab>
           {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {
                    desserts.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                }
            </div> */}
           </TabPanel>
           <TabPanel>
           <OrderTab items={drinks}></OrderTab>
           {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {
                    drinks.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                }
            </div> */}
           </TabPanel>
           </Tabs>
           </div>
        </div>
    );
};

export default Order;