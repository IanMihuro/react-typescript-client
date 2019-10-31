import React, {useState, useEffect} from 'react';
import{ connect } from 'react-redux';
import { IUser, IMeta, ILocation } from '../../utils/Types';
import { getAllUsers } from '../../store/rootReducer';
import { fetchAllUsersAction } from '../../store/users/index';

interface IViewUsersState {}
interface IViewUsersProps {
    users: IUser[],
    meta: IMeta,
    fetchAllUsersAction: Function
}
class ViewUsers extends React.Component <IViewUsersProps, IViewUsersState>  {
    constructor(props: any){
        super(props);

        this.props.fetchAllUsersAction();
    }

    
    render(){
        const { users, meta } = this.props;
        return (
            <div>
                <header>
                    View Users
                </header>
                {
                    users.length > 0 && !meta.isFetching ? (
                        users.map((user: IUser, index: number) =>
                            
                                (<li key={index}>
                                 {user.firstName} -  
                                        {user.lastName},
                                        {user.email},
                                        {user.phoneNumber},
                                        {user.roles.nonAdmin},
                                        {
                                            user.location.map((location: ILocation, index: number)=>
                                            <span key={index}>
                                                {location.streetAddress},
                                                {location.state},
                                                {location.city}.
                                            </span>  
                                            )
                                        }  
                                        
                                </li>)
                            
                        )
                      

                    ) : 
                    meta.isFetching ? (
                        <p>Loading...</p>
                    )
                    : (<p>No users available</p>)
                }
            </div>
        );
    }
    }

    const mapStateToProps = (state: IViewUsersState) => {
        const {users, meta } = getAllUsers(state)

        return {
            users,
            meta
        }
    }

    export default connect(mapStateToProps, {fetchAllUsersAction})(ViewUsers);
  
