import React, { useState } from 'react'
import './input.css'

const Inputs = () => {
       
    const [name,setName] = useState('JANE APPLESEED')
    const [number, setNumber] = useState("")
    const [mm,setMm] =useState("00")
    const [yy,setYy]  =useState("00")
    const [cvc,setCvc] = useState ("000")
    const [numError,setNumError]= useState ('')
    const [submitted,setSubmitted] = useState(false)

    const changeNum = (e) => {
        
        const inputValue = e.target.value.replace(/\D/g, '');
        
        
        const formattedValue = inputValue.replace(/(\d{4})/g, '$1 ').trim();
    
       
        setNumber(formattedValue);
      };

    const changeName = (e) =>{
        setName(e.target.value)
    }

    const changeMm = (e) => {
        setMm(e.target.value)
    }
     const changeYy = (e) => {
        setYy(e.target.value)
     }
     const changeCvc = (e) => {
        setCvc(e.target.value)
     }
     const validateNumbers = (number) => {
        if (number.trim() === "") {
            setNumError("Number is empty");
            return;
        }
    
        setNumError("");
    };

    
      
      const handleSubmit = (e) => {
         e.preventDefault()
         validateNumbers(number)
         console.log("sdasds")
         if(numError === "" ){
            setSubmitted(true)
         }
      }
    
  return (
        <> 
        
        <div className='background'>
 
          <div className='grey'>
            <div className='blk'></div>
            <div className="cvc">
                <p className='cvccode'>{cvc}</p>
            </div>
          </div>

          <div className='maindiv'>
            <img className='circle' src="/assets/circle.svg" alt="" />
             <p className='cardnumbers'>{number ==="" ? "0000 0000 0000 0000" : number}</p>
             <h1 className='name'>{name}</h1>
             <p className='mm'>{mm} / <p className='yy'>{yy}</p>  </p>
          </div>
 

          <form onChange={(e) => e.preventDefault()} onSubmit={(e) => handleSubmit(e)}>
 
    <div>
      <input className='nameval' onChange={changeName} maxLength={20} type="text" placeholder='e.g. Jane Appleseed' />
      <br />
      <input className='numberinput' type="text" value={number} maxLength={19} onChange={changeNum} placeholder='e.g. 1234 5678 9123 0000'/>
      <p className='numError'>{numError}</p>
      <br />
      <input onChange={changeMm} className='inpmm' type="text" maxLength={2} placeholder='MM' />
      <br />
      <input onChange={changeYy} type="text" placeholder='YY' maxLength={2} className='inpyy' />
      <br />
      <input onChange={changeCvc} type="text" placeholder='CVC' maxLength={3} className='cvcinpm' /> 
    </div>
   
  <button type='submit' className='ok'>CONFIRM</button>
</form>

         
        </div>




        <div className='txtinputs'>
            <h1 className='inpname'>Cardholder Name</h1>
            <h1 className='carddnamee'>Card Number</h1>
            <h1 className='exp'> Exp. Date (MM/YY)  </h1>
            <h1 className='cvcin'> CVC </h1>
        </div>

        </>
  )
}

export default Inputs