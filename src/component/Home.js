import React from 'react'
import { useNavigate } from 'react-router-dom'
import Project1 from './Project1'
import './Project1.css'
import fb from './fb.png'
import insta from './insta.png'
import linkedin from './linkedin.png'

const  Home=()=> {
  const navigate=useNavigate()
    
    return (
      
      <React.Fragment>
        <div className="bimage">
            <p>LEARN TO CODE ENHANCE YOUR CODING SKILLS</p>
            {/* <button  className="b11" onClick={()=>navigate("login",{replace:true})}><b>START LEARNING</b></button> */}
            <br></br>
            <div class="image">
            <div class="img1"></div>
            <div class="img2"></div>
            <div class="img3"></div>
           </div>
           {/* <button  className="b11" onClick={()=>navigate("login",{replace:true})}><b>START LEARNING</b></button> */}
           <div class="image1">
            <div class="img4"></div>
            <div class="img5"></div>
            <div class="img6"></div>
           </div>
            
        </div>
        <div className='p1'>
        <h1 className='ui'><mark>UI TECHNOLOGIES</mark></h1>
          <div class='c1'>
            <h1><span class='logo1'>HTML</span></h1>
            <h3>
              Learn the right way to code HTML, the building block of the web. Design beautifully modern sites and learn how to balance layout for content and navigation.</h3>
          </div>
          <div class='c1'>
            <h1><span class='logo1'>CSS</span></h1>
            <h3>Create your first fully styled landing page, complete with multi-column layouts, modern navigation elements, and mobile responsive design.</h3>
          </div>
          <div class='c1'>
            <h1><span class='logo1'> JavaScript </span> </h1>
            <h3>Create dynamic interfaces that handle user events and add UI effects such as animations and drop-and-drop to surprise and delight your site’s visitors.</h3>
          </div> 
          
        </div>
        <div className='p2'>
          <div class='img7'></div>
          <div class='img8'></div>
          <div class='img9'></div>
          <div class='img10'></div>
          <div class='img11'></div>
          <div class='img12'></div>
          <div class='img13'></div>
          <div class='img14'></div>
          <div class='img.15'></div>
          <div class='img16'></div>
        </div>
        <div className='p3'>
          <div className='main'>
          <h1 className='why'>Why <span class="s3">Code?</span></h1>
          </div>
          <div className='global'>
            <div className='flex f1'>
            <h2>It’s popular</h2>
            <h4 className='content'>Technical skills are in high demand. It empowers individuals and businesses to create innovative solutions, automate tasks, build digital products and services, and navigate the ever-expanding digital landscape effectively</h4>
            </div>
            <div className='flex f2'>
              <h2>It's promising</h2>
              <h4>It opens doors to limitless possibilities, enabling problem-solving, creativity, and driving technological advancements.It offers vast career opportunities, drives innovation, and empowers individuals to shape the future of technology and society.</h4>
            </div>
            <div className='flex f3'>
              <h2>It's fun</h2>
              <h4>Imagine combining your passion and skill with your creativity, and making something new everyday!.Coding is fun because it's like solving puzzles and bringing ideas to life through interactive and dynamic creations.</h4>
            </div>
          </div>
          <div className='globalimg'>
            <div className='im icon1'></div>
            <div className='im icon2'></div>
            <div className='im icon3'></div>
          </div>
        </div>
        <footer className='end'>
        <div class="footer-links">
                <ul>
                    <h3>Navigation</h3>                  
                    <li><a href="#" onClick={()=>navigate("/",{replace:true})}>Home</a></li>
                    <li><a href="#" onClick={()=>navigate("about",{replace:true})}>About</a></li>
                    <li><a href="#"onClick={()=>navigate("login",{replace:true})} >Courses</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <div class="social">
                <a href="#"><img src={fb} className='soc'/></a>
                <a href="#"> <img src={insta} className='soc'/>  </a>
                <a href="#"><img src={linkedin} className='soc'/></a>
            </div>
        </footer> 
        
      </React.Fragment>
      

    )
  
}
export default Home
