import React, { Component } from "react";
import { connect } from "react-redux";
import { addNewUserAction } from "../../store/users/index";
import { IUser, IRedux, IMeta } from "../../utils/Types";
import { validEmailRegex, validateForm } from "../../utils/Functions";

import { getAllUsers } from "../../store/rootReducer";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import FormComponent from "./form";
import Alerts from "./alerts";

import "./styles.scss";

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
  role: boolean;

  showAlert?: boolean;
  validated: boolean;

  errors: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  };
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
      role: false,

      showAlert: false,
      validated: false,

      errors: {
        firstName: "",
        lastName: "",
        email: "",
        password: ""
      }
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleCloseAlert = this.handleCloseAlert.bind(this);
    this.submitDataEvent = this.submitDataEvent.bind(this);
    this.handleResetForm = this.handleResetForm.bind(this);
  }

  handleChange(event: any): void {
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case "firstName":
        errors.firstName = value.length < 2 ? "First Name too short" : "";
        break;
      case "lastName":
        errors.lastName = value.length < 2 ? "Last Name too short" : "";
        break;
      case "email":
        errors.email = validEmailRegex.test(value) ? "" : "Email is not Valid";
        break;
      case "password":
        errors.password =
          value.length < 5 ? "Password must be 8 characters long" : "";
        break;

      default:
        break;
    }

    this.setState({
      errors,
      [name]: value
    } as IAddUSerState);
  }

  handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();

    if (validateForm(this.state.errors)) {
      //this.submitDataEvent();
    } else {
      console.log("Invalid Form..."); //TODO replace with alert
    }
  }

  handleCloseAlert(): void {
    this.setState({
      showAlert: false
    });
  }

  submitDataEvent(): void {
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
      role
    }: IAddUSerState = this.state;

    const newUser: IUser = {
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
      role
    };

    try {
      this.props.addNewUserAction(newUser);
      this.setState(
        {
          showAlert: true
        },
        () => this.handleResetForm()
      );
    } catch (e) {
      this.setState({ showAlert: true });
    }
  }

  handleResetForm(): void {
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      phoneNumber: "",
      streetAddress: "",
      suiteNumber: "",
      city: "",
      state: "",
      role: false
    });
  }

  render() {
    const { errorMessage, successMessage } = this.props.meta;
    const { showAlert } = this.state;
    return (
      <Container>
        <Row>
          <Col xs={12} md={12}>
            <FormComponent
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              {...this.state}
              {...this.props}
            />
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={12}>
            <Alerts
              successMessage={successMessage}
              errorMessage={errorMessage}
              showAlert={showAlert}
              handleCloseAlert={this.handleCloseAlert}
            />
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
  { addNewUserAction }
)(AddUsers);
