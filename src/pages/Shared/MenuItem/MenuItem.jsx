
const MenuItem = ({item}) => {
    const {image, name, price, recipe} = item || {};
    return (
        <section>
            <div className="flex space-x-6">
                <img className="w-[100px] rounded-tl-0 rounded-tr-200 rounded-br-200 rounded-bl-200" src={image} alt="" />
                <div>
                    <h3 className="uppercase">{name}----------</h3>
                    <p>{recipe}</p>
                </div>
                <p className="text-[#BB8506]">{price}</p>
            </div>
        </section>
    );
};

export default MenuItem;