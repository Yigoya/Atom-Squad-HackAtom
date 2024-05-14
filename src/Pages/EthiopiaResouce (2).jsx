import React from 'react'
import InfoItem from './InfoItem'
import imge from '../assets/Images/imggg.jpg'
import imgg from '../assets/Images/imgggg.jpg'
import imggg from '../assets/Images/img.jpg'
import imgggg from '../assets/Images/imggggg.jpg'
import imggggg from '../assets/Images/imgg.jpg'
function EthiopiaResouce() {

    const data = [
        {
            mainTitle:" Nuclear Science and Technology as a Part of Ethiopia’s Energy",
            intro:"Ethiopia, rich in natural energy resources, primarily uses biomass (92.4% of energy supply) and underutilizes oil and hydropower. Despite this, its economy has grown by an average of 10.8% annually since 2005. In 2019, the country launched a nuclear technology program with Russian and IAEA support, aiming to diversify its energy sources. Current projects include developing a nuclear science center, a research reactor, and a nuclear power plant to enhance energy supply across various economic sectors.",
            title:"Energy Systems Scenario in Ethiopia",
            sub:"Ethiopia's annual energy consumption is approximately 40,000 GWh, mainly from unsustainable bioenergy, with households consuming 92%, transport 4%, and industry 3%. The country produces about 9,000 GWh of electricity, primarily from hydro (96%) and wind (4%), exporting 11% of it. Despite abundant renewable resources, only a small portion is harnessed. With rapid economic growth, energy demand is projected to increase by 10-14% annually until 2037. Currently, only 27% of the rural population has grid electricity, with ongoing expansions and the use of standalone systems and mini-grids improving access.",
            img: imge
        },
        {
            title:"Hydropower",
            sub:"Ethiopia, with hydropower potential up to 45,000 MW, ranks second in Africa for this resource. Of this, 30,000 MW is economically viable, equating to 162 TWh of potential electricity generation. However, current production is only 3.98 TWh, utilizing just 2.5% of this potential. The country's terrain, featuring 10 river basins including the Blue Nile and Omo, is well-suited for hydropower projects.",
        },
        {
            title:"Pico and Micro Hydropower",
            sub:"In Ethiopia, Pico hydropower plants (PHP) have capacities up to 10 kW, exceeding the typical 3 kW limit elsewhere. Micro hydropower ranges from 11 to 500 kW, subdivided into ≤30 kW for individual villages and 31 to 500 kW for small towns or connected villages. The specific yield of the Ethiopian highlands is 500 W/km².",
            img: imgg
        },
        {
            title:"Solar Energy",
            sub:"Ethiopia experiences solar irradiation ranging from 5000 to 7000 Wh/m², varying by region and season. The average daily solar radiation is approximately 5.2 kWh/m². Seasonal fluctuations range from 4.55 to 5.55 kWh/m²/day, Ethiopia's biomass resources, including wood, agricultural residues, and municipal waste, are being heavily utilized, leading to environmental degradation. Despite a national surplus, local analysis shows deficits in 307 out of 500 districts. The energy sector relies on these unsustainable resources, with household consumption being the main consumer. Rapid population growth is accelerating resource depletion, with regional disparities. Ethiopia has potential energy production from agro-processing byproducts, but no grid-connected biomass power plants exist."
        },
        {
            title:"Wind Energy",
            sub:"Ethiopia's wind energy potential is estimated at 10,000 MW, with wind velocities ranging from 7 to 9 m/s. The Ethiopian National Meteorological Services Agency (NMSA) initiated wind data collection in 1971, establishing 39 recording stations in strategic locations. While these stations have been measuring wind velocity and providing data since their inception, concerns remain regarding the number of stations, the quality and comprehensiveness of the data, and their distribution.",
            img:imggg
        },
        {
            title:"Geothermal Energy",
            sub:"Ethiopia has an estimated 5 GW of geothermal potential, with 700 MW suitable for power generation, primarily located in the Rift Valley where temperatures range from 50 to 300°C at depths of 1,300 to 2,500 meters. However, the only geothermal power plant commissioned, a 7.3 MW facility, started in 1998/1999 but ceased operations in 2002 due to lack of maintenance."
        },
        {
            title:"Fossil Fuels",
            sub:"Although Ethiopia is not currently an oil producer, studies since the 1960s have confirmed viable commercial reserves of oil and gas. The country also holds substantial amounts of coal and oil shale, as well as over 70 billion cubic meters of natural gas. International petroleum companies are continuing exploration efforts across Ethiopia."
        },
        {
            title:"Electricity Sector",
            sub:"In 2010, Ethiopia generated 3,981.07 GWh of electricity, primarily through hydropower, with diesel and geothermal sources contributing only 0.9%. The Ethiopian Electric Power Corporation managed 11 large hydropower, one geothermal, and 15 diesel power plants. The interconnected system served 5,163 towns and 1,896,265 customers.",
            img:imgggg
        },
        {
            title:"Medical agricultural and industrial applications of Nuclear Technology in Ethiopia",
            sub:"Nuclear techniques in Ethiopia began in the 1960s for medical purposes and have since expanded to agriculture, animal health, hydrology, mining, and industry. Ethiopia has a public radiotherapy center, and radiological methods are used in research, breeding, beverage, construction, transport, and customs services.",
            img:imggggg
        },
        {
            title:"Education Research and Educational networks in Nuclear Science and Technology in Ethiopia ",
            sub:"Ethiopia's nuclear education system has limited programs, with some universities offering MSc and PhD programs, while Addis Ababa Science and Technology University has established a center for Nuclear Reactor Technology."
        },
        {
            title:"The Status and Development of Nuclear Program in Ethiopia",
            sub:"Ethiopia's nuclear journey began with previous governments' vision to promote peaceful nuclear use in energy, medicine, water, and agriculture. The country's commitment to nuclear energy is part of efforts to reduce dependence on fossil fuels, diversify energy sources, and adapt to climate change. The Ethiopian National Nuclear Program consists of two parts: a first phase aiming to establish a National Center for Nuclear Science and Technology with a Nuclear Research Reactor by 2024, and a second phase introducing nuclear energy into Ethiopia's energy mix. The country is considering both large and small modular reactors and aims to have its first nuclear power plant operational by 2035-2040. Key government decisions have been made based on policies and recommendations from NEPIO, the national regulatory body, technology vendors, and the international atomic energy agency. Ethiopia's decision to introduce a national nuclear program in 2021 has not been supported by strong policy justification strategic documents and missions."
        },
    ]
  return (
    <div className='bg-gray-100 '>
        <div className='shadow lg:px-36 rounded-xl mx-32 py-8'>
            {data.map((item, index) => (
            <InfoItem key={index} data={item} />
        ))}
        </div>
  </div>

  )
}

export default EthiopiaResouce