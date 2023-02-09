import { useState, useEffect } from "react";

export const useLazyLoadedQuery = (
  defaultQuery: chrome.history.HistoryQuery
): chrome.history.HistoryQuery => {
  const [query, setQuery] = useState<chrome.history.HistoryQuery>(defaultQuery);

  const scrollListener = () => {
    const { scrollHeight, clientHeight, scrollTop } = document.body;
    if (scrollHeight - clientHeight - scrollTop <= 50) {
      setQuery({ ...query, maxResults: (query.maxResults ?? 10) + 10 });
    }
  };

  useEffect(() => {
    document.body.addEventListener("scroll", scrollListener);
    return () => {
      document.body.removeEventListener("scroll", scrollListener);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return query;
};
