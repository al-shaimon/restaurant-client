const FoodCard = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img className="w-full" src={image} alt={name} />
      </figure>
      <p
        className="absolute right-0 mr-4 mt-4 p-4 bg-slate-900
       rounded-lg text-white font-semibold"
      >
        ${price}
      </p>
      <div className="card-body">
        <h2 className="card-title justify-center">{name}</h2>
        <p className="text-justify">{recipe}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-outline bg-[#E8E8E8] hover:text-[#BB8506] border-0 border-b-2 mt-2 mx-auto text-[#BB8506]">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
