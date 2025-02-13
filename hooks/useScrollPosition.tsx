"use client"
import { useEffect, useState } from "react";

type statsProps = number | undefined;
export default function useScrollPosition() {
    const [scrollPosition, setScrollPosition] = useState<{x : statsProps , y : statsProps}>({
        x: undefined,
        y: undefined,
    });

    const handleScroll = () => {
        setScrollPosition({
            x: window.scrollX,
            y: window.scrollY,
        });
    };

    useEffect(() => {
        // Set initial window size
        handleScroll();

        // Add event listener to update window size on resize
        window.addEventListener("scroll", handleScroll);

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []); // Empty dependency array means this effect runs once after the initial render

    return scrollPosition;
}