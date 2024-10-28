import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";

const Card = ({ team }) => {
  const { slug, name, designation, img } = team || {};
  return (
    <Link href={`/about/${slug}`} passHref>
      <div className="cursor-pointer">
        <Image
          width={253}
          height={353}
          src={img}
          alt={name}
          className="bg-bg5 p-5 pb-0 w-full rounded-lg"
        />
        <h1 className="text-xl font-semibold text-white font-Inter mt-4 mb-3">
          {name}
        </h1>
        <h2 className="text-textColor6 font-Inter mb-5">{designation}</h2>
      </div>
    </Link>
  );
};

Card.propTypes = {
  team: PropTypes.object,
};

export default Card;
