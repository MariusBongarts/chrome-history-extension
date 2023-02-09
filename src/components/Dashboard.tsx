import React from "react";
import styled from "styled-components";
import { useChromeHistorySearch } from "../hooks/useChromeHistorySearch";
import { useLazyLoadedQuery } from "../hooks/useLazyLoadedQuery";
import { History } from "./History";

interface DashboardProps {}

const StyledDashboard = styled.div`
  padding: 20px 0;
`;

const defaultQuery: chrome.history.HistoryQuery = { text: "", maxResults: 20 };

export const Dashboard: React.FC<DashboardProps> = () => {
  const query = useLazyLoadedQuery(defaultQuery);
  const mostRecentItems = useChromeHistorySearch(query);

  return (
    <StyledDashboard>
      <History items={mostRecentItems} />
    </StyledDashboard>
  );
};
