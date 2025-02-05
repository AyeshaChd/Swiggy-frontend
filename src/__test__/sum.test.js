import { sum } from "../components/sum";

test("sum ", () => {
  const result = sum(3, 4);
  expect(result).toBe(7);
});
