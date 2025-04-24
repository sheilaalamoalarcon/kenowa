import { test, expect } from "@playwright/test";

/**
 * Test suite for CreatePostForm component
 * Testing form elements visibility, input interactions, and form submission
 */
test.describe("CreatePostForm Component", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/your-form-page");
  });

  test("should render form elements correctly", async ({ page }) => {
    const form = await page.getByRole("form");
    await expect(form).toBeVisible();

    const titleInput = await page.getByRole("textbox", { name: /title/i });
    await expect(titleInput).toBeVisible();

    const subtitleInput = await page.getByRole("textbox", {
      name: /subtitle/i,
    });
    await expect(subtitleInput).toBeVisible();

    const editor = await page.locator("#editor");
    await expect(editor).toBeVisible();

    const boldButton = await page.getByRole("button", { name: "BOLD" });
    const italicButton = await page.getByRole("button", { name: "ITALIC" });
    const underlineButton = await page.getByRole("button", {
      name: "UNDERLINE",
    });

    await expect(boldButton).toBeVisible();
    await expect(italicButton).toBeVisible();
    await expect(underlineButton).toBeVisible();
  });

  test("should be able to input text in all fields", async ({ page }) => {
    await page.getByRole("textbox", { name: /title/i }).fill("Test Title");

    await page
      .getByRole("textbox", { name: /subtitle/i })
      .fill("Test Subtitle");

    await page.locator("#editor").fill("Test content");

    await expect(page.getByRole("textbox", { name: /title/i })).toHaveValue(
      "Test Title"
    );
    await expect(page.getByRole("textbox", { name: /subtitle/i })).toHaveValue(
      "Test Subtitle"
    );
    await expect(page.locator("#editor")).toContainText("Test content");
  });

  test("should apply text formatting", async ({ page }) => {
    await page.locator("#editor").click();
    await page.locator("#editor").fill("Test formatting");

    await page.keyboard.press("Control+A");

    await page.getByRole("button", { name: "BOLD" }).click();

    const editorContent = await page.locator("#editor").innerHTML();
    expect(editorContent).toContain("<b>Test formatting</b>");
  });

  test("should submit form with correct data", async ({ page }) => {
    await page.route("**/api/messages/new", async (route) => {
      const postData = route.request().postData();
      expect(JSON.parse(postData!)).toMatchObject({
        title: "Test Title",
        subtitle: "Test Subtitle",
        html_content: expect.any(String),
      });
      await route.fulfill({ status: 200 });
    });

    await page.getByRole("textbox", { name: /title/i }).fill("Test Title");
    await page
      .getByRole("textbox", { name: /subtitle/i })
      .fill("Test Subtitle");
    await page.locator("#editor").fill("Test content");

    await page.getByRole("button", { name: /send/i }).click();
  });
});
