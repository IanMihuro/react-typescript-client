import React from "react";
import Alert from "react-bootstrap/Alert";

interface IAlertProps {
  showAlert: boolean;
  successMessage: string;
  errorMessage: string;
  handleCloseAlert: any;
}
const Alerts: React.SFC<IAlertProps> = props => {
  return (
    <div>
      {props.successMessage.length > 0 && props.showAlert ? (
        <Alert variant="success" onClose={props.handleCloseAlert} dismissible>
          <Alert.Heading>User was Successfull created!</Alert.Heading>
          <p>User was created successfully!</p>
        </Alert>
      ) : props.errorMessage.length > 0 && props.showAlert ? (
        <Alert variant="danger" onClose={props.handleCloseAlert} dismissible>
          <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
          <p>User creation was unsuccsessfull. Try again later.</p>
        </Alert>
      ) : null}
    </div>
  );
};
export default Alerts;
