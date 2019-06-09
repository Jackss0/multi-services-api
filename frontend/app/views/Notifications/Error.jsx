import React from "react";
import ReactNotification from "react-notifications-component";



class ErrorNotification extends React.Component {
  constructor(props) {
    super(props);
    this.addNotification = this.addNotification.bind(this);
    this.notificationDOMRef = React.createRef();
  }

  addNotification() {
    this.notificationDOMRef.current.addNotification({
      title: "Awesomeness",
      message: "Ya existe una cuenta registrada con este Dni",
      type: "Danger",
      insert: "top",
      container: "top-right",
      animationIn: ["animated", "fadeIn"],
      animationOut: ["animated", "fadeOut"],
      dismiss: { duration: 2000 },
      dismissable: { click: true }
    });
  }

  render() {
    return (
      <div className="app-content">
        <ReactNotification ref={this.notificationDOMRef} />
          {this.addNotification}
      </div>
    );
  }
}

export default ErrorNotification;
