import React, { Component } from 'react'
export default class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            code: '',
            brand: '',
            gender:'',
            type: '',
            price: '',
            stock: ''
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return (
            <form>
                <div>
                    <div>
                    <label>Unique code
                    <input type="text" name="code" value={this.state.code}
                            onChange={this.handleChange}></input>
                    </label>
                    </div>
                    <div>
                    <label>
                        Brand
                    <input type="text" name="brand" value={this.state.brand}
                            onChange={this.handleChange}></input>
                    </label>
                    </div>
                    <div>
                    <label>
                        gender
                        Male
                        <input type="radio" name="gender" value="male" checked={this.state.gender==="male"} onChange={this.handleChange}></input>
                        Female
                        <input type="radio" name="gender" value="female" checked={this.state.gender==="female"} onChange={this.handleChange}></input>
                    </label>
                    </div>

                    <div>
                    <label>
                        Type
                        <select name="type" value={this.state.value} onChange={this.handleChange}>
                            <option value="Jeans">Jeans</option>
                            <option value="trousers">trousers</option>
                            <option value="shirt">shirt</option>
                            <option value="top">top</option>
                        </select>
                    </label>
                    </div>
                    <div>
                    <label>
                        price
                        <input type="text" name="price" value={this.state.price} onChange={this.handleChange}></input>
                    </label>
                    </div>
                    <div>
                    <label>
                        stock
                        <input type="text" name="stock" value={this.state.stock} onChange={this.handleChange}></input>
                    </label>  
                    </div>
                    <button type="button" onClick={(e) => this.props.click(this.state)}>Submit</button>
                    </div>
                </form>
        )
    }
}
