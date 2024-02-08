import coding from "../assets/images/coding.png";
import cv from "../assets/file/philip_cv.pdf";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function About() {
  return (
    <div id="about" className="py-10">
      <h2 className="text-2xl lg:text-5xl xl:text-5xl 2xl:text-5xl font-extrabold text-center text-secondary mb-10">
        About Me
      </h2>

      <div className="flex flex-col justify-between items-center gap-5 lg:flex-row xl-flex-row 2xl-flex-row">
        <div className="basis-1/3">
          <img
            src={coding}
            alt=""
            className="md:max-w-full md:max-h-sm lg:max-w-sm"
          />
        </div>
        <div className="basis-2/3">
          <p className="text-textPrimary mb-2">
            Hi there, I'm Philip, a results-driven software engineer with
            experience creating enterprise-level mobile apps, online apps, and
            backend services. I have a strong passion for creating user
            interfaces that as many people as possible can enjoy and find
            useful.
          </p>
          <p className="text-textPrimary mb-10">
            My My love of organizing, learning and writing a well organised code
            has been the sole motivator of my career. I have worked with a
            variety of stacks and frameworks, including JavaScript, Laravel,
            React, and Dart. I have overseen the creation of numerous online
            applications and applications. willing to accept and put into
            practice fresh, motivating UI/UX designs. These are my stacks:
          </p>

          <ul className="flex flex-row justify-between items-center gap-3 flex-wrap text-textPrimary mb-10">
            <li className="border border-secondary rounded-lg px-5 py-3">
              PHP
            </li>
            <li className="border border-secondary rounded-lg px-5 py-3">
              Laravel
            </li>
            <li className="border border-secondary rounded-lg px-5 py-3">
              Javascript
            </li>
            <li className="border border-secondary rounded-lg px-5 py-3">
              React
            </li>
            <li className="border border-secondary rounded-lg px-5 py-3">
              Flutter
            </li>
            <li className="border border-secondary rounded-lg px-5 py-3">
              Dart
            </li>
            <li className="border border-secondary rounded-lg px-5 py-3">
              MySQL
            </li>
            <li className="border border-secondary rounded-lg px-5 py-3">
              Postgres
            </li>
          </ul>

          <div className="mt-10">
            <a
              href={cv}
              className="font-bold bg-secondary px-5 py-3 text-primary rounded-xl"
              download
            >
              Download CV <FontAwesomeIcon icon={faDownload} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
