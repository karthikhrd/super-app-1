import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import FormTitle from "../FormTitle";

describe("HomePage", () => {
  test("title render", () => {
    render(<FormTitle />);

    const elementText = screen.getByText("Create your new account");
    expect(elementText).toBeInTheDocument();
  });
});
