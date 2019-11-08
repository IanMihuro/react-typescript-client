import React from 'react';
import{ connect } from 'react-redux';
import { withRouter } from "react-router-dom";

import { IUser, IMeta } from '../../utils/Types';
import { getAllUsers } from '../../store/rootReducer';
import { fetchAllUsersAction, deleteUserAction } from '../../store/users/index';

import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import DeleteModal from '../../components/Modals/deleteModal';


interface IViewUsersState {
    user: IUser,
    showModal: boolean,
    userToDelete?: any
}
interface IViewUsersProps {
    users: IUser[],
    meta: IMeta,
    fetchAllUsersAction: Function,
    deleteUserAction: Function,
    history: any,
}
class ViewUsers extends React.Component <IViewUsersProps, IViewUsersState>  {
    constructor(props: any){
        super(props);

        this.state = {
            user: {
            _id: '',
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            phoneNumber: '',
            location: [
                {
                    streetAddress: '',
                    suiteNumber: '',
                    city: '',
                    state: '',
                }
            ],
            roles: {
                admin: 'false',
                nonAdmin: 'false', 

            }
            },
            showModal: false,
            userToDelete: {}
        }

        

        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.deleteUser = this.deleteUser.bind(this);

        this.props.fetchAllUsersAction();
    }

    handleEdit(user: IUser) {
        const id = user._id;
        this.props.history.push(`/edit/${id}`);
    }

    handleDelete(user: IUser) {
        this.setState({
            showModal: true,
            userToDelete: user
        });
        
    }

    deleteUser(_id:string) {
        console.log(_id);
        this.props.deleteUserAction(_id);
        this.setState({
            showModal: false
        })
    }

    handleCloseModal(): void {
        this.setState({
            showModal: false
        });
        
    }


    
    render(){
        const { users, meta } = this.props;
        const { showModal, user, userToDelete } = this.state;
        return (
            <Container>
                <DeleteModal 
                    user={userToDelete} 
                    show={showModal}
                    handleClose={this.handleCloseModal}
                    handleDelete={this.deleteUser}
                />
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

    export default withRouter(connect(mapStateToProps, {fetchAllUsersAction, deleteUserAction})(ViewUsers));
  
