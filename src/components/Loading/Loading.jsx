import React from "react";
import './MyHeader.scss';


export default function Loading() {

    return (
        <div className="header">
            <div id='loading'>
                <div className="dot"/>
                <div className="dot"/>
                <div className="dot"/>
                <div className="dot"/>
                <div className="dot"/>
            </div>
        </div>
    )
}
