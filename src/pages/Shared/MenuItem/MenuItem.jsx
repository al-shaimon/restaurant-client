const MenuItem = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div className="flex space-x-2 px-1">
      <img
        style={{ borderRadius: '0 200px 200px 200px' }}
        className="w-[100px]"
        src={image}
        alt=""
      />
      <div>
        <h3 className="text-black uppercase font-cinzel font-medium md:flex">
          {name}
          <span className="hidden md:block">------------------</span>
        </h3>
        <p>{recipe}</p>
      </div>
      <p className="text-[#BB8506]">${price}</p>
    </div>
  );
};

export default MenuItem;
