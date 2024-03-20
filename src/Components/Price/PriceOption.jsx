import PropTypes from "prop-types";

const PriceOption = ({ data }) => {
  const { name, price, features } = data;
  return (
    <div className="shadow-xl bg-gray-300 rounded-xl p-4">
      <div className="bg-blue-400 rounded-xl p-2">
        <div className="text-center">
          <h3 className="text-4xl font-black">${price} / Month</h3>
          <h3 className="text-2xl">{name}</h3>
        </div>
        <h3 className="text-lg">
          {features.map((feature, i) => (
            <li key={i}>{feature}</li>
          ))}
        </h3>
        <button className="text-center w-full my-4 btn btn-primary">
          Buy Now
        </button>
      </div>
    </div>
  );
};

PriceOption.propTypes = {
  data: PropTypes.object.isRequired,
};

export default PriceOption;
