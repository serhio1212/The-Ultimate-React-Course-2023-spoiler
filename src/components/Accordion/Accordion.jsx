import React, {Component} from 'react';
import {useState} from 'react';
import cs from './Accordion.module.css';
import AccordionItem from "./AccordionItem/AccordionItem.jsx";

function Accordion({data}) {
    return <div className={cs.accordion}>
        {data.map((el, i)=> <AccordionItem key={el.title} title={el.title} text={el.text} num={i}/>)}
    </div>
}

export default Accordion;