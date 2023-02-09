import React from "react";
import { truncateString, urlWithoutSchema } from "../services/helper";
import {
  StyledInfo,
  StyledHistoryItem,
  StyledItemLink,
  StyledTitle,
  StyledTime,
} from "./HistoryItem.styled";

interface HistoryItemProps {
  item: chrome.history.HistoryItem;
}

export const HistoryItem: React.FC<HistoryItemProps> = ({ item }) => {
  const faviconUrl = `https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${item.url}&size=16`;
  const lastVisitDate = new Date(item.lastVisitTime ?? 0);
  const time = lastVisitDate.toLocaleTimeString().substring(0, 5);

  const url = urlWithoutSchema(item.url ?? "");

  return (
    <StyledHistoryItem>
      <img
        src={faviconUrl}
        alt={`Favicon of: ${item.url}`}
        width="16"
        height="16"
        loading="lazy"
      ></img>
      <StyledInfo>
        <StyledTitle title={item.title}>
          {truncateString(item.title ?? "", 50)}
        </StyledTitle>
        <br />
        <StyledItemLink href={item.url} target="_blank" title={item.url}>
          {truncateString(url, 30)}
        </StyledItemLink>
      </StyledInfo>
      {/* <LogoBadge>{item.visitCount}</LogoBadge> */}
      <StyledTime title={lastVisitDate.toTimeString()}>{time}</StyledTime>
    </StyledHistoryItem>
  );
};
