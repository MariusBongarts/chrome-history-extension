import React, { useEffect } from "react";
import { useChromeHistorySearch } from "../hooks/useChromeHistorySearch";

interface DashboardProps {}

const query = { text: "", maxResults: 100 };

export const Dashboard: React.FC<DashboardProps> = () => {
  const mostRecentItems = useChromeHistorySearch(query);

  useEffect(() => {
    console.log(mostRecentItems);
  }, [mostRecentItems]);

  return (
    <div>
      <h1>Chrome History Dashboard 📊</h1>
      <ul>
        {mostRecentItems.map((item) => (
          <li key={item.id}>
            <span>
              {new Date(item.lastVisitTime ?? 0).toLocaleTimeString()}
            </span>
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};
