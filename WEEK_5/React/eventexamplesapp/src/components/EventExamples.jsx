import { useState } from "react";

function EventExamples() {

    const [count, setCount] = useState(5);

    function increment() {
        setCount(count + 1);
    }

    function decrement() {
        setCount(count - 1);
    }

    function sayHello() {
        alert("Hello! Member1");
    }

    function increase() {
        increment();
        sayHello();
    }

    function sayWelcome(message) {
        alert(message);
    }

    function onPress() {
        alert("I was clicked");
    }

    return (

        <div>

            <h2>{count}</h2>

            <button onClick={increase}>
                Increment
            </button>

            <br /><br />

            <button onClick={decrement}>
                Decrement
            </button>

            <br /><br />

            <button onClick={() => sayWelcome("welcome")}>
                Say welcome
            </button>

            <br /><br />

            <button onClick={onPress}>
                Click on me
            </button>

        </div>

    );

}

export default EventExamples;