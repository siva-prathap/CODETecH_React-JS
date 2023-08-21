import React,{Component} from 'react'
import './courses.css'
import course11 from '../component/course11.jpeg';
import course2 from '../component/course2.jpeg';
import course3 from '../component/course3.jpeg';
import course4 from '../component/course4.jpeg';
import course5 from '../component/course5.jpeg';
import course6 from '../component/course6.jpeg';
import sql from '../component/sql.jpeg';
import Ai from '../component/Ai.jpeg';
import hadoop from '../component/hadoop.jpeg';

export class Courses extends React.Component {
    render() {
      return (
        <div>
            <header>Assessments<hr></hr></header>
            <h4>Categories</h4>
            <div class="row">
            <figure>
              <a href=""><img src={course11} class="img1"/>
              <figcaption>C Programming</figcaption></a>
            </figure>
            <figure>
            <a href=""><img src={course2} class="img1"/>
            <figcaption>C++ Programming</figcaption></a>
          </figure>
          <figure>
          <a href=""><img src={course3} class="img1"/>
              <figcaption>Python Programming</figcaption></a>
            </figure>
            <figure>
            <a href=""><img src={course4} class="img1"/>
              <figcaption>HTML</figcaption></a>
            </figure>
            <figure>
            <a href=""><img src={course5} class="img1"/>
              <figcaption>Java Programming</figcaption></a>
            </figure>
            <figure>
            <a href=""><img src={course6} class="img1"/>
              <figcaption>CSS</figcaption></a>
            </figure>
            <figure>
            <a href=""><img src={sql} class="img1"/>
            <figcaption>SQL</figcaption></a>
          </figure>
          <figure>
            <a href=""><img src={Ai} class="img1"/>
            <figcaption>Artificial Intelligence</figcaption></a>
          </figure>
          <figure>
            <a href=""><img src={hadoop} class="img1"/>
            <figcaption>Hadoop</figcaption></a>
          </figure>
            </div>
        </div>
      )
    }
  }
  export default Courses