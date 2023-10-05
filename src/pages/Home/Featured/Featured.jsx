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
      <div className="md:flex justify-center items-center bg-slate-900 bg-opacity-60 pb-20 pt-12 px-36">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="md:ml-10">
          <p>March 20, 2023</p>
          <p className="uppercase">WHERE CAN I GET SOME?</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus corporis sint,
            debitis magnam facere rem laboriosam expedita quo est deleniti ex reprehenderit ipsam ab
            explicabo tempora pariatur non accusamus sunt excepturi beatae ad soluta aspernatur
            reiciendis? Maxime nostrum similique saepe. Fugiat amet excepturi tempore fuga quisquam
            laudantium, ab molestiae quod?
          </p>
          <button className="btn btn-outline border-0 border-b-4 mt-4 text-white">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
