import React from "react";
import Categories from "../../Components/Categories/Categories";
import SingleBlog from "../../Components/SingleBlog/SingleBlog";
import "./HomePage.css";

const HomePage = () => {
    return (
        <section className="sec-wrapper">
            <div className="sec-container blog-container">
                <div className="blog-content-part">
                    <div className="blogs">
                        <SingleBlog />
                        <SingleBlog />
                        <SingleBlog />
                        <SingleBlog />
                        <SingleBlog />
                        <SingleBlog />
                    </div>
                </div>
                <div className="blog-aside-part bg-neutral py-8 px-4">
                    <Categories />
                </div>
            </div>
        </section>
    );
};

export default HomePage;
