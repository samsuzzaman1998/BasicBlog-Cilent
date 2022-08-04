import React from "react";
import pic from "../../assets/Profile/p1.jpg";
import "./SingleBlog.css";

const SingleBlog = () => {
    return (
        <div className="blog-card">
            <img src={pic} alt="blog" />
            <div className="blog-info">
                <h2 className="text-primary">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Possimus, voluptatibus!
                </h2>
                <div className="blog-post-info">
                    date: 20 jan 2022 || post: admin || tags:{" "}
                    <span className="tag">tech</span>
                    <span className="tag">web</span>
                </div>
                <p className="blog-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Impedit quasi porro, assumenda necessitatibus quae ad labore
                    dicta reiciendis eaque eum quas modi vel fugiat quo deleniti
                    repellendus accusantium velit expedita.
                    <a href="#" className="readMore">read more</a>
                </p>
            </div>
        </div>
    );
};

export default SingleBlog;
