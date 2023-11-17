import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <section className="bg-zinc-900 text-white p-10">
        <div className="flex justify-between flex-col md:flex-col lg:flex-row gap-10">
          <div className="flex-1 text-center">
            <h1 className="text-xl font-bold mb-2">CONTACT US</h1>
            <p>
              123 ABS Street, Uni 21, Bangladesh +88 <br /> 123456789 <br /> Mon - Fri: 08:00
              - 22:00 <br /> Sat - Sun: 10:00 - 23:00
            </p>
          </div>

          <div className="flex-1 text-center">
            <h1 className="text-xl font-bold mb-2">Follow US</h1>
            <p>Join us on social media</p>
            <div className="flex gap-4 mt-4 ml-[115px] md:ml-[245px] lg:ml-[203px]">
             
              
                <span className="text-2xl text-[#1877F2] ">
                  <FaFacebook></FaFacebook>
                </span>{" "}
              
              
                <span className="text-2xl text-[#1DA1F2]">
                  <FaTwitter></FaTwitter>
                </span>{" "}
             
             
                <span className="text-2xl text-[#0077B5]">
                  <FaLinkedin></FaLinkedin>
                </span>{" "}
             
            </div>
          </div>
        </div>

        <div className="text-center mt-10"> <p>Copyright © CulinaryCloud. All rights reserved.</p> </div>
      </section>
    </div>
  );
};

export default Footer;
