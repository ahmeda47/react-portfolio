import React from "react";
import chat from "../../img/chat.png";
import burger from "../../img/burger.png";
import door from "../../img/door.jpg";
import notes from "../../img/notes.jpg";
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
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem
              ipsum, dolor sit amet consectetur adipisicing elit.
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
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem
              ipsum, dolor sit amet consectetur adipisicing elit.
              <a href="https://salty-stream-26516.herokuapp.com/" class="cta">
                View Details
              </a>
            </p>
          </div>
        </div>

        <div class="portfolio-item">
          <div class="portfolio-img">
            <img src={door} />
          </div>
          <div class="portfolio-description">
            <h6>Utilities</h6>
            <h1>Password Generator</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem
              ipsum, dolor sit amet consectetur adipisicing elit.
              <a href="https://ahmeda47.github.io/password-hw/" class="cta">
                View Details
              </a>
            </p>
          </div>
        </div>

        <div class="portfolio-item">
          <div class="portfolio-img">
            <img src={notes} />
          </div>
          <div class="portfolio-description">
            <h6>CRUD app</h6>
            <h1>Note Taker</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem
              ipsum, dolor sit amet consectetur adipisicing elit.
              <a href="https://note-taker1234.herokuapp.com/" class="cta">
                View Details
              </a>
            </p>
          </div>
        </div>

        <div class="portfolio-item">
          <div class="portfolio-img">
            <img src={burger} />
          </div>
          <div class="portfolio-description">
            <h6>CRUD app</h6>
            <h1>Burger Joint</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem
              ipsum, dolor sit amet consectetur adipisicing elit.
              <a href="http://glacial-shore-42246.herokuapp.com/" class="cta">
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
            <h6>MySQL Database</h6>
            <h1>Employee Tracker</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem
              ipsum, dolor sit amet consectetur adipisicing elit.
              <a href="#" class="cta">
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
