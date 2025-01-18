import { render, screen } from "@testing-library/preact";
import Card, { type Props } from "@/components/Card";
import "@testing-library/jest-dom";

const mockData: Props[] = [
  {
    id: "1",
    text: "Test Content",
    created_at: new Date().toString(),
    propietary: "user1",
    isDelete: false,
    user_id: "0",
    propietary_name: "Sheila Álamo",
  },
];

describe("Card component", () => {
  test("renders card", () => {
    render(<Card {...mockData[0]} />);
    expect(screen.getByText("Test Content")).toBeInTheDocument();
  });
});
