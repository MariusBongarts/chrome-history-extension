import { useState, useEffect } from "react";

export const useMaxResults = (defaultMaxItems: number): number => {
  const [maxItems, setMaxItems] = useState<number>(defaultMaxItems);

  useEffect(() => {
    const scrollListener = () => {
      const { scrollHeight, clientHeight, scrollTop } = document.body;
      if (scrollHeight - clientHeight - scrollTop <= 50) {
        setMaxItems((maxItems) => maxItems + 10);
      }
    };

    document.body.addEventListener("scroll", scrollListener);
    return () => {
      document.body.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return maxItems;
};
