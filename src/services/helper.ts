type TruncateOptions = {
  truncateSymbol?: string;
};

export function truncateString(
  value: string,
  maxLength: number,
  options?: TruncateOptions
) {
  options = {
    truncateSymbol: "...",
    ...options,
  };
  const startIndex = 0;
  const endIndex = maxLength;

  return value?.length <= maxLength
    ? value
    : `${value?.substring(startIndex, endIndex)}${options.truncateSymbol}`;
}

export function urlWithoutSchema(url: string) {
  return url?.replace(/https:\/\/|http:\/\/|www.|/gi, "");
}
