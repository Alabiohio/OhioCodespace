import React from "react";
import { motion } from "framer-motion";

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
                <motion.img
                    key={i}
                    src={img}
                    alt={`stacked-${i}`}
                    className="w-56 lg:w-72 h-80 lg:h-96 object-cover rounded-xl shadow-xl"
                    initial={{ x: 200, rotateY: -75, opacity: 0 }}
                    animate={{ x: 0, rotateY: -20, opacity: 1 }}
                    transition={{ duration: 1.2, delay: i * 0.3, ease: "easeOut" }}
                    style={{ perspective: 1000 }}
                />
            ))}
        </div>
    );
};

export default BookStackSidePerspective;
