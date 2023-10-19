import { describe, expect, it } from "vitest";
import { emailValidation } from "../inputValidation";

describe("emailValidation", () => {
  it("should return true if email is valid", () => {
    expect(emailValidation("sdgsag@sdgs.ss")).toBe(true);
  });

  it("should return false if no @ present", () => {
    expect(emailValidation("sdgsadgA.dgs.sdg")).toBe(false);
  });

  it("should return false if no letters before @ present", () => {
    expect(emailValidation("@dgs.sdg")).toBe(false);
  });

  it("should return false if no letters after @ and before . present", () => {
    expect(emailValidation("sdgsag@.sd")).toBe(false);
  });

  it("should return false if no letters after @", () => {
    expect(emailValidation("sdgsag@")).toBe(false);
  });

  it("should return false if capital letter present", () => {
    expect(emailValidation("sdgsadg@dg.Adg")).toBe(false);
  });

  it("should return false if 4 or more letters after .", () => {
    expect(emailValidation("sdgsdg@sds.dgsa")).toBe(false);
  });

  it("should return false if email is empty", () => {
    expect(emailValidation("")).toBe(false);
  });

  it("should return false if email is null", () => {
    expect(emailValidation(null)).toBe(false);
  });

  it("should return false if email is undefined", () => {
    expect(emailValidation(undefined)).toBe(false);
  });

  it("should return false if email is not a string", () => {
    expect(emailValidation(123)).toBe(false);
  });
});
