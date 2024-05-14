import React from "react";

function EventCard({ event }) {
  return (
    <div className="flex flex-col md:flex-row gap-6 max-w-[80%] justify-center my-2 px-10">
      <div className="w-full md:w-[400px]">
        <img
          src={event.image}
          alt="nuclear plant"
          className=" w-full rounded-md h-[250px] object-cover "
        />
      </div>

      <div className=" w-full md:w-[400px] flex flex-col px-4 gap-2  ">
        <a href={event.link}>
          <h3 className="font-bold text-xl text-teal-600 hover:text-teal-400">
            {event.event}
          </h3>
        </a>
        <p className="text-gray-600 italic ">
          {event.date} | {event.location}
        </p>
        <p className="text-gray-500">{event.desc}</p>
        <a
          href={event.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500"
        >
          Read More ....
        </a>
      </div>
    </div>
  );
}

export default EventCard;
