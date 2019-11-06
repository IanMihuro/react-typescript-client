import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';

interface ITextInputProps {
    defaultValue: string,
    placeHolder: string,
    name: string,
    onChange: Function,
    required: boolean,
    type: string

};
interface ITextInputState {
    value: string
};
class TextInput extends Component<ITextInputProps, ITextInputState> {
    constructor(props: any){
        super(props)

        this.state = {
            value: this.props.defaultValue
        }

        this.handleChange = this.handleChange.bind(this);
    };

    handleChange(e: any) {
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
        return (
            <Form.Control 
                type={this.props.type} 
                placeholder={this.props.placeHolder}
                name={this.props.name}
                value = {this.state.value}
                onChange={this.handleChange}
                required={this.props.required}
                
        />
        )
    }
    
}

export default TextInput;