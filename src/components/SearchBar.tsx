import React, {
  useState,
  useCallback,
  ChangeEventHandler,
  useRef,
} from "react";
import styled from "styled-components";

const SearchContainer = styled.div`
  margin: 10px;
  border-radius: 30px;
  border: 1px solid #dcdcdc;
  max-width: 90vw;
  display: flex;
  align-items: center;
  &:hover {
    box-shadow: 1px 1px 8px 1px #dcdcdc;
  }
  &:focus-within {
    box-shadow: 1px 1px 8px 1px #dcdcdc;
    outline: none;
  }
`;

const SearchInput = styled.input`
  height: 45px;
  border: none;
  padding: 0 30px;
  flex: 1 auto;
  outline: none;
  font-size: 14px;
  outline: none;
  border-radius: 30px;
`;

interface SearchBarProps {
  onSearchChange: (value: string) => void;
  throttleInputMillis?: number;
}

const THROTTLE_INPUT_MILLIS = 500;

export const SearchBar: React.FC<SearchBarProps> = ({
  onSearchChange,
  throttleInputMillis,
}) => {
  const searchInput = useRef<HTMLInputElement | null>(null);
  const [throttled, setThrottled] = useState(false);

  const onChange = () => {
    if (!throttled) {
      setThrottled(true);
      setTimeout(() => {
        setThrottled(false);

        const value = searchInput?.current?.value ?? "";
        onSearchChange(value);
      }, throttleInputMillis ?? THROTTLE_INPUT_MILLIS);
    }
  };

  return (
    <SearchContainer>
      <SearchInput
        type="text"
        ref={searchInput}
        placeholder="Search"
        onChange={onChange}
        // onKeyUp={debounceSearchTerm}
      />
    </SearchContainer>
  );
};
