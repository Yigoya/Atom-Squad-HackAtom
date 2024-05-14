import { VectorMap } from "@react-jvectormap/core";
import { worldMill } from "@react-jvectormap/world";
import React from "react";
import { colorScale, countries, missingCountries } from "./Countries";
import { ReactPhotoSphereViewer } from "react-photo-sphere-viewer";
import russia from "../assets/Images/russia.png";
import panoramatic from "../assets/Images/panoramatic.webp";
import panoramatic2 from "../assets/Images/panoramatic2.webp";
import panoramatic4 from "../assets/Images/panoramatic4.webp";
function WorldMap() {
  const alpha2ToAlpha3 = {
    AD: "AND",
    AE: "ARE",
    AF: "AFG",
    AG: "ATG",
    AI: "AIA",
    AL: "ALB",
    AM: "ARM",
    AO: "AGO",
    AQ: "ATA",
    AR: "ARG",
    AS: "ASM",
    AT: "AUT",
    AU: "AUS",
    AW: "ABW",
    AX: "ALA",
    AZ: "AZE",
    BA: "BIH",
    BB: "BRB",
    BD: "BGD",
    BE: "BEL",
    BF: "BFA",
    BG: "BGR",
    BH: "BHR",
    BI: "BDI",
    BJ: "BEN",
    BL: "BLM",
    BM: "BMU",
    BN: "BRN",
    BO: "BOL",
    BQ: "BES",
    BR: "BRA",
    BS: "BHS",
    BT: "BTN",
    BV: "BVT",
    BW: "BWA",
    BY: "BLR",
    BZ: "BLZ",
    CA: "CAN",
    CC: "CCK",
    CD: "COD",
    CF: "CAF",
    CG: "COG",
    CH: "CHE",
    CI: "CIV",
    CK: "COK",
    CL: "CHL",
    CM: "CMR",
    CN: "CHN",
    CO: "COL",
    CR: "CRI",
    CU: "CUB",
    CV: "CPV",
    CW: "CUW",
    CX: "CXR",
    CY: "CYP",
    CZ: "CZE",
    DE: "DEU",
    DJ: "DJI",
    DK: "DNK",
    DM: "DMA",
    DO: "DOM",
    DZ: "DZA",
    EC: "ECU",
    EE: "EST",
    EG: "EGY",
    EH: "ESH",
    ER: "ERI",
    ES: "ESP",
    ET: "ETH",
    FI: "FIN",
    FJ: "FJI",
    FK: "FLK",
    FM: "FSM",
    FO: "FRO",
    FR: "FRA",
    GA: "GAB",
    GB: "GBR",
    GD: "GRD",
    GE: "GEO",
    GF: "GUF",
    GG: "GGY",
    GH: "GHA",
    GI: "GIB",
    GL: "GRL",
    GM: "GMB",
    GN: "GIN",
    GP: "GLP",
    GQ: "GNQ",
    GR: "GRC",
    GS: "SGS",
    GT: "GTM",
    GU: "GUM",
    GW: "GNB",
    GY: "GUY",
    HK: "HKG",
    HM: "HMD",
    HN: "HND",
    HR: "HRV",
    HT: "HTI",
    HU: "HUN",
    ID: "IDN",
    IE: "IRL",
    IL: "ISR",
    IM: "IMN",
    IN: "IND",
    IO: "IOT",
    IQ: "IRQ",
    IR: "IRN",
    IS: "ISL",
    IT: "ITA",
    JE: "JEY",
    JM: "JAM",
    JO: "JOR",
    JP: "JPN",
    KE: "KEN",
    KG: "KGZ",
    KH: "KHM",
    KI: "KIR",
    KM: "COM",
    KN: "KNA",
    KP: "PRK",
    KR: "KOR",
    KW: "KWT",
    KY: "CYM",
    KZ: "KAZ",
    LA: "LAO",
    LB: "LBN",
    LC: "LCA",
    LI: "LIE",
    LK: "LKA",
    LR: "LBR",
    LS: "LSO",
    LT: "LTU",
    LU: "LUX",
    LV: "LVA",
    LY: "LBY",
    MA: "MAR",
    MC: "MCO",
    MD: "MDA",
    ME: "MNE",
    MF: "MAF",
    MG: "MDG",
    MH: "MHL",
    MK: "MKD",
    ML: "MLI",
    MM: "MMR",
    MN: "MNG",
    MO: "MAC",
    MP: "MNP",
    MQ: "MTQ",
    MR: "MRT",
    MS: "MSR",
    MT: "MLT",
    MU: "MUS",
    MV: "MDV",
    MW: "MWI",
    MX: "MEX",
    MY: "MYS",
    MZ: "MOZ",
    NA: "NAM",
    NC: "NCL",
    NE: "NER",
    NF: "NFK",
    NG: "NGA",
    NI: "NIC",
    NL: "NLD",
    NO: "NOR",
    NP: "NPL",
    NR: "NRU",
    NU: "NIU",
    NZ: "NZL",
    OM: "OMN",
    PA: "PAN",
    PE: "PER",
    PF: "PYF",
    PG: "PNG",
    PH: "PHL",
    PK: "PAK",
    PL: "POL",
    PM: "SPM",
    PN: "PCN",
    PR: "PRI",
    PS: "PSE",
    PT: "PRT",
    PW: "PLW",
    PY: "PRY",
    QA: "QAT",
    RE: "REU",
    RO: "ROU",
    RS: "SRB",
    RU: "RUS",
    RW: "RWA",
    SA: "SAU",
    SB: "SLB",
    SC: "SYC",
    SD: "SDN",
    SE: "SWE",
    SG: "SGP",
    SH: "SHN",
    SI: "SVN",
    SJ: "SJM",
    SK: "SVK",
    SL: "SLE",
    SM: "SMR",
    SN: "SEN",
    SO: "SOM",
    SR: "SUR",
    SS: "SSD",
    ST: "STP",
    SV: "SLV",
    SX: "SXM",
    SY: "SYR",
    SZ: "SWZ",
    TC: "TCA",
    TD: "TCD",
    TF: "ATF",
    TG: "TGO",
    TH: "THA",
    TJ: "TJK",
    TK: "TKL",
    TL: "TLS",
    TM: "TKM",
    TN: "TUN",
    TO: "TON",
    TR: "TUR",
    TT: "TTO",
    TV: "TUV",
    TW: "TWN",
    TZ: "TZA",
    UA: "UKR",
    UG: "UGA",
    UM: "UMI",
    US: "USA",
    UY: "URY",
    UZ: "UZB",
    VA: "VAT",
    VC: "VCT",
    VE: "VEN",
    VG: "VGB",
    VI: "VIR",
    VN: "VNM",
    VU: "VUT",
    WF: "WLF",
    WS: "WSM",
    YE: "YEM",
    YT: "MYT",
    ZA: "ZAF",
    ZM: "ZMB",
    ZW: "ZWE",
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
      className="height-screen"
    >
      <h1 style={{ margin: "10px", fontWeight: "bold", fontSize: "14px" }}>
        Nuclear Usage of Countries For the Last 20 Years
      </h1>
      <div
        style={{
          margin: "auto",
          width: "600px",
          height: "300px",
          borderRadius: "20px",
        }}
      >
        <VectorMap
          onRegionClick={(event, code) => {
            window.open(
              `https://www.eia.gov/international/overview/country/${alpha2ToAlpha3[code]}`,
              "_blank"
            );
            console.log(code);
          }}
          map={worldMill}
          containerStyle={{
            width: "600px",
            height: "300px",
          }}
          backgroundColor="#282c34"
          // markers={missingCountries}
          markerStyle={{
            initial: {
              fill: "red",
            },
          }}
          series={{
            regions: [
              {
                scale: colorScale,
                values: countries,
                min: 0,
                max: 100,
              },
            ],
          }}
          onRegionTipShow={function reginalTip(event, label, code) {
            return label.html(`
                  <div style="background-color: black; border-radius: 6px; min-height: 50px; width: 125px; color: white"; padding-left: 10px>
                    <p>
                    <b>
                    ${label.html()}
                    </b>
                    </p>
                    <p>
                    ${countries[code] ?? 0} quadrillion BTU
                    </p>
                    </div>`);
          }}
          onMarkerTipShow={function markerTip(event, label, code) {
            return label.html(`
                  <div style="background-color: white; border-radius: 6px; min-height: 50px; width: 125px; color: black !important; padding-left: 10px>
                    <p style="color: black !important;">
                    <b>
                    ${label.html()}
                    </b>
                    </p>
                    </div>`);
          }}
        />
        <div>
          <img src={russia} alt="" />
          <a
            style={{ textAlign: "right", width: "100%" }}
            href="https://www.eia.gov/international/overview/country/RUS"
          >
            https://www.eia.gov/international/overview/country/RUS
          </a>
        </div>
        <div className="my-12">
          <h1 className="text-3xl font-bold">Let us travel for a virtual visit...</h1>
        </div>
        <div
          id="pano"
          style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
        >
          <div style={{ borderRadius: "20px" }}>
            <ReactPhotoSphereViewer
              src={panoramatic}
              height={"40vh"}
              width={"100%"}
            ></ReactPhotoSphereViewer>
            <em>Nuclear Power Plant</em>
          </div>
          <div style={{}}>
            <ReactPhotoSphereViewer
              src={panoramatic2}
              height={"40vh"}
              width={"100%"}
            ></ReactPhotoSphereViewer>
            <em>Nuclear Power Plant controller unit</em>
          </div>
          <div style={{}}>
            <ReactPhotoSphereViewer
              src={panoramatic4}
              height={"40vh"}
              width={"100%"}
            ></ReactPhotoSphereViewer>
            <em>Nuclear Power Plant controller unit</em>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorldMap;
