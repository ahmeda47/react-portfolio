import React from "react";
import resume from "../../img/res_.pdf";
import pic from "../../img/me.png";

function Home() {
  return (
    <section class="about" id="about">
      <div class="container">
        <div class="profile-img">
          <div class="about-details">
            <div class="about-heading">
              <h1>hello, world.</h1>
              <img src={pic} alt="me" class="img-border" />
            </div>
            <div class="social-media">
              <h1>My name is Abdi and I'm a full stack developer.</h1>
            </div>
            <div class="social-media">
              <a
                href="https://github.com/ahmeda47?tab=repositories"
                class="icon-link"
              >
                <i class="fab fa-github" />
              </a>
              <a
                href="https://www.linkedin.com/in/abdiwahab-ahmed"
                class="icon-link"
              >
                <i class="fab fa-linkedin-in" />
              </a>
            </div>
            <div class="social-media">
              <a
                // className="btn btn-dark text-uppercase mr-3"
                href={resume}
                download
              >
                <button class="btn submit-btn mt-2 mb-2">
                  resume
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
