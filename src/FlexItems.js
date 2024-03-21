import React from 'react';
import './FlexItem.css';

class FlexItem extends React.Component {
    render(){
        return(
            <div>
                <h1>Flex Container</h1>
                <p>Four Flex Item in Flex Container</p>
                <div className="flex-container">
                    <div style={{backgroundColor: "Orange"}}>Box 1</div>
                    <div style={{backgroundColor: "blue"}}>Box 2</div>
                    <div style={{backgroundColor: "yellow", color:"black"}}>Box 3</div>
                    <div style={{backgroundColor: "red"}}>Box 4</div>
                </div>
            </div>
        );
    }
}
export default FlexItem;
