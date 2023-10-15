import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import useMenu from '../../../hooks/useMenu';
import { Link } from 'react-router-dom';

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === 'popular');

  return (
    <section className="mb-12">
      <SectionTitle
        className="text-black"
        heading="FROM OUR MENU"
        subHeading="Popular Items"
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-10">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="flex items-center justify-center text-center">
        <Link to='/menu' className="btn btn-outline  border-0 border-b-4 mt-4 text-black ">
          View Full Menu
        </Link>
      </div>
    </section>
  );
};

export default PopularMenu;
