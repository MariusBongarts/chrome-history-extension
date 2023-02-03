import React from "react";
import { HistoryItem } from "./HistoryItem";
import styled from "styled-components";

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

interface HistoryProps {
  items: chrome.history.HistoryItem[];
}

export const History: React.FC<HistoryProps> = ({ items }) => {
  return (
    <StyledList>
      {items.map((item) => (
        <HistoryItem key={item.id} item={item} />
      ))}
    </StyledList>
  );
};
