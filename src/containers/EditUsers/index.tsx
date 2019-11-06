import React, {Component} from 'react';
import{ connect } from 'react-redux';
import { fetchUserAction, editUserAction } from '../../store/users/index';
import { IUser, IRedux, ILocation, IMeta } from '../../utils/Types';
import { getEditUser } from '../../store/rootReducer';
import { hasProperty } from '../../utils/Functions';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';

import TextInput from '../../components/TextInput';
import SelectInput from '../../components/SelectInput';

interface IAddUserState {
    _id: string,
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

interface IEditUser {
    showAlert: boolean,
}

interface IComponentProps {
    fetchUserAction: Function,
    editUserAction: Function,
    meta: IMeta,
    match: any,
    editMeta: any,
    user: any,
}



class EditUsers extends Component <IComponentProps, IAddUserState & IEditUser>  {
    

    constructor(props: any) {
        super(props);


        this.state = {
            _id: this.props.match.params.id.toString(),
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

            showAlert: false,
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleFetchUserDetails = this.handleFetchUserDetails.bind(this);
        this.handleCloseAlert = this.handleCloseAlert.bind(this);

        this.handleFetchUserDetails();
        
    }


    handleChange (name: string, value: any): void {
        this.setState({
            [name] : value
        } as IAddUserState);
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
             
        }: IAddUserState = this.state;

        const newUser: IUser = {
            _id: this.props.match.params.id,
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

        this.props.editUserAction(newUser);

        this.setState({ showAlert: true });
    }


    handleFetchUserDetails(): void {
        
        const id = this.props.match.params.id;
        this.props.fetchUserAction(id);

    }

    handleCloseAlert(): void {
        this.setState({
            showAlert: false
        })
    }

    

    render(){
        const {
            firstName, lastName, email, password, phoneNumber, streetAddress,
            suiteNumber, city, state, admin, nonAdmin
        } = this.state;
        
        const { editMeta, user } = this.props;
        const { showAlert } = this.state;
        return(
            <Container>
                <Row>
                    <Col xs={12} md={12}><h3 className="text-center">Edit User </h3></Col>
                </Row>
                {
                    editMeta.isLoading ? (
                        <Row>
                            <Col xs={12} md={12}>
                                <h4>Loading....</h4>
                            </Col>
                        </Row>
                    ):(
                        <Row>
                    <Col xs={12} md={12}>

                    <Form onSubmit={this.handleSubmit}>

                        <Form.Group as={Row} controlId="formHorizontalEmail">
                            <Form.Label column sm={2}>First Name</Form.Label>
                            <Col sm={10}>
                                <TextInput
                                    defaultValue={ hasProperty(user, 'firstName') ? user.firstName : firstName }
                                    onChange={this.handleChange}
                                    placeHolder="First Name"
                                    name={"firstName"}
                                    required={true}
                                    type={"text"}
                                    />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formHorizontalEmail">
                            <Form.Label column sm={2}>Last Name</Form.Label>
                            <Col sm={10}>
                                
                                <TextInput
                                    defaultValue={ hasProperty(user,  'lastName') ? user.lastName : lastName}
                                    onChange={this.handleChange}
                                    placeHolder="Last Name"
                                    name={"lastName"}
                                    required={true}
                                    type={"text"}
                                />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formHorizontalEmail">
                            <Form.Label column sm={2}>Email</Form.Label>
                            <Col sm={10}>
                                <TextInput
                                    defaultValue={hasProperty(user, 'email') ? user.email : email }
                                    onChange={this.handleChange}
                                    placeHolder="Email"
                                    name={"email"}
                                    required={true}
                                    type={"email"}
                                />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formHorizontalEmail">
                            <Form.Label column sm={2}>Password</Form.Label>
                            <Col sm={10}>
                                <TextInput
                                    defaultValue={ hasProperty(user, 'password') ? user.password : password }
                                    onChange={this.handleChange}
                                    placeHolder="Password"
                                    name={"password"}
                                    required={true}
                                    type={"password"}
                                />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formHorizontalEmail">
                            <Form.Label column sm={2}>Phone Number</Form.Label>
                            <Col sm={10}>
                                <TextInput
                                    defaultValue={hasProperty(user, 'phoneNumber') ? user.phoneNumber: phoneNumber }
                                    onChange={this.handleChange}
                                    placeHolder="Phone Number"
                                    name={"phoneNumber"}
                                    required={false}
                                    type={"text"}
                                />
                            </Col>
                        </Form.Group>

                        <Form.Row>

                            <Form.Group as={Col} md="3" controlId="validationCustom03">
                                <Form.Label>Street Address</Form.Label>
                                <TextInput
                                    defaultValue={hasProperty(user, 'location') ? user.location[0].streetAddress : streetAddress }
                                    onChange={this.handleChange}
                                    placeHolder="StreetAddress"
                                    name={"streetAddress"}
                                    required={false}
                                    type={"text"}
                                />
                            </Form.Group>

                            <Form.Group as={Col} md="3" controlId="validationCustom04">
                                <Form.Label>Suite Number</Form.Label>
                                <TextInput
                                    defaultValue={hasProperty(user, 'location') ? user.location[0].suiteNumber: suiteNumber }
                                    onChange={this.handleChange}
                                    placeHolder="Suite Number"
                                    name={"suiteNumber"}
                                    required={false}
                                    type={"text"}
                                />
                                
                            </Form.Group>

                            <Form.Group as={Col} md="3" controlId="validationCustom05">
                                <Form.Label>City</Form.Label>
                                <TextInput
                                    defaultValue={hasProperty(user, 'location') ?  user.location[0].city : city}
                                    onChange={this.handleChange}
                                    placeHolder="City"
                                    name={"city"}
                                    required={false}
                                    type={"text"}
                                />
                            </Form.Group>

                            <Form.Group as={Col} md="3" controlId="validationCustom05">
                                <Form.Label>State</Form.Label>
                                <TextInput
                                    defaultValue={hasProperty(user, 'location') ? user.location[0].state : state}
                                    onChange={this.handleChange}
                                    placeHolder="State"
                                    name={"state"}
                                    required={false}
                                    type={"text"}
                                />
                            </Form.Group>

                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} md="6">
                                <Form.Label>Admin Rights</Form.Label>
                                <SelectInput
                                    name={"admin"}
                                    onChange={this.handleChange}
                                    defaultValue={hasProperty(user, 'roles') ? user.roles.admin : admin} 
                                />
                            </Form.Group>

                            <Form.Group as={Col} md="6">
                                <Form.Label>Admin Rights</Form.Label>
                                <SelectInput
                                    name={"nonAdmin"}
                                    onChange={this.handleChange}
                                    defaultValue={hasProperty(user, 'roles') ? user.roles.nonAdmin : nonAdmin} 
                                />
                            </Form.Group>
                        </Form.Row>

                        <Form.Group as={Row}>
                            <Col sm={{ span: 10, offset: 2 }}>
                                <Button type="submit" disabled={editMeta.isFetching}>Update</Button>
                            </Col>
                        </Form.Group>

                        </Form>

                    </Col>
                </Row>

                    )
                }
                <Row>
                    <Col sm={12} md={12}>
                        {
                            editMeta.success.length > 0 && showAlert ? 
                            (
                                <Alert variant="success" onClose={this.handleCloseAlert} dismissible>
                                <Alert.Heading>Update Successfull!</Alert.Heading>
                                <p>
                                  Record update was successfull!
                                </p>
                              </Alert>  
                            ) :
                            editMeta.error.length > 0 && showAlert ? 
                            (
                                <Alert variant="danger" onClose={this.handleCloseAlert} dismissible>
                                <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                                <p>
                                  Record update was unsuccsessfull. Try again later.
                                </p>
                              </Alert>  
                            )
                            : 
                            null 
                        }
                    </Col>
                </Row>
                
            </Container>

        )
    }
}

const mapStateToProps = (state: IRedux) => {
    const { user, editMeta} = getEditUser(state);
    
    return {
        user,
        editMeta
    }
}

export default connect(mapStateToProps, { fetchUserAction, editUserAction })(EditUsers);