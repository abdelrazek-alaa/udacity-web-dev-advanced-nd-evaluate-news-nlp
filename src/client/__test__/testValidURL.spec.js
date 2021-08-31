import { validURL } from "../js/validateUrl";

describe("Test Url Validity", () => {
  test("Testing validURL function", () => {
    expect(validURL).toBeDefined();
  });

  test("validURL must return false for invalid url", () => {
    expect(validURL("google")).toBeFalsy();
  });

  test("validURL must return true for valid url", () => {
    expect(validURL("https://google.com")).toBeTruthy();
  });
});
