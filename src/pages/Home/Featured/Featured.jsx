import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import featuredImg from '../../../assets/home/featured.jpg';
import './featured-item.css';

const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white my-20">
      <SectionTitle
        className="bg-slate-900 bg-opacity-60 py-1"
        heading="FEATURED ITEM"
        subHeading="Check it out"
      ></SectionTitle>
      <div className="flex flex-col md:flex-row justify-center items-center bg-slate-900 bg-opacity-60 pb-20 pt-12 md:px-36 px-4">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="md:ml-10">
          <p className="text-xl font-medium pt-2">March 20, 2023</p>
          <p className="text-xl uppercase pb-2 font-medium">WHERE CAN I GET SOME?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere,
            deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium
            tempore consequatur consequuntur omnis ullam maxime tenetur.
          </p>
          <button className="btn btn-outline border-0 border-b-4 mt-4 text-white">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
