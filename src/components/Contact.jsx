import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faMessage,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

function Contact() {
  return (
    <div id="contact" className="py-10">
      <h2 className="text-2xl lg:text-5xl xl:text-5xl 2xl:text-5xl font-extrabold text-center text-secondary mb-10">
        Contact
      </h2>

      <div className="flex flex-col justify-center items-center gap-5 lg:flex-row xl:flex-row 2xl:flex-row">
        <div className="bg-tertiary rounded-lg overflow-hidden px-10 w-full">
          <div className="flex flex-col justify-center items-center py-10">
            <div className="mb-5 border-2 border-muted rounded-full p-4 ">
              <FontAwesomeIcon
                icon={faLocationDot}
                size="xl"
                style={{ color: "#2ad8da" }}
              />
            </div>
            <p className="text-textPrimary mb-3 font-bold">Address</p>
            <p className="text-textSecondary text-center mb-5">Kumasi, Ghana</p>
          </div>
        </div>

        <div className="bg-tertiary rounded-lg overflow-hidden px-10 w-full">
          <div className="flex flex-col justify-center items-center py-10">
            <div className="mb-5 border-2 border-muted rounded-full p-4 ">
              <FontAwesomeIcon
                icon={faMessage}
                size="xl"
                style={{ color: "#2ad8da" }}
              />
            </div>
            <p className="text-textPrimary mb-3 font-bold">Email</p>
            <p className="text-textSecondary text-center mb-5">
              philip@codegentech.com
            </p>
          </div>
        </div>

        <div className="bg-tertiary rounded-lg overflow-hidden px-10 w-full">
          <div className="flex flex-col justify-center items-center py-10">
            <div className="mb-5 border-2 border-muted rounded-full p-4 ">
              <FontAwesomeIcon
                icon={faPhone}
                size="xl"
                style={{ color: "#2ad8da" }}
              />
            </div>
            <p className="text-textPrimary mb-3 font-bold">Telephone</p>
            <p className="text-textSecondary text-center mb-5">
              +233 24 202 4796{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
