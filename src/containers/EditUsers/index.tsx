import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUserAction, editUserAction } from "../../store/users/index";
import { IUser, IRedux, IMeta } from "../../utils/Types";
import { getEditUser } from "../../store/rootReducer";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import FormComponent from "./form";

interface IEditPayload {
  _id: string;
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
}

interface IEditUserState {
  showAlert: boolean;
}

interface IComponentProps {
  fetchUserAction: Function;
  editUserAction: Function;
  meta: IMeta;
  match: any;
  editMeta: any;
  user: any;
}

class EditUsers extends Component<IComponentProps, IEditUserState> {
  constructor(props: any) {
    super(props);

    this.state = {
      showAlert: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFetchUserDetails = this.handleFetchUserDetails.bind(this);
    this.handleCloseAlert = this.handleCloseAlert.bind(this);

    this.handleFetchUserDetails();
  }

  handleSubmit(data: IEditPayload): void {
    const payload: IUser = {
      _id: this.props.match.params.id,
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
      phoneNumber: data.phoneNumber,
      location: [
        {
          streetAddress: data.streetAddress,
          suiteNumber: data.suiteNumber,
          city: data.city,
          state: data.state
        }
      ],
      role: data.role
    };

    this.props.editUserAction(payload);

    this.setState({ showAlert: true });
  }

  handleFetchUserDetails(): void {
    const id = this.props.match.params.id;
    this.props.fetchUserAction(id);
  }

  handleCloseAlert(): void {
    this.setState({
      showAlert: false
    });
  }

  render() {
    const { editMeta, user } = this.props;
    const { showAlert } = this.state;
    return (
      <Container>
        {editMeta.isLoading ? (
          <Row>
            <Col xs={12} md={12}>
              <h4>Loading....</h4>
            </Col>
          </Row>
        ) : (
          <Row>
            <Col xs={12} md={12}>
              <FormComponent
                editMeta={editMeta}
                user={user}
                handleSubmit={this.handleSubmit}
              />
            </Col>
          </Row>
        )}
        <Row>
          <Col sm={12} md={12}>
            {editMeta.success.length > 0 && showAlert ? (
              <Alert
                variant="success"
                onClose={this.handleCloseAlert}
                dismissible
              >
                <Alert.Heading>Update Successfull!</Alert.Heading>
                <p>Record update was successfull!</p>
              </Alert>
            ) : editMeta.error.length > 0 && showAlert ? (
              <Alert
                variant="danger"
                onClose={this.handleCloseAlert}
                dismissible
              >
                <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                <p>Record update was unsuccsessfull. Try again later.</p>
              </Alert>
            ) : null}
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = (state: IRedux) => {
  const { user, editMeta } = getEditUser(state);

  return {
    user,
    editMeta
  };
};

export default connect(
  mapStateToProps,
  { fetchUserAction, editUserAction }
)(EditUsers);
