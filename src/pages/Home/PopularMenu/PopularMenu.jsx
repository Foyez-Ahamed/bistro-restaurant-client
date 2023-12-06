import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";
import { Link } from "react-router-dom";
const PopularMenu = () => {

    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular');
    // const [menu, setMenu] = useState([]);

    // useEffect(() => {
    //     fetch('menu.json')
    //     .then(res => res.json())
    //     .then(data => {
    //         const popularItem = data.filter(item => item.category === 'popular');
    //         setMenu(popularItem);
    //     })
    // },[])

    return (
        <section>
            <div>
                <SectionTitle heading={'FROM OUR MENU'} subTitle={'---Check it out---'}>
                </SectionTitle>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {
                    popular.map(item => <MenuItem key={item._id} item={item} ></MenuItem>)
                }
            </div>

            <div className="mt-8 text-center">
               <Link to='/menu'>
               <button className="border-b-4 rounded-md text-[#BB8506] border-[#BB8506] hover:bg-zinc-900 p-2">View Full Menu</button>
               </Link>
            </div>
        </section>
    );
};

export default PopularMenu;