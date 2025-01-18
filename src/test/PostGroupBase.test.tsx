import { render, screen } from "@testing-library/preact";
import type { CMessage } from "@/constants/classes";
import PostGroupBase from "@/components/PostGroupBase";
import "@testing-library/jest-dom";

const mockData: CMessage[] = [
  {
    id: "1",
    text: "Test Content",
    created_at: new Date().toString(),
    propietary: "user1",
    propietary_name: "user1",
  },
];

describe("PostGroupBase", () => {
  test("renders cards when data is provided", () => {
    render(
      <PostGroupBase
        data={mockData}
        _id="user1"
        isDelete={false}
        scroll={false}
      />
    );
    expect(screen.getByText("Test Content")).toBeInTheDocument();
  });

  test("renders alert when no data is provided", () => {
    render(
      <PostGroupBase data={[]} _id="user1" isDelete={false} scroll={false} />
    );
    expect(screen.getByText("No hay posts")).toBeInTheDocument();
  });

  test("applies scroll class when scroll prop is true", () => {
    const { container } = render(
      <PostGroupBase
        data={mockData}
        _id="user1"
        isDelete={false}
        scroll={true}
      />
    );
    const mainDiv = container.firstElementChild as HTMLElement;
    expect(mainDiv).toHaveClass("flex-row");
    expect(mainDiv).toHaveClass("overflow-x-scroll");
  });
});
