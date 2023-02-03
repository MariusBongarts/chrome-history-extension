import React from "react";
import { useChromeHistorySearch } from "../hooks/useChromeHistorySearch";
import { History } from "./History";

interface DashboardProps {}

const query = { text: "", maxResults: 100 };

export const Dashboard: React.FC<DashboardProps> = () => {
  const mostRecentItems = useChromeHistorySearch(query);

  return (
    <div>
      <h1>Chrome History Dashboard 📊</h1>
      <History items={mostRecentItems} />
    </div>
  );
};
