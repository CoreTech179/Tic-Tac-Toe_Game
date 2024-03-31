import React, { useRef, useState } from 'react';
import {useTypewriter,Cursor} from 'react-simple-typewriter';
import './TicTacToe.css';
import circle from '../Images/circle.png';
import cross from '../Images/cross.png';

let data = ["","","","","","","","",""] //Storage for our tic tac toe game

function TicTacToe() {

    let [count,setCount] = useState(0);

    let [lock,setLock] = useState(false);

    let displayMessage = useRef(null);

    const [text] = useTypewriter({
        words: ['React JS'],
        loop: false,
        typeSpeed: 150,
        deleteSpeed: 50
    });

    let box1 = useRef(null);
    let box2 = useRef(null);
    let box3 = useRef(null);
    let box4 = useRef(null);
    let box5 = useRef(null);
    let box6 = useRef(null);
    let box7 = useRef(null);
    let box8 = useRef(null);
    let box9 = useRef(null);

    let boxArray = [box1,box2,box3,box4,box5,box6,box7,box8,box9];

    const toggle = (e,index)=>{
        if(lock){
            return 0;
        }
        if(count%2===0){
            e.target.innerHTML = `<img src='${cross}'>`;
            data[index] = "x";
            setCount(++count);
        }
        else{
            e.target.innerHTML = `<img src='${circle}'>`;
            data[index] = "o";
            setCount(++count);
        }

        checkWin();
    }

    const checkWin = ()=>{
        if(data[0]===data[1] && data[1]===data[2] && data[2]!==""){
            Won(data[2]);
        }
        else if(data[3]===data[4] && data[4]===data[5] && data[5]!==""){
            Won(data[5]);
        }
        else if(data[6]===data[7] && data[7]===data[8] && data[8]!==""){
            Won(data[8]);
        }
        else if(data[0]===data[3] && data[3]===data[6] && data[6]!==""){
            Won(data[6]);
        }
        else if(data[1]===data[4] && data[4]===data[7] && data[7]!==""){
            Won(data[7]);
        }
        else if(data[2]===data[5] && data[5]===data[8] && data[8]!==""){
            Won(data[8]);
        }
        else if(data[0]===data[4] && data[4]===data[8] && data[8]!==""){
            Won(data[8]);
        }
        else if(data[0]===data[1] && data[1]===data[2] && data[2]!==""){
            Won(data[2]);
        }
        else if(data[2]===data[4] && data[4]===data[6] && data[6]!==""){
            Won(data[6]);
        }

    }

    const Won = (winner)=>{
        setLock(true);
        if(winner==="x"){
            displayMessage.current.innerHTML = `Congratulations:  <img src='${cross}' className="messageImage" style="height:2rem;
            width:2rem;"> Wins!`;
        }
        else if(winner==="o"){
            displayMessage.current.innerHTML = `Congratulations: <img src='${circle}' className="messageImage" style="height:2rem;
            width:2rem;"> &nbsp; Wins!`;
        }
        else{
            displayMessage.current.innerHTML = `Game Tie!! Reset The Game Again`;
        }
    }

    const reset = (e)=>{
        setLock(false);
        data = ["","","","","","","","",""];
        displayMessage.current.innerHTML = `Welcome to Tic Tac Toe Using <span className="react">React JS</span>`;
        boxArray.map((e)=>{
            e.current.innerHTML = "";
        });
    }

  return (
    <>
    <div className="header">
        <header ref={displayMessage}>Welcome to Tic Tac Toe Using <span className="react">{text}</span>
        <Cursor/>
        </header>
    </div>

    <div className="box">

        <div className="row1">
            <div className="box1 commonBox" ref={box1} onClick={(e)=>{toggle(e,0)}}></div>
            <div className="box2 commonBox" ref={box2} onClick={(e)=>{toggle(e,1)}}></div>
            <div className="box3 commonBox" ref={box3} onClick={(e)=>{toggle(e,2)}}></div>
        </div>

        <div className="row2">
            <div className="box1 commonBox" ref={box4} onClick={(e)=>{toggle(e,3)}}></div>
            <div className="box2 commonBox" ref={box5} onClick={(e)=>{toggle(e,4)}}></div>
            <div className="box3 commonBox" ref={box6} onClick={(e)=>{toggle(e,5)}}></div>
        </div>

        <div className="row3">
            <div className="box1 commonBox" ref={box7} onClick={(e)=>{toggle(e,6)}}></div>
            <div className="box2 commonBox" ref={box8} onClick={(e)=>{toggle(e,7)}}></div>
            <div className="box3 commonBox" ref={box9} onClick={(e)=>{toggle(e,8)}}></div>
        </div>

    </div>

    <div className="button">
        <button type="reset" onClick={(e)=>{reset()}}>Reset</button>
    </div>

    </>
  )
}

export default TicTacToe;
