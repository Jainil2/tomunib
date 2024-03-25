import React from "react";

const ReviewCard = ({
  name,
  department,
  street_address,
  pincode,
  city,
  state,
  index,
  degree,
  experience,
}) => {
  const handleClick = () => {
    // Perform any action you want here
    alert("Book Appointment clicked!");
  };

  return (
    <div className="container">
      <div className="max-w-sm mx-auto bg-white rounded-lg overflow-hidden shadow-lg">
        <div className="border-b px-12 pb-6 space-y-4">
          <span className="flex justify-between">
            <img
              className="h-32 w-32 rounded-full border-4 border-white mt-[5px] "
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXgNfLEfBKu_ToRwPiIOSq72Rev-RBpgC7yA&usqp=CAU"
              alt=""
            />
            <h2 class="text-3xl font-bold text-gray-900 flex-col items-center py-10 ml-3">
              {name}
            </h2>
          </span>

          <div className="">
            <div class="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="h-4 w-4"
              >
                <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
                <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z" />
                <path d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z" />
              </svg>
              <div className="ml-1">
                {degree.map((id, i) => {
                  if (i + 1 === degree.length) {
                    return id;
                  } else {
                    return id + ", ";
                  }
                })}
              </div>
            </div>
            <div class="flex items-center space-x-2">
              <h3>Experience : {experience}</h3>
              <svg
                class="h-5 w-5 text-blue-500"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                {" "}
                <line x1="12" y1="5" x2="12" y2="19" />{" "}
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </div>
            <div className="mb-5">
              <span>
                <div class="flex mt-[10px]">
                  <svg
                    className="h-5 w-5 mr-1"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path
                      className=""
                      d="M5.64 16.36a9 9 0 1 1 12.72 0l-5.65 5.66a1 1 0 0 1-1.42 0l-5.65-5.66zm11.31-1.41a7 7 0 1 0-9.9 0L12 19.9l4.95-4.95zM12 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
                    />
                  </svg>
                  {street_address}, {city}
                </div>
              </span>
              <div className="flex items-center space-x-5 ml-6">{state}</div>
            </div>

            <button
              className="flex-1 rounded-full bg-blue-600 dark:bg-blue-800 text-white dark:text-white antialiased font-bold hover:bg-blue-800 dark:hover:bg-blue-900 px-4 py-2"
              onClick={handleClick} // Attach the handleClick function to the onClick event
            >
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
