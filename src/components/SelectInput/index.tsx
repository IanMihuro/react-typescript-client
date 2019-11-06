import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';

interface ISelectInputProps {
    name: string
    defaultValue: string,
    onChange: Function
}
interface ISelectInputState {
    value: string
}
class SelectInput extends Component<ISelectInputProps, ISelectInputState> {

    constructor(props: any) {
        super(props);

        this.state = {
            value: this.props.defaultValue
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e: any){
        this.setState({
            value: e.target.value
        }, ()=> {
            this.props.onChange(this.props.name, this.state.value);
        });
    }

    componentDidMount() {
        this.props.onChange(this.props.name, this.state.value);
    }

    render() {
        return(
            <Form.Control 
                as="select"
                name={this.props.name}
                onChange={this.handleChange}
                value={this.state.value}>
                    <option value="true">True</option>
                    <option value="false" >False</option>
            </Form.Control>
        );
    }

}

export default SelectInput;