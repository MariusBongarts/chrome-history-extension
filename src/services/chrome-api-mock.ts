import { mockHistoryItems } from "../mocks";

/**
 * Mocks the chrome.history API for development.
 *
 * @class ChromeHistoryMock
 */
const ChromeAMockHistoryMock: Partial<typeof chrome.history> = {
  search: (query: chrome.history.HistoryQuery) => {
    return new Promise((res) => {
      res(
        mockHistoryItems.slice(0, query.maxResults ?? mockHistoryItems.length)
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
