import React, { Component } from "react";

export default class Form extends Component {
  state = {
    term: ""
  };

  onFormSubmit(e) {
    e.preventDefault();
    console.log(e)
  }
      
  
  render() {
    
    return (
      <div>
        <form onSubmit={e => this.onFormSubmit(e)}>
          <div className="form-group">
            <p>Your Name</p>
            <input
              className="form-control"
              type="text"
              name="lifeTogether[yourName]"
              placeholder="Aragorn"
              required
            />
          </div>
          <div className="form-group">
            <p>Your Significant Other's Name</p>
            <input
              className="form-control"
              type="text"
              name="lifeTogether[soName]"
              placeholder="Arwen"
              required
            />
          </div>
          <div className="form-group">
            <p>Your Birthday</p>
            <input
              className="form-control"
              type="date"
              name="lifeTogether[yourBday]"
              required
            />
          </div>
          <div className="form-group">
            <p>Your Significant Other's Birthday</p>
            <input
              className="form-control"
              type="date"
              name="lifeTogether[soBday]"
              required
            />
          </div>
          <div className="form-group">
            <p>Date Y'all Met</p>
            <input
              className="form-control"
              type="date"
              name="lifeTogether[meetDate]"
              required
            />
          </div>
          <div className="form-group">
            <p>Date Y'all Started Dating</p>
            <input
              className="form-control"
              type="date"
              name="lifeTogether[datingDate]"
              required
            />
          </div>
          <div className="form-group">
            <p>Date Y'all Were Married (Leave blank if not married)</p>
            <input
              className="form-control"
              type="date"
              name="lifeTogether[marriedDate]"
            />
          </div>
          <div className="form-group">
            <button className="btn btn-lg btn-primary btn-block">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}
