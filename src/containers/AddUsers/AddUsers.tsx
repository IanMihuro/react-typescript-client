import React, {Component} from 'react';
import{ connect } from 'react-redux';
import { fetchAllUsersAction, addNewUserAction } from '../../store/users/index';
import { IUser, IRedux, ILocation, IMeta } from '../../utils/Types';
import { getAllUsers } from '../../store/rootReducer';
import './styles.scss';

interface IAddUSerState {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    phoneNumber: string,
    streetAddress: string,
    suiteNumber: string,
    city: string,
    state: string,
    admin: string,
    nonAdmin: string,  
}

interface IComponentProps {
    addNewUserAction: Function,
    meta: IMeta,
}

class AddUsers extends Component <IComponentProps, IAddUSerState>  {


    constructor(props: any) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            phoneNumber: '',
            streetAddress: '',
            suiteNumber: '',
            city: '',
            state: '',
            admin: 'false',
            nonAdmin: 'false', 
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }


    handleChange (event: any): void {
        this.setState({
            [event.target.name]: event.target.value
        } as IAddUSerState)
    }
    
 

    handleSubmit (event: React.FormEvent<HTMLFormElement>): void {
        event.preventDefault();
        const { 
            firstName, 
            lastName,
            email,
            password,
            phoneNumber,
            streetAddress,
            suiteNumber,
            city,
            state,
            admin,
            nonAdmin, 
        }: IAddUSerState = this.state;

        const newUser: IUser = {

            firstName,
            lastName,
            email,
            password,
            phoneNumber,
            location:[
                {
                    streetAddress,
                    suiteNumber,
                    city,
                    state,
                }
            ],
            roles: {
                admin,
                nonAdmin,
            }
        };

        this.props.addNewUserAction(newUser);
    }

    render(){
        const {
            firstName, lastName, email, password, phoneNumber, streetAddress, suiteNumber,
            city, state, admin, nonAdmin
        } = this.state;
        const { meta } = this.props;
        return(
            <div>
                <div>
                    Add Users
                </div>
                <div className="form">
                    <form onSubmit={this.handleSubmit}>
                        <label>First Name</label>
                        <input type="text" name="firstName" onChange={this.handleChange} value={firstName} />
                        <label>Last Name</label>
                        <input type="text" name="lastName" onChange={this.handleChange} value={lastName} />
                        <label>Email</label>
                        <input type="email" name="email" onChange={this.handleChange} value={email} />
                        <label>Password</label>
                        <input type="password" name="password" onChange={this.handleChange} value={password} />
                        <label>Phone Number</label>
                        <input type="text" name="phoneNumber" onChange={this.handleChange} value={phoneNumber} />
                        <label>Street Address</label>
                        <input type="text" name="streetAddress" onChange={this.handleChange} value={streetAddress}/>
                        <label>Suite Number</label>
                        <input type="text" name="suiteNumber" onChange={this.handleChange} value={suiteNumber} />
                        <label>City</label>
                        <input type="text" name="city" onChange={this.handleChange} value={city} />
                        <label>State</label>
                        <input type="text" name="state" onChange={this.handleChange} value={state} />
                        <label>Admin</label> 
                        <select name="admin" onChange={this.handleChange} value={admin}  >
                            <option value="true">True</option>
                            <option value="false" >False</option>
                        </select>
                        <label>Non Admin</label> 
                        <select name="nonAdmin" onChange={this.handleChange} value={nonAdmin}>
                            <option value="true">True</option>
                            <option value="false">False</option>
                        </select>

                        <input type="submit" value="submit" disabled={meta.isFetching} />
                    </form>

                </div>
                
            </div>
        )
    }
}

const mapStateToProps = (state: IRedux) => {
    const { meta } = getAllUsers(state)
    return {
        meta
    }
}

export default connect(mapStateToProps, { fetchAllUsersAction, addNewUserAction })(AddUsers);