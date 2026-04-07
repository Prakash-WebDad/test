import { useEffect, useRef, useState } from "react";

export const CountUp = ({ value, className }) => {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);
  const [startAnim, setStartAnim] = useState(false);

  const ref = useRef(null);
  const number = parseInt(value);
  const suffix = value.replace(number, "");
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartAnim(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 },
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!startAnim) return;

    let start = 0;
    const duration = 2200;
    const increment = number / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= number) {
        setCount(number);
        setDone(true);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 10);

    return () => clearInterval(timer);
  }, [startAnim, number]);

  return (
    <span ref={ref} className={className}>
      {count}
      {done && suffix}
    </span>
  );
};
