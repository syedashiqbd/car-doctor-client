import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import login from '../../assets/images/login/login.svg';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import useAuth from '../../hook/useAuth';
import toast from 'react-hot-toast';

const Login = () => {
  const { signIn } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // const userinfo = { name, email, password };
    const toastId = toast.loading('Logging in......');
    try {
      await signIn(email, password).then((result) => {
        console.log(result.user);
        toast.success('Successfully logged in!', { id: toastId });
        navigate(location?.state ? location?.state : '/');
      });
    } catch (error) {
      toast.error(error.message, { id: toastId });
    }
  };

  return (
    <div className="flex justify-between">
      <div className="w-1/2 my-auto">
        <img src={login} className="w-[460px]" />
      </div>
      <div className="w-1/2">
        <div className="w-full border p-16 rounded-lg">
          <h1 className="text-[40px] font-semibold text-center">Login</h1>

          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-primary text-white">Login</button>
            </div>
            <p className="divider my-8 text-lg font-medium">Or Sign In with</p>
            <div className="flex justify-center gap-4">
              <Link>
                <div className="w-[55px] h-[55px] rounded-full bg-[#F5F5F8] flex items-center justify-center text-xl text-blue-700">
                  <FaFacebookF></FaFacebookF>
                </div>
              </Link>
              <Link>
                <div className="w-[55px] h-[55px] rounded-full bg-[#F5F5F8] flex items-center justify-center text-xl text-blue-700 ">
                  <FaLinkedinIn></FaLinkedinIn>
                </div>
              </Link>
              <Link>
                <div className="w-[55px] h-[55px] rounded-full bg-[#F5F5F8] flex items-center justify-center text-xl">
                  <FcGoogle></FcGoogle>
                </div>
              </Link>
            </div>
            <p className="text-center mt-12 text-lg">
              Do not have an account?{' '}
              <Link to="/register" className="text-primary  font-semibold">
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
