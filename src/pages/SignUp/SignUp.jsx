import { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import bg from '../../assets/others/authentication.png';
import logo from '../../assets/others/authentication2.png';

const SignUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { createUser, updateUserProfile } = useContext(AuthContext);

  const navigate = useNavigate();

  const onSubmit = (data) => {
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);

      updateUserProfile(data.name, data.photoURL)
        .then(() => {
          const saveUser = { name: data.name, email: data.email };
          console.log('save user', saveUser);
          fetch('https://restaurant-server-production-75a3.up.railway.app/users', {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
            },
            body: JSON.stringify(saveUser),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                reset();
                Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: 'User created successfully.',
                  showConfirmButton: false,
                  timer: 1500,
                });
                navigate('/');
              }
            });
        })
        .catch((error) => console.log(error));
    });
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Sign Up</title>
      </Helmet>

      <section
        style={{
          backgroundImage: `url(${bg}`,
        }}
        className="lg:hero min-h-screen"
      >
        <div className="shadow-[10px_10px_10px_10px_rgba(0,0,0,0.25)] lg:mt-5 lg:mb-10">
          <div className="hero-content flex-col lg:flex-row-reverse lg:gap-48">
            <div className="flex-1">
              <img className="" src={logo} alt="sign up" />
            </div>
            <div className="flex-1 pl-24">
              <form onSubmit={handleSubmit(onSubmit)}>
                <h4 className="text-center text-black font-bold text-2xl">Sign Up</h4>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    {...register('name', { required: true })}
                    name="name"
                    placeholder="name"
                    className="input"
                  />
                  {errors.name && <span className="text-red-600">Name is required</span>}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    type="text"
                    {...register('photoURL', { required: true })}
                    name="photoURL"
                    placeholder="Photo URL"
                    className="input input-bordered"
                  />
                  {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    {...register('email', { required: true })}
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                  />
                  {errors.email && <span className="text-red-600">Email is required</span>}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    {...register('password', {
                      required: true,
                      minLength: 6,
                      maxLength: 20,
                      pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                    })}
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                  />
                  {errors.password?.type === 'required' && (
                    <p className="text-red-600">Password is required</p>
                  )}
                  {errors.password?.type === 'minLength' && (
                    <p className="text-red-600">Password must be 6 characters</p>
                  )}
                  {errors.password?.type === 'maxLength' && (
                    <p className="text-red-600">Password must be less than 20 characters</p>
                  )}
                  {errors.password?.type === 'pattern' && (
                    <p className="text-red-600">
                      Password must have one uppercase, one lowercase, one number and one special
                      character
                    </p>
                  )}
                </div>
                <div className="form-control mt-6">
                  <input className="btn bg-[#D1A054]" type="submit" value="Sign Up" />
                </div>
                <p className="text-center text-[#D1A054]">
                  <small>
                    Already registered?
                    <Link to="/login">
                      <span className="font-bold"> Go to Login</span>
                    </Link>
                  </small>
                </p>
                <div className="h-1 pb-10">
                  <SocialLogin></SocialLogin>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
