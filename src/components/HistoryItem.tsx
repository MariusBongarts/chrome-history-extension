import React from "react";
import styled from "styled-components";

interface HistoryItemProps {
  item: chrome.history.HistoryItem;
}

const StyledDate = styled.span`
  color: #646464;
`;

const StyledItem = styled.li`
  display: flex;
  align-items: center;
  column-gap: 8px;
  min-height: 20px;
  padding-inline-start: 10px;
  padding-top: 8px;
`;

export const HistoryItem: React.FC<HistoryItemProps> = ({ item }) => {
  const faviconUrl = `https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${item.url}&size=16`;

  return (
    <StyledItem>
      <img
        src={faviconUrl}
        alt={`Favicon of: ${item.url}`}
        width="16"
        height="16"
        loading="lazy"
      ></img>
      <StyledDate>
        {new Date(item.lastVisitTime ?? 0).toLocaleTimeString()}
      </StyledDate>
      {item.title}
    </StyledItem>
  );
};
