/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./experience.css";

const Experience = () => {
  const [toggleState, setToggleState] = useState(false);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="section experience section" id="experience">
      <h2 className="section__title">Experience 💼</h2>
      <span className="section__subtitle">What I work as</span>

      <div className="exp__container container grid">
        <div className="exp__content">
          <div>
            <i className="uil uil-web-grid exp__icon"></i>
            <h3 className="exp__title">
              Software <br /> Developer{" "}
            </h3>
          </div>

          <div>
            <span className="exp__comp">HCL Tech Canada</span>
          </div>

          <span className="exp__button" onClick={() => toggleTab(1)}>
            View More <i className="uil uil-arrow-right exp__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 1 ? "exp__modal active-modal" : "exp__modal"
            }
          >
            <div className="exp__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times exp__modal-close"
              ></i>
              <h3 className="exp__modal-title">
                Software Developer <br /> Sep'22 - Currently Working🧑🏻‍💻
              </h3>
              <p className="exp__modal-description">
                Exposition of Contributions
              </p>
              <ul className="exp__modal-experiences grid">
                <li className="exp__modal-experience">
                  <li className="uil uil-check-circle exp__modal-icon"></li>
                  <p className="exp__modal-info">
                    Engineered highly scalable and performance driven React
                    applications, achieving a 99% improvement in load times
                    through advanced optimization techniques with ReactJS and
                    React Native.
                  </p>
                </li>

                <li className="exp__modal-experience">
                  <li className="uil uil-check-circle exp__modal-icon"></li>
                  <p className="exp__modal-info">
                    Played a pivotal role in migrating a mission-critical
                    website for a leading financial industry client,
                    transitioning from a legacy technology stack to a modern,
                    robust architecture.
                  </p>
                </li>

                <li className="exp__modal-experience">
                  <li className="uil uil-check-circle exp__modal-icon"></li>
                  <p className="exp__modal-info">
                    Seamlessly integrated third-party APIs, leveraging advanced
                    asynchronous programming techniques to ensure smooth data
                    fetching and robust error handling, enhancing application
                    reliability.
                  </p>
                </li>

                <li className="exp__modal-experience">
                  <li className="uil uil-check-circle exp__modal-icon"></li>
                  <p className="exp__modal-info">
                    Implemented dynamic data management by integrating RESTful
                    APIs and GraphQL, resulting in streamlined data operations
                    and real-time updates across complex application workflows.
                  </p>
                </li>

                <li className="exp__modal-experience">
                  <li className="uil uil-check-circle exp__modal-icon"></li>
                  <p className="exp__modal-info">
                    Designed and deployed centralized state management systems
                    using Redux and Context API, achieving optimized data flow,
                    enhanced application scalability, and improved user
                    experience.
                  </p>
                </li>

                <li className="exp__modal-experience">
                  <li className="uil uil-check-circle exp__modal-icon"></li>
                  <p className="exp__modal-info">
                    Developed and optimized CRUD functionality utilizing React
                    hooks (e.g., useState, useEffect, and useContext), ensuring
                    seamless data operations while maintaining high code quality
                    and maintainability.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="exp__content">
          <div>
            <i className="uil uil-arrow exp__icon"></i>
            <h3 className="exp__title">
              Web <br /> Developer
            </h3>
          </div>

          <div>
            <span className="exp__comp">M & T Printing Group Ltd </span>
          </div>

          <span className="exp__button" onClick={() => toggleTab(2)}>
            View More <i className="uil uil-arrow-right exp__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 2 ? "exp__modal active-modal" : "exp__modal"
            }
          >
            <div className="exp__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times exp__modal-close"
              ></i>

              <h3 className="exp__modal-title">
                Web Developer <br /> March'21 - Aug'22
              </h3>
              <p className="exp__modal-description">
                Exposition of Contributions
              </p>

              <ul className="exp__modal-experiences grid">
                <li className="exp__modal-experience">
                  <li className="uil uil-check-circle exp__modal-icon"></li>
                  <p className="exp__modal-info">
                    Developed and maintained scalable web applications using
                    React for the front end and Java (Spring Boot) for the back
                    end, enhancing functionality and user engagement for
                    high-traffic platforms.
                  </p>
                </li>

                <li className="exp__modal-experience">
                  <li className="uil uil-check-circle exp__modal-icon"></li>
                  <p className="exp__modal-info">
                    Designed and implemented responsive user interfaces with
                    React, Redux for state management, and inte- grated with
                    RESTful APIs developed using Spring Boot.
                  </p>
                </li>

                <li className="exp__modal-experience">
                  <li className="uil uil-check-circle exp__modal-icon"></li>
                  <p className="exp__modal-info">
                    Built RESTful web services and micro-services in Java to
                    handle complex business logic and data process- ing,
                    utilizing Spring Boot and Hibernate for ORM.
                  </p>
                </li>

                <li className="exp__modal-experience">
                  <li className="uil uil-check-circle exp__modal-icon"></li>
                  <p className="exp__modal-info">
                    Optimized application performance by employing techniques
                    like lazy loading, code splitting, and efficient data
                    fetching strategies, resulting in a 30% improvement in load
                    times.
                  </p>
                </li>

                <li className="exp__modal-experience">
                  <li className="uil uil-check-circle exp__modal-icon"></li>
                  <p className="exp__modal-info">
                    Implemented CI/CD pipelines using Jenkins & Docker, enabling
                    automated testing, integration, and deploy- ment, reducing
                    release cycle times by 20%.
                  </p>
                </li>
                <li className="exp__modal-experience">
                  <li className="uil uil-check-circle exp__modal-icon"></li>
                  <p className="exp__modal-info">
                    Managed databases using MySQL & PostgreSQL, including schema
                    design, query optimization, and data migration to support
                    application scalability.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
