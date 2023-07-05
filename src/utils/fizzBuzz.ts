type fizzBuzzType = string | number;

const isFizzBuzz = (num: number): fizzBuzzType => {
    if (num % 15 === 0) {
        return 'FizzBuzz';
    } else if (num % 5 === 0) {
        return 'Buzz';
    } else if (num % 3 === 0) {
        return 'Fizz';
    } else return num;
}


//greet(name: string): string

export default isFizzBuzz;