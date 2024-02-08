import { useState } from "react";
import aceuniversal from "../assets/images/aceuniversal.jpg";
import aceprex from "../assets/images/aceprex.jpg";
import cognacp from "../assets/images/cognacp.jpg";

function Portfolio() {
  const [showLink, setShowLink] = useState(false);

  return (
    <div id="portfolio" className="py-10">
      <h2 className="text-2xl lg:text-5xl xl:text-5xl 2xl:text-5xl font-extrabold text-center text-secondary">
        Portfolio
      </h2>
      <p className="text-textSecondary text-xl lg:text-2xl xl:text-2xl 2xl:text-2xl font-bold text-center mb-10">
        Recent Work
      </p>

      <div className="grid grid-cols-1 justify-center items-center gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid:cols-4">
        <div className="relative group">
          <a href="https://aceuniversalenclave.com" target="_blank">
            <img
              src={aceuniversal}
              alt=""
              className="md:max-w-full md:max-h-sm lg:max-w-sm"
            />
          </a>
          <div class="absolute top-0 left-0 w-full h-full group-hover:bg-[#00000080] cursor-pointer"></div>
          <a
            href="https://aceuniversalenclave.com"
            target="_blank"
            className="absolute top-[50%] left-10 translate-x-[-50] translate-y-[-50] text-white text-center hidden group-hover:block"
          >
            https://aceuniversalenclave.com
          </a>
        </div>
        <div className="relative group">
          <a href="">
            <img
              src={aceprex}
              alt=""
              className="md:max-w-full md:max-h-sm lg:max-w-sm"
            />
          </a>

          <div class="absolute top-0 left-0 w-full h-full group-hover:bg-[#00000080] cursor-pointer"></div>
          <a
            href="https://aceprex.com"
            target="_blank"
            className="absolute top-[50%] left-10 translate-x-[-50] translate-y-[-50] text-white text-center hidden group-hover:block"
          >
            https://aceprex.com
          </a>
        </div>
        <div className="relative group">
          <img
            src={cognacp}
            alt=""
            className="md:max-w-full md:max-h-sm lg:max-w-sm"
          />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
