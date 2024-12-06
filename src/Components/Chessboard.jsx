import { useEffect, useState } from "react";
import { QueenBoard } from "./QueenBoard";

const solveNqueens = (n) =>{
    //n is the number of colums and rows of the board
    const result = []; //this is a 2-d array
    const board = Array.from({length:n },()=>Array(n).fill('.')); //chessboard
    //helper function to check if the position of queens are valid

    const isValid = (row, col, board) =>{
        //check column;

        for(let i =0; i<row; i++){
            if(board[i][col] === 'Q') return false;
        }
        
        //check upper-left diagonal
        let duprow = row;
        let dupcol = col;
        while(row>=0 && col>=0){
            if(board[row][col]==='Q') return false;
            col--;
            row--;
        }
        row = duprow;
        col = dupcol;
        //check upper-right diagonal
        while(row>=0 && col>=0){
            if(board[row][col] === 'Q') return false;
            row--;
            col++;
        }
        return true;
    }


    function backtrack(row){
        if(row == n){
            result.push(board.map(row=>row.join('')));
            return;
        }
        for(let col =0; col<n; col++){
            if(isValid(row, col, board)){
                board[row][col] = 'Q';
                backtrack(row+1);
                board[row][col] = '.';
            }
        }
    }

    backtrack(0);
    console.log(result)
    return result;
    

}


export const Chessboard = ()=>{

    const[grid, setGrid]= useState(4);
    const[solutions, setSolutions] = useState([]);
    
   
    const onChangeHandler = (e)=>{

        if(e.target.value <=3){
          console.log("return a valid grid number")
        }else{
          setGrid(Number(e.target.value) || 4)
         
        }
        
        
        // now we have to extract the values from this textbox;
    }
    const ResuttHandler = () =>{
        const res = solveNqueens(grid);
        setSolutions(res);
    }

    return(
    <>
            <div>
                <input type="number"
                value={grid}
                onChange={(e)=>onChangeHandler(e)}
                min= '1'
                 />
              </div>

              <div>
                  <QueenBoard n = {4}></QueenBoard>
                 
              </div>
                 
               
                 
        

    </>)
}