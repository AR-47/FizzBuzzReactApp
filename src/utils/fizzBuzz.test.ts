import isFizzBuzz from "./fizzBuzz";

test("basic isFizzBuz tests pass", () => {
    expect(isFizzBuzz(1)).toEqual(1);
    expect(isFizzBuzz(2)).toEqual(2);
    expect(isFizzBuzz(3)).toEqual('Fizz');
    expect(isFizzBuzz(4)).toEqual(4);
    expect(isFizzBuzz(5)).toEqual('Buzz');
    expect(isFizzBuzz(30)).toEqual('FizzBuzz');
})