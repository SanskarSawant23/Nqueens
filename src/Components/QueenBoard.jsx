import { useState } from "react"
import { Board } from "./Board";

//some() is an array method that checks if atleast one element in the array staisfies the provided condition
export const QueenBoard = ({n})=>{ //size of the gird
    const[queens, setQueen] = useState([]); //array where the correnct position of the queens is stored

    const isValidPlacement = (row, col, queens)=>{  
        for(const queen of queens){
            if(queen.row == row || queen.col == col){
                return false;
            }
            else if(Math.abs(row- queen.row) === Math.abs(col-queen.col)){
                return false;
            }
        }
        return true;
    }


    const handlePlaceQeen = (row, col)=>{
        const isQueenHere = queens.some((q)=>q.row === row && q.col===col); //checks if there is a queen already placed here!

        if(isQueenHere){
            setQueen(queens.filter((q)=> !(q.row === row && q.col === col))); //
        }
        else if(isValidPlacement(row, col,queens)){
            setQueen([...queens, {row, col}]);
        }
        else{
            alert("Invalid position for a queen");
        }
    }


    return (
        <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold mb-4">Interactive N-queens Board</h1>
            <Board n ={n} onPlaceQueen={handlePlaceQeen} queens={queens}></Board>
            <button
                onClick={()=> setQueen([])}
                className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
                Reset Board
            </button>
            
        </div>
    )

}
