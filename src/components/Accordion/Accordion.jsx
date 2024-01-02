
import cs from './Accordion.module.css';
import AccordionItem from "./AccordionItem/AccordionItem.jsx";
// import PropTypes from 'prop-types';

function Accordion({dData}) {
    return <div className={cs.accordion}>
        {dData.map((el, i)=> <AccordionItem key={el.title} title={el.title} text={el.text} num={i}/>)}
    </div>
}

// Accordion.propTypes = {
//     dData: PropTypes.object,
// };

export default Accordion;