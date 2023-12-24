import { useContext, useState } from 'react';
// import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import ReCAPTCHA from 'react-google-recaptcha';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import bg from '../../assets/others/authentication.png';
import logo from '../../assets/others/authentication2.png';

const Login = () => {
  // const [disabled, setDisabled] = useState(true);
  const { signIn } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const [capVal, setCapVal] = useState(null);

  // useEffect(() => {
  //   loadCaptchaEnginge(6);
  // }, []);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password).then((result) => {
      const user = result.user;
      console.log(user);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'User Login Successful',
        showConfirmButton: false,
        timer: 1500,
      });
      navigate(from, { replace: true });
    });
  };

  // const handleValidateCaptcha = (e) => {
  //   const user_captcha_value = e.target.value;
  //   if (validateCaptcha(user_captcha_value)) {
  //     setDisabled(false);
  //   } else {
  //     setDisabled(true);
  //   }
  // };

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Login</title>
      </Helmet>
      <section
        style={{
          backgroundImage: `url(${bg})`,
        }}
        className="lg:hero min-h-screen"
      >
        <div className="shadow-[10px_10px_10px_10px_rgba(0,0,0,0.25)] lg:mt-5 lg:mb-10">
          <div className="hero-content flex-col lg:flex-row lg:gap-48">
            <div className="flex-1">
              <img className="" src={logo} alt="login" />
            </div>
            <div className="flex-1 w-full">
              <form onSubmit={handleLogin}>
                <h4 className="text-center text-black font-bold text-2xl">Login</h4>
                <div>
                  <label className="label">Email</label>
                  <input className="input" type="email" name="email" placeholder="Email" />
                </div>
                <div>
                  <label className="label">Password</label>
                  <input className="input" type="password" name="password" placeholder="Password" />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forget password?
                    </a>
                  </label>
                </div>
                <div>
                  {/* <label className="label">
                    <LoadCanvasTemplate />
                  </label>
                  <input
                    onBlur={handleValidateCaptcha}
                    className="input max-w-xs"
                    type="text"
                    name="captcha"
                    placeholder="Type here"
                  /> */}
                  <ReCAPTCHA
                    sitekey={import.meta.env.VITE_reCAPTCHA_Site_Key}
                    onChange={(val) => setCapVal(val)}
                  />
                </div>
                <div>
                  <input
                    disabled={!capVal}
                    className="btn bg-[#D1A054]"
                    type="submit"
                    value="Login"
                  />
                </div>
                <p className="text-center text-[#D1A054]">
                  <small>
                    New Here?{' '}
                    <Link to="/signUp">
                      <span className="font-bold">Create an Account</span>
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

export default Login;
