import React from "react";
import chat from "../../img/chat.png";
import people from "../../img/people.png";
import reading from "../../img/reading.jpg";

function Portfolio() {
  return (
    <section class="portfolio text-color" id="portfolio">
      <div class="container">
        <div class="section-heading">
          <h1>Portfolio</h1>
          <h6>View some of my recent work</h6>
        </div>
        {/* <!-- your projects --> */}

        <div class="portfolio-item">
          <div class="portfolio-img">
            <img src={reading} />
          </div>
          <div class="portfolio-description">
            <h6>Quiz Game</h6>
            <h1>Real or Fake?</h1>
            <p>
              Spot the fake news headline.
              <a href="#" class="cta">
                {" "}
                View Details
              </a>
            </p>
          </div>
        </div>

        <div class="portfolio-item">
          <div class="portfolio-img">
            <img src={chat} />
          </div>
          <div class="portfolio-description">
            <h6>Chat App</h6>
            <h1>DevIt</h1>
            <p>
              Interact with other developers.
              <a href="https://salty-stream-26516.herokuapp.com/" class="cta">
                {" "}
                View Details
              </a>
            </p>
          </div>
        </div>

        <div class="portfolio-item">
          <div class="portfolio-img">
            <img src={people} />
          </div>
          <div class="portfolio-description">
            <h6>Job listing</h6>
            <h1>E-Centrix</h1>
            <p>
              Create an account and apply to jobs.
              <a href="https://e-centrix.herokuapp.com/" class="cta">
                {" "}
                View Details
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
