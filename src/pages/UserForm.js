import React, { Component } from 'react';
import {Col,Card,CardBody,CardHeader,Button,FormGroup,Input,Label} from 'reactstrap';
import { Field, reduxForm } from 'redux-form';

class UserForm extends Component {

  constructor(props) {
    super(props);
    this.state = {inputValue: ''};
  }

  // handleSubmit = (event) => {
  //   console.log('called',event);
  //   // console.log('function called',this.setState({value:event.target.value}));
  // }

// handleSubmit(){
//   console.log('handleSubmit called');
//   console.log('Your input value is: ' + this.state.inputValue)
// //Send state to the server code
// }

  render() {

    return (
      <form onSubmit={this.handleSubmit}>
        <Card>
          <CardHeader>
              <Col xs="6" lg="7">
                <h4>Add User</h4>
              </Col>
          </CardHeader>
          <CardBody>
            <FormGroup>
              <Label></Label>
                <Field
                  name="profilePicture"
                  type="file"
                  id="file-input"
                  accept="image/*"
                  label="Upload Employee Image"
                  // value={this.state.inputValue}
                />
            </FormGroup>
            <br />
            <FormGroup>
            <Label>Name</Label>
            <Input
              name="name"
              type="text"
              inputplaceholder="Enter Name"
              // value={this.state.inputValue}
            />
            </FormGroup>
                <br />
                <FormGroup>
              <Label>Date of Birth </Label>
                <Input
                  name="age"
                  type="text"
                  inputplaceholder="Enter Age"
                  // value={this.state.inputValue}
                />
            </FormGroup>
            <br />
            <FormGroup>
            <Label>Address</Label>
            <Input
              name="address"
              type="text"
              inputplaceholder="Enter Address"
              // value={this.state.inputValue}
            />
            </FormGroup>
            <br />
            <FormGroup>
            <Label>Mobile No</Label>
            <Input
              name="mobileNo"
              type="text"
              inputplaceholder="+91"
              // value={this.state.inputValue}
            />
            </FormGroup>
            <br />
              <Button type="save">
                Save
              </Button>
          </CardBody>
        </Card>
      </form>
    );
  }

}

export default reduxForm({
  form: 'userDatas'
})(UserForm);
