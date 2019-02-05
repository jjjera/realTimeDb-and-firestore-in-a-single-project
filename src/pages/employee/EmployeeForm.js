import React, {Component} from 'react';
import {Col,Card,CardBody,CardHeader,Button, Input, Label,FormGroup, Form} from 'reactstrap';
import { fireStore } from '../../firebase/firebase';

 class EmployeeForm extends Component{

   constructor(props) {
     super(props);
     this.state = {name: '',age: '',address: '',number: '',};
   }

   handleSubmit = (event) => {
     // console.log('function called',this.state);
     fireStore.collection('employees').add(this.state);
   }

   handleChange = (key, event) => {
     // console.log('handleChange values are',key);
     this.setState({[key]: event.target.value});
   }

   render(){
     return (
       <Form innerRef={input => this.EmployeeForm = input}>
       <Card>
           <CardHeader>
               <Col xs="6" lg="7">
                 <h2>Add Employee Using FireStore</h2>
               </Col>
           </CardHeader>
           <CardBody>
           <FormGroup>
           <Label>Name</Label>
           <br/>
             <Input
               name="name"
               type="text"
               value={this.state.name}
               onChange={(event)=>this.handleChange('name', event)}
             />
           </FormGroup>
             <br/>
             <FormGroup>
             <Label>Date of Birth</Label>
             <br/>
                 <Input
                   name="age"
                   type="text"
                   value={this.state.age}
                   onChange={(event)=>this.handleChange('age', event)}
                 />
             </FormGroup>
                 <br/>
                 <FormGroup>
                 <Label>Address</Label>
                 <br/>
             <Input
               name="address"
               type="text"
               value={this.state.address}
               onChange={(event)=>this.handleChange('address', event)}
             />
                 </FormGroup>
             <br/>
             <FormGroup>
             <Label>Mobile No</Label>
             <br/>
             <Input
               name="mobileNo"
               type="number"
               value={this.state.number}
               onChange={(event)=>this.handleChange('number', event)}
             />
             </FormGroup>
             <br/>
               <Button onClick={this.handleSubmit}>
                 Save
               </Button>
             </CardBody>
          </Card>
       </Form>
     );

   }
 }

export default EmployeeForm;
