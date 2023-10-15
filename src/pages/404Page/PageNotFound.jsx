import error from '../../assets/404.gif';
const PageNotFound = () => {
  return (
    <div className="text-center flex items-center justify-center">
      <img src={error} alt="" />
    </div>
  );
};

export default PageNotFound;
