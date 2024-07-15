export default function AccordionItem({num, title,children, curOpen, onOpen}){
    const isOpen = num === curOpen
    function handleIsOpen(){
        onOpen(isOpen?null:num)
    }
    
    return(
        <div className ={`item ${isOpen?'open':''}`} onClick={handleIsOpen}>
        <p className='number'>{num<9?`0${num+1}`:num+1}</p>
            <p className='title'>{title}</p>
            <p className='icon'>{isOpen?"-":"+"}</p>
            {isOpen && <div className='content-box'>{children}</div>}
        </div>
    )
}