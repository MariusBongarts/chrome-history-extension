import { useState, useEffect } from "react";

type HistoryItem = chrome.history.HistoryItem;

export const useChromeHistorySearch = (
  query: chrome.history.HistoryQuery
): HistoryItem[] => {
  const [historyItems, setHistoryItems] = useState<HistoryItem[]>([]);

  useEffect(() => {
    chrome.history
      .search(query)
      .then((historyItems) => setHistoryItems(historyItems))
      .catch(console.error);
  }, [query]);

  return historyItems;
};
