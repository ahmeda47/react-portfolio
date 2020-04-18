import React from "react";
import resume from "../../img/resume.pdf";
import pic from "../../img/me.png";

function Home() {
  return (
    <section class="about" id="about">
      <div class="container">
        <div class="profile-img">
          {/* <!-- <img src="./images/Screen Shot 2019-10-27 at 8.09.53 PM.png" alt=""> --> */}
          <div class="about-details">
            <div class="about-heading">
              <h1>hello, world.</h1>
              <img src={pic} alt="me" class="img-border" />
            </div>
            <div class="social-media">
              <h1>My name is Abdiwahab and I'm a full stack developer.</h1>
            </div>
            <div class="social-media">
              {/* <!-- your links (github and linkedin--> */}
              <a
                href="https://github.com/ahmeda47?tab=repositories"
                class="icon-link"
              >
                <i class="fab fa-github" />
              </a>
              <a
                href="https://www.linkedin.com/in/abdiwahab-ahmed-32423519a/"
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
                  download resume
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
