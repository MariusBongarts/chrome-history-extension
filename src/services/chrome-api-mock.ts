import { mockHistoryItems } from "../mocks";

/**
 * Mocks the chrome.history API for development.
 *
 * @class ChromeHistoryMock
 */
const ChromeAMockHistoryMock: Partial<typeof chrome.history> = {
  search: (query: chrome.history.HistoryQuery) => {
    return new Promise((res) => {
      const applyTextFilter = (item: chrome.history.HistoryItem) => {
        return (
          !query.text ||
          item.title?.toLowerCase().includes(query.text.toLowerCase()) ||
          item.url?.toLowerCase().includes(query.text.toLowerCase())
        );
      };
      const filteredItems = mockHistoryItems.filter(applyTextFilter);
      res(
        filteredItems.slice(
          0,
          query.maxResults && query.maxResults < filteredItems.length
            ? query.maxResults
            : filteredItems.length
        )
      );
    });
  },
};

const chromeApisAreAvailable = typeof chrome.history !== "undefined";

export function setupChromeMocks() {
  if (!chromeApisAreAvailable) {
    // @ts-ignore
    global.chrome = {
      ...(window.chrome ?? {}),
      history: {
        // @ts-ignore
        ...ChromeAMockHistoryMock,
        ...(window.chrome?.history ?? {}),
      },
    };
  }
}
