import React, { Component } from 'react';
import {Col,Card,Row,CardBody,CardHeader,Button,FormGroup,Input,Label} from 'reactstrap';

class Dummy extends Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};
  }

  handleSubmit = (event) => {
    console.log('called',event);
    // console.log('function called',this.setState({value:event.target.value}));
  }
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
              <Label>Upload Employee Image</Label>
                <Input
                  name="profilePicture"
                  type="file"
                  id="file-input"
                  accept="image/*"
                  // value={this.state.value}
                />
            </FormGroup>
            <br />
            <FormGroup>
            <Label>Name</Label>
            <Input
              name="name"
              type="text"
              inputplaceholder="Enter Name"
              // value={this.state.value}
            />
            </FormGroup>
                <br />
                <FormGroup>
              <Label>Date of Birth </Label>
                <Input
                  name="age"
                  type="text"
                  inputplaceholder="Enter Age"
                  // value={this.state.value}
                />
            </FormGroup>
            <br />
            <FormGroup>
            <Label>Address</Label>
            <Input
              name="address"
              type="text"
              inputplaceholder="Enter Address"
              // value={this.state.value}
            />
            </FormGroup>
            <br />
            <FormGroup>
            <Label>Mobile No</Label>
            <Input
              name="mobileNo"
              type="text"
              inputplaceholder="+91"
              // value={this.state.value}
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

export default Dummy;
