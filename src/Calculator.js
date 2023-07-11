import style from "./calculator.module.css";
import { useState } from "react";

const Calculator = ()=>{
    const [result,setResult] = useState("");
    const [plus,setPlus] = useState({value:"+"});
    const handleClick = (e)=>{
       setResult(result.concat(e.target.value));
    }
    const handleClear = ()=>{
        setResult("");
    }
    const handleResult = ()=>{
        try{
            setResult(eval(result).toString());
        }catch(err){
            setResult("Error");
        } 
    }
    const handlePlusMinus = (e)=>{
        setResult(result.concat(e.target.value));
        if(plus.value=="+"){
            setPlus(
                {
                 value: "-",
                } 
             )
        }else{
            setPlus(
                {
                 value: "+",
                } 
             )
        }
        
    }
    return(
        <>
        <div className={style.outerDiv}>
            <h1 className={style.heading}>
                Calculator
            </h1>
            <div className={style.inputDiv}>
                <form className={style.input}>
                    <input type="text" className={style.input} value={result}>
                    </input>
                </form>
            </div>
            <div className={style.buttonsDiv}>
                <button onClick={handleClear} className={style.btn} value="c">C</button>
                <button onClick={handlePlusMinus} className={style.btn} value={plus.value}>+/-</button>
                <button onClick={handleClick} className={style.btn} value="%">%</button>
                <button onClick={handleClick} className={`${style.btn} ${style.highlight}`} value="/">/</button>
                <button onClick={handleClick} className={style.btn} value="7">7</button>
                <button onClick={handleClick} className={style.btn} value="8">8</button>
                <button onClick={handleClick} className={style.btn} value="9">9</button>
                <button onClick={handleClick} className={`${style.btn} ${style.highlight}`} value="*">x</button>
                <button onClick={handleClick} className={style.btn} value="4">4</button>
                <button onClick={handleClick} className={style.btn} value="5">5</button>
                <button onClick={handleClick} className={style.btn} value="6">6</button>
                <button onClick={handleClick} className={`${style.btn} ${style.highlight}`} value="-">-</button>
                <button onClick={handleClick} className={style.btn} value="1">1</button>
                <button onClick={handleClick} className={style.btn} value="2">2</button>
                <button onClick={handleClick} className={style.btn} value="3">3</button>
                <button onClick={handleClick} className={`${style.btn} ${style.highlight}`} value="+">+</button>
                <button onClick={handleClick} className={style.btn} value="0" id={style.zero}>0</button>
                <button onClick={handleClick} className={style.btn} value=".">.</button>
                <button onClick={handleResult} className={`${style.btn} ${style.highlight}`} value="=">=</button>
            </div>
        </div>
        </>
    )
};

export default Calculator;