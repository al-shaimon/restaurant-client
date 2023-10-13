import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover/Cover';
import contactImg from '../../assets/contact/banner.jpg';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { FaClock, FaLocationDot, FaPhoneVolume } from 'react-icons/fa6';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const ContactUs = () => {
  const [axiosSecure] = useAxiosSecure();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onsubmit = (data) => {
    // const formData = JSON.stringify(data);
    // const formData = JSON.stringify(data);
    // alert(JSON.stringify(formData));
    // console.log('contact form', formData);
    const { name, email, phone, message } = data;
    const contactData = { name, email, phone, message, status: 'not read', time: new Date() };
    axiosSecure.post('/contact', contactData).then((data) => {
      if (data.data._id) {
        reset();
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Your message sent to our admin successfully.',
          showConfirmButton: false,
          timer: 3000,
        });
      }
      console.log('After submitting contact form', data.data);
    });
  };
  return (
    <>
      <Helmet>
        <title>Bistro Boss | Contact Us</title>
      </Helmet>
      <Cover img={contactImg} title="Contact Us" subTitle="Would you like to try a dish?"></Cover>
      <SectionTitle heading="Our Location" subHeading="Visit Us"></SectionTitle>
      {/* Info Section */}
      <section className="md:grid grid-cols-3">
        {/* Phone */}
        <div className="h-72 mb-8 mx-2 border shadow-md">
          <div className="flex items-center justify-center text-white text-center bg-[#D1A054]  h-20">
            <FaPhoneVolume></FaPhoneVolume>
          </div>
          <div className="text-center bg-slate-200 mx-4 h-2/3">
            <h2 className="text-2xl font-medium pt-10">PHONE</h2>
            <p className="pt-2 text-sm">+38 (012) 34 56 789</p>
          </div>
        </div>

        {/* Address */}
        <div className="h-72 mb-8 mx-2 border shadow-md">
          <div className="flex items-center justify-center text-white text-center bg-[#D1A054]  h-20">
            <FaLocationDot></FaLocationDot>
          </div>
          <div className="text-center bg-slate-200 mx-4 h-2/3">
            <h2 className="text-2xl font-medium pt-10">ADDRESS</h2>
            <p className="pt-2 text-sm">8825 Astoria, Queens, NY 11369</p>
          </div>
        </div>

        {/* Time */}
        <div className="h-72 mb-8 mx-2 border shadow-md">
          <div className="flex items-center justify-center text-white text-center bg-[#D1A054]  h-20">
            <FaClock></FaClock>
          </div>
          <div className="text-center bg-slate-200 mx-4 h-2/3">
            <h2 className="text-2xl font-medium pt-10">WORKING HOURS</h2>
            <p className="pt-2 text-sm">
              Mon - Fri: 08:00 - 22:00 <br />
              Sat - Sun: 10:00 - 23:00
            </p>
          </div>
        </div>
      </section>
      <SectionTitle heading="Contact Form" subHeading="Send Us a Message"></SectionTitle>
      {/* Contact Form */}
      <section className="bg-slate-200 max-w-screen-xl">
        <form onSubmit={handleSubmit(onsubmit)} className="card-body">
          <div className="grid grid-cols-2 gap-4">
            <div className="form-control mt-0 pt-0">
              <label className="label">
                <span className="label-text font-semibold">Name*</span>
              </label>
              <input
                type="text"
                {...register('name', { required: true })}
                name="name"
                placeholder="Enter your name"
                className="input input-bordered"
              />
              {errors.name && <span className="text-red-600">Name is required</span>}
            </div>

            <div className="form-control mt-0 pt-0">
              <label className="label">
                <span className="label-text font-semibold">Email*</span>
              </label>
              <input
                type="email"
                {...register('email', { required: true })}
                name="email"
                placeholder="Enter your email"
                className="input input-bordered"
              />
              {errors.name && <span className="text-red-600">Name is required</span>}
            </div>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Phone*</span>
            </label>
            <input
              type="number"
              {...register('phone', { required: true })}
              name="phone"
              placeholder="Enter your phone number"
              className="input input-bordered w-full"
            />
            {errors.name && <span className="text-red-600">Phone number is required</span>}
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Message*</span>
            </label>
            <textarea
              className="textarea textarea-bordered h-24"
              {...register('message', { required: true })}
              name="message"
              placeholder="Write your message here"
            ></textarea>
          </div>
          {/* TODO: Google reCAPTCHA Implementation*/}
          <label className="inline-flex items-center justify-center">
            <input
              type="submit"
              value="Send Message"
              className="text-white btn bg-gradient-to-r from-[#835D23] to-[#B58130] text-center w-1/2"
            />
          </label>
        </form>
      </section>
    </>
  );
};

export default ContactUs;