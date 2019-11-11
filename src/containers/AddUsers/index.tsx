import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAllUsersAction, addNewUserAction } from "../../store/users/index";
import { IUser, IRedux, ILocation, IMeta } from "../../utils/Types";
import { getAllUsers } from "../../store/rootReducer";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import FormCheck from "react-bootstrap/FormCheck";
//import './styles.scss';

interface IAddUSerState {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phoneNumber: string;
  streetAddress: string;
  suiteNumber: string;
  city: string;
  state: string;
  admin: string;
  nonAdmin: string;
}

interface IComponentProps {
  addNewUserAction: Function;
  meta: IMeta;
}

class AddUsers extends Component<IComponentProps, IAddUSerState> {
  constructor(props: any) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      phoneNumber: "",
      streetAddress: "",
      suiteNumber: "",
      city: "",
      state: "",
      admin: "false",
      nonAdmin: "false"
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event: any): void {
    this.setState({
      [event.target.name]: event.target.value
    } as IAddUSerState);
  }

  handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
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
      nonAdmin
    }: IAddUSerState = this.state;

    const newUser: IUser = {
      _id: "",
      firstName,
      lastName,
      email,
      password,
      phoneNumber,
      location: [
        {
          streetAddress,
          suiteNumber,
          city,
          state
        }
      ],
      roles: {
        admin,
        nonAdmin
      }
    };

    this.props.addNewUserAction(newUser);
  }

  render() {
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
      nonAdmin
    } = this.state;
    const { meta } = this.props;
    return (
      <Container>
        <Row>
          <Col xs={12} md={12}>
            <h3 className="text-center">Add User </h3>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12}>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group as={Row} controlId="formHorizontalEmail">
                <Form.Label column sm={2}>
                  First Name
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    value={firstName}
                    onChange={this.handleChange}
                    required
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formHorizontalEmail">
                <Form.Label column sm={2}>
                  Last Name
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    value={lastName}
                    onChange={this.handleChange}
                    required
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formHorizontalEmail">
                <Form.Label column sm={2}>
                  Email
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={this.handleChange}
                    required
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formHorizontalEmail">
                <Form.Label column sm={2}>
                  Password
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={this.handleChange}
                    required
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formHorizontalEmail">
                <Form.Label column sm={2}>
                  Phone Number
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="text"
                    placeholder="Phone Number"
                    name="phoneNumber"
                    value={phoneNumber}
                    onChange={this.handleChange}
                  />
                </Col>
              </Form.Group>

              <Form.Row>
                <Form.Group as={Col} md="3" controlId="validationCustom03">
                  <Form.Label>Street Address</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Street Address"
                    name="streetAddress"
                    value={streetAddress}
                    onChange={this.handleChange}
                  />
                </Form.Group>

                <Form.Group as={Col} md="3" controlId="validationCustom04">
                  <Form.Label>Suite Number</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Suite Number"
                    name="suiteNumber"
                    value={suiteNumber}
                    onChange={this.handleChange}
                  />
                </Form.Group>

                <Form.Group as={Col} md="3" controlId="validationCustom05">
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="City"
                    name="city"
                    value={city}
                    onChange={this.handleChange}
                  />
                </Form.Group>

                <Form.Group as={Col} md="3" controlId="validationCustom05">
                  <Form.Label>State</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="State"
                    value={state}
                    onChange={this.handleChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid zip.
                  </Form.Control.Feedback>
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} md="6">
                  <Form.Label>Admin Rights</Form.Label>
                  <Form.Control
                    as="select"
                    name="admin"
                    onChange={this.handleChange}
                    value={admin}
                  >
                    <option value="true">True</option>
                    <option value="false">False</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group as={Col} md="6">
                  <Form.Label>Admin Rights</Form.Label>
                  <Form.Control
                    as="select"
                    name="nonAdmin"
                    onChange={this.handleChange}
                    value={nonAdmin}
                  >
                    <option value="true">True</option>
                    <option value="false">False</option>
                  </Form.Control>
                </Form.Group>
              </Form.Row>

              <Form.Group as={Row}>
                <Col sm={{ span: 10, offset: 2 }}>
                  <Button type="submit" disabled={meta.isFetching}>
                    Save
                  </Button>
                </Col>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = (state: IRedux) => {
  const { meta } = getAllUsers(state);
  return {
    meta
  };
};

export default connect(
  mapStateToProps,
  { fetchAllUsersAction, addNewUserAction }
)(AddUsers);
