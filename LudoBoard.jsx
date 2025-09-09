import { useState } from "react";

function LudoBoard() {
    let [moves, setMoves] = useState({ blue: 0, yellow: 0, green: 0, red: 0 }); //object & states
    let [arr, setArr] = useState(["no moves"]); //Array & states

    let updateBlue = () => {
        // moves.blue += 1;
        // setMoves({ ...moves, blue: moves.blue + 1 });
        setMoves((preValue) => {
            return { ...preValue, blue: moves.blue + 1 };
            //object value cannot be passed disrectly so we used ... spread to make a copy of the object and then update it
        });
    };

    let updateYellow = () => {
        setMoves((preValue) => {
            return { ...preValue, yellow: moves.yellow + 1 };
        });

        //Array & states
        // setArr((preArr) => {
        //     return [...preArr, "yellow moves"];
        //     console.log(arr);
        // });
    };

    let updateGreen = () => {
        setMoves((preValue) => {
            return { ...preValue, green: moves.green + 1 };
        });
    };

    let updateRed = () => {
        console.log(moves.red);
        setMoves((preValue) => {
            return { ...preValue, red: moves.red + 1 };
        });
    };

    return (
        <div>
            <p>Game Begin!</p>
            <p>{arr}</p>
            <div className="board">
                <p>Blue moves = {moves.blue}</p>
                <button
                    style={{ backgroundColor: "blue" }}
                    onClick={updateBlue}
                >
                    +1
                </button>
                <p>yellow moves = {moves.yellow}</p>
                <button
                    style={{ backgroundColor: "yellow", color: "black" }}
                    onClick={updateYellow}
                >
                    +1
                </button>
                <p>Green moves = {moves.green}</p>
                <button
                    style={{ backgroundColor: "green" }}
                    onClick={updateGreen}
                >
                    +1
                </button>
                <p>Red moves = {moves.red}</p>
                <button style={{ backgroundColor: "red" }} onClick={updateRed}>
                    +1
                </button>
            </div>
        </div>
    );
}

export default LudoBoard;
