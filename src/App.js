import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="nav-wrapper">
        <NavTabs />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/blog" component={Portfolio} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
    //   <div>
    //   <section class="about" id="about">
    //     <div class="container">
    //       <div class="profile-img">
    //         {/* <!-- <img src="./images/Screen Shot 2019-10-27 at 8.09.53 PM.png" alt=""> --> */}
    //         <div class="about-details">
    //           <div class="about-heading">
    //             <h1>abdiwahab</h1>
    //           </div>
    //           <p>
    //             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero
    //             esse rem distinctio similique vitae dignissimos voluptatem optio
    //             repellat quia officiis corporis incidunt aut facere unde
    //             repudiandae. Totam autem voluptatum expedita! Nobis temporibus
    //             ratione, expedita veniam, quam officia ipsa at eligendi
    //             possimus, eum culpa sequi!
    //           </p>

    //           <div class="social-media">
    //             {/* <!-- your links (github and linkedin--> */}
    //             <a
    //               href="https://github.com/ahmeda47?tab=repositories"
    //               class="icon-link"
    //             >
    //               <i class="fab fa-github"></i>
    //             </a>
    //             <a
    //               href="https://www.linkedin.com/in/abdiwahab-ahmed-32423519a/"
    //               class="icon-link"
    //             >
    //               <i class="fab fa-linkedin-in"></i>
    //             </a>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>

    //   <section class="services" id="services">
    //     <div class="container">
    //       {/* <!-- your services --> */}
    //       <div class="section-heading">
    //         <h1>Services</h1>
    //         <h6>What I can do for you</h6>
    //       </div>
    //       <div class="my-skills">
    //         <div class="skill">
    //           <div class="icon-container">
    //             <i class="fas fa-layer-group"></i>
    //           </div>
    //           <h1>Web Design</h1>
    //           <p>
    //             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem
    //             ipsum, dolor sit amet consectetur adipisicing elit.
    //           </p>
    //         </div>
    //         <div class="skill">
    //           <div class="icon-container">
    //             <i class="fas fa-code"></i>
    //           </div>
    //           <h1>Web Development</h1>
    //           <p>
    //             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem
    //             ipsum, dolor sit amet consectetur adipisicing elit.
    //           </p>
    //         </div>
    //         <div class="skill">
    //           <div class="icon-container">
    //             <i class="fas fa-chart-line"></i>
    //           </div>
    //           <h1>consultant</h1>
    //           <p>
    //             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem
    //             ipsum, dolor sit amet consectetur adipisicing elit.
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </section>

    //   <section class="portfolio" id="portfolio">
    //     <div class="container">
    //       <div class="section-heading">
    //         <h1>Portfolio</h1>
    //         <h6>View some of my recent work</h6>
    //       </div>
    //       {/* <!-- your projects --> */}

    //       <div class="portfolio-item">
    //         <div class="portfolio-img">
    //           <img src="images/man-hands-reading-boy.jpg" />
    //         </div>
    //         <div class="portfolio-description">
    //           <h6>Quiz Game</h6>
    //           <h1>Real or Fake?</h1>
    //           <p>
    //             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem
    //             ipsum, dolor sit amet consectetur adipisicing elit.
    //             <a href="#" class="cta">
    //               {" "}
    //               View Details
    //             </a>
    //           </p>
    //         </div>
    //       </div>

    //       <div class="portfolio-item">
    //         <div class="portfolio-img">
    //           <img src="images/a01934ede4266b903fa7b94e0b7e2ed8_facebook-translation-service-stepes_581-372.png" />
    //         </div>
    //         <div class="portfolio-description">
    //           <h6>Chat App</h6>
    //           <h1>DevIt</h1>
    //           <p>
    //             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem
    //             ipsum, dolor sit amet consectetur adipisicing elit.
    //             <a href="https://salty-stream-26516.herokuapp.com/" class="cta">
    //               View Details
    //             </a>
    //           </p>
    //         </div>
    //       </div>

    //       <div class="portfolio-item">
    //         <div class="portfolio-img">
    //           <img src="images/door-green-closed-lock.jpg" />
    //         </div>
    //         <div class="portfolio-description">
    //           <h6>Utilities</h6>
    //           <h1>Password Generator</h1>
    //           <p>
    //             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem
    //             ipsum, dolor sit amet consectetur adipisicing elit.
    //             <a href="https://ahmeda47.github.io/password-hw/" class="cta">
    //               View Details
    //             </a>
    //           </p>
    //         </div>
    //       </div>

    //       <div class="portfolio-item">
    //         <div class="portfolio-img">
    //           <img src="images/meeting-notes-clipart-1-notes-clipart-218_232.jpg" />
    //         </div>
    //         <div class="portfolio-description">
    //           <h6>CRUD app</h6>
    //           <h1>Note Taker</h1>
    //           <p>
    //             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem
    //             ipsum, dolor sit amet consectetur adipisicing elit.
    //             <a href="https://note-taker1234.herokuapp.com/" class="cta">
    //               View Details
    //             </a>
    //           </p>
    //         </div>
    //       </div>

    //       <div class="portfolio-item">
    //         <div class="portfolio-img">
    //           <img src="images/unnamed.png" />
    //         </div>
    //         <div class="portfolio-description">
    //           <h6>CRUD app</h6>
    //           <h1>Burger Joint</h1>
    //           <p>
    //             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem
    //             ipsum, dolor sit amet consectetur adipisicing elit.
    //             <a href="http://glacial-shore-42246.herokuapp.com/" class="cta">
    //               View Details
    //             </a>
    //           </p>
    //         </div>
    //       </div>

    //       <div class="portfolio-item">
    //         <div class="portfolio-img">
    //           <img src="images/unnamed (1).png" />
    //         </div>
    //         <div class="portfolio-description">
    //           <h6>MySQL Database</h6>
    //           <h1>Employee Tracker</h1>
    //           <p>
    //             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem
    //             ipsum, dolor sit amet consectetur adipisicing elit.
    //             <a href="#" class="cta">
    //               {" "}
    //               View Details
    //             </a>
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </section>

    //   <section class="contact" id="contact">
    //     <div class="container">
    //       <div class="row my-row">
    //         <div class="col">
    //           <div class="row"></div>
    //           <div class="row row-about">
    //             <div class="section-heading col-11">
    //               <h1>Contact</h1>
    //               <form>
    //                 <div class="form-group mt-3">
    //                   <label for="formGroupExampleInput">Name</label>
    //                   <input
    //                     type="text"
    //                     class="form-control"
    //                     id="formGroupExampleInput"
    //                     placeholder="Name"
    //                   />
    //                 </div>
    //                 <div class="form-group">
    //                   <label for="exampleFormControlInput1">
    //                     Email address
    //                   </label>
    //                   <input
    //                     type="email"
    //                     class="form-control"
    //                     id="exampleFormControlInput1"
    //                     placeholder="name@example.com"
    //                   />
    //                 </div>

    //                 <div class="form-group">
    //                   <label for="exampleFormControlTextarea1">Message</label>
    //                   <textarea
    //                     class="form-control"
    //                     id="exampleFormControlTextarea1"
    //                     rows="3"
    //                   ></textarea>
    //                 </div>
    //                 <div class="row">
    //                   <div class="col submit-btn-div">
    //                     <button type="submit" class="btn submit-btn mt-2 mb-2">
    //                       Submit
    //                     </button>
    //                   </div>
    //                 </div>
    //               </form>
    //             </div>
    //           </div>
    //           <div class="row bg-light"></div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    // </div>
  );
}

export default App;
