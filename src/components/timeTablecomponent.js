import React, {Component} from 'react';
import '../assets/css/timeTable.css'

import  '../assets/css/bootstrap.min.css'; 
import '../assets/css/font-awesome.css'; 
import '../assets/css/ourcss.css'; 
import '../assets/boxicons/css/boxicons.min.css'; 
import Header from './header.component';
import WorkoutDetails from './workOutDetailscomponent';

export default class TimeTable extends Component{
  
    render(){
return(

    <div>
    <Header/>
        <section class="class-timetable-section spad" style={{paddingTop:"50px", paddingBottom:"20px"}}>
        <div class="container">
  
            <div class="row">
                <div class="col-lg-12">
                    <div class="class-timetable">
                        <table>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Monday</th>
                                    <th>Tuesday</th>
                                    <th>Wednesday</th>
                                    <th>Thursday</th>
                                    <th>Friday</th>
                                    <th>Saturday</th>
                                    <th>Sunday</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="class-time">6.00am - 8.00am</td>
                                    <td class="dark-bg hover-bg ts-meta" data-tsmeta="workout">
                                        <h5>WEIGHT LOOSE</h5>
                                        <span>RLefew D. Loee</span>
                                    </td>
                                    <td class="hover-bg ts-meta" data-tsmeta="fitness">
                                        <h5>Cardio</h5>
                                        <span>RLefew D. Loee</span>
                                    </td>
                                    <td class="dark-bg hover-bg ts-meta" data-tsmeta="workout">
                                        <h5>Yoga</h5>
                                        <span>Keaf Shen</span>
                                    </td>
                                    <td class="hover-bg ts-meta" data-tsmeta="fitness">
                                        <h5>Fitness</h5>
                                        <span>Kimberly Stone</span>
                                    </td>
                                    <td class="dark-bg blank-td"></td>
                                    <td class="hover-bg ts-meta" data-tsmeta="motivation">
                                        <h5>Boxing</h5>
                                        <span>Rachel Adam</span>
                                    </td>
                                    <td class="dark-bg hover-bg ts-meta" data-tsmeta="workout">
                                        <h5>Body Building</h5>
                                        <span>Robert Cage</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="class-time">10.00am - 12.00am</td>
                                    <td class="blank-td"></td>
                                    <td class="dark-bg hover-bg ts-meta" data-tsmeta="fitness">
                                        <h5>Fitness</h5>
                                        <span>Kimberly Stone</span>
                                    </td>
                                    <td class="hover-bg ts-meta" data-tsmeta="workout">
                                        <h5>WEIGHT LOOSE</h5>
                                        <span>RLefew D. Loee</span>
                                    </td>
                                    <td class="dark-bg hover-bg ts-meta" data-tsmeta="motivation">
                                        <h5>Cardio</h5>
                                        <span>RLefew D. Loee</span>
                                    </td>
                                    <td class="hover-bg ts-meta" data-tsmeta="workout">
                                        <h5>Body Building</h5>
                                        <span>Robert Cage</span>
                                    </td>
                                    <td class="dark-bg hover-bg ts-meta" data-tsmeta="motivation">
                                        <h5>Karate</h5>
                                        <span>Donald Grey</span>
                                    </td>
                                    <td class="blank-td"></td>
                                </tr>
                                <tr>
                                    <td class="class-time">5.00pm - 7.00pm</td>
                                    <td class="dark-bg hover-bg ts-meta" data-tsmeta="fitness">
                                        <h5>Boxing</h5>
                                        <span>Rachel Adam</span>
                                    </td>
                                    <td class="hover-bg ts-meta" data-tsmeta="motivation">
                                        <h5>Karate</h5>
                                        <span>Donald Grey</span>
                                    </td>
                                    <td class="dark-bg hover-bg ts-meta" data-tsmeta="workout">
                                        <h5>Body Building</h5>
                                        <span>Robert Cage</span>
                                    </td>
                                    <td class="blank-td"></td>
                                    <td class="dark-bg hover-bg ts-meta" data-tsmeta="workout">
                                        <h5>Yoga</h5>
                                        <span>Keaf Shen</span>
                                    </td>
                                    <td class="hover-bg ts-meta" data-tsmeta="motivation">
                                        <h5>Cardio</h5>
                                        <span>RLefew D. Loee</span>
                                    </td>
                                    <td class="dark-bg hover-bg ts-meta" data-tsmeta="fitness">
                                        <h5>Fitness</h5>
                                        <span>Kimberly Stone</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="class-time">7.00pm - 9.00pm</td>
                                    <td class="hover-bg ts-meta" data-tsmeta="motivation">
                                        <h5>Cardio</h5>
                                        <span>RLefew D. Loee</span>
                                    </td>
                                    <td class="dark-bg blank-td"></td>
                                    <td class="hover-bg ts-meta" data-tsmeta="fitness">
                                        <h5>Boxing</h5>
                                        <span>Rachel Adam</span>
                                    </td>
                                    <td class="dark-bg hover-bg ts-meta" data-tsmeta="workout">
                                        <h5>Yoga</h5>
                                        <span>Keaf Shen</span>
                                    </td>
                                    <td class="hover-bg ts-meta" data-tsmeta="motivation">
                                        <h5>Karate</h5>
                                        <span>Donald Grey</span>
                                    </td>
                                    <td class="dark-bg hover-bg ts-meta" data-tsmeta="fitness">
                                        <h5>Boxing</h5>
                                        <span>Rachel Adam</span>
                                    </td>
                                    <td class="hover-bg ts-meta" data-tsmeta="workout">
                                        <h5>WEIGHT LOOSE</h5>
                                        <span>RLefew D. Loee</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    </section></div>
);
}
}   