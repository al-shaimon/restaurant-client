import { Link } from 'react-router-dom';
import Cover from '../../Shared/Cover/Cover';
import MenuItem from '../../Shared/MenuItem/MenuItem';

const MenuCategory = ({ items, title, img }) => {
  return (
    <div className="pt-8">
      {title && (
        <Cover
          img={img}
          title={title}
          subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        />
      )}
      <div className="max-w-screen-xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 mt-16">
          {items.map((item) => (
            <MenuItem key={item._id} item={item}></MenuItem>
          ))}
        </div>
        <div className="flex items-center justify-center text-center">
          <Link
            to={`/order/${title}`}
            className="btn btn-outline border-0 border-b-4 mt-4 text-black uppercase"
          >
            ORDER YOUR FAVOURITE FOOD
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MenuCategory;
