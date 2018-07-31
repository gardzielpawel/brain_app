import React from "react";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      eventDate: "",
      email: "",
      error: ""
    };

    this.formChange = this.formChange.bind(this);
    this.formSubmit = this.formSubmit.bind(this);

  }

  formChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  formSubmit(event) {
    if (this.state.firstName == ""){
      this.setState({
        error: "Error djfsdfaksdf"
      });
    }
    event.preventDefault();
  }

  render() {
    return (
        <div className="container-fluid brain-nopadding">
        <div className="brain-header"></div>
          <div className="row">
            <div className="col-md-2 brain-border"></div>
              <div className="col-md-8 brain-onelogin">
                  <h1 className="brain-title">Sign up for a party </h1>
                    <form>
                    <div className="form-group">
                        <label htmlFor="firstName">First name</label>
                        <input type="text" name="firstName" className="form-control" id="firstName" placeholder="First Name" value={this.state.firstName} onChange={this.formChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last name</label>
                        <input type="text" name="lastName" className="form-control" id="lastName" placeholder="Last Name" value={this.state.lastName} onChange={this.formChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="eventDate">Event date</label>
                        <input type="date" name="eventDate" className="form-control" id="eventDate" placeholder="Event Date" value={this.state.eventDate} onChange={this.formChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input type="email" name="email" className="form-control" id="email" placeholder="Email" value={this.state.email} onChange={this.formChange} />
                    </div>
                    <button onClick={this.formSubmit} type="submit" className="btn btn-primary">Submit</button>
                    <p>{this.state.error}</p>
                    </form>
                </div>
              <div className="col-md-2 brain-border"></div>
          </div>
        </div>
      
    )

  }
}

