import { Link } from "react-router-dom";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import Cover from "../../Shared/Cover/Cover";

const MenuCategory = ({items, title, image, description}) => {
    return (
        <div>
            { title && <Cover image={image} title={title} description={description}> </Cover>}
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-8">
                {
                    items.map(item => <MenuItem key={item._id} item={item} ></MenuItem>)
                }
            </div>

            
            <div className="mt-8 text-center">
               <Link to={`/order/${title}`}> <button className="border-b-4 py-2 rounded-lg">ORDER YOUR FAVOURITE FOOD</button> </Link>
            </div>
        </div>
    );
};

export default MenuCategory;