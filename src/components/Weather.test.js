import { render, screen, act } from "@testing-library/react";
import Weather from "./Weather";

const mock = {
  current: { temp_c: 15, condition: { icon: "http://example.com" } },
};

describe("Weather", () => {
  it("should display temperature", async () => {
    global.fetch = jest
      .fn()
      .mockResolvedValue({ json: () => Promise.resolve(mock) });

    await act(() => {
      render(<Weather />);
    });
    expect(screen.getByText("15 °C")).toBeInTheDocument();
  });
});
