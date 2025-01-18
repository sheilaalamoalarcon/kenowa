import { test, expect } from "@playwright/test";

test.describe("Header component", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:4321");
  });
  test.beforeEach(async ({ page }) => {
    //google login mock up
    await page.route("**/api/auth/callback/google", async (route) => {
      const json = [
        {
          status: 200,
          body: JSON.stringify({
            user: {
              name: "Test User",
              image: "test-image.jpg",
              id: "123",
            },
          }),
        },
      ];
      await route.fulfill({ json });
    });

    //i18n mock
    await page.route("**/i18n/utils", async (route) => {
      const json = [
        {
          status: 200,
          useTranslations: {
            "nav.logIn": "Log In",
            "nav.chat": "Chat",
            "nav.create": "Create",
            "nav.logOut": "Log Out",
          },
          getLangFromUrl: "en",
        },
      ];
      await route.fulfill({ json });
    });
    /*
    jest.clearAllMocks();
    */
  });
  test("renders login link when no session exists", async ({ page }) => {
    expect(
      page.getByRole("navigation", {
        name: "log-in-nav",
      })
    ).toBeTruthy();
  });
  test("renders user navigation when session exists", async ({ page }) => {
    await page.route("**/api/auth/callback/google", async (route) => {
      const json = [
        {
          status: 200,
          body: JSON.stringify({
            user: {
              name: "Test User",
              image: "test-image.jpg",
              id: "123",
            },
          }),
        },
      ];
      await route.fulfill({ json });
    });
    expect(
      page.getByRole("navigation", {
        name: "session-nav",
      })
    ).toBeTruthy();
    expect(page.getByText("Test User")).toBeTruthy();
    expect(page.getByText("Chat")).toBeTruthy();
    expect(page.getByText("Create")).toBeTruthy();
    expect(page.getByText("Log Out")).toBeTruthy();
  });
  /*
  test("dialog opens", async ({ page }) => {
    const dialog = page.getByRole("dialog");
    const openButton = page.getByRole("button", {
      name: "open",
    });

    expect(dialog).not.toBeVisible();

    await openButton.click();
    await expect(dialog).toBeVisible();
  });
  test("dialog opens and closes correctly", async ({ page }) => {
    await page.locator("#form-dialog").first();
    await page.getByRole("button", { name: "close" }).click();
    await expect(page.getByRole("button", { name: "close" })).toBeHidden();
  });
   */
});
