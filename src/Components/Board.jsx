


export const Board = ({n, onPlaceQueen, queens})=>{
    return (
        <div className={`grid gap-2`}
        style={{gridTemplateColumns: `repeat(${n}, 50px)`}} //dynamic layout
         >
            {Array.from({length: n*n}).map((_,index)=>{
                const row = Math.floor(index/n);
                const col = index%n

                //check if a queen exists at this cell
                const isQueen = queens.some((q) =>q.row==row && q.col == col);
                return(
                    <div key={index}
                    className={`w-12 h-12 border flex items-center justify-center cursor-pointer ${isQueen ?"bg-blue-400 text-white": "bg-white"}`}
                    onClick={()=> onPlaceQueen(row,col)} // when the use click a cell, this function is called
                    >
                        {isQueen?"Q":""}
                    </div>
                )
            })}

        </div>
    )
}

