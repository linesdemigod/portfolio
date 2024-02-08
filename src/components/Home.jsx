import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import philip from "../assets/images/philip.jpg";

function Home() {
  return (
    <section className="py-10">
      <div className="flex flex-col justify-between items-center gap-3 md:flex-col lg:flex-row xl:flex-row 2xl:flex-row">
        <div className="text-textPrimary basis-2/3 mb-3">
          <h1 className="text-center text-4xl font-bold lg:text-6xl xl:text-6xl 2xl:text-6xl">
            I'm a Akuoko Philip
          </h1>
          <p className="text-center text-2xl font-bold lg:text-4xl xl:text-4xl 2xl:text-4xl">
            FullStack Developer
          </p>
          <div className="mx-auto lg:w-2/3 xl:w-2/3 2xl:w-2/3">
            <p className="text-base text-center text-textSecondary mt-3 ">
              I am a Ghanaian based fullstack developer. I am passionate about
              building excellent software that improves the lives of those
              around me.
            </p>
            <div className="flex flex-row. justify-center items-center gap-5 flex-wrap mt-5">
              <a
                href="https://github.com/linesdemigod"
                target="_blank"
                className="hover:text-secondary"
              >
                <FontAwesomeIcon icon={faGithub} size="2xl" />
              </a>
              <a
                href="https://gh.linkedin.com/in/philip-akuoko-01b79b234"
                target="_blank"
                className="hover:text-secondary"
              >
                <FontAwesomeIcon icon={faLinkedin} size="2xl" />
              </a>
            </div>
          </div>
        </div>
        <hr className="border-b-secondary border-opacity-75" />
        <div className="basis-1/3">
          <img
            src={philip}
            alt=""
            className="w-[15rem] h-[15rem] rounded-full"
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
