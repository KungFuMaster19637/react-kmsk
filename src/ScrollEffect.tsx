import { useEffect } from "react";

const useScrollEffect = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));
    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);
};

export default useScrollEffect;
