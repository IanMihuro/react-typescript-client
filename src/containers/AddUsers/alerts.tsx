import React from "react";
import Alert from "react-bootstrap/Alert";

interface IAlertsProps {
  showAlert?: boolean;
  successMessage: string;
  errorMessage: string;
  handleCloseAlert: any;
}
const Alerts: React.SFC<IAlertsProps> = props => {
  return (
    <div>
      {props.successMessage.length > 0 && props.showAlert ? (
        <Alert variant="success" onClose={props.handleCloseAlert} dismissible>
          <Alert.Heading>Save Successfull!</Alert.Heading>
          <p>User was saved successfully!</p>
        </Alert>
      ) : props.errorMessage.length > 0 && props.showAlert ? (
        <Alert variant="danger" onClose={props.handleCloseAlert} dismissible>
          <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
          <p>User save was unsuccsessfull. Try again later.</p>
        </Alert>
      ) : null}
    </div>
  );
};

export default Alerts;
