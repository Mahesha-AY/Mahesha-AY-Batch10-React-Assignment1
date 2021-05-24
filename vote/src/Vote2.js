import React,{useState} from 'react'
const Vote2 = () => {
    const [number, setNum] = useState(0);

    const increment = () => {
        setNum(number+1);
    }

    const decrement = () => {
       if(number>0){
        setNum(number-1);
       }
    }

    const reset = () => {
        if(number >0){}
        setNum(0);
    }

    return(
        <>
        <div>
            <h1>welcome</h1>
            <div>
             {number}

            <div>
               <button onClick={increment} className="btn" >incre</button>  
               <button onClick={decrement}  className="btn">decre</button> 
               <button onClick={reset}  className="btn">reset</button> 
            </div>
        </div>
        </div>

        
        
        </>

    );
}

export default Vote2;