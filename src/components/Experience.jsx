import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faCube } from "@fortawesome/free-solid-svg-icons";

function Experience() {
  return (
    <div id="experience" className="py-10">
      <h2 className="text-2xl lg:text-5xl xl:text-5xl 2xl:text-5xl font-extrabold text-center text-secondary mb-10">
        Experience &amp; Education
      </h2>

      <div className="flex flex-col justify-center items-start gap-5 lg:flex-row xl-flex-row 2xl:flex-row">
        <div className="basis-1/2">
          <div className="flex flex-row justify-cemter items-start gap-3">
            <div className="mr-5">
              <span className="bg-secondary p-4 rounded-full">
                <FontAwesomeIcon icon={faGraduationCap} size="xl" />
              </span>
            </div>
            <div className="">
              <div className="mb-8">
                <div className="bg-tertiary px-3 py-2 rounded-lg text-textPrimary mb-2">
                  2019 - 2023
                </div>
                <h3 className="text-xl font-bold text-textPrimary lg:text-2xl xl:text-2xl 2xl:text-2xl uppercase mb-0">
                  university of education, Winneba
                </h3>
                <span className="text-textSecondary">
                  BSC. Information Technology
                </span>
              </div>

              <div className="mb-8">
                <div className="bg-tertiary px-3 py-2 rounded-lg text-textPrimary mb-2">
                  2010 - 2013
                </div>
                <h3 className="text-xl font-bold text-textPrimary lg:text-2xl xl:text-2xl 2xl:text-2xl uppercase mb-0">
                  Sunyani Technical University
                </h3>
                <span className="text-textSecondary">
                  Diploma (Sales and Marketing)
                </span>
              </div>
              <div className="mb-5">
                <div className="bg-tertiary px-3 py-2 rounded-lg text-textPrimary mb-2">
                  2006 - 2009
                </div>
                <h3 className="text-xl font-bold text-textPrimary lg:text-2xl xl:text-2xl 2xl:text-2xl uppercase mb-0">
                  Adventist Senior High School
                </h3>
                <span className="text-textSecondary">WASSCE Certificate</span>
              </div>
            </div>
          </div>
        </div>
        <div className="basis-1/2">
          <div className="flex flex-row justify-cemter items-start gap-3">
            <div className="mr-5">
              <span className="bg-secondary p-4 rounded-full">
                <FontAwesomeIcon icon={faCube} size="xl" />
              </span>
            </div>
            <div className="">
              <div className="mb-8">
                <div className="bg-tertiary px-3 py-2 rounded-lg text-textPrimary mb-2">
                  March 2018 - Present (Fullstack)
                </div>
                <h3 className="text-xl font-bold text-textPrimary lg:text-2xl xl:text-2xl 2xl:text-2xl uppercase mb-0">
                  codegentech enterprise
                </h3>
                <span className="text-textSecondary">
                  <ul className="list-disc">
                    <li>
                      Develop, maintain, deploy and enhance web applications
                      using React.js, Laravel, PHP
                    </li>
                    <li>
                      Provide comprehensive documentation of the system to
                      prospective stakeholders.
                    </li>
                  </ul>
                </span>
              </div>

              <div className="mb-8">
                <div className="bg-tertiary px-3 py-2 rounded-lg text-textPrimary mb-2">
                  November 2021 - August 2023 (project manager)
                </div>
                <h3 className="text-xl font-bold text-textPrimary lg:text-2xl xl:text-2xl 2xl:text-2xl uppercase mb-0">
                  Douglie enterprise
                </h3>
                <span className="text-textSecondary">
                  <ul className="list-disc">
                    <li>
                      Collaborate with engineers, architects, etc. to determine
                      the specifications of the project.
                    </li>
                    <li>
                      Obtain permits and licenses from appropriate authorities
                    </li>
                    <li>
                      Negotiate contracts with external vendors to reach
                      profitable agreements
                    </li>
                  </ul>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
