/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Sleep Tracker (CyberCup 2024)",
    description:
      "Designed and developed the frontend interface to display real-time data on sleep-affecting metrics such as heart rate and environmental factors. Integrated with Firebase to fetch and display sensor data for personalized sleep analysis using Gemini API. Received recognition for its innovative approach to enhancing sleep quality and health awareness.",
    url: "https://github.com/Ruqayya0805/sleep-tracker",
  },
  {
    title: "Airline Database Project",
    description:
      "Designed a flight booking platform with a dynamic frontend, ensuring an intuitive user experience. Implemented Dijkstra's Algorithm for optimized shortest path calculation to suggest efficient flight routes. Utilized Oracle SQL for seamless database operations, including user data management and real-time ticket generation.",
    url: "https://github.com/Ruqayya0805/flight-booking",
  },
  {
    title: "Sign Language Recognition Model",
    description:
      "Developed a machine learning model achieving 99% accuracy in recognizing American Sign Language (ASL) signs. Leveraged Random Forest for precise classification and recognition of hand gestures. Implemented robust preprocessing techniques to ensure high accuracy and reliability for real-world usage.",
    url: "https://github.com/Ruqayya0805/Sign-Language-",
  },
  {
    title: "Amigo Extension",
    description:
      "Created a browser extension to automate the repetitive task of clicking the Mark as Done button on a college online course platform. Streamlined user experience, reducing task time by 90%, enabling students to focus on course content.",
    url: "https://github.com/Ruqayya0805/AMIGO-EXTENSION",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
