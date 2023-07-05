import { useState } from "react"; 
import isFizzBuzz from "./utils/fizzBuzz";

type fizzBuzzArrayType = (string | number)[];

function FizzBuzz(): JSX.Element {
    const [fizzBuzzlist, setFizzBuzzList] = useState<fizzBuzzArrayType>([1])

    // handleNextClick: when clicking the next button, it will queue a rerender
    // with the array being the previous array and the value of
    // isFizzBuzz(previousArr.length + 1) 

    const handleAddOneClick = () => setFizzBuzzList(fizzBuzzlist  =>  [...fizzBuzzlist, isFizzBuzz(fizzBuzzlist.length + 1)]) 
    
    const handleAddFiveClick = () => setFizzBuzzList(fizzBuzzlist => {
        const remainingList: fizzBuzzArrayType = []
        for (let i = fizzBuzzlist.length + 1; i < fizzBuzzlist.length + 6; i++) {
            remainingList.push(isFizzBuzz(i))
        }
        return [...fizzBuzzlist, ...remainingList]
    }) 

    // arrow function: const functionName = () => {} OR () => {}

    // handlePrevClick: when clicking the previous button, it will queue a rerender
    // with the array being displayed as the previous array except the last value

    const handleSubtractOneClick = () => setFizzBuzzList(fizzBuzzlist.slice(0,-1))

    return (
        <>
            <button onClick={handleSubtractOneClick}>-1</button>
            <button onClick={handleAddOneClick}>+1</button>
            <button onClick={handleAddFiveClick}>+5</button>

            <p>{fizzBuzzlist.join(', ')}</p>
        </>
    )
}

export default FizzBuzz;