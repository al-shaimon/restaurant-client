import chef from '../../../assets/home/chef-service.jpg';

const ChefService = () => {
  return (
    // <div className="mb-24" style={{ backgroundImage: `url(${chef})`, backgroundSize: 'cover' }}>
    //   <div className="text-center text-white mx-auto">
    //     hhhh
    //   </div>
    // </div>
    <div className="relative mb-24">
      <img src={chef} alt="background" className="w-full h-full object-cover" />
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <div className="bg-white text-black mx-auto w-10/12 h-4/6">
          <div className="pt-20">
            <h3
              className="text-3xl text-center
          "
            >
              Bistro Boss
            </h3>
            <p className="mx-auto max-w-xl text-center mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero
              accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam
              dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefService;
