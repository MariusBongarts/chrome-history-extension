import React, { useEffect, useState } from "react";
import { useChromeHistorySearch } from "../hooks/useChromeHistorySearch";
import { useMaxResults } from "../hooks/useMaxResults";
import { StyledDashboard } from "./Dashboard.styled";
import { History } from "./History";
import { SearchBar } from "./SearchBar";

interface DashboardProps {}

const defaultQuery = { text: "", maxResults: 20 };

export const Dashboard: React.FC<DashboardProps> = () => {
  const maxResults = useMaxResults(defaultQuery.maxResults);
  const [historyQuery, setHistoryQuery] = useState(defaultQuery);
  const historyItems = useChromeHistorySearch(historyQuery);

  useEffect(() => {
    setHistoryQuery((historyQuery) => {
      return { ...historyQuery, maxResults };
    });
  }, [maxResults]);

  const onSearchChange = (text: string) => {
    setHistoryQuery((historyQuery) => {
      return {
        ...historyQuery,
        text,
      };
    });
  };

  return (
    <StyledDashboard>
      <SearchBar onSearchChange={onSearchChange} />
      <History items={historyItems} />
    </StyledDashboard>
  );
};
