import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import login from '../../assets/images/login/login.svg';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const userinfo = { name, email, password };
    console.log(userinfo);

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex justify-between">
      <div className="w-1/2 my-auto">
        <img src={login} className="w-[460px]" />
      </div>
      <div className="w-1/2">
        <div className="w-full border p-16 rounded-lg">
          <h1 className="text-[40px] font-semibold text-center">Register</h1>

          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
              />
            </div>
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
                type="text"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Accept terms and conditions.
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-primary text-white">Register</button>
            </div>
            <p className="divider my-8 text-lg font-medium">Or Register with</p>
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
              Already have an account?{' '}
              <Link to="/login" className="text-primary  font-semibold">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
