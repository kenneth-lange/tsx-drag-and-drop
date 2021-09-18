import React from 'react';

const HoverExample = () => {
    const [ dragOver, setDragOver ] = React.useState(false); 
    const handleDragOverStart = () => setDragOver(true);
    const handleDragOverEnd = () => setDragOver(false);
    
    const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
        event.dataTransfer.setData('text', event.currentTarget.id);
    }
    
    const enableDropping = (event: React.DragEvent<HTMLDivElement>) => { 
        event.preventDefault();
    }
        
    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        const id = event.dataTransfer.getData('text');
        console.log(`Somebody dropped an element with id: ${id}`);
        setDragOver(false);
    }
    
    return (
        <div>
            <div id="d1" draggable="true" onDragStart={handleDragStart}>Drag me</div>
            <div id="d2" draggable="true" onDragStart={handleDragStart}>... Or me!</div>
            <div
                onDragOver={enableDropping}
                onDrop={handleDrop}
                onDragEnter={handleDragOverStart}
                onDragLeave={handleDragOverEnd}
                style={ dragOver ? {fontWeight: 'bold', background: 'red'} : {} }
            >
                Drop Zone
            </div>
        </div>
    );
}

export default HoverExample;