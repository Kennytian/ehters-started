import { Basic } from "../src/basic";

jest.setTimeout(5000 * 2);

describe("basic tests", () => {
  test("getBalance", async () => {
    const result: string = await new Basic().getBalance();
    // console.log(result, typeof result._hex);
    expect(result).toBeTruthy();
    expect(result).toEqual("0.0");
  });
});