import { Parallax } from 'react-parallax';

const Cover = ({ img, title, subTitle }) => {
  return (
    <Parallax blur={{ min: -50, max: 50 }} bgImage={img} bgImageAlt="the dog" strength={-200}>
      <div className="hero lg:h-[700px] md:h-[500px] h-80">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content md:bg-black md:bg-opacity-30 md:w-[80%] md:h-[50%] w-screen">
          <div className="max-w-md">
            <h1 className="mb-1 md:mb-5 text-2xl md:text-4xl font-semibold text-white uppercase">
              {title}
            </h1>
            <p className="mb-5 text-white md:text-lg text-sm">{subTitle}</p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
