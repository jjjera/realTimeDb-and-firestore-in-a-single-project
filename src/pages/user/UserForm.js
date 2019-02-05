import React, {Component} from 'react';
import {Col,Card,CardBody,CardHeader,Button, Input, Label,FormGroup} from 'reactstrap';
// import { Field, reduxForm } from 'redux-form';
// import FormInput from '../components/FormInput';
// import {addUser} from '../firebase/db';
import { realTime } from '../../firebase/firebase';
import {toast} from 'react-toastify';


 class UserForm extends Component{

   constructor(props) {
     super(props);
     this.state = {name: '',age: '',address: '',number: '',};
   }

   handleSubmit = () => {
     // console.log('function called',this.state);
     realTime.ref('users').push(this.state).then((success) => {
       toast.success(success);
     },(error) => {
       toast.error(error);
     });
   }

   handleChange = (key, event) => {
     this.setState({[key]: event.target.value});
   }

   render(){
     return (
       <form>
       <Card>
           <CardHeader>
               <Col xs="6" lg="7">
                 <h2>Add User Using Real Time DB</h2>
               </Col>
           </CardHeader>
           <CardBody>
           <br/>
           <FormGroup>
           <Label>Name</Label>
           <br/>
             <Input
               name="name"
               type="text"
               value={this.state.name}
               onChange={(event)=>this.handleChange('name', event)}
               // inputplaceHolder="Enter Name"
               // component={FormInput}
               // value={this.state.inputValue}
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
                   // inputPlaceHolder="Enter Age"
                   // component={FormInput}
                   // value={this.state.inputValue}
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
               // inputPlaceHolder="Enter Address"
               // component={FormInput}
               // value={this.state.inputValue}
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
               // inputPlaceHolder="+91"
               // component={FormInput}
               // value={this.state.inputValue}
             />
             </FormGroup>
             <br/>
               <Button onClick={this.handleSubmit}>
                 Save
               </Button>
           </CardBody>
           </Card>
       </form>
     );

   }
 }

export default UserForm;
