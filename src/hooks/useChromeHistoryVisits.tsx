import { useState, useEffect } from "react";

type VisitItem = chrome.history.VisitItem;

export const useChromeHistoryVisits = (
  url: chrome.history.Url
): VisitItem[] => {
  const [visitItems, setVisitItems] = useState<VisitItem[]>([]);

  useEffect(() => {
    chrome.history
      .getVisits(url)
      .then((visitItems) => setVisitItems(visitItems))
      .catch((error) => console.error);
  }, [url]);

  return visitItems;
};
