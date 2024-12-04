import React from "react";

function Home() {
  return (
    <section className="about my-5" id="about">
      <div className="container">
        <div className="text-center my-5">
          <h1>
            About <span class="text-primary">me </span>{" "}
          </h1>
          <hr className="w-25 m-auto" />
        </div>

        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6 col-12">
            <h1>
              {" "}
              What do you <span className="text-primary">
                want to know?
              </span>{" "}
            </h1>
            <p className="text-justify">
              My name is Ajit Singh kaurav. I am a full-stack developer with
              over 12 years of experience in designing, developing, and
              maintaining web applications using .NET, Angular, and React. I
              have a expertise in creating scalable and efficient solutions, I
              have a proven track record of leading successful projects and
              mentoring junior developers.
            </p>
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      My Qualification
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p className="strong">10th From MP Board</p>
                      <p className="strong">12th From MP Board</p>
                      <p className="strong">
                        Bachelor of Engineering (B.E.) from RGPB Bhopal
                      </p>
                    </div>
                  </div>
                </div>
                <h2 className="accordion-header">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    My Hobies
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    As a 12-year .NET developer, my hobbies include learning new
                    skills and staying updated with the latest tech trends. I
                    enjoy solving puzzles to sharpen my problem-solving
                    abilities. I love photography and often capture nature’s
                    beauty on weekends. Additionally, I stay active with fitness
                    routines like running and yoga to maintain a healthy
                    balance.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    My Dreams
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    My dream is to continuously evolve as a .NET developer,
                    mastering new technologies and leading innovative projects.
                    I aspire to create impactful software solutions that solve
                    real-world problems. Additionally, I dream of mentoring the
                    next generation of developers and contributing to a thriving
                    tech community. Ultimately, I aim to balance professional
                    success with personal fulfillment and creativity.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            data-aos="zoom-in-right"
            className="col-sm-12 col-md-6 col-lg-6 col-12 m-auto text-end h-25"
          ></div>
        </div>
      </div>
    </section>
  );
}

export default Home;
