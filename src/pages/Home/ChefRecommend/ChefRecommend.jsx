import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import slide1 from '../../../assets/home/slide1.jpg';
import slide2 from '../../../assets/home/slide2.jpg';
import slide3 from '../../../assets/home/slide3.jpg';
import slide4 from '../../../assets/home/slide4.jpg';

const ChefRecommend = () => {
  return (
    <section>
      <SectionTitle
        className="text-black"
        heading="CHEF RECOMMENDS"
        subHeading="Should Try"
      ></SectionTitle>
      <div className="sm:flex flex-row mx-1">
        <div className="md:w-1/4 md:mr-4 mt-6">
          <div>
            <img className="h-screen md:h-72 w-screen" src={slide1} alt="salad" />
          </div>
          <div className="bg-[#F3F3F3] py-5 text-center">
            <h3 className="text-xl font-bold text-black">Caeser Salad</h3>
            <p className="text-black px-8">
              Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
            </p>
            <button className="btn btn-outline hover:text-[#BB8506] border-0 border-b-2 mt-2 text-[#BB8506] hover:bg-black">
              Add to Cart
            </button>
          </div>
        </div>
        <div className="md:w-1/4 md:mr-4 mt-6">
          <div>
            <img className="h-72 w-screen" src={slide2} alt="salad" />
          </div>
          <div className="bg-[#F3F3F3] py-5 text-center">
            <h3 className="text-xl font-bold text-black">Caeser Salad</h3>
            <p className="text-black px-8">
              Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
            </p>
            <button className="btn btn-outline hover:text-[#BB8506] border-0 border-b-2 mt-2 text-[#BB8506] hover:bg-black">
              Add to Cart
            </button>
          </div>
        </div>
        <div className="md:w-1/4 md:mr-4 mt-6">
          <div>
            <img className="h-72 w-screen" src={slide3} alt="salad" />
          </div>
          <div className="bg-[#F3F3F3] py-5 text-center">
            <h3 className="text-xl font-bold text-black">Caeser Salad</h3>
            <p className="text-black px-8">
              Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
            </p>
            <button className="btn btn-outline hover:text-[#BB8506] border-0 border-b-2 mt-2 text-[#BB8506] hover:bg-black">
              Add to Cart
            </button>
          </div>
        </div>
        <div className="md:w-1/4 mt-6">
          <div>
            <img className="h-72 w-screen" src={slide4} alt="salad" />
          </div>
          <div className="bg-[#F3F3F3] py-5 text-center">
            <h3 className="text-xl font-bold text-black">Caeser Salad</h3>
            <p className="text-black px-8">
              Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
            </p>
            <button className="btn btn-outline hover:text-[#BB8506] hover:bg-black border-0 border-b-2 mt-2 text-[#BB8506]">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChefRecommend;
