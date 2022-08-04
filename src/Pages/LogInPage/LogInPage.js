import React from "react";
import "./LoginPage.css";

const LogInPage = () => {
    return (
        <section className="login-wrapper">
            <h2 className="text-center mt-16 text-5xl uppercase font-bold text-primary">
                LogIn
            </h2>
            <div className="login-contianer w-96 mx-auto mt-16 bg-neutral p-8 rounded-md">
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
                <div class="form-control w-40 mx-auto mt-12">
                    <button class="btn btn-outline btn-secondary">
                        Success
                    </button>
                </div>
            </div>
        </section>
    );
};

export default LogInPage;
