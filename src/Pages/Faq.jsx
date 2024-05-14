import React from "react";
import FAQItem from "../components/FAQItem";
export const Faq = () => {
  return (
    <div>
      <div className="lg:px-34 lg:py-20 mx-52">
        <div className=" shadow-lg p-10 bg-white rounded-xl my-10">
          <div className="flex flex-col mt-5">
            <h1 className="font-bold text-5xl text-teal-600 mb-3 text-center">
              FAQ
            </h1>
            <h1 className="font-medium text-3xl text-teal-600 m-3">Coal</h1>
            <FAQItem
              question="How do I convert between short tons and metric tons?"
              answer="I'm a tutor article!You can convert short tons to metric tons by multiplying the number of short tons by 0.9071847.
              You can convert metric tons to short tons by multiplying the number of metric tons by 1.10231."
            />
            <FAQItem
              question="How much does it cost to generate electricity with different types of power plants?"
              answer="A mill is equal to 1/1,000 of a U.S. dollar, or 1/10 of one cent. Mills per kilowatthour (kWh) equals dollars per megawatthour (mWh). To convert mills per kWh to cents per kWh, divide mills per kWh by 10.
                Please contact us to inquire about specific subjects."
            />
            <FAQItem
              question="How much coal does Ethiopia import and from where?"
              answer=" Ethiopia has minimal coal reserves and historically isn't a major importer. Its energy focus lies in renewables like hydroelectric power. For precise import data, consult recent reports from entities such as the IEA or Ethiopian Ministry of Mines and Energy."
            />
            <FAQItem
              question=" How many power plants are in the Ethiopia?"
              answer=" Ethiopia has several power plants, primarily focused on hydroelectric power due to its abundance of water resources. The exact number of power plants may vary due to ongoing developments and expansions in the energy sector."
            />
            <h1 className="font-medium text-3xl text-teal-600 m-3">
              Conversion & Equivalents
            </h1>
            <FAQItem
              question=" How do I compare the cost of heating fuels?"
              answer=" A useful comparison is the price or cost of fuels based on the heat content of the fuels, such as dollars per million British thermal units (Btu) of heat content. The formula for this calculation is:
                  [ (Fuel price per unit) divided by (fuel heat content per unit) ] multiplied by 1,000,000."
            />
            <FAQItem
              question="What is the efficiency of different types of power plants?"
              answer=" Heat rate is one measure of the efficiency of electrical generators/power plants that convert a fuel into heat and into electricity. The heat rate is the amount of energy used by an electrical generator/power plant to generate one kilowatthour (kWh) of electricity. The U.S. Energy Information Administration (EIA) expresses heat rates in British thermal units (Btu) per net kWh generated. Net generation is the amount of electricity a power plant supplies to the power transmission line connected to the power plant. Net generation accounts for all the electricity that the power plant consumes to operate the plant’s generator(s) and other equipment, such as fuel feeding systems, boiler water pumps, cooling equipment, and pollution control devices."
            />
            <h1 className="font-medium text-3xl text-teal-600 m-3">Diesel</h1>
            <FAQItem
              question="How many gallons of gasoline and diesel fuel are made from one barrel of oil?"
              answer=" Petroleum refineries in the United States produce about 19 to 20 gallons of motor gasoline and 11 to 12 gallons of ultra-low sulfur distillate fuel oil (most of which is sold as diesel fuel and in several states as heating oil) from one 42-gallon barrel of crude oil. Many other petroleum products are also refined from crude oil. Refinery yields of individual products vary from month to month as refiners focus operations to meet demand for different products and as they work to maximize profits"
            />
            <FAQItem
              question="What are the projections for ethiopia gasoline and diesel fuel prices?"
              answer="Projections for Ethiopia's gasoline and diesel fuel prices depend on global oil market trends, domestic economic conditions, and government policies. Consult reports from organizations like the IEA or the World Bank, and monitor local news sources for updates on energy regulations and market trends for the most accurate projections."
            />
            <FAQItem
              question="How many gallons of gasoline and diesel fuel are made from one barrel of oil?"
              answer="On average, one barrel of crude oil produces about 19.5 gallons of gasoline and about 9 gallons of diesel fuel, among other petroleum products. However, these proportions can vary depending on the specific characteristics of the crude oil and the refining process used by a particular refinery."
            />
            <FAQItem
              question="How much carbon dioxide is produced from Ethiopia gasoline and diesel fuel consumption?"
              answer="Ethiopia's gasoline consumption emits roughly 2.31 kg of CO2 per liter, while diesel emits about 2.68 kg per liter. To estimate total CO2 emissions, multiply fuel consumption by their respective emission factors, considering factors like fuel quality and vehicle efficiency."
            />
            <h1 className="font-medium text-3xl text-teal-600 m-3">
              Electricity
            </h1>
            <FAQItem
              question="Can electric utility customers choose their electricity supplier?"
              answer="Some electric utility customers have the option to choose an alternate electricity supplier in states where the electric utility industry has been restructured. This consumer option is often called retail choice or customer choice. The alternate supplier is the company that generates or markets electricity, often referred to as a retail electricity marketer. The alternate supplier may be an affiliate of the distribution utility. Some suppliers offer electricity generated from specific energy sources, such as wind and other renewable energy sources. Regardless of the electricity supplier, the distribution utility delivers the contracted electricity to a customer's meter and charges for that service."
            />
            <FAQItem
              question="How is electricity used in Ethiopia homes?"
              answer="Electricity in Ethiopian homes is typically used for various purposes, including lighting, cooking, heating water, powering appliances like refrigerators and TVs, and charging electronic devices. In urban areas, electricity may also be used for air conditioning and heating. However, access to electricity can vary significantly between urban and rural areas, influencing the types of appliances and usage patterns in Ethiopian households."
            />
            <FAQItem
              question="How many nuclear power plants are in the United States, and where are they located?"
              answer="As of April 30, 2024, there were 54 commercially operating nuclear power plants with 94 nuclear power reactors in 28 states. lllinois has 11 reactors, the most of any state, with a total nameplate electricity generating capacity of 12,415 megawatts (MW), equal to 12% of total U.S. operating nuclear electricity generation capacity.

Of the 54 operating nuclear power plants, 19 have one reactor, 31 have two reactors, 4 have three reactors, and 1 has four reactors. The Alvin W. Vogtle Electric Generating Plant in Georgia is the largest U.S. nuclear power plant with 4 reactors and a total nameplate electricity generating capacity of about 4,658 MW and a total net summer electricity generating capacity of 4,530 MW. The R.E. Ginna Nuclear Power Plant in New York State is the smallest nuclear facility with one reactor with a nameplate generation capacity of 614 MW and a net summer generation capacity of about 580 MW. The smallest individual reactors are the two units at the Prairie Island nuclear plant in Minnesota, each with 593 MW nameplate generation capacity and about 520 MW of net summer generation capacity.

The newest nuclear reactor to enter service is the Vogtle Unit 4 at the Alvin W. Vogtle Electric Generating Plant plant in Georgia, which began commercial operation in April 2024, with 1,114 MW nameplate electricity generating capacity."
            />
            <FAQItem
              question="What types and amounts of energy are produced in each state?"
              answer="You can access the most recent available data on the types and amounts of energy produced in each state as follows:

Coal, crude oil, natural gas, nuclear energy, biofuels (fuel ethanol and biodiesel), and wood and wood waste (for energy) annual production from 1960 to most recent year available in the State Energy Data System (SEDS). There are two options for finding the state-level production data for each state from the main SEDS page:
Scroll down the main SEDS page to find the link at lower left for 1960-20?? estimates (where ?? is the most recent year available), and on that page scroll down to find the Production section.
At the upper left of the main SEDS page, click on the Change State/Territory field, which is above the Overview, Data, and Analysis tabs. Select a state and on the resulting page and scroll over the Data tab. In the drop-down menu, select a data period under Energy Estimates (SEDS). Scroll down the resulting page and select the Production bar to access files with data on the types and amounts of energy produced"
            />
            <h1 className="font-medium text-3xl text-teal-600 m-3">
              Environment
            </h1>
            <FAQItem
              question="How much of U.S. carbon dioxide emissions are associated with electricity generation?"
              answer="EIA publishes estimates of carbon dioxide (CO2) emissions by the U.S. electric power industry and by the U.S. electric power sector. CO2 emissions by the electric power industry include emissions associated with total U.S. electricity generation including direct use of electricity and of useful thermal output. The electric power industry includes the electric power sector. The electric power sector emissions account for CO2 emissions associated with retail electricity sales to the residential, commercial, industrial, and transportation sectors.

In 2022, the U.S. electric power industry accounted for about 33% of total U.S. energy-related CO2 emissions, while the electric power sector accounted for about 31%."
            />
            <FAQItem
              question="Is ozone a greenhouse gas?"
              answer="Ozone is technically a greenhouse gas, but ozone is helpful or harmful depending on where it is found in the earth's atmosphere. Ozone occurs naturally at higher elevations in the atmosphere (the stratosphere) where it forms a layer that blocks ultraviolet (UV) light, which is harmful to plant and animal life, from reaching the earth’s surface. The protective benefit of stratospheric ozone outweighs its contribution to the greenhouse effect and to global warming. However, at lower elevations of the atmosphere (the troposphere), ozone is harmful to human health.

There are human-made industrial chemicals that break down ozone in the stratosphere and create holes in the ozone layer. The United States and countries all around the world ban and control production and use of several of these industrial gases under the Montreal Protocol. In the United States, emissions of air pollutants that result in ozone formation in the troposphere, or ground-level ozone, are regulated under the Clean Air Act."
            />
            <FAQItem
              question="What are the greenhouse gas and air pollutant emissions factors for fuels and electricity?"
              answer="The U.S. Energy Information Administration (EIA) publishes emission factors (or coefficients) for the amounts of certain gases that are released when fuels are burned and for when electricity is generated. EIA publishes emission factors for energy-related carbon dioxide (CO2) emissions, which are CO2 emissions related to energy consumption, and for U.S. electricity generation, as well as for sulfur dioxide (SO2) and nitrogen oxides (NOx) emissions related to U.S. electricity generation.

SO2 and NOx are criteria pollutants regulated by the U.S. Environmental Protection Agency (EPA) under the Clean Air Act and subsequent amendments. They are not greenhouse gases. The NOx emissions and emissions factors published by EIA do not include emissions of nitrous oxide (N2O), which is a greenhouse gas (GHG). The only GHG emissions estimates and GHG emissions factors that EIA publishes are for energy-related CO2 emissions.

CO2 emission factors/coefficients for:

common fuels
fuels used for electricity generation  (XLS)
Emission factors for electricity generation:

CO2, SO2 and NOx for electricity generated in each state for a specific year, in pounds per megawatthour, in Table 1 of individual State Electricity Profiles and averages for the United States
EPA is a source for emission factors for all greenhouse gases and other emissions factors"
            />
            <FAQItem
              question="Why do carbon dioxide emissions weigh more than the original fuel?"
              answer="The amount of carbon dioxide (CO2) that is produced from burning a fuel weighs more than the amount of the fuel itself. During complete combustion, each carbon atom in the fuel combines with two oxygen atoms in the air to make CO2. The addition of two oxygen atoms to each carbon atom forms CO2, which has an atomic weight of 44—about 3.6667 times the atomic weight of the carbon, which is 12.

For example, subbituminous coal is, on average, 51% carbon, so the carbon in a short ton (2,000 pounds) of subbituminous coal weighs 1,020 pounds. The CO2 emissions from burning a short ton of subbituminous coal weigh approximately 3,740 pounds, or about 3.67 times the weight of the carbon in a short ton of subbituminous coal and 1.87 times the weight of a short ton of subbituminous coal."
            />
            <h1 className="font-medium text-3xl text-teal-600 m-3">Gasoline</h1>
            <FAQItem
              question="Does have historical gasoline prices for each state?"
              answer="Yes, the U.S. Energy Information Administration (EIA) publishes historical gasoline price data. Unless otherwise indicated, the prices that EIA publishes are nominal prices.

Retail gasoline prices, including taxes, are available for selected cities and states dating back to 2000. Weekly prices, average monthly prices, and average annual prices by grade and formulation are available.

The State Energy Data System (SEDS) contains estimates for average annual gasoline prices for each state dating back to 1970. The prices are in dollars per million British thermal units ($/MMBtu). The prices include federal and state gasoline taxes, but they exclude local taxes.

To obtain the historical prices from the SEDS data, use the CSV file for All States—Prices. In the file, the code for gasoline prices for the transportation sector, in $/MMBtu, is: State Abbreviation (in column A) and MGACD (in column B). For example, the code for Alaska is AK—MGACD. Those prices, in $/MMBtu, can be converted to approximate dollars per gallon using the heat contents in Table A3 Petroleum consumption and fuel ethanol. There are 42 U.S. gallons in a barrel.

Historical average monthly and annual prices for all states, from retail outlets, excluding taxes, by grade and formulation (and by other sales types) are available from 1983 to 2011. Data collection for the price series was suspended in 2011. Historical federal and state taxes on motor vehicle fuels are published in the Motor Fuels sections of the Federal Highway Administration’s annual Highway Statistics Series.

All of the above price data series are also available through EIA’s application programming interface (API); see petroleum prices."
            />
            <FAQItem
              question="Does publish inflation-adjusted gasoline and diesel fuel prices?"
              answer="Yes, the U.S. Energy Information Administration (EIA) publishes prices for U.S. regular-grade gasoline and diesel fuel that are adjusted to reflect the effect of changes in the value of the U.S. dollar in the Real Prices Viewer of the Short-Term Energy Outlook. Use the Price Series drop-down field of the Real Prices Viewer to select for regular gasoline and diesel fuel.  

"
            />
            <FAQItem
              question="How much gasoline does the United States consume?"
              answer="In 2023, U.S. finished motor gasoline consumption averaged about 8.94 million barrels per day or about 376 million gallons per day. (There are 42 U.S. gallons in a barrel). The record-high level of finished motor gasoline consumption was about 392 million gallons per day in 2018."
            />
            <FAQItem
              question="What do I pay for in a gallon of gasoline and diesel fuel?"
              answer="The U.S. Energy Information Administration shows relative shares of the major components of the most recent average monthly retail prices of regular-grade gasoline and diesel fuel in the pump graphics of the Gasoline and Diesel Fuel Update. The Methodology for Gasoline and Diesel Fuel Pump Components and historical component shares for gasoline and diesel fuel prices are also available"
            />
            <h1 className="font-medium text-3xl text-teal-600 m-3">
              General Energy
            </h1>
            <FAQItem
              question="How much energy does a person use in a year?"
              answer="In 2022, total U.S. primary energy consumption per person (or per capita consumption) was about 301 million British thermal units (MMBtu).

At the state level in 2021, Alaska had the highest per capita total primary energy consumption at about 932 MMBtu per person and the highest per capita transportation energy use. Rhode Island had the lowest per capita total primary energy consumption at about 169 MMBtu per person. In the residential sector, Montana had the highest per capita residential energy consumption of any state in 2021 at about 92 MMBtu, and Hawaii had the lowest per capita residential energy consumption at about 26 MMBtu per person. The U.S. average residential energy consumption per capita in 2021 was about 63 MMBtu.

The world average per capita consumption of primary energy in 2021 was about 76 MMBtu"
            />
            <h1 className="font-medium text-3xl text-teal-600 m-3">Nuclear</h1>
            <FAQItem
              question="How many power plants are in the United States?"
              answer="As of December 31, 2022, there were 25,378 electric generators at about 12,538 utility-scale electric power plants in the United States. Utility-scale power plants have a total nameplate electricity generation capacity of at least 1 megawatt (MW). A power plant may have one or more generators, and some generators may use more than one type of fuel.

Learn more:
Electric Power Annual, Table 4.1: Count of electric power industry power plants by sector, by predominant energy sources within plant (some power plants are double-counted by fuel type in Table 4.1), and Table 4.3: Existing capacity by energy source (includes number of generators by type of main fuel/energy source)
Downloadable databases with detailed data on individual generators and power plants"
            />
            <FAQItem
              question="How much does it cost to generate electricity with different types of power plants?"
              answer="The U.S. Energy Information Administration (EIA) has historical data on the average annual operation, maintenance, and fuel costs for existing power plants by major fuel or energy source types in Table 8.4. Average power plant operating expenses for major U.S. investor-owned electric utilities1 of the Electric Power Annual.

EIA has projections for electricity generation costs in the Annual Energy Outlook. The most recent projections and estimates for different types of power plants are in Levelized costs of new generation resources in the Annual Energy Outlook 2023, which includes estimated costs in dollars per megawatthour (MWh) for electricity generation by various types of power plants that start operation in 2024, 2027, and 2040.

1 A mill is equal to 1/1,000 of a U.S. dollar, or 1/10 of one cent. Mills per kilowatthour (kWh) equals dollars per megawatthour (mWh). To convert mills per kWh to cents per kWh, divide mills per kWh by 10"
            />
            <FAQItem
              question="What is U.S. electricity generation by energy source?"
              answer="In 2023, about 4,178 billion kilowatthours (kWh) (or about 4.18 trillion kWh) of electricity were generated at utility-scale electricity generation facilities in the United States.1 About 60% of this electricity generation was from fossil fuels—coal, natural gas, petroleum, and other gases. About 19% was from nuclear energy, and about 21% was from renewable energy sources.

The U.S. Energy Information Administration estimates that an additional 73.62 billion kWh of electricity generation was from small-scale solar photovoltaic systems in 2023."
            />
            <FAQItem
              question="Does EIA have forecasts or projections for energy production, consumption, and prices for individual states?"
              answer="No, the U.S. Energy Information Administration (EIA) does not make forecasts or projections for individual states (with the exception of California). However, EIA does have forecasts and projections for different regions of the country.

In the monthly Short-Term Energy Outlook, there are forecasts

by census regions or divisions for:

Natural gas prices (by sector)
Electricity retail sales (by sector)
Electricity prices (by sector)
by electricity market regions and California for:

Net electricity generation by the electric power sector by energy source
by Petroleum Administration for Defense Districts (PADD) for:

Motor gasoline prices
In the Annual Energy Outlook 2023, there are supplemental tables with regional projections for:

Energy consumption by sector and source by census division—supplemental Tables 2 to 2.9
Energy prices by sector and source by census division—supplemental Tables 3 to 3.9
Electricity generation by sector and source, and sales and prices by sector by electricity market regions—supplemental Tables 54.1 to 54.25 
Renewable energy capacity, generation, and consumption by fuel and the electric power and end-use sectors by electricity market regions—supplemental Tables 56.1 to 56.25
Diesel fuel, motor gasoline, jet fuel, and residential heating oil prices and price components by census division—supplemental Tables 57.1 to 57.9
Crude oil and natural gas production and wellhead prices by supply regions in the Lower 48 states—supplemental Tables 58 and 59
Natural gas consumption and prices by end-use sector by census division—supplemental Tables 61 and 62
"
            />
            <h1 className="font-medium text-3xl text-teal-600 m-3">
              Oil/Petroleum
            </h1>
            <FAQItem
              question="Does the world have enough oil to meet our future needs?"
              answer="According to the U.S. Energy Information Administration’s (EIA) International Energy Outlook 2023 (IEO2023), the global supply of crude oil, other liquid hydrocarbons, and biofuels is expected to be adequate to meet the world's demand for liquid fuels through 2050. There is substantial uncertainty about the levels of future liquid fuels supply and demand. The IEO2023 projections reflect some of this uncertainty in a Reference case, High and Low Economic Growth cases, High and Low Oil Price cases, and High and Low-Zero Carbon Technology Growth cases in its projections. The oil resources currently in the earth's crust, in combination with expected production of other liquid fuels, are estimated to be sufficient to meet total world demand for liquid fuels in all cases of the IEO2023.

An often cited, but misleading, measurement of future resource availability is the reserves-to-production ratio, which is calculated by dividing the volume of total proved reserves by the volume of current annual consumption. Proved reserves are an accounting concept that is based on known projects, and it is not an appropriate measure for judging total resource availability in the long term. Over time, global reserves will likely increase as new technologies increase production at existing fields and as new projects are developed"
            />
            <FAQItem
              question="Does have data on the type or quality of crude oil?"
              answer="The U.S. Energy Information Administration (EIA) publishes data on the quality of crude oil produced in the United States:

Crude oil and lease condensate production by API gravity category in selected Lower 48 states and the Federal Gulf of Mexico and in Table 5 of the Monthly Crude Oil and Natural Gas Production Report
Average sulfur content and API gravity of all crude oil input to U.S. refineries by Petroleum Administration for Defense District (PADD) and refining district
EIA also publishes the sulfur content and API gravity of crude oil imported into the United States, along with the volume, source country, and name of the processing facility (refinery) that received the oil, in the data file for the Company Level Imports. Columns M and N in the data file have the sulfur and API gravity data. EIA’s crude (oil) imports tracking tool contains data on crude oil imports by crude oil grade"
            />
            <FAQItem
              question="Does have forecasts or projections for energy production, consumption, and prices for individual states?"
              answer="No, the U.S. Energy Information Administration (EIA) does not make forecasts or projections for individual states (with the exception of California). However, EIA does have forecasts and projections for different regions of the country.

In the monthly Short-Term Energy Outlook, there are forecasts

by census regions or divisions for:

Natural gas prices (by sector)
Electricity retail sales (by sector)
Electricity prices (by sector)
by electricity market regions and California for:

Net electricity generation by the electric power sector by energy source
by Petroleum Administration for Defense Districts (PADD) for:

Motor gasoline prices
In the Annual Energy Outlook 2023, there are supplemental tables with regional projections for:

Energy consumption by sector and source by census division—supplemental Tables 2 to 2.9
Energy prices by sector and source by census division—supplemental Tables 3 to 3.9
Electricity generation by sector and source, and sales and prices by sector by electricity market regions—supplemental Tables 54.1 to 54.25 
Renewable energy capacity, generation, and consumption by fuel and the electric power and end-use sectors by electricity market regions—supplemental Tables 56.1 to 56.25
Diesel fuel, motor gasoline, jet fuel, and residential heating oil prices and price components by census division—supplemental Tables 57.1 to 57.9
Crude oil and natural gas production and wellhead prices by supply regions in the Lower 48 states—supplemental Tables 58 and 59
Natural gas consumption and prices by end-use sector by census division—supplemental Tables 61 and 62"
            />
            <FAQItem
              question="What types and amounts of energy are produced in each state?"
              answer="You can access the most recent available data on the types and amounts of energy produced in each state as follows:

Coal, crude oil, natural gas, nuclear energy, biofuels (fuel ethanol and biodiesel), and wood and wood waste (for energy) annual production from 1960 to most recent year available in the State Energy Data System (SEDS). There are two options for finding the state-level production data for each state from the main SEDS page:
Scroll down the main SEDS page to find the link at lower left for 1960-20?? estimates (where ?? is the most recent year available), and on that page scroll down to find the Production section.
At the upper left of the main SEDS page, click on the Change State/Territory field, which is above the Overview, Data, and Analysis tabs. Select a state and on the resulting page and scroll over the Data tab. In the drop-down menu, select a data period under Energy Estimates (SEDS). Scroll down the resulting page and select the Production bar to access files with data on the types and amounts of energy produced.
Coal—weekly, quarterly, and annual
Crude oil—monthly and annual
Natural gas—monthly and annual
Natural gas plant liquids—monthly and annual
Electricity—generation by fuel/energy source:
Most recent available month and year-to-date (Chapter 1)
Historical monthly generation back to 2001 (Excel)
Annual data back to 1990 (Excel)
State Electricity Profiles (Annual data back to 1990. In each Profile, see Table 5. Electric power industry generation by primary energy source)
The location of coal mines, electric power plants, and oil and natural gas fields and wells in each state are available in an interactive map. See the short instructional video on how to use the interactive map."
            />
            <FAQItem
              question="When was the last refinery built in the United States?"
              answer="As of January 1, 2023, there were 129 operable petroleum refineries in the United States.

The newest refinery in the United States is the Texas International Terminals 45,000 b/cd refinery in Channelview, Texas, which started operating operating in February 2022.

However, the newest refinery with significant downstream unit capacity is Marathon's facility in Garyville, Louisiana. That facility came online in 1977 with an initial atmospheric distillation unit capacity of 200,000 b/cd, and as of January 1, 2023, it had a capacity of 596,000 b/cd.

Capacity has also been added to existing refineries through upgrades or new construction. Some recent examples of large increases include:

In 2012, Motiva upgraded its refinery in Port Arthur, Texas, making it the largest U.S. refinery, with a capacity of 626,000 b/cd as of January 1, 2023.
In 2015, Valero expanded its Corpus Christi, Texas refinery after previous expansions, bringing its capacity as of January 1, 2023, to 290,000 b/cd."
            />
            <FAQItem
              question="How many gallons of gasoline and diesel fuel are made from one barrel of oil?"
              answer="Petroleum refineries in the United States produce about 19 to 20 gallons of motor gasoline and 11 to 12 gallons of ultra-low sulfur distillate fuel oil (most of which is sold as diesel fuel and in several states as heating oil) from one 42-gallon barrel of crude oil. Many other petroleum products are also refined from crude oil. Refinery yields of individual products vary from month to month as refiners focus operations to meet demand for different products and as they work to maximize profits."
            />
          </div>
        </div>
      </div>
    </div>
  );
};
