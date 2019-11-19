import React, { Component } from "react";
import { connect } from "react-redux";

import FormComponent from "./form";
import Alerts from "./alerts";

import { addNewUserAction } from "../../store/users/index";
import { IMeta, IRedux, iFormData } from "../../utils/Types";
import { getAllUsers } from "../../store/rootReducer";

interface iFormState {
  showAlert: boolean;
}

interface iFormProps {
  addNewUserAction: Function;
  meta: IMeta;
}

class SignUp extends Component<iFormProps, iFormState> {
  constructor(props: any) {
    super(props);

    this.state = {
      showAlert: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCloseAlert = this.handleCloseAlert.bind(this);
  }

  handleSubmit(data: iFormData): void {
    console.log("Data", data);
    //TODO connect to user creation End point
    const registerUser: iFormData = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password
    };

    try {
      this.props.addNewUserAction(registerUser);
      this.setState({ showAlert: true });
    } catch (e) {
      this.setState({ showAlert: true });
    }
  }
  handleCloseAlert(): void {
    this.setState({ showAlert: false });
  }
  render() {
    const { errorMessage, successMessage } = this.props.meta;
    const { showAlert } = this.state;
    return (
      <>
        <h3>Sign Up</h3>
        <FormComponent handleSubmit={this.handleSubmit} />
        <Alerts
          handleCloseAlert={this.handleCloseAlert}
          showAlert={showAlert}
          successMessage={successMessage}
          errorMessage={errorMessage}
        />
      </>
    );
  }
}

const mapStateToProps = (state: IRedux) => {
  const { meta } = getAllUsers(state);
  return {
    meta
  };
};

export default connect(mapStateToProps, { addNewUserAction })(SignUp);
