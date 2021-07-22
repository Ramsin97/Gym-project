import React, { Component } from 'react'

export default class Filter extends Component {
    render() {
        return (
            <div className="filter">

                <div className="filter-result">{this.props.count} Products</div>
                <div className="filter-sort">

                    {" "}

                    Sort <select value={this.props.sort} onChange={this.props.sortProducts}>

                        <option value="lowest">Lowest</option>
                        <option value="highest">Highest</option>

                    </select>


                </div>

            </div>
        )
    }
}
