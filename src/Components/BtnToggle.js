import React, {Component} from "react";

class ToggleBtn extends Component {
    constructor(props){
        super(props);
        this.state = {isToggleOn: true};
        this.handleToggle = this.handleToggle.bind(this);
    }
    handleToggle() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }))
    }
    render(){
        return(
            <button onClick={this.handleToggle}>
                {this.state.isToggleOn ? 'ON': 'OFF'}
            </button>
        )
    }
}
export default ToggleBtn;