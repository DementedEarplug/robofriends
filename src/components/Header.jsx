import React, { Component } from 'react'
import SearchBox from "./SearchBox";
import "tachyons";

export default class Header extends Component {
    render() {
        return (
            <div >
                <p className="f1">Robo Friends</p>
                <SearchBox searchChange={this.props.searchChange} className="tc db fl w-100" />
                <hr/>
            </div>
        )
    }
}
