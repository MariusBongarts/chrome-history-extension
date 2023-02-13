import React from "react";
import { HistoryItem } from "./HistoryItem";
import { StyledList } from "./History.styled";

const MemoizedHistoryItem = React.memo(HistoryItem);

interface HistoryProps {
  items: chrome.history.HistoryItem[];
}

export const History: React.FC<HistoryProps> = ({ items }) => {
  return (
    <StyledList>
      {items.map((item) => (
        <MemoizedHistoryItem key={item.id} item={item} />
      ))}
    </StyledList>
  );
};
