import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import React from "react";

const useScrollToTop = () => {
    const route = useLocation();
    const scrollToTop = () => {
        window.scrollTo(0,0);
    }

    useEffect(() => {
        scrollToTop()
    },[route]);
}

export default useScrollToTop;