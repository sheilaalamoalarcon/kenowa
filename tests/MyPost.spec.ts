import { test, expect } from "@playwright/test";

test.describe("MyPosts Component Tests", () => {
  test("should render posts grid when messages exist", async ({ page }) => {
    await page.goto("http://localhost:4321/posts");

    const postGrid = await page.locator("#post-grid-group");
    await expect(postGrid).toBeVisible();

    const posts = await page.locator("#post-grid-group > *");
    const count = await posts.count();
    expect(count).toBeGreaterThan(0);
  });

  test("should show warning when no posts exist", async ({ page }) => {
    await page.goto("http://localhost:4321/posts?empty=true");

    const alert = await page.locator(".alert");
    await expect(alert).toBeVisible();
    await expect(alert).toHaveText("No hay posts");
  });

  test("should redirect to home when no session exists", async ({ page }) => {
    await page.context().clearCookies();

    const response = await page.goto("http://localhost:4321/posts");

    expect(response?.url()).toBe("http://localhost:4321/");
  });

  test("should filter posts by user ID when type is USER", async ({ page }) => {
    await page.goto("http://localhost:4321/posts/user/123");

    const posts = await page.locator("#post-grid-group > *");
    await posts.evaluateAll((elements) => {
      return elements.every((el) => el.getAttribute("data-user-id") === "123");
    });
  });
});
