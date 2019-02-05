import React from 'react';
import {Card} from 'reactstrap';
import UserForm from '../user';
import EmployeeForm from '../employee';

const Home = () => {
    return (
      <div>
        <Card>
          <UserForm/>
        </Card>
        <hr/>
        <Card>
          <EmployeeForm/>
        </Card>
      </div>
    );
  }

export default Home;
