import React, { Component, Fragment } from 'react'

export default class SearchBox extends Component {
    render() {
        return (
            <Fragment>
                <label htmlFor="search">
                    Search for your Robofriends!
                    <br/>
                    <input alt="robofriends searchbox" id="search" onChange={this.props.searchChange} className="br2 bw1" type="search" name="search" placeholder="Search Robo Friends" />
                </label>
            </Fragment>
        )
    }
}
