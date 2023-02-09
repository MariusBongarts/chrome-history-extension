import styled from "styled-components";

export const StyledHistoryItem = styled.li`
  display: flex;
  align-items: center;
  column-gap: 8px;
  min-height: 20px;
  padding: 4px 8px;
  border-radius: 4px;
  cursor: default;

  &:hover {
    background: #fffbef;
  }
`;

export const StyledInfo = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  row-gap: 2px;
  padding: 4px;
`;

export const StyledItemLink = styled.a`
  color: var(--light-grey);
  text-decoration: none;
  font-size: 0.8rem;
`;
export const StyledTitle = styled.span`
  color: black;
  width: 100%;
  font-size: 0.9rem;
  font-weight: 400;
`;

export const StyledTime = styled.span`
  color: var(--light-grey);
`;

export const LogoBadge = styled.i`
  display: block;
  min-width: 24px;
  height: 24px;
  top: 6px;
  right: -6px;
  border-radius: 100%;
  color: var(--badge-color);
  background-color: var(--badge-bg-color);
  font-size: 12px;
  line-height: 2;
  text-align: center;
  padding: 2px;
`;
