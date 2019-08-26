import React from 'react';
import {FormGroup, FormControl, ControlLabel, Grid} from 'react-bootstrap';
import styles from './css/styles.css';
import axios from 'axios';

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          email: '',
          password:''
        }
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassowrd = this.handlePassowrd.bind(this);
        this.loginUser = this.loginUser.bind(this);
    }
    async loginUser() {
      console.log('email is',this.state.email);
      console.log('passowrd is',this.state.password);
      const token = await axios.post('http://localhost:7777/loginUser',{
        username: this.state.email,
        password: this.state.password
      });
    }
    handleEmail(e) {
      this.setState({
        email: e.target.value
      })
    }
    handlePassowrd(e) {
      this.setState({
        password: e.target.value
      })
    }
    render() {
        return (
            <Grid>
                <form onSubmit={this.loginUser}>
        <FormGroup
          controlId="formControlsEmail"
        >
          <FormControl
            type="email"
            placeholder="Enter Email"
            className={styles.emailField}
            onChange={this.handleEmail}
          />
        </FormGroup>
        <FormGroup
          controlId="formControlsPassword"
        >
          <FormControl
            type="Password"
            placeholder="Enter Password"
            className={styles.emailField}
            onChange={this.handlePassowrd}
          />
        </FormGroup>
        <button>Submit</button>
      </form>
      
            </Grid>
        );
    }
}

export default Login;