import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { useForm } from 'react-hook-form';
import { ImSpoonKnife } from 'react-icons/im';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;
const AddItem = () => {
  const [axiosSecure] = useAxiosSecure();

  const { register, handleSubmit, reset } = useForm();

  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append('image', data.image[0]);

    fetch(img_hosting_url, {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
          const imgURL = imgResponse.data.display_url;
          const { name, price, category, recipe } = data;
          const newItem = { name, recipe, image: imgURL, category, price: parseFloat(price) };
          console.log(newItem);
          axiosSecure.post('/menu', newItem).then((data) => {
            console.log('After posting new menu item', data.data);
            if (data.data.insertedId) {
              reset();
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Item added successfully',
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
        }
      });
  };
  return (
    <div className="w-full md:px-10">
      <SectionTitle subHeading="What's new?" heading="ADD AN ITEM"></SectionTitle>
      <form onSubmit={handleSubmit(onSubmit)} className="px-5">
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text font-semibold">Recipe name*</span>
          </label>
          <input
            type="text"
            placeholder="Recipe name"
            {...register('name', { required: true, maxLength: 120 })}
            className="input input-bordered w-full "
          />
        </div>

        <div className="flex gap-6 my-4">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Category*</span>
            </label>
            <select
              defaultValue="Pick One"
              {...register('category', { required: true })}
              className="select select-bordered"
            >
              <option disabled>Pick one</option>
              <option>salad</option>
              <option>pizza</option>
              <option>soup</option>
              <option>dessert</option>
              <option>drinks</option>
            </select>
          </div>

          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text font-semibold">Price*</span>
            </label>
            <input
              type="number"
              {...register('price', { required: true })}
              placeholder="Price"
              className="input input-bordered w-full "
            />
          </div>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Recipe Details*</span>
          </label>
          <textarea
            className="textarea textarea-bordered h-24"
            {...register('recipe', { required: true })}
            placeholder="Recipe Details"
          ></textarea>
        </div>

        <div className="form-control w-full mt-3 mb-2">
          <label className="label flex flex-col items-start py-4">
            <span className="label-text mb-2">Item Image*</span>
            <input type="file" {...register('image', { required: true })} />
          </label>
          {/* <input type="file" className="file-input file-input-bordered w-full  " /> */}
        </div>
        <label className="btn bg-gradient-to-r from-[#835D23] to-[#B58130] text-white">
          <input type="submit" value=" Add Item" />
          <ImSpoonKnife></ImSpoonKnife>
        </label>
      </form>
    </div>
  );
};

export default AddItem;
