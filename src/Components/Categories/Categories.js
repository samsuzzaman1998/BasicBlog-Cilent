import React from "react";
import "./categories.css";

const Categories = () => {
    return (
        <div className="categories-wrapper">
            <h4 className="text-xl font-semibold uppercase text-secondary text-center sidebar-header">
                Categories
            </h4>
            <ul className="category-list">
                <li>
                    <a href="#">
                        <span>&gt;</span> tech
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span>&gt;</span> web
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span>&gt;</span>life-style
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Categories;
