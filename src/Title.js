import React from "react";
class Title extends React.Component{
    constructor(){
        super();
        this.state = {
            Title:"aplikasi React pertama ku",
            subTitle:"dibuat dengan semangat"
        }
    }
    render (){
        return(
            <div>
                <h1>{this.state.Title}</h1>
                <p>{this.state.subTitle}</p>

            </div>
        )

    }
}
export default Title;