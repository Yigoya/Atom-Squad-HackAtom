import React from "react";
import { events } from "./EventData";
import EventCard from "./EventCard";
function Events() {
  return (
    <div className="flex flex-col font-sans mx-w-[80%] py-10 mx-auto items-center px-10 ">
      <h1 className="text-3xl align-left font-bold text-teal-600 ">
        Upcoming Conferences and Events
      </h1>
      <p className="text-lg text-gray-500 py-5 ">
        Explore and discover nuclear energy events happening around the world
      </p>
      {events.map((event, index) => (
        <EventCard key={index} event={event} />
      ))}
    </div>
  );
}

export default Events;
