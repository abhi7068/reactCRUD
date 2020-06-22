import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export class List extends Component {
    render() {

        console.log(this.props)
        return (
            <div>
                    <tr>
                        <td>Dress code</td>
                        <td>Brand</td>
                    <td>Gender</td>
                    <td>Type</td>
                        <td>Price</td>
                    <td>Stock</td>
                    <td>Action</td>
                    </tr>

                <tbody>
                    {this.props.data.map((Element, index) => {
                        
                        return (
                            <tr key={index}>
                                <td>{Element.code}</td>
                                <td>{Element.brand}</td>                   
                                <td>{Element.gender}</td>
                                <td>{Element.type}</td>
                                <td>{Element.price}</td>    
                                <td>{Element.stock}</td>
                                <td><button type="button" onClick={(e) => this.props.edit(index) }><Link to="/Update">  Update </Link>  </button></td>
                                <td><button type="button" onClick={(e)=>this.props.remove(index)}>Delete</button></td>
                            </tr>
                        )

                        
                        })}
                </tbody>
            </div>
        )
    }
}

export default List
