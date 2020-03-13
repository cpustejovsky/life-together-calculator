import React, { Component } from "react";

export default class Form extends Component {
  data = {
    yourName: null,
    soName: null,
    yourBday: null,
    soBday: null,
    meetDate: null,
    datingDate: null,
    marriedDate: null
  };

  onFormSubmit(e) {
    e.preventDefault();
  }

  onInputChange(e) {
    switch (e.target.name) {
      case "yourName":
        this.data.yourName = e.target.value;
        break;
      case "soName":
        this.data.soName = e.target.value;
        break;
      case "yourBday":
        this.data.yourBday = e.target.value;
        break;
      case "soBday":
        this.data.soBday = e.target.value;
        break;
      case "meetDate":
        this.data.meetDate = e.target.value;
        break;
      case "datingDate":
        this.data.datingDate = e.target.value;
        break;
      case "marriedDate":
        this.data.marriedDate = e.target.value;
        break;
      default:
        break;
    }
  }
  handleDataChange = data => {
    data = this.data;
    console.log(data);
    this.props.onUpdate(data);
  };
  render() {
    return (
      <div>
        <form onSubmit={e => this.onFormSubmit(e)}>
          <div className="form-group">
            <p>Your Name</p>
            <input
              onChange={e => this.onInputChange(e)}
              className="form-control"
              type="text"
              name="yourName"
              placeholder="Aragorn"
            />
          </div>
          <div className="form-group">
            <p>Your Significant Other's Name</p>
            <input
              onChange={e => this.onInputChange(e)}
              className="form-control"
              type="text"
              name="soName"
              placeholder="Arwen"
            />
          </div>
          <div className="form-group">
            <p>Your Birthday</p>
            <input
              onChange={e => this.onInputChange(e)}
              className="form-control"
              type="date"
              name="yourBday"
            />
          </div>
          <div className="form-group">
            <p>Your Significant Other's Birthday</p>
            <input
              onChange={e => this.onInputChange(e)}
              className="form-control"
              type="date"
              name="soBday"
            />
          </div>
          <div className="form-group">
            <p>Date Y'all Met</p>
            <input
              onChange={e => this.onInputChange(e)}
              className="form-control"
              type="date"
              name="meetDate"
            />
          </div>
          <div className="form-group">
            <p>Date Y'all Started Dating</p>
            <input
              onChange={e => this.onInputChange(e)}
              className="form-control"
              type="date"
              name="datingDate"
            />
          </div>
          <div className="form-group">
            <p>Date Y'all Were Married (Leave blank if not married)</p>
            <input
              onChange={e => this.onInputChange(e)}
              className="form-control"
              type="date"
              name="marriedDate"
            />
          </div>
          <div className="form-group">
            <button
              onClick={this.handleDataChange}
              className="btn btn-lg btn-primary btn-block"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}
