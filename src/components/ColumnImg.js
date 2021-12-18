import React, { useEffect, useRef } from "react";

const ColumnImg = (props) => {
  const imgRef = useRef(null);

  useEffect(() => {
    const options = {};

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.src = entry.target.dataset.src;
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    observer.observe(imgRef.current);
  }, []);

  return <img data-src={props.src} ref={imgRef} />;
};

export default ColumnImg;
