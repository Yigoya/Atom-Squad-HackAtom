import React from "react";
import { Steps } from "antd";
import PROS from "../assets/Images/PROS.jpg";
import cons from "../assets/Images/cons.jpg";
import prosandcons from "../assets/Images/prosandcons.jpg";


const Landing = () => {
  const description =
    "Nuclear power plants can operate continuously, providing a consistent source of electricity, which is particularly useful for meeting base load demand.";
  return (
    <div>
      <div className="lg:px-44 lg:py-20 bg-gray-100 ">
        <div className="bg-white lg:my-10 lg:shadow-xl lg:p-10 max-md:p-2 rounded-xl ">
          <h3 className="text-3xl py-1 text-center font-bold text-teal-600">
            Nuclear Energy
          </h3>
          <div className="lg:flex  ">
            <div className="max-md:p-5 lg:mt-16 lg:w-1/2 lg:mr-10">
              <p className="text-md py-2 leading-6 text-gray-800 dark:text-gray-800 font-serif  mb-5">
                Nuclear energy is energy made by breaking the bonds that hold
                particles together inside an atom, a process called “nuclear
                fission.” This energy is “carbon-free,” meaning that like wind
                and solar, it does not directly produce carbon dioxide (CO2) or
                other greenhouse gases that contribute to climate change. In the
                U.S., nuclear power provides more than half of our carbon-free
                electricity.
              </p>
            </div>
            <div className=" lg:mt-16 mb-10 lg:w-1/2">
              <img
                src="https://cdn.arcgis.com/sharing/rest/content/items/12a01c3d4b7e4955befc4641d18e2c92/resources/AkBm2YE7MVFRszRl-sr47.gif?w=400"
                width={"550px"}
              />
            </div>
          </div>
          <h3 className="text-3xl py-1 text-center font-bold text-teal-600 lg:mt-5 lg:mb-4">
            How Does Nuclear Energy Work?
          </h3>
          <div className="lg:flex  max-md:mt-20">
            <div className=" lg:mt-10 lg:w-1/2">
              <img
                src="https://kidsdiscover.blob.core.windows.net/kdoassets/uploads/topics/thumbnails/fission_large.gif"
                width={"550px"}
              />
            </div>
            <div className="lg:ml-10 max-md:p-5 lg:w-1/2  ">
              <h3 className="text-lg font-medium pb-2 text-teal-600 lg:mt-16">
                Fission Reaction
              </h3>
              <p className="text-md py-2 leading-6 text-gray-800 dark:text-gray-800 font-serif mb-5">
                Fission Reaction: Uranium atoms, commonly used as fuel in
                nuclear reactors, undergo fission when bombarded by neutrons.
                This process releases heat and more neutrons, which can then
                trigger additional fission reactions, creating a chain reaction.
              </p>
            </div>
          </div>
          <div className="lg:flex  ">
            <div className="max-md:p-5 lg:mt-3 lg:w-1/2 lg:mr-10">
              <h3 className="text-lg font-medium pb-2 text-teal-600 lg:mt-12">
                Steam Turbines
              </h3>
              <p className="text-md py-2 leading-6 text-gray-800 dark:text-gray-800 font-serif  mb-5">
                In a nuclear power plant, heat from nuclear fission reactions
                produces steam by heating water. This high-pressure steam is
                directed onto turbines, causing them to rotate. The rotating
                turbines are connected to generators, converting the mechanical
                energy into electrical energy. This electrical energy is then
                transmitted through the power grid for use. Overall, the process
                converts heat from nuclear reactions into electricity
                efficiently and reliably.
              </p>
            </div>
            <div className=" lg:mt-16 mb-10 lg:w-1/2">
              <img
                src="https://t3.ftcdn.net/jpg/06/31/80/08/360_F_631800803_OzP00fUIdRA35A74nYCkX9vrbYrbgCS9.jpghttps://t3.ftcdn.net/jpg/06/31/80/08/360_F_631800803_OzP00fUIdRA35A74nYCkX9vrbYrbgCS9.jpg"
                width={"550px"}
              />
            </div>
          </div>
          <div className="lg:flex  max-md:mt-20">
            <div className=" lg:mt-10 lg:w-1/2">
              <img
                src="https://c1.wallpaperflare.com/preview/599/227/685/photos-iceland-landscape-mountains.jpg"
                width={"550px"}
              />
            </div>
            <div className="lg:ml-10 max-md:p-5 lg:w-1/2  ">
              <h3 className="text-lg font-medium pb-2 text-teal-600 lg:mt-14">
                Heat Generation
              </h3>
              <p className="text-md py-2 leading-6 text-gray-800 dark:text-gray-800 font-serif mb-5">
                The electricity generated in power plants travels through
                transmission lines to reach homes, businesses, and industries.
                These power grids consist of interconnected networks of
                transmission lines, substations, and transformers. Voltage
                levels are adjusted to facilitate long-distance transmission and
                distribution. At the destination, transformers lower the voltage
                for safe use in households and businesses. Overall, power grids
                efficiently distribute electricity, supporting various needs
                across society.
              </p>
            </div>
          </div>
          <div className="lg:flex  ">
            <div className="max-md:p-5 lg:w-1/2 lg:mr-10">
              <h3 className="text-lg font-medium pb-2 text-teal-600 lg:mt-16">
                Electric Generation
              </h3>
              <p className="text-md py-2 leading-6 text-gray-800 dark:text-gray-800 font-serif  mb-5">
                Electricity generated by power plants is transmitted through
                grids consisting of lines, substations, and transformers. These
                grids ensure electricity reaches homes, businesses, and
                industries. Voltage is adjusted for safe distribution, and
                transformers lower voltage for local use. Power grids
                efficiently distribute electricity, supporting diverse societal
                needs.
              </p>
            </div>
            <div className=" lg:mt-14 mb-10 lg:w-1/2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a0/PressurizedWaterReactor.gif"
                width={"550px"}
              />
            </div>
          </div>
          <div className="flex justify-center">
            <img src={prosandcons} width={"100px"} alt="" />
          </div>
          <h3 className="text-3xl py-1 text-center font-bold text-teal-600 lg:mt-10">
            Pros and Cons of Nuclear Energy
          </h3>
          <div className="lg:flex gap-5">
            <div className=" shadow-lg p-10 rounded-xl my-10 dark:bg-white hover:bg-gradient-to-r from-teal-300 to-teal-50">
              <img
                src={PROS}
                width={100}
                height={100}
                className="max-w-full max-h-full mx-auto"
              />
              <h3 className="text-lg font-medium pt-8 pb-2 flex justify-center items-center">
                Pros
              </h3>
              <Steps
                direction="vertical"
                current={5}
                items={[
                  {
                    title: "Base Load Power",
                    description,
                  },
                  {
                    title: "Low Operating Costs",
                    description:
                      " Once operational, nuclear power plants have relatively low operating costs compared to fossil fuel plants.",
                  },
                  {
                    title: "Resource Availability",
                    description:
                      "Uranium, the primary fuel for nuclear reactors, is abundant in many parts of the world.",
                  },
                  {
                    title: "Energy Independence",
                    description:
                      "Countries with nuclear power programs can reduce reliance on imported fossil fuels for electricity generation.",
                  },
                  {
                    title: "Low Greenhouse Gas Emissions",
                    description:
                      " Nuclear power plants produce minimal greenhouse gas emissions during operation, making them attractive for mitigating climate change.",
                  },
                ]}
              />
            </div>
            <div className="shadow-lg p-10 rounded-xl my-10 dark:bg-white hover:bg-gradient-to-r from-red-300 to-red-50">
              <img
                src={cons}
                width={50}
                height={50}
                className="max-w-full max-h-full mx-auto"
              />
              <h3 className="text-lg font-medium pt-8 pb-2 text-center">
                Cons
              </h3>
              <Steps
                direction="vertical"
                current={4}
                items={[
                  {
                    title: "Limited Fuel Supply",
                    description:
                      "While uranium is abundant, high-grade uranium ore is finite, and the extraction process can have environmental impacts.",
                  },
                  {
                    title: "Safety Concerns",
                    description:
                      " Beyond accidents, routine operation of nuclear facilities carries risks, including exposure to radiation for workers and nearby communities.",
                  },
                  {
                    title: "Long Construction Timelines",
                    description:
                      "Building new nuclear power plants often requires lengthy construction periods, which can be susceptible to delays and cost overruns.",
                  },
                  {
                    title: "Public Perception",
                    description:
                      " Negative public opinion surrounding nuclear energy due to safety concerns, waste disposal issues, and the association with nuclear weapons proliferation.",
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
