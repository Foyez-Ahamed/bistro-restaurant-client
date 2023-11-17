import { Parallax } from 'react-parallax';

const Cover = ({image, title, description}) => {
    return (

      <Parallax
      blur={{ min: -50, max: 50 }}
      bgImage={image}
      bgImageAlt="the menu"
  >
      <div
      className="hero min-h-screen"
      // style={{
      //   backgroundImage:
      //     `url("${image}")`,
      // }}
    >
      <div className="hero-overlay bg-opacity-30"></div>
      <div className="hero-content">
        <div className="lg:w-[800px] lg:h-[220px] p-8 bg-[#15151599] opacity-80 text-center text-[#fff] z-10 flex justify-center items-center">
         <div>
         <h1 className="mb-5 text-4xl font-bold uppercase tracking-widest">{title}</h1>
          <p className="mb-5 text-md tracking-widest">
           {description}
          </p>
         </div>
        </div>
      </div>
        </div>
  </Parallax>

    );
};

export default Cover;