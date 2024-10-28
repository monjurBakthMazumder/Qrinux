import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";
import { FaArrowRightLong } from "react-icons/fa6";

const Work = ({ work }) => {
  const { title, description, img9, img10, img11, slug } = work || {};
  return (
    <div className="bg-[#FBFFF1] lg:flex p-5 sm:p-10 w-full gap-10">
      <div className="lg:w-2/5">
        <h1 className="text-primary text-3xl sm:text-4xl md:text-[40px] font-semibold font-teko py-4">
          {title}
        </h1>
        <p className="sm:text-lg md:text-xl font-jost text-[#152847] ">
          {description.slice(0, 110)}
        </p>
        <Link
          key={slug}
          href={`/${slug}`}
          className="text-2xl font-jost flex items-center gap-3 font-medium text-warning mt-4 mb-6 transition-all duration-500  transform group hover:text-textColor5 hover:underline underline-offset-4 "
        >
          See Demo
          <FaArrowRightLong className="transition-transform duration-500  transform group-hover:rotate-45 " />
        </Link>
      </div>
      <div className="lg:w-3/5 relative overflow-hidden h-60 sm:h-96 ">
        <Image
          height={362}
          width={346}
          src={img9}
          alt=""
          className="absolute w-1/2 z-30 img-shadow"
        />
        <Image
          height={362}
          width={346}
          src={img10}
          alt=""
          className="absolute w-1/2 z-20 right-1/4 mt-[30px] img-shadow"
        />
        <Image
          height={362}
          width={346}
          src={img11}
          alt=""
          className="absolute w-1/2 z-10 right-0 mt-[60px] img-shadow"
        />
      </div>
    </div>
  );
};

Work.propTypes = {
  work: PropTypes.object,
};

export default Work;
