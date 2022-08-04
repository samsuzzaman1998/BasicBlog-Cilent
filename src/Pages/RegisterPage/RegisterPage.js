import React from "react";
import "./RegisterPage.css";
import { Link } from "react-router-dom";

const RegisterPage = () => {
    return (
        <section className="register-wrapper">
            <h2 className="text-center mt-16 text-5xl uppercase font-bold text-primary">
                create account
            </h2>
            <div className="register-contianer w-96 mx-auto mt-16 bg-neutral p-8 rounded-md">
                <div class="form-control w-full mb-6">
                    <label class="label">
                        <span class="label-text">Your Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Type here"
                        class="input input-bordered w-full"
                        name="name"
                    />
                </div>
                <div class="form-control w-full mb-6">
                    <label class="label">
                        <span class="label-text">Your Email</span>
                    </label>
                    <input
                        type="emil"
                        placeholder="Type here"
                        class="input input-bordered w-full"
                        name="email"
                    />
                </div>

                <div class="form-control w-full mb-6">
                    <label class="label">
                        <span class="label-text">Your Password</span>
                    </label>
                    <input
                        type="password"
                        placeholder="Type here"
                        class="input input-bordered w-full"
                        name="password"
                    />
                </div>
                <div class="form-control w-full mb-6">
                    <label class="label">
                        <span class="label-text">Confirm Password</span>
                    </label>
                    <input
                        type="password"
                        placeholder="Type here"
                        class="input input-bordered w-full"
                        name="confirmpPassword"
                    />
                </div>
                <div class="form-control w-40 mx-auto mt-12">
                    <button class="btn btn-outline btn-secondary">
                        register
                    </button>
                </div>
                <div className="mt-6">
                    <p className="text-center text-sm text-light ">
                        Already have an account?{" "}
                        <Link
                            to="/login"
                            className="text-primary underline hover:text-secondary"
                        >
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default RegisterPage;
