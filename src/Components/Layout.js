import React, { Component } from "react";
import Header from "./Header";
import Footer from './Footer'


export default class Layout extends Component {
    constructor(){
        super();
        this.state = {
            title: `Welcome`
            }
        }

        onChange(title){
            this.setState({title})
            }

        render() {
            return(
                <div>
                    <Header onChange={this.onChange.bind(this)} title={this.state.title} />
                    <Footer/>
                </div>
            )
        }    
}