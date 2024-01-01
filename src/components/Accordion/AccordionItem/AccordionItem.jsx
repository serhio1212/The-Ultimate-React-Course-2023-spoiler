import {useState} from 'react'
import cs from './AccordionItem.module.css'


function AccordionItem({num, title, text}) {
const [isOpen, setIsOpen] = useState(false);

    function handleToggle() {
    return (setIsOpen((isOpen) => !isOpen))
}

    return <>
    <div className="item" onClick={handleToggle}>
<p>{num < 9 ? `0${num + 1}` : num + 1}</p>
<p>{title}</p>
<p>{isOpen ? "-" : "+"}</p>

</div>
{isOpen && <div className="content-box">{text}</div>}
</>
}
export default AccordionItem;
