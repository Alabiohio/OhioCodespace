"use client";
import React from "react";


// Import your assets
import img1 from "../assets/img/one.jpg";
import img2 from "../assets/img/exe.png";
import img3 from "../assets/img/three.png";
import img4 from "../assets/img/four.jpg";

const images = [img1, img2, img3, img4];

const BookStackSidePerspective: React.FC = () => {
    return (
        <div className="relative w-full flex justify-center items-center gap-8 overflow-x-auto px-4 py-6 perspective-1000 imgSlide">
            {images.map((img, i) => (
                <img
                    key={i}
                    src={img.src}
                    alt={`stacked-${i}`}
                    className="w-56 lg:w-72 h-80 lg:h-96 object-cover rounded-xl shadow-xl transition-transform duration-700 hover:scale-110"
                    data-aos="fade-left"
                    data-aos-delay={i * 200}
                    style={{
                        transform: 'rotateY(-20deg)',
                        perspective: '1000px'
                    }}
                />
            ))}
        </div>
    );
};

export default BookStackSidePerspective;
