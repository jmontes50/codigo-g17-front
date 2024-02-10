import { useState } from "react";
//Me va a permitir tener un contador e incrementarlo con un customHook

const useCounter = () => {
    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(counter + 1);
    }

    return { counter, increment }
}

export default useCounter;