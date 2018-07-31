import React from "react";

export default class Form extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    eventDate: "",
    email: ""
  };

  change = e => {
    this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.setState({
      firstName: "",
      lastName: "",
      eventDate: "",
      email: ""
    });
    this.props.onChange({
      firstName: "",
      lastName: "",
      eventDate: "",
      email: ""
    });
  };

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
                          <input type="text" className="form-control" id="firstName" placeholder="First Name" value={this.state.firstName} onChange={e => this.change(e)} />
                      </div>
                      <div className="form-group">
                          <label htmlFor="lastName">Last name</label>
                          <input type="text" className="form-control" id="lastName" placeholder="Last Name" value={this.state.lastName} onChange={e => this.change(e)} />
                      </div>
                      <div className="form-group">
                          <label htmlFor="eventDate">Event date</label>
                          <input type="date" className="form-control" id="eventDate" placeholder="Event Date" value={this.state.eventDate} onChange={e => this.change(e)} />
                      </div>
                      <div className="form-group">
                          <label htmlFor="email">Email address</label>
                          <input type="email" className="form-control" id="email" placeholder="Email" value={this.state.email} onChange={e => this.change(e)} />
                      </div>
                      <button onClick={e => this.onSubmit(e)} type="submit" className="btn btn-primary">Submit</button>
                      </form>
                  </div>
                <div className="col-md-2 brain-border"></div>
            </div>
        </div>
    );
  }
}


/* <div className="container-fluid brain-nopadding">
<div className="brain-header"></div>
<div className="row">
  <div className="col-md-2 brain-border"></div>
  <div className="col-md-8 brain-onelogin">
    <h1 className="brain-title">Sign up for a party </h1>
    <form>
      <div className="form-group">
        <label htmlFor="firstName">First name</label>
        <input type="text" className="form-control" id="firstName" placeholder="First Name" value={this.state.firstName} onChange={e => this.change(e)}>
      </div>
      <div className="form-group">
        <label htmlFor="lastName">Last name</label>
        <input type="text" className="form-control" id="lastName" placeholder="Last Name" value={this.state.lastName} onChange={e => this.change(e)}>
      </div>
      <div className="form-group">
        <label htmlFor="eventDate">Event date</label>
        <input type="date" className="form-control" id="eventDate" placeholder="Event Date" value={this.state.eventDate} onChange={e => this.change(e)}>
      </div>
      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input type="email" className="form-control" id="email" placeholder="Email" value={this.state.email} onChange={e => this.change(e)}>
      </div>
      <button onClick={e => this.onSubmit(e)} type="submit" className="btn btn-primary">Submit</button>
    </form>
  </div>
  <div className="col-md-2 brain-border"></div>
</div>
</div> */