import React, { useState } from "react";
import img from "../assets/Images/download.png";
import carImage from "../assets/Images/car.jpg";
import houseImage from "../assets/Images/house.jpg";
const EnergyCalculator = () => {
  // State variables for mass, fission energy, abundance, and result
  const [mass, setMass] = useState("");
  const [fissionEnergy, setFissionEnergy] = useState("");
  const [abundance, setAbundance] = useState("");
  const [result, setResult] = useState("");
  const [err, setError] = useState("");
  const [energyRelease, setEnergyRelease] = useState(0);

  // Constants for energy consumption
  const energyPerCar = 4312.32 * 10 ** 3; // 4,312.32 kWh per year for an electric vehicle
  const energyPerHousehold = 10950 * 10 ** 3; // 10,950 kWh per year for a household

  // Function to handle calculation
  const calculateEnergy = () => {
    setError("");
    // Convert mass to kilograms
    const massKg = parseFloat(mass) / 1000 || 0; // Convert from grams to kilograms

    // Calculate number of U235 atoms
    const numberOfU235Atoms =
      (massKg / (235 * 10 ** -3)) *
        (parseFloat(abundance) / 100) *
        (6.022 * 10 ** 23) || 0;

    // Calculate energy release in joules
    const energyReleaseJoules =
      numberOfU235Atoms * (parseFloat(fissionEnergy) * 1.60218 * 10 ** -13);
    if (isNaN(energyReleaseJoules)) {
      setResult("");
      setError("Please enter valid numbers");
      setEnergyRelease(0);
      return;
    }

    // Update result state
    setResult(
      "Energy Release: " + energyReleaseJoules.toExponential(3) + " Joules"
    );
    setEnergyRelease(energyReleaseJoules);
  };

  // Function to calculate number of cars and households powered up
  const calculateUsage = () => {
    const numberOfCars = Math.floor(energyRelease / energyPerCar); // Use energyReleaseJoules for calculation
    const numberOfHouseholds = Math.floor(energyRelease / energyPerHousehold); // Use energyReleaseJoules for calculation
    return { numberOfCars, numberOfHouseholds };
  };
  return (
    <div className="flex flex-col gap-2 items-center rounded-xl shadow-lg w-[500px] mx-auto my-4 border-2 p-10 bg-[#252d4a] text-white">
      <h2 className="text-2xl font-bold text-center mb-4">
        Energy Release Calculator
      </h2>
      <img src={img} alt="" />
      <div className="flex flex-col  gap-4 items-center mt-4 w-full">
        <p>
          Average energy per electric Car driven 12000km in RUSSIA={" "}
          <span className="font-bold text-green-500">
            2,000 kWh kWh per year
          </span>{" "}
        </p>
        <p>
          Average energy per electric household in RUSSIA={" "}
          <span className="font-bold text-green-500">6,827 kWh per year</span>{" "}
        </p>
      </div>
      <p className="text-lg text-center text-gray-300 my-5 ">
        Calculate the energy released by a given mass of natural uranium,
        assuming a specific fission energy and abundance of U-235.
      </p>

      <div className="flex gap-2 w-full items-center justify-between ">
        <label className="text-lg ">Mass of uranium (grams): </label>
        <input
          type="number"
          value={mass}
          onChange={(e) => setMass(e.target.value)}
          className=" rounded-md border-2 p-[1px] text-[#252d4a]"
        />
      </div>
      <div className="flex gap-2 w-full items-center justify-between">
        <label className="text-lg ">Abundance of U-235 (% by weight): </label>
        <input
          type="number"
          value={abundance}
          onChange={(e) => setAbundance(e.target.value)}
          className=" rounded-md border-2 p-[1px] text-[#252d4a]"
        />
      </div>
      <div className="flex gap-2 w-full items-center justify-between">
        <label>Energy released per fission event (MeV): </label>
        <input
          type="number"
          value={fissionEnergy}
          onChange={(e) => setFissionEnergy(e.target.value)}
          className=" rounded-md border-2 p-[1px] text-[#252d4a]"
        />
      </div>
      <button
        onClick={calculateEnergy}
        className="border-2 p-2 my-2 mt-8 rounded-md  border-white hover:bg-white hover:text-black transition-all duration-300 px-20"
      >
        Calculate
      </button>
      {result && (
        <div
          className="text-green-500"
          style={{ marginTop: "20px", fontSize: "18px" }}
        >
          {result}
        </div>
      )}
      {err && <p className="text-red-500">{err}</p>}
      {result && (
        <div className="flex flex-col items-center ">
          <div className="flex gap-4 items-center mt-4 w-full">
            <img src={carImage} alt="Car" className="w-12 h-12" />
            <p>
              {" "}
              On Average{" "}
              <span className="font-bold text-green-500">
                {" "}
                {calculateUsage().numberOfCars}
              </span>{" "}
              electric cars can be powered up
            </p>
          </div>
          <div className="flex gap-4 items-center mt-4 w-full">
            <img src={houseImage} alt="Household" className="w-12 h-12" />
            <p>
              {" "}
              On Average{" "}
              <span className="font-bold text-green-500">
                {calculateUsage().numberOfHouseholds}
              </span>{" "}
              Households can be powered up
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default EnergyCalculator;
