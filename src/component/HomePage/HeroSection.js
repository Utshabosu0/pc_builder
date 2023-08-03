import Image from "next/image";
import banner from "../../assets/pc.jpg"

const HeroSection = () => {
  return (
    <div className="hero ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <Image src={banner} alt="" className=" rounded-lg w-[57%]" />
        <div>
          <h1 className="text-5xl font-bold">
            Popular Desktop Shop in Bangladesh!
          </h1>
          <p className="py-6">
            Leading Computer, Laptop & Gaming PC Retail & Online Shop in
            Bangladesh
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
