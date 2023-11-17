

const SectionTitle = ({heading, subTitle}) => {
    return (
        <div className="text-center mb-10">
            <p className="text-[20px] tracking-widest text-[#D99904] italic">{subTitle}</p>
            <p className=" lg:text-3xl uppercase border-y-4 py-4 mt-4 w-4/12 lg:w-3/12 mx-auto">{heading}</p>
        </div>
    );
};

export default SectionTitle;