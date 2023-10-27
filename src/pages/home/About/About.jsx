import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';
const About = () => {
  return (
    <div className="hero mt-32 ">
      <div className=" flex  p-0 gap-7">
        <div className="w-1/2 relative">
          <img
            src={person}
            className="w-[460px] h-[473px] object-cover rounded-lg  "
          />
          <img
            src={parts}
            className="absolute w-[307px] h-[312px] object-cover rounded-lg  right-8 top-64 border-white border-[10px]"
          />
        </div>
        <div className="w-1/2 ">
          <p className="text-primary font-bold text-xl">About Us</p>
          <h1 className="text-[45px] font-bold text-[#151515] max-w-[376px] mt-5 mb-7">
            We are qualified & of experience in this field
          </h1>
          <p className=" text-[#737373] ">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <p className="text-[#737373] mt-5 mb-7">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <button className="btn bg-primary border text-white">
            Get More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
