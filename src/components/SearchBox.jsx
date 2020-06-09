import React, { Component, Fragment } from 'react'

export default class SearchBox extends Component {
    render() {
        return (
            <Fragment>
                <input onChange={this.props.searchChange} className="br2 bw1" type="search" name="search" placeholder="Search Robo Friends" />
            </Fragment>
        )
    }
}
