//https://react-bootstrap.github.io/components/alerts/
//import Alert module from react-bootstrap

import "bootstrap/dist/css/bootstrap.min.css";
import { Alert } from "react-bootstrap";

const MyAlert = ({ alertHeading, alertMessage, alertType }) => {
  return (
    <Alert variant={alertType}>
      <Alert.Heading>{alertHeading}</Alert.Heading>
      <p>{alertMessage}</p>
    </Alert>
  );
};

export default MyAlert;
