import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast"


function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo= {
      email: data.email,
      password: data.password,
    }
    // console.log(data);


    await axios.post("http://localhost:3000/user/login",userInfo)
    .then((res)=>{console.log(res.data);
      if(res){
        toast.success("login successful");
        // window.location.href="/";
      }
      localStorage.setItem("User",JSON.stringify(res.data.user));
    })
    .catch((err)=>{console.log(err);
      if(err.response){
        alert(err.response.data.message);

      }
          toast.error("login failed");
        });
  };




  return (
    <>
      <div>
        <dialog id="my_modal_2" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Login</h3>

            <form action="" method="dialog" onSubmit={handleSubmit(onSubmit)}>
              {/* email */}

              <div className="mt-4 space-y-2">
                <span>Email</span> <br></br>
                <input
                  type="email"
                  placeholder="enter your email"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("email", { required: true })}
                />
                <br />
                {errors.email && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>

              {/* password */}

              <div className="mt-4 space-y-2">
                <span>Password</span> <br></br>
                <input
                  type="password"
                  placeholder="enter your password"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("password", { required: true })}
                />
                <br />
                {errors.password && (
                  <span className="text-sm text-red-500">
                    {" "}
                    This field is required
                  </span>
                )}
              </div>
              {/* login button */}
              <div className="flex justify-around mt-4">
                <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                  Login
                </button>
                <p>
                  Not registered?
                  <span>
                    <Link to="/signup" className="underline text-blue-500 mx-1">
                      Signup
                    </Link>
                  </span>
                </p>
              </div>
            </form>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      </div>
    </>
  );
}

export default Login;
