import {useState} from 'react'
import cs from './AccordionItem.module.css'
import PropTypes from 'prop-types';

function AccordionItem({num, thrititle, text}) {
const [isOpen, setIsOpen] = useState(false);

    function handleToggle() {
    return (setIsOpen((isOpen) => !isOpen))
}

    return <>
    <div className={cs.item} onClick={handleToggle}>
<p>{num < 9 ? `0${num + 1}` : num + 1}</p>
<p>{thrititle}</p>
<p>{isOpen ? "-" : "+"}</p>

</div>
{isOpen && <div className={cs.contentBox}>{text}</div>}
</>
}
export default AccordionItem;
