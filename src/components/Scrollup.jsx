import React, { useState, useEffect } from 'react';

const ScrollUpButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > window.innerHeight) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <div className="fixed bottom-4 right-4">
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="rounded-full bg-white text-sky-800 border-sky-800 border-2 p-1 hover:bg-sky-200">
                <img src="https://cdn-icons-png.flaticon.com/512/13103/13103677.png" className="w-[40px]" alt="scrollup"></img>
                </button>
            )}
        </div>
    );
};


export default ScrollUpButton;