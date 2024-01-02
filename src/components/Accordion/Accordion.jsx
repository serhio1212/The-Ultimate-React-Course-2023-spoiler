import cs from './Accordion.module.css';
import AccordionItem from "./AccordionItem/AccordionItem.jsx";
import PropTypes from 'prop-types';

function Accordion({dData}) {
    return <div className={cs.accordion}>
        {dData.map((el, i)=> <AccordionItem key={el.thrititle} thrititle={el.thrititle} text={el.text} num={i}/>)}
    </div>
}

Accordion.propTypes = {
    dData: PropTypes.array,
};

export default Accordion;