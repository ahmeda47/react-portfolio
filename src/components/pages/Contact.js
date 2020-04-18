import React from "react";
import { Link, Route } from "react-router-dom";
import Learn from "./Learn";

function Contact(props) {
  return (
    <section class="contact" id="contact">
      <div class="container">
        <div class="row my-row">
          <div class="col">
            <div class="row"></div>
            <div class="row row-about">
              <div class="section-heading col-11">
                <h1>Contact</h1>
                <form>
                  <div class="form-group mt-3">
                    <label for="formGroupExampleInput">Name</label>
                    <input
                      type="text"
                      class="form-control"
                      id="formGroupExampleInput"
                      placeholder="Name"
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleFormControlInput1">Email address</label>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="name@example.com"
                    />
                  </div>

                  <div class="form-group">
                    <label for="exampleFormControlTextarea1">Message</label>
                    <textarea
                      class="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                    ></textarea>
                  </div>
                  <div class="row">
                    <div class="col submit-btn-div">
                      <button type="submit" class="btn submit-btn mt-2 mb-2">
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class="row bg-light"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
