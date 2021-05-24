import React,{useState} from 'react'

const Multiple= () => {

    const [num1, sNum1] = useState(0);
    
    const [num2, sNum2] = useState(0);
        
    const [num3, sNum3] = useState(0);

    const groupa=()=>{
        sNum1(num1+1);
    }

    const groupb=()=>{
        sNum2(num2+1);
    }

    const groupc=()=>{
        sNum3(num3+1);
    }



    return(
        <>
        <div>
        <h1>Welcome </h1>
        <h1>Choose Your Group</h1>
          <button onClick={groupa} className="btn">Group-A</button> :: {num1}  <br></br> <br></br>
          <button onClick={groupb} className="btn">Group-B</button> :: {num2}  <br></br> <br></br>
          <button onClick={groupc} className="btn">Group-C</button> :: {num3}   <br></br> <br></br>
       
       

        </div>
        
        </>

    )
}

export default Multiple;