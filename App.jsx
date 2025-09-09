import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import LuboBoard from "./LudoBoard";
import TodoList from "./TodoList";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            {/* <LuboBoard /> */}
            <TodoList />
        </>
    );
}

export default App;
