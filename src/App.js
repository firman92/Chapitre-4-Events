import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      rememberMe: false,
      emailIsValid: false,
      passwordIsValid: false,
      isSubmitted: false,
    };
  }

  handleEmailChange = (e) => {
    this.setState({ email: e.target.value, emailIsValid: true });
    console.log(this.state.email);
    console.log(this.state.emailIsValid);
  };
  handlePasswordChange = (e) => {
    this.setState({ email: e.target.value, emailIsValid: true });
    console.log(this.state.email);
    console.log(this.state.emailIsValid);
  };

  render() {
    return (
      <>
        <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={this.handleEmailChange}
              autoComplete={"off"}
              onSubmit={this.handleEmailChange}
            />
            <div id="emailHelp" class="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              onChange={this.handleEmailChange}
            />
          </div>
          <div class="mb-3 form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
              onChange={this.handleEmailChange}
            />
            <label class="form-check-label" for="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </>
    );
  }
}

export default App;
