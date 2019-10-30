import React, {useState, useEffect} from 'react';
import{ connect } from 'react-redux';
import { getAllUsers } from '../../store/rootReducer';
import { fetchAllUsersAction } from '../../store/users/index';

interface IViewUsersState {}
interface IViewUsersProps {
    users: any,
    fetchAllUsersAction: Function
}
class ViewUsers extends React.Component <IViewUsersProps, IViewUsersState>  {
    constructor(props: any){
        super(props);

        this.props.fetchAllUsersAction();
    }

    
    render(){
        const { users } = this.props.users;
        return (
            <div>
                <header>
                    View Users
                </header>
                {
                    users.length > 0 ?
                    users.map((user: any)=>(
                        <ul>
                            <li key={user._id}>
                             
                                    {user.firstName} -  
                                    {user.lastName},
                                    {user.email},
                                    {user.phoneNumber},
                                    {user.roles.nonAdmin},
                                    {
                                        user.location.map((location: any)=>(
                                        <span>
                                            {location.streetAddress},
                                            {location.state},
                                            {location.city}.
                                        </span>  
                                        ))
                                    }  
                            </li>
                        </ul>
                    ))
                    : <p>No users available</p>
                }
            </div>
        );
    }
    }

    const mapStateToProps = (state: any) => {
        const users = getAllUsers(state)

        return {
            users
        }
    }

    export default connect(mapStateToProps, {fetchAllUsersAction})(ViewUsers);
  
