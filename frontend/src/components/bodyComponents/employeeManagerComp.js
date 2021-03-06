
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Addemployee from '../Addemployee'
import Allemployees from '../Allemployees';
import viewOneemployee from '../viewOneemployee';
import Deleteemployee from '../Deleteemployee';
import createvacation from '../createvacation';
import viewvacations from '../viewvacationrequest';
import Emanagersidenav from '../emanagersidenav'
import rejectvacation from '../rejectvacation'
import Header from '../Header';

export default function Body() {
    return (

        <Router>

            <head>
                <title>Front Office Management</title>
            </head>

            <Header />

            <div className="content">

            { <Emanagersidenav /> }

                <div className="block">
                
               
                    <Route path="/emp-manager/addemployee" exact component={Addemployee}/>
                    <Route path="/emp-manager" exact component={Allemployees}/>
                    <Route path="/emp-manager/Viewoneemployee/:id" exact component={viewOneemployee}/>
                    <Route path="/emp-manager/deleteemployee/:id" exact component={Deleteemployee}/>
                    <Route path="/emp-manager/createvacation" exact component={createvacation}/>
                    <Route path="/emp-manager/viewvacations" exact component={viewvacations}/>
                    <Route path="/emp-manager/rejectvacation/:id" exact component={rejectvacation}/>
 

    </div>

            </div>
        </Router>
    );
}