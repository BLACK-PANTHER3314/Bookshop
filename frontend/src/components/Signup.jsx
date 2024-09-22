import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";

function Signup() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div className="flex h-screen justify-center item-center my-auto ">
        <div
          id="my_modal_3"
          className="my-auto border-[2px] p-5 rounded-md shadow-xl   "
        >
          <div className="">
            <h3 className="font-bold text-lg">Signup</h3>

            <form action="" method="dialog" onSubmit={handleSubmit(onSubmit)}>
              {/* name */}
              <div className="mt-4 space-y-2 ">
                <span>Name</span> <br></br>
                <input
                  type="text"
                  placeholder="enter your name here"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("name", { required: true })}
                />
                <br />
                {errors.name && (
                  <span className="text-sm text-red-500">
                    {" "}
                    This field is required
                  </span>
                )}
              </div>

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
                    {" "}
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
                  Signup
                </button>
                <p>
                  Have account?
                  <button
                    className="underline text-blue-500 mx-1"
                    onClick={() =>
                      document.getElementById("my_modal_2").showModal()
                    }
                  >
                    Login
                  </button>
                  <Login></Login>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
