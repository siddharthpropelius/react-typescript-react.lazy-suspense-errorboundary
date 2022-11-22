import React from 'react';
import Children from "./Children";


const Parent=(props:any)=> {
    return (
        <div>
           <Children>{props.children}</Children>
        </div>
    );
};

export default Parent;

