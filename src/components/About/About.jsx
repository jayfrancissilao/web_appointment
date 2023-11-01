import "/src/components/About/About.css"; //import css here
import image from "/src/components/About/image.png";

const About = () => {
  return (
    <div className="about">
      <div className="flex lg:px-40">
        {/* left images */}
        <div className="lg:w-1/2 w-full">
          <img src={image} alt="" className="w-full" />
        </div>
        {/* right text */}
        <div className="lg:w-1/2 w-full  ">
          <h1 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
           Why Choose Us?
          </h1>
          <ul class="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400 ">
            <li class="flex ">
              <svg
                class="w-3.5 h-3.5 mr-2 text-green-500 dark:text-green-400 flex-shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              At least 10 characters
            </li>
            <li class="flex items-center">
              <svg
                class="w-3.5 h-3.5 mr-2 text-green-500 dark:text-green-400 flex-shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              At least one lowercase character
            </li>
            <li class="flex items-center">
              <svg
                class="w-3.5 h-3.5 mr-2 text-green-500 dark:text-green-400 flex-shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              At least one lowercase character
            </li>
            <li class="flex items-center">
              <svg
                class="w-3.5 h-3.5 mr-2 text-green-500 dark:text-green-400 flex-shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              At least one lowercase character
            </li>
            <li class="flex items-center">
              <svg
                class="w-3.5 h-3.5 mr-2 text-green-500 dark:text-green-400 flex-shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              At least one lowercase character
            </li>
          </ul>
        </div>
      </div>

      {/* text here wellness */}
      <div className="lg:px-40 mt-20">
        <h1 className="lg:text-6xl font-semibold">Wellness, Compassion, Quality</h1>
        <p className="text-black mt-5">They live in Bookmarks grove right at the coast of the Semantics, a large language ocean. A <br /> small river named Duden flows by thier place and supplies it.</p>
        <button className="fillBtns mt-5">Take An Appointment</button>
      </div>
    </div>
  );
};

export default About;
