import { useState } from "react"; 
import isFizzBuzz from "./utils/fizzBuzz";

type fizzBuzzType = string | number;

function FizzBuzz(): JSX.Element {
    const [fizzBuzzlist, setFizzBuzzList] = useState<fizzBuzzType[]>([1])

    // handleNextClick: when clicking the next button, it will queue a rerender
    // with the array being the previous array and the value of
    // isFizzBuzz(previousArr.length + 1) 

    const handleNextClick = () => setFizzBuzzList([...fizzBuzzlist, isFizzBuzz(fizzBuzzlist.length + 1)]) 

    // handlePrevClick: when clicking the previous button, it will queue a rerender
    // with the array being displayed as the previous array except the last value

    const handlePrevClick = () => setFizzBuzzList(fizzBuzzlist.slice(0,-1))

    return (
        <>
            <button onClick={handlePrevClick}>Previous</button>
            <button onClick={handleNextClick}>Next</button>
            <p>{fizzBuzzlist.join(', ')}</p>
        </>
    )
}

export default FizzBuzz;