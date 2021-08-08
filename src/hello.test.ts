import { hello } from "./hello";

test("Should able to say hello", () => {
  expect(hello('world')).toBe("Hello world");
})
