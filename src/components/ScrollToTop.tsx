// src/components/AOSScrollManager.tsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const AOSScrollManager: React.FC = () => {
    const { pathname } = useLocation();

    // init AOS once
    useEffect(() => {
        AOS.init({
            duration: 700,
            easing: "ease-out-cubic",
            once: false,      // animate every time element enters viewport
            mirror: false,    // whether elements animate out while scrolling past them
            anchorPlacement: "top-bottom",
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // on route change, scroll to top and refresh AOS (hard)
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

export default AOSScrollManager;


