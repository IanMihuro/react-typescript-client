import React, {useState, useEffect} from 'react';
import{ connect } from 'react-redux';
import { withRouter, RouteComponentProps } from "react-router-dom";

import { IUser, IMeta, ILocation } from '../../utils/Types';
import { getAllUsers } from '../../store/rootReducer';
import { fetchAllUsersAction } from '../../store/users/index';

import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import * as Routes from '../../utils/Routes';

interface IViewUsersState {}
interface IViewUsersProps {
    users: IUser[],
    meta: IMeta,
    fetchAllUsersAction: Function,
    history: any,
}
class ViewUsers extends React.Component <IViewUsersProps, IViewUsersState>  {
    constructor(props: any){
        super(props);

        this.props.fetchAllUsersAction();

        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleEdit(user: IUser) {
        const id = user._id;
        this.props.history.push(`/edit/${id}`);
    }
    handleDelete(user: IUser) {}

    
    render(){
        const { users, meta } = this.props;
        return (
            <Container>
                <Row>
                    <Col xs={12} md={12}>
                        <h3 className="text-center">View Users</h3>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={12}>
                    {
                    users.length > 0 && !meta.isFetching ? (
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Email</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                
                               { users.map((user: IUser, index: number) =>(
                                   <tr key={index}>
                                       <td>{index + 1 }</td>
                                        <td>{user.firstName}</td>
                                        <td>{user.lastName}</td>
                                        <td>{user.email}</td>
                                        <td>
                                            <Button 
                                                variant="primary" 
                                                onClick={()=>this.handleEdit(user)}
                                                >
                                                    Edit
                                                </Button>
                                            &nbsp;
                                            <Button 
                                                variant="danger"
                                                onClick={ () => this.handleDelete(user)}
                                                >
                                                    Delete
                                            </Button>
                                        </td>
                                    </tr>
                                ))} 
                            </tbody>
                        </Table>   
                    ) : 
                    meta.isFetching ? (
                        <p>Loading...</p>
                    )
                    : (<p>No users available</p>)
                }

                    </Col>
                </Row>
            </Container>
 
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

    export default withRouter(connect(mapStateToProps, {fetchAllUsersAction})(ViewUsers));
  
