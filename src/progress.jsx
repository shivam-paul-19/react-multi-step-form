import "./progress.css";
import { useState } from "react";

function Progress({prog, lineProg}) {
    let style2 = {
        display: "inline",
        background: "white",
        height: "15px",
        width: "15px",
        border: "1px solid purple",
        borderRadius: "50%"
    };

    let style1 = {
        background: "purple",
        height: "20px",
        width: "20px",
        borderRadius: "50%"
    };

    let line_style2 = {
        height: "110px",
        width: "1px",
        backgroundColor: "pink"
    };

    let line_style1 = {
        height: "110px",
        width: "4px",
        backgroundColor: "purple"
    };

    console.log(prog);
    
    return (
        <div className="progress">
            <div className="steps">
                <div className="first-circle" style={
                    (prog[0])? style1 : style2
                }></div>
                <div className="steps-label">&nbsp;&nbsp;Basic information</div>
            </div>
            <div className="line-1 lines" style={
                (lineProg[0])? line_style1 : line_style2
            }></div>
            <div className="steps">
                <div className="second"  style={
                    (prog[1])? style1 : style2
                }></div>
                <div className="steps-label">&nbsp;&nbsp;Set Password</div>
            </div>
            <div className="line-2 lines" style={
                (lineProg[1])? line_style1 : line_style2
            }></div>
            <div className="steps">
                <div className="third" style={
                    (prog[2])? style1 : style2
                }></div>
                <div className="steps-label">&nbsp;&nbsp;Profile setup</div>
            </div>
            <div className="line-3 lines" style={
                (lineProg[2])? line_style1 : line_style2
            }></div>
            <div className="steps">
                <div className="fourth" style={
                    (prog[3])? style1 : style2
                }></div>
                <div className="steps-label">&nbsp;&nbsp;All set !</div>
            </div>
        </div>
    )
}

export default Progress;