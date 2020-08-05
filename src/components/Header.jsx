import React, { Component } from 'react'
import SearchBox from "./SearchBox";
import "../style/Header.css"
import "tachyons";

export default class Header extends Component {
    shouldComponentUpdate(nextProps, nextState){
        return false
    }
    
    render() {
        console.log('Header')
        return (
            <div >
                <h1 className="header">Robo Friends</h1>
                <SearchBox searchChange={this.props.searchChange} className="tc db fl w-100" />
                <hr/>
            </div>
        )
    }
}
