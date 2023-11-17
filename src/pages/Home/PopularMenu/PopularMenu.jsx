import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";
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
                <button className="border-b-4 py-2">View Full Menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;