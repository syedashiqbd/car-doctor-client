import img1 from './../../../assets/images/banner/1.jpg';
import img2 from './../../../assets/images/banner/2.jpg';
import img3 from './../../../assets/images/banner/3.jpg';
import img4 from './../../../assets/images/banner/4.jpg';
import img5 from './../../../assets/images/banner/5.jpg';
import img6 from './../../../assets/images/banner/6.jpg';

const Banner = () => {
  return (
    <div className="carousel w-full h-[600px] rounded-lg">
      <div id="slide1" className="carousel-item relative w-full ">
        <img src={img1} className="w-full object-cover" />
        <div className="absolute h-full w-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ">
          <div className=" absolute space-y-7 text-white w-[465px] left-24 top-1/2 transform -translate-y-1/2">
            <h1 className="font-bold text-6xl">
              Affordable Price For Car Servicing
            </h1>
            <p className="text-lg">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn  btn-error mr-5">Discover More</button>
              <button className="btn btn-outline btn-error">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end gap-5 bottom-12 right-12 ">
          <a
            href="#slide4"
            className="btn btn-circle bg-primary text-white border-none"
          >
            ❮
          </a>
          <a
            href="#slide2"
            className="btn btn-circle bg-primary text-white border-none"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full object-cover" />
        <div className="absolute h-full w-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ">
          <div className=" absolute space-y-7 text-white w-[465px] left-24 top-1/2 transform -translate-y-1/2">
            <h1 className="font-bold text-6xl">
              Affordable Price For Car Servicing
            </h1>
            <p className="text-lg">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn  btn-error mr-5">Discover More</button>
              <button className="btn btn-outline btn-error">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end gap-5 bottom-12 right-12 ">
          <a
            href="#slide1"
            className="btn btn-circle bg-primary text-white border-none"
          >
            ❮
          </a>
          <a
            href="#slide3"
            className="btn btn-circle bg-primary text-white border-none"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full object-cover" />
        <div className="absolute h-full w-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ">
          <div className=" absolute space-y-7 text-white w-[465px] left-24 top-1/2 transform -translate-y-1/2">
            <h1 className="font-bold text-6xl">
              Affordable Price For Car Servicing
            </h1>
            <p className="text-lg">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn  btn-error mr-5">Discover More</button>
              <button className="btn btn-outline btn-error">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end gap-5 bottom-12 right-12 ">
          <a
            href="#slide2"
            className="btn btn-circle bg-primary text-white border-none"
          >
            ❮
          </a>
          <a
            href="#slide4"
            className="btn btn-circle bg-primary text-white border-none"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={img4} className="w-full object-cover" />
        <div className="absolute h-full w-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ">
          <div className=" absolute space-y-7 text-white w-[465px] left-24 top-1/2 transform -translate-y-1/2">
            <h1 className="font-bold text-6xl">
              Affordable Price For Car Servicing
            </h1>
            <p className="text-lg">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn  btn-error mr-5">Discover More</button>
              <button className="btn btn-outline btn-error">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end gap-5 bottom-12 right-12 ">
          <a
            href="#slide3"
            className="btn btn-circle bg-primary text-white border-none"
          >
            ❮
          </a>
          <a
            href="#slide5"
            className="btn btn-circle bg-primary text-white border-none"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide5" className="carousel-item relative w-full">
        <img src={img5} className="w-full object-cover" />
        <div className="absolute h-full w-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ">
          <div className=" absolute space-y-7 text-white w-[465px] left-24 top-1/2 transform -translate-y-1/2">
            <h1 className="font-bold text-6xl">
              Affordable Price For Car Servicing
            </h1>
            <p className="text-lg">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn  btn-error mr-5">Discover More</button>
              <button className="btn btn-outline btn-error">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end gap-5 bottom-12 right-12 ">
          <a
            href="#slide4"
            className="btn btn-circle bg-primary text-white border-none"
          >
            ❮
          </a>
          <a
            href="#slide6"
            className="btn btn-circle bg-primary text-white border-none"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide6" className="carousel-item relative w-full">
        <img src={img6} className="w-full object-cover" />
        <div className="absolute h-full w-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ">
          <div className=" absolute space-y-7 text-white w-[465px] left-24 top-1/2 transform -translate-y-1/2">
            <h1 className="font-bold text-6xl">
              Affordable Price For Car Servicing
            </h1>
            <p className="text-lg">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn  btn-error mr-5">Discover More</button>
              <button className="btn btn-outline btn-error">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end gap-5 bottom-12 right-12 ">
          <a
            href="#slide5"
            className="btn btn-circle bg-primary text-white border-none"
          >
            ❮
          </a>
          <a
            href="#slide1"
            className="btn btn-circle bg-primary text-white border-none"
          >
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
