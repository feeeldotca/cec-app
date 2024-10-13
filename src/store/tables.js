export const tables = {
    table2: {
        degree: [
            {
                temp: "60c",
                amps: ["15", "20", "30", "40", "55", "70", "85", "95", "110", "125", "145", "165", "195", "215", "240", "260", "280", "320", "350", "385", "400", "410", "435", "455", "495", "525", "545", "555"]
            },
            {
                temp: "75c",
                amps: ["20", "25", "35", "50", "65", "85", "100", "115", "130", "150", "175", "200", "230", "255", "285", "310", "335", "380", "420", "460", "475", "490", "520", "545", "590", "625", "650", "665"]
            },

            {
                temp: "90c",
                amps: ["25", "30", "40", "55", "75", "95", "115", "130", "145", "170", "195", "225", "260", "290", "320", "350", "380", "430", "475", "520", "535", "555", "585", "615", "665", "705", "735", "750"]
            },
            {
                temp: "110c",
                amps: ["25", "30", "45", "65", "80", "105", "125", "145", "165", "190", "220", "255", "290", "320", "360", "390", "425", "480", "530", "580", "600", "620", "655", "690", "745", "790", "820", "840"]
            },
            {
                temp: "125c",
                amps: ["30", "35", "45", "65", "90", "115", "135", "155", "175", "200", "235", "270", "310", "345", "385", "420", "450", "510", "565", "620", "640", "660", "700", "735", "—", "—", "—", "—"]
            },
            {
                temp: "200c",
                amps: ["35", "40", "60", "80", "110", "140", "165", "190", "215", "245", "290", "330", "380", "—", "—", "—", "—", "—", "—", "—", "—", "—", "—", "—", "—", "—", "—", "—"]
            }
        ],
        wireSize: ["14", "12", "10", "8", "6", "4", "3", "2", "1", "0", "00", "000", "0000", "250", "300", "350", "400", "500", "600", "700", "750", "800", "900", "1000", "1250", "1500", "1750", "2000"]
    },
    table4: {
        wireSize: ["12", "10", "8", "6", "4", "3", "2", "1", "0", "00", "000", "0000", "250", "300", "350", "400", "500", "600", "700", "750", "800", "900", "1000", "1250", "1500", "1750", "2000"],
        degree: [
            {
                temp: "60c",
                amps: ["15", "25", "35", "40", "55", "65", "75", "85", "100", "115", "130", "150", "170", "195", "210", "225", "260", "285", "315", "320", "330", "355", "375", "405", "435", "455", "470"]
            },
            {
                temp: "75c",
                amps: ["20", "30", "40", "50", "65", "75", "90", "100", "120", "135", "155", "180", "205", "230", "250", "270", "310", "340", "375", "385", "395", "425", "445", "485", "520", "545", "560"]
            },
            {
                temp: "90c",
                amps: ["25", "35", "45", "55", "75", "85", "100", "115", "135", "150", "175", "205", "230", "260", "280", "305", "350", "385", "425", "435", "445", "480", "500", "545", "585", "615", "630"]
            },
            {
                temp: "110c",
                amps: ["25", "40", "50", "65", "80", "95", "115", "125", "150", "170", "195", "225", "260", "290", "315", "340", "390", "430", "475", "485", "500", "535", "560", "615", "655", "690", "710"]
            },
            {
                temp: "125c",
                amps: ["25", "40", "55", "70", "90", "100", "120", "135", "160", "180", "210", "245", "275", "310", "335", "365", "420", "460", "505", "520", "535", "575", "600", "—", "—", "—", "—"]
            },
            {
                temp: "200c",
                amps: ["35", "50", "65", "80", "105", "125", "150", "165", "195", "220", "255", "295", "—", "—", "—", "—", "—", "—", "—", "—", "—", "—", "—", "—", "—", "—", "—"]
            }
        ]
    },
    table5a: [
        {
            ambientTemperature: 35,
            correctionFactors: {
                "60": 0.91,
                "75": 0.94,
                "90": 0.96,
                "105": 0.97,
                "110": 0.97,
                "125": 0.97,
                "150": 0.98,
                "200": 0.99,
                "250": 0.99
            }
        },
        {
            ambientTemperature: 40,
            correctionFactors: {
                "60c": 0.82,
                "75c": 0.88,
                "90c": 0.91,
                "105c": 0.93,
                "110c": 0.94,
                "125c": 0.95,
                "150c": 0.96,
                "200c": 0.97,
                "250c": 0.98
            }
        },
        {
            ambientTemperature: 45,
            correctionFactors: {
                "60": 0.71,
                "75": 0.82,
                "90": 0.87,
                "105": 0.89,
                "110": 0.90,
                "125": 0.92,
                "150": 0.94,
                "200": 0.95,
                "250": 0.97
            }
        },
        {
            ambientTemperature: 50,
            correctionFactors: {
                "60": 0.58,
                "75": 0.75,
                "90": 0.82,
                "105": 0.86,
                "110": 0.87,
                "125": 0.89,
                "150": 0.91,
                "200": 0.94,
                "250": 0.95
            }
        },
        {
            ambientTemperature: 55,
            correctionFactors: {
                "60": 0.41,
                "75": 0.67,
                "90": 0.76,
                "105": 0.82,
                "110": 0.83,
                "125": 0.86,
                "150": 0.89,
                "200": 0.92,
                "250": 0.94
            }
        },
        {
            ambientTemperature: 60,
            correctionFactors: {
                "60": null,
                "75": 0.58,
                "90": 0.71,
                "105": 0.77,
                "110": 0.79,
                "125": 0.83,
                "150": 0.87,
                "200": 0.91,
                "250": 0.93
            }
        },
        {
            ambientTemperature: 65,
            correctionFactors: {
                "60": null,
                "75": 0.47,
                "90": 0.65,
                "105": 0.73,
                "110": 0.75,
                "125": 0.79,
                "150": 0.84,
                "200": 0.89,
                "250": 0.92
            }
        },
        {
            ambientTemperature: 70,
            correctionFactors: {
                "60": null,
                "75": 0.33,
                "90": 0.58,
                "105": 0.68,
                "110": 0.71,
                "125": 0.76,
                "150": 0.82,
                "200": 0.87,
                "250": 0.90
            }
        },
        {
            ambientTemperature: 75,
            correctionFactors: {
                "60": null,
                "75": null,
                "90": 0.50,
                "105": 0.63,
                "110": 0.66,
                "125": 0.73,
                "150": 0.79,
                "200": 0.86,
                "250": 0.89
            }
        },
        {
            ambientTemperature: 80,
            correctionFactors: {
                "60": null,
                "75": null,
                "90": 0.41,
                "105": 0.58,
                "110": 0.61,
                "125": 0.69,
                "150": 0.76,
                "200": 0.84,
                "250": 0.88
            }
        },
        {
            ambientTemperature: 90,
            correctionFactors: {
                "60": null,
                "75": null,
                "90": null,
                "105": 0.45,
                "110": 0.50,
                "125": 0.61,
                "150": 0.71,
                "200": 0.80,
                "250": 0.85
            }
        },
        {
            ambientTemperature: 100,
            correctionFactors: {
                "60": null,
                "75": null,
                "90": null,
                "105": 0.26,
                "110": 0.35,
                "125": 0.51,
                "150": 0.65,
                "200": 0.77,
                "250": 0.83
            }
        },
        {
            ambientTemperature: 110,
            correctionFactors: {
                "60": null,
                "75": null,
                "90": null,
                "105": null,
                "110": null,
                "125": 0.40,
                "150": 0.58,
                "200": 0.73,
                "250": 0.80
            }
        },
        {
            ambientTemperature: 120,
            correctionFactors: {
                "60": null,
                "75": null,
                "90": null,
                "105": null,
                "110": null,
                "125": 0.23,
                "150": 0.50,
                "200": 0.69,
                "250": 0.77
            }
        },
        {
            ambientTemperature: 130,
            correctionFactors: {
                "60": null,
                "75": null,
                "90": null,
                "105": null,
                "110": null,
                "125": null,
                "150": 0.41,
                "200": 0.64,
                "250": 0.74
            }
        },
        {
            ambientTemperature: 140,
            correctionFactors: {
                "60": null,
                "75": null,
                "90": null,
                "105": null,
                "110": null,
                "125": null,
                "150": 0.29,
                "200": 0.59,
                "250": 0.71
            }
        }
    ],
    table5b: [
        {
            numberOfConductors: 2,
            correctionFactor: 0.90
        },
        {
            numberOfConductors: 3,
            correctionFactor: 0.85
        },
        {
            numberOfConductors: 4,
            correctionFactor: 0.80
        }
    ],
    table5c: [
        {
            minConductors: 1,
            maxConductors: 3,
            correctionFactor: 1.00
        },
        {
            minConductors: 4,
            maxConductors: 6,
            correctionFactor: 0.80
        },
        {
            minConductors: 7,
            maxConductors: 24,
            correctionFactor: 0.70
        },
        {
            minConductors: 25,
            maxConductors: 42,
            correctionFactor: 0.60
        },
        {
            minConductors: 43,
            maxConductors: Infinity,
            correctionFactor: 0.50
        }
    ],
    table5d: [
        {
            numberOfConductorsHorizontally: 1,
            numberOfConductorsVertically: 1,
            correctionFactor: 1.00
        },
        {
            numberOfConductorsHorizontally: 2,
            numberOfConductorsVertically: 1,
            correctionFactor: 0.93
        },
        {
            numberOfConductorsHorizontally: 3,
            numberOfConductorsVertically: 1,
            correctionFactor: 0.87
        },
        {
            numberOfConductorsHorizontally: 4,
            numberOfConductorsVertically: 1,
            correctionFactor: 0.84
        },
        {
            numberOfConductorsHorizontally: 5,
            numberOfConductorsVertically: 1,
            correctionFactor: 0.83
        },
        {
            numberOfConductorsHorizontally: 6,
            numberOfConductorsVertically: 1,
            correctionFactor: 0.82
        },
        {
            numberOfConductorsHorizontally: 1,
            numberOfConductorsVertically: 2,
            correctionFactor: 0.89
        },
        {
            numberOfConductorsHorizontally: 2,
            numberOfConductorsVertically: 2,
            correctionFactor: 0.83
        },
        {
            numberOfConductorsHorizontally: 3,
            numberOfConductorsVertically: 2,
            correctionFactor: 0.79
        },
        {
            numberOfConductorsHorizontally: 4,
            numberOfConductorsVertically: 2,
            correctionFactor: 0.76
        },
        {
            numberOfConductorsHorizontally: 5,
            numberOfConductorsVertically: 2,
            correctionFactor: 0.75
        },
        {
            numberOfConductorsHorizontally: 6,
            numberOfConductorsVertically: 2,
            correctionFactor: 0.74
        }
    ],
    table39: {
        ov_rating_amp: [60, 100, 125, 200, 225, 400],
        copper_loads_amp: [60, 89, 121, 184, 210, 352],
        copper_conductor_size: [6, 4, 2, "2/0", "3/0", 400],
        al_loads_amp: [53, 95, 125, 189, 215, 357],
        al_conductor_size: [6, 2, "0", "0000", "250", "600"]
    },
    table40: {
        description: "External tapered threads for rigid metal conduit<br> (See Rule 12-1006.)",
        cols: 4,
        col1_title: "Trade size of conduit",
        col2_title: "Number of threads per 25.4 mm",
        col3_title: "Length of thread, Minimum, mm",
        col4_title: "Length of thread, Maximum, mm",
        trade_size: ["16", "21", "27", "35", "41", "53", "63", "78", "91", "103", "129", "155"],
        threads_per_inch: [14, 14, 11.5, 11.5, 11.5, 11.5, 8, 8, 8, 8, 8, 8],
        thread_length: [
            [16.3, 16.5, 20.6, 21.3, 21.8, 22.6, 33.5, 34.5, 36.3, 37.6, 40.4, 43.2],
            [19.8, 20.1, 24.9, 25.7, 26.2, 26.9, 39.9, 41.4, 42.7, 43.9, 46.7, 49.5]
        ]
    },
    table41: {
        description: "Minimum size of bonding jumper for service raceways <br>(See Rules 10-614 and70-126.)",
        cols: 3,
        col1_title: "Ampacity of largest service conductor or equivalent for multiple conductors, A",
        col2_title: "Size of bonding jumper: Copper wire, AWG",
        col3_title: "Size of bonding jumper: Aluminum wire, AWG",
        conductor_amp: [100, 200, 400, 600, 800, 1000, 1200],
        bonding_jumper_size_copper: [8, 6, 4, 2, "0", "00", "000"],
        bonding_jumper_size_aluminum: [6, 4, 2, "0", "00", "000", "0000"]
    },
    // Table D3: 
    // Current: The current property represents the current in amperes.
    // Distances: The distances property is an object where the keys are the wire sizes (AWG) 
    // and the values are the distances in meters for a 1% voltage drop.
    // Distance to centre of distribution measured along the insulated conductor run, m
    // (calculated for conductor insulation temperature of 60 °C)
    tableD3: [
        { current: 1.00, distances: { "18": 24.2, "16": 38.5, "14": 61.4 } },
        { current: 1.25, distances: { "18": 19.4, "16": 30.8, "14": 49.1 } },
        { current: 1.6, distances: { "18": 15.1, "16": 24.1, "14": 38.4, "12": 61.0 } },
        { current: 2.0, distances: { "18": 12.1, "16": 19.3, "14": 30.7, "12": 48.8 } },
        { current: 2.5, distances: { "18": 9.7, "16": 15.4, "14": 24.6, "12": 39.0, "10": 62.0 } },
        { current: 3.2, distances: { "18": 7.6, "16": 12.0, "14": 19.2, "12": 30.5, "10": 48.5 } },
        { current: 4.0, distances: { "18": 6.1, "16": 9.6, "14": 15.3, "12": 24.4, "10": 38.8, "8": 61.7 } },
        { current: 5.0, distances: { "18": 4.8, "16": 7.7, "14": 12.3, "12": 19.5, "10": 31.0, "8": 49.3 } },
        { current: 6.3, distances: { "18": 3.8, "16": 6.1, "14": 9.7, "12": 15.5, "10": 24.6, "8": 39.1, "6": 62.2 } },
        { current: 8.0, distances: { "18": 3.0, "16": 4.8, "14": 7.7, "12": 12.2, "10": 19.4, "8": 30.8, "6": 49.0 } },
        { current: 10.0, distances: { "18": 2.4, "16": 3.9, "14": 6.1, "12": 9.8, "10": 15.5, "8": 24.7, "6": 39.2, "4": 62.4 } },
        { current: 12.5, distances: { "16": 3.1, "14": 4.9, "12": 7.8, "10": 12.4, "8": 19.7, "6": 31.4, "4": 49.9, "3": 62.9 } },
        { current: 16, distances: { "16": 2.4, "14": 3.8, "12": 6.1, "10": 9.7, "8": 15.4, "6": 24.5, "4": 39.0, "3": 49.1, "2": 62.0 } },
        { current: 20, distances: { "14": 3.1, "12": 4.9, "10": 7.8, "8": 12.3, "6": 19.6, "4": 31.2, "3": 39.3, "2": 49.6, "1": 62.5 } },
        { current: 25, distances: { "12": 3.9, "10": 6.2, "8": 9.9, "6": 15.7, "4": 24.9, "3": 31.4, "2": 39.7, "1": 50.0, "1/0": 63.1 } },
        { current: 32, distances: { "10": 4.8, "8": 7.7, "6": 12.2, "4": 19.6, "3": 24.6, "2": 31.0, "1": 39.1, "1/0": 49.3, "2/0": 62.1 } },
        { current: 40, distances: { "10": 3.9, "8": 6.2, "6": 9.8, "4": 15.6, "3": 19.7, "2": 24.8, "1": 31.3, "1/0": 39.4, "2/0": 49.7, "3/0": 62.7 } },
        { current: 50, distances: { "8": 4.9, "6": 7.8, "4": 12.5, "3": 15.7, "2": 19.8, "1": 25.0, "1/0": 31.5, "2/0": 39.8, "3/0": 50.1, "4/0": 63.2 } },
        { current: 63, distances: { "8": 3.9, "6": 6.2, "4": 9.9, "3": 12.5, "2": 15.7, "1": 19.8, "1/0": 25.0, "2/0": 31.6, "3/0": 39.8, "4/0": 50.2 } },
        { current: 80, distances: { "8": 3.1, "6": 4.9, "4": 7.8, "3": 9.8, "2": 12.4, "1": 15.6, "1/0": 19.7, "2/0": 24.8, "3/0": 31.3 } },
        { current: 100, distances: { "6": 3.9, "4": 6.2, "3": 7.9, "2": 9.9, "1": 12.5, "1/0": 15.8, "2/0": 19.9, "3/0": 25.1, "4/0": 31.6 } },
        { current: 125, distances: { "4": 5.0, "3": 6.3, "2": 7.9, "1": 10.0, "1/0": 12.6, "2/0": 15.9, "3/0": 20.1, "4/0": 25.3 } },
        { current: 160, distances: { "3": 4.9, "2": 6.2, "1": 7.8, "1/0": 9.9, "2/0": 12.4, "3/0": 15.7, "4/0": 19.8 } },
        { current: 200, distances: { "2": 5.0, "1": 6.3, "1/0": 7.9, "2/0": 9.9, "3/0": 12.5, "4/0": 15.8 } },
        { current: 250, distances: { "1/0": 6.3, "2/0": 8.0, "3/0": 10.0, "4/0": 12.6 } },
        { current: 320, distances: { "2/0": 6.2, "3/0": 7.8, "4/0": 9.9 } }
    ],
    tableD3b: [
        {
            insulationTemperature: "60c",
            correctionFactors: {
                "100%": 1.00,
                "90%": 1.02,
                "80%": 1.04,
                "70%": 1.06,
                "60%": 1.07,
                "50%": 1.09,
                "40%": 1.10
            }
        },
        {
            insulationTemperature: "75c",
            correctionFactors: {
                "100%": 0.96,
                "90%": 1.00,
                "80%": 1.00,
                "70%": 1.03,
                "60%": 1.06,
                "50%": 1.07,
                "40%": 1.09
            }
        },
        {
            insulationTemperature: "85–90°C",
            correctionFactors: {
                "100%": 0.91,
                "90%": 0.95,
                "80%": 1.00,
                "70%": 1.00,
                "60%": 1.04,
                "50%": 1.06,
                "40%": 1.08
            }
        },
        {
            insulationTemperature: "110c",
            correctionFactors: {
                "100%": 0.85,
                "90%": 0.90,
                "80%": 0.95,
                "70%": 1.00,
                "60%": 1.02,
                "50%": 1.05,
                "40%": 1.07
            }
        },
        {
            insulationTemperature: "125c",
            correctionFactors: {
                "100%": 0.82,
                "90%": 0.87,
                "80%": 0.92,
                "70%": 0.97,
                "60%": 1.00,
                "50%": 1.04,
                "40%": 1.07
            }
        },
        {
            insulationTemperature: "200c",
            correctionFactors: {
                "100%": 0.68,
                "90%": 0.76,
                "80%": 0.83,
                "70%": 0.90,
                "60%": 0.96,
                "50%": 1.00,
                "40%": 1.04
            }
        }
    ],
    table6: {
        wireTypes: {
            table6A: [
                "R90XLPE_UNJACKETED_600V",
                "RW75XLPE_UNJACKETED_600V",
                "RW90XLPE_UNJACKETED_600V"
            ],
            table6B: [
                "R90XLPE_UNJACKETED_1000V",
                "RW75XLPE_UNJACKETED_1000V",
                "RW90XLPE_UNJACKETED_1000V"
            ],
            table6C: [
                "R90XLPE_JACKETED_600V",
                "RW75XLPE_JACKETED_600V",
                "R90EP_JACKETED_600V",
                "RW75EP_JACKETED_600V",
                "RW90XLPE_JACKETED_600V",
                "RW90EP_JACKETED_600V"
            ],
            table6D: [
                "TWU_UNJACKETED",
                "TWU75_UNJACKETED",
                "RWU90XLPE_UNJACKETED"
            ],
            table6E: [
                "RPVU90_UNJACKETED_1000V",
                "RPVU90_UNJACKETED_2000V"
            ],
            table6F: [
                "RPVU90_JACKETED_1000V",
                "RPVU90_JACKETED_2000V"
            ],
            table6G: "RPV90_UNJACKETED_2000V",
            table6H: "RPV90_JACKETED_1000V",
            table6I: "RPV90_JACKETED_2000V",
            table6J: ["TW", "TW75"],
            table6K: ["TWN75", "T90_NYLON"]
        },
        wireSpecs: {
            table6A: {
                strandedConductors: {
                    "14": { diameter: 3.36 },
                    "12": { diameter: 3.84 },
                    "10": { diameter: 4.47 },
                    "8": { diameter: 5.99 },
                    "6": { diameter: 6.95 },
                    "4": { diameter: 8.17 },
                    "3": { diameter: 8.88 },
                    "2": { diameter: 9.70 },
                    "1": { diameter: 11.23 },
                    "1/0": { diameter: 12.27 },
                    "2/0": { diameter: 13.44 },
                    "3/0": { diameter: 14.74 },
                    "4/0": { diameter: 16.21 },
                    "250": { diameter: 17.90 },
                    "300": { diameter: 19.30 },
                    "350": { diameter: 20.53 },
                    "400": { diameter: 21.79 },
                    "450": { diameter: 22.91 },
                    "500": { diameter: 23.95 },
                    "600": { diameter: 26.74 },
                    "700": { diameter: 28.55 },
                    "750": { diameter: 29.41 },
                    "800": { diameter: 30.25 },
                    "900": { diameter: 31.85 },
                    "1000": { diameter: 33.32 },
                    "1250": { diameter: 37.56 },
                    "1500": { diameter: 40.68 },
                    "1750": { diameter: 43.58 },
                    "2000": { diameter: 46.27 }
                },
                solidConductors: {
                    "14": { diameter: 3.15 },
                    "12": { diameter: 3.57 },
                    "10": { diameter: 4.11 }
                }
            },
            table6B: {
                strandedConductors: {
                    "14": { diameter: 4.12 },
                    "12": { diameter: 4.6 },
                    "10": { diameter: 5.23 },
                    "8": { diameter: 5.99 },
                    "6": { diameter: 7.71 },
                    "4": { diameter: 8.93 },
                    "3": { diameter: 9.64 },
                    "2": { diameter: 10.46 },
                    "1": { diameter: 12.49 },
                    "1/0": { diameter: 13.53 },
                    "2/0": { diameter: 14.7 },
                    "3/0": { diameter: 16.0 },
                    "4/0": { diameter: 17.47 },
                    "250": { diameter: 19.17 },
                    "300": { diameter: 20.56 },
                    "350": { diameter: 21.79 },
                    "400": { diameter: 23.05 },
                    "450": { diameter: 24.17 },
                    "500": { diameter: 25.21 },
                    "600": { diameter: 27.24 },
                    "700": { diameter: 29.05 },
                    "750": { diameter: 29.91 },
                    "800": { diameter: 30.75 },
                    "900": { diameter: 32.35 },
                    "1000": { diameter: 33.82 },
                    "1250": { diameter: 38.32 },
                    "1500": { diameter: 41.44 },
                    "1750": { diameter: 44.34 },
                    "2000": { diameter: 47.03 }
                },
                solidConductors: {
                    "14": { diameter: 3.91 },
                    "12": { diameter: 4.33 },
                    "10": { diameter: 4.87 }
                }
            },
            table6C: {
                strandedConductors: {
                    "14": { diameter: 4.12 },
                    "12": { diameter: 4.6 },
                    "10": { diameter: 5.23 },
                    "8": { diameter: 6.75 },
                    "6": { diameter: 8.47 },
                    "4": { diameter: 9.69 },
                    "3": { diameter: 10.4 },
                    "2": { diameter: 11.22 },
                    "1": { diameter: 13.51 },
                    "1/0": { diameter: 14.55 },
                    "2/0": { diameter: 15.72 },
                    "3/0": { diameter: 17.02 },
                    "4/0": { diameter: 18.49 },
                    "250": { diameter: 21.21 },
                    "300": { diameter: 22.6 },
                    "350": { diameter: 23.83 },
                    "400": { diameter: 25.09 },
                    "450": { diameter: 26.21 },
                    "500": { diameter: 27.25 },
                    "600": { diameter: 30.04 },
                    "700": { diameter: 31.85 },
                    "750": { diameter: 32.71 },
                    "800": { diameter: 33.55 },
                    "900": { diameter: 35.15 },
                    "1000": { diameter: 36.62 },
                    "1250": { diameter: 42.38 },
                    "1500": { diameter: 45.5 },
                    "1750": { diameter: 48.4 },
                    "2000": { diameter: 51.09 }
                },
                solidConductors: {
                    "14": { diameter: 3.91 },
                    "12": { diameter: 4.33 },
                    "10": { diameter: 4.87 }
                }
            },
            table6D: {
                "14": { diameter: 4.88 },
                "12": { diameter: 5.36 },
                "10": { diameter: 5.97 },
                "8": { diameter: 7.76 },
                "6": { diameter: 8.72 },
                "4": { diameter: 9.95 },
                "3": { diameter: 10.67 },
                "2": { diameter: 11.48 },
                "1": { diameter: 13.25 },
                "1/0": { diameter: 14.28 },
                "2/0": { diameter: 15.45 },
                "3/0": { diameter: 16.76 },
                "4/0": { diameter: 18.28 },
                "250": { diameter: 20.2 },
                "300": { diameter: 21.54 },
                "350": { diameter: 22.81 },
                "400": { diameter: 24.07 },
                "450": { diameter: 25.19 },
                "500": { diameter: 26.24 },
                "600": { diameter: 29.02 },
                "700": { diameter: 30.82 },
                "750": { diameter: 31.69 },
                "800": { diameter: 32.53 },
                "900": { diameter: 34.13 },
                "1000": { diameter: 35.6 },
                "1250": { diameter: 39.08 },
                "1500": { diameter: 42.96 },
                "1750": { diameter: 45.86 },
                "2000": { diameter: 48.55 }
            },
            solidConductors: {
                "14": { diameter: 4.67 },
                "12": { diameter: 5.09 },
                "10": { diameter: 5.63 }
            }
        },

        table6E: {
            strandedConductors: {
                "14": { diameter: 4.89 },
                "12": { diameter: 5.36 },
                "10": { diameter: 5.99 },
                "8": { diameter: 7.77 },
                "6": { diameter: 8.73 },
                "4": { diameter: 9.95 },
                "3": { diameter: 10.66 },
                "2": { diameter: 11.48 },
                "1": { diameter: 13.25 },
                "1/0": { diameter: 14.27 },
                "2/0": { diameter: 15.44 },
                "3/0": { diameter: 16.76 },
                "4/0": { diameter: 18.23 },
                "250": { diameter: 20.18 },
                "300": { diameter: 21.58 },
                "350": { diameter: 22.88 },
                "400": { diameter: 24.07 },
                "450": { diameter: 25.19 },
                "500": { diameter: 26.23 },
                "600": { diameter: 29.04 },
                "700": { diameter: 30.85 },
                "750": { diameter: 31.71 },
                "800": { diameter: 32.52 },
                "900": { diameter: 34.15 },
                "1000": { diameter: 35.62 },
                "1250": { diameter: 39.86 },
                "1500": { diameter: 42.98 },
                "1750": { diameter: 45.88 },
                "2000": { diameter: 48.57 }
            }
        },
        table6F: {
            strandedConductors: {
                "14": { diameter: 5.65 },
                "12": { diameter: 6.12 },
                "10": { diameter: 6.75 },
                "8": { diameter: 9.29 },
                "6": { diameter: 10.25 },
                "4": { diameter: 11.47 },
                "3": { diameter: 12.18 },
                "2": { diameter: 13.76 },
                "1": { diameter: 15.53 },
                "1/0": { diameter: 16.55 },
                "2/0": { diameter: 17.72 },
                "3/0": { diameter: 19.04 },
                "4/0": { diameter: 21.53 },
                "250": { diameter: 23.48 },
                "300": { diameter: 24.88 },
                "350": { diameter: 26.18 },
                "400": { diameter: 27.37 },
                "450": { diameter: 28.49 },
                "500": { diameter: 29.53 },
                "600": { diameter: 32.34 },
                "700": { diameter: 34.15 },
                "750": { diameter: 35.01 },
                "800": { diameter: 35.82 },
                "900": { diameter: 37.45 },
                "1000": { diameter: 38.92 },
                "1250": { diameter: 44.68 },
                "1500": { diameter: 47.8 },
                "1750": { diameter: 50.7 },
                "2000": { diameter: 53.39 }
            }
        },
        table6G: {
            strandedConductors: {
                "14": { diameter: 4.89 },
                "12": { diameter: 5.36 },
                "10": { diameter: 5.99 },
                "8": { diameter: 7.27 },
                "6": { diameter: 8.23 },
                "4": { diameter: 9.45 },
                "3": { diameter: 10.16 },
                "2": { diameter: 10.98 },
                "1": { diameter: 13.01 },
                "1/0": { diameter: 14.03 },
                "2/0": { diameter: 15.2 },
                "3/0": { diameter: 16.52 },
                "4/0": { diameter: 17.99 },
                "250": { diameter: 19.94 },
                "300": { diameter: 21.34 },
                "350": { diameter: 22.64 },
                "400": { diameter: 23.83 },
                "450": { diameter: 24.95 },
                "500": { diameter: 25.99 },
                "600": { diameter: 28.78 },
                "700": { diameter: 30.59 },
                "750": { diameter: 31.45 },
                "800": { diameter: 32.26 },
                "900": { diameter: 33.89 },
                "1000": { diameter: 35.36 },
                "1250": { diameter: 39.86 },
                "1500": { diameter: 42.98 },
                "1750": { diameter: 45.88 },
                "2000": { diameter: 48.57 }
            }
        },
        table6H: {
            strandedConductors: {
                "14": { diameter: 4.89 },
                "12": { diameter: 5.36 },
                "10": { diameter: 5.99 },
                "8": { diameter: 7.51 },
                "6": { diameter: 9.23 },
                "4": { diameter: 10.45 },
                "3": { diameter: 11.16 },
                "2": { diameter: 11.98 },
                "1": { diameter: 14.77 },
                "1/0": { diameter: 15.79 },
                "2/0": { diameter: 16.96 },
                "3/0": { diameter: 18.28 },
                "4/0": { diameter: 19.75 },
                "250": { diameter: 22.46 },
                "300": { diameter: 23.86 },
                "350": { diameter: 25.16 },
                "400": { diameter: 26.35 },
                "450": { diameter: 27.47 },
                "500": { diameter: 28.51 },
                "600": { diameter: 30.54 },
                "700": { diameter: 32.35 },
                "750": { diameter: 33.21 },
                "800": { diameter: 34.02 },
                "900": { diameter: 35.65 },
                "1000": { diameter: 37.12 },
                "1250": { diameter: 43.14 },
                "1500": { diameter: 46.26 },
                "1750": { diameter: 49.16 },
                "2000": { diameter: 51.85 }
            }
        },
        table6I: {
            strandedConductors: {
                "14": { diameter: 5.65 },
                "12": { diameter: 6.12 },
                "10": { diameter: 7.51 },
                "8": { diameter: 8.79 },
                "6": { diameter: 9.75 },
                "4": { diameter: 10.97 },
                "3": { diameter: 11.68 },
                "2": { diameter: 13.26 },
                "1": { diameter: 15.29 },
                "1/0": { diameter: 16.31 },
                "2/0": { diameter: 17.48 },
                "3/0": { diameter: 18.8 },
                "4/0": { diameter: 21.29 },
                "250": { diameter: 23.24 },
                "300": { diameter: 24.64 },
                "350": { diameter: 25.94 },
                "400": { diameter: 27.13 },
                "450": { diameter: 28.25 },
                "500": { diameter: 29.29 },
                "600": { diameter: 32.08 },
                "700": { diameter: 33.89 },
                "750": { diameter: 34.75 },
                "800": { diameter: 35.56 },
                "900": { diameter: 37.19 },
                "1000": { diameter: 38.66 },
                "1250": { diameter: 44.68 },
                "1500": { diameter: 47.8 },
                "1750": { diameter: 50.7 },
                "2000": { diameter: 53.39 }
            }
        },
        table6J: {
            strandedConductors: {
                "14": { diameter: 3.36 },
                "12": { diameter: 3.84 },
                "10": { diameter: 4.47 },
                "8": { diameter: 5.99 },
                "6": { diameter: 7.71 },
                "4": { diameter: 8.93 },
                "3": { diameter: 9.64 },
                "2": { diameter: 10.46 },
                "1": { diameter: 12.49 },
                "1/0": { diameter: 13.53 },
                "2/0": { diameter: 14.7 },
                "3/0": { diameter: 16.0 },
                "4/0": { diameter: 17.47 },
                "250": { diameter: 19.43 },
                "300": { diameter: 20.82 },
                "350": { diameter: 22.05 },
                "400": { diameter: 23.31 },
                "450": { diameter: 24.43 },
                "500": { diameter: 25.47 },
                "600": { diameter: 28.26 },
                "700": { diameter: 30.07 },
                "750": { diameter: 30.93 },
                "800": { diameter: 31.77 },
                "900": { diameter: 33.37 },
                "1000": { diameter: 34.84 },
                "1250": { diameter: 39.08 },
                "1500": { diameter: 42.2 },
                "1750": { diameter: 45.1 },
                "2000": { diameter: 47.79 }
            },
            solidConductors: {
                "14": { diameter: 3.15 },
                "12": { diameter: 3.57 },
                "10": { diameter: 4.11 }
            }
        },
        table6K: {
            strandedConductors: {
                "14": { diameter: 2.8 },
                "12": { diameter: 3.28 },
                "10": { diameter: 4.17 },
                "8": { diameter: 5.49 },
                "6": { diameter: 6.45 },
                "4": { diameter: 8.23 },
                "3": { diameter: 8.94 },
                "2": { diameter: 9.76 },
                "1": { diameter: 11.33 },
                "1/0": { diameter: 12.37 },
                "2/0": { diameter: 13.54 },
                "3/0": { diameter: 14.84 },
                "4/0": { diameter: 16.31 },
                "250": { diameter: 18.04 },
                "300": { diameter: 19.44 },
                "350": { diameter: 20.67 },
                "400": { diameter: 21.93 },
                "450": { diameter: 23.05 },
                "500": { diameter: 24.09 }
            },
            solidConductors: {
                "14": { diameter: 2.59 },
                "12": { diameter: 3.01 },
                "10": { diameter: 3.81 }
            }
        }
    },
    table8: {
        description: "Maximum allowable per cent conduit and tubing fill",
        insulatedConductors: {
            1: 53,
            2: 31,
            3: 40,
            4: 40,
            5: 40
        },
        leadSheathedCables: {
            1: 55,
            2: 30,
            3: 40,
            4: 38,
            5: 35
        },
    },
    table9A: {
        //Internal diameter and cross-sectional areas of various trade conduit and tubing
        "rigidMetalConduit": {
            "16": { diameter: 16.05, area: 202 },
            "21": { diameter: 21.23, area: 354 },
            "27": { diameter: 27.00, area: 573 },
            "35": { diameter: 35.41, area: 985 },
            "41": { diameter: 41.25, area: 1336 },
            "53": { diameter: 52.91, area: 2199 },
            "63": { diameter: 63.22, area: 3139 },
            "78": { diameter: 78.49, area: 4839 },
            "91": { diameter: 90.68, area: 6458 },
            "103": { diameter: 102.87, area: 8311 },
            "129": { diameter: 128.85, area: 13039 },
            "155": { diameter: 154.76, area: 18811 }
        },
        "flexibleMetalConduit": {
            "12": { diameter: 9.52, area: 71 },
            "16": { diameter: 15.88, area: 198 },
            "21": { diameter: 20.62, area: 334 },
            "27": { diameter: 25.40, area: 507 },
            "35": { diameter: 31.75, area: 792 },
            "41": { diameter: 38.10, area: 1140 },
            "53": { diameter: 50.80, area: 2027 },
            "63": { diameter: 63.50, area: 3167 },
            "78": { diameter: 76.20, area: 4560 },
            "91": { diameter: 88.90, area: 6207 },
            "103": { diameter: 101.60, area: 8107 }
        },
        "rigidPVCConduit": {
            "16": { diameter: 14.57, area: 167 },
            "21": { diameter: 19.77, area: 307 },
            "27": { diameter: 25.40, area: 507 },
            "35": { diameter: 31.75, area: 792 },
            "41": { diameter: 38.10, area: 1140 },
            "53": { diameter: 50.80, area: 2027 },
            "63": { diameter: 61.30, area: 2951 },
            "78": { diameter: 76.20, area: 4560 },
            "91": { diameter: 88.40, area: 6138 },
            "103": { diameter: 100.10, area: 7870 },
            "129": { diameter: 125.85, area: 12439 },
            "155": { diameter: 149.75, area: 17613 },
            "200": { diameter: 199.39, area: 31225 }
        },
        "rigidTypeEB1-DB2-ES2PVCConduit": {
            "53": { diameter: 50.80, area: 2027 },
     
            "78": { diameter: 76.2, area: 4560 },
            "91": { diameter: 88.40, area: 6138 },
            "103": { diameter: 101.10, area: 7870 },
            "129": { diameter: 126.35, area: 12538 },
            "155": { diameter: 149.75, area: 17613 }
        },
        "metallicLiquidTightFlexibleConduit": {
            "12": { diameter: 12.29, area: 119 },
            "16": { diameter: 15.80, area: 196 },
            "21": { diameter: 20.83, area: 341 },
            "27": { diameter: 26.44, area: 549 },
            "35": { diameter: 35.05, area: 965 },
            "41": { diameter: 40.01, area: 1257 },
            "53": { diameter: 51.31, area: 2068 },
            "63": { diameter: 62.99, area: 3116 },
            "78": { diameter: 77.98, area: 4776 },
            "91": { diameter: 88.90, area: 6207 },
            "103": { diameter: 101.60, area: 8107 }
        },
        "nonMetallicLiquidTightFlexibleConduit": {
            "12": { diameter: 12.07, area: 114 },
            "16": { diameter: 15.49, area: 188 },
            "21": { diameter: 20.45, area: 328 },
            "27": { diameter: 25.91, area: 527 },
            "35": { diameter: 34.54, area: 937 },
            "41": { diameter: 40.01, area: 1257 },
            "53": { diameter: 51.69, area: 2098 }
        },
        "electricalMetallicTubing": {
            "16": { diameter: 15.40, area: 186 },
            "21": { diameter: 20.50, area: 330 },
            "27": { diameter: 26.20, area: 539 },
            "35": { diameter: 34.60, area: 940 },
            "41": { diameter: 40.50, area: 1288 },
            "53": { diameter: 52.10, area: 2132 },
            "63": { diameter: 69.40, area: 3783 },
            "78": { diameter: 85.20, area: 5701 },
            "91": { diameter: 97.40, area: 7451 },
            "103": { diameter: 110.00, area: 9503 }
        },
        "electricalNonMetallicTubing": {
            "16": { diameter: 14.58, area: 167 },
            "21": { diameter: 19.66, area: 304 },
            "27": { diameter: 25.37, area: 506 },
            "35": { diameter: 33.73, area: 894 },
            "41": { diameter: 39.57, area: 1230 },
            "53": { diameter: 51.18, area: 2057 }
        }
    },
    table9B: {
        // Internal diameter and cross-sectional areas of various trade conduit and tubing
        "rigidRTRCConduitMarkedIPS": {
            "16": { diameter: 17.27, area: 234 },
            "21": { diameter: 22.61, area: 402 },
            "27": { diameter: 29.34, area: 676 },
            "35": { diameter: 38.10, area: 1140 },
            "41": { diameter: 44.20, area: 1534 },
            "53": { diameter: 56.26, area: 2486 },
            "63": { diameter: 69.60, area: 3805 },
            "78": { diameter: 84.84, area: 5653 },
            "103": { diameter: 109.72, area: 9455 },
            "129": { diameter: 136.14, area: 14557 },
            "155": { diameter: 162.05, area: 20625 }
        },
        "rigidRTRCConduitMarkedID": {
            "16": { diameter: 11.94, area: 112 },
            "21": { diameter: 18.29, area: 263 },
            "27": { diameter: 24.64, area: 477 },
            "35": { diameter: 30.99, area: 754 },
            "41": { diameter: 37.34, area: 1095 },
            "53": { diameter: 50.29, area: 1986 },
            "63": { diameter: 63.00, area: 3117 },
            "78": { diameter: 75.69, area: 4500 },
            "91": { diameter: 88.39, area: 6136 },
            "103": { diameter: 101.09, area: 8026 },
            "129": { diameter: 126.24, area: 12517 }
        },
        "hdpeConduitSchedule40": {
            "16": { diameter: 14.67, area: 169 },
            "21": { diameter: 19.78, area: 307 },
            "27": { diameter: 25.40, area: 507 },
            "35": { diameter: 33.82, area: 898 },
            "41": { diameter: 39.63, area: 1233 },
            "53": { diameter: 51.18, area: 2057 },
            "63": { diameter: 61.13, area: 2935 },
            "78": { diameter: 76.14, area: 4553 },
            "103": { diameter: 100.26, area: 7895 },
            "129": { diameter: 125.91, area: 12451 },
            "155": { diameter: 151.50, area: 18027 },
            "200": { diameter: 199.64, area: 31303 }
        },
        "hdpeConduitSchedule80": {
            "16": { diameter: 12.75, area: 128 },
            "21": { diameter: 17.70, area: 246 },
            "27": { diameter: 23.06, area: 418 },
            "35": { diameter: 31.10, area: 760 },
            "41": { diameter: 36.63, area: 1054 },
            "53": { diameter: 47.82, area: 1796 },
            "63": { diameter: 56.97, area: 2549 },
            "78": { diameter: 71.38, area: 4002 },
            "103": { diameter: 94.56, area: 7023 },
            "129": { diameter: 119.25, area: 11169 },
            "155": { diameter: 142.86, area: 16029 }
        },
        "hdpeDR9Conduit": {
            "16": { diameter: 15.47, area: 188 },
            "21": { diameter: 19.65, area: 303 },
            "27": { diameter: 24.86, area: 485 },
            "35": { diameter: 31.51, area: 780 },
            "41": { diameter: 36.10, area: 1024 },
            "53": { diameter: 45.19, area: 1604 },
            "63": { diameter: 54.63, area: 2344 },
            "78": { diameter: 66.56, area: 3479 },
            "103": { diameter: 85.36, area: 5723 },
            "129": { diameter: 105.54, area: 8748 },
            "155": { diameter: 125.63, area: 12396 },
            "200": { diameter: 163.58, area: 21016 },
            "275": { diameter: 203.84, area: 32634 },
            "325": { diameter: 241.79, area: 45916 }
        },
        "hdpeDR11Conduit": {
            "16": { diameter: 16.30, area: 209 },
            "21": { diameter: 20.73, area: 338 },
            "27": { diameter: 26.21, area: 540 },
            "35": { diameter: 33.31, area: 871 },
            "41": { diameter: 38.27, area: 1150 },
            "53": { diameter: 47.91, area: 1803 },
            "63": { diameter: 57.92, area: 2635 },
            "78": { diameter: 70.60, area: 3915 },
            "103": { diameter: 90.52, area: 6435 },
            "129": { diameter: 111.93, area: 9840 },
            "155": { diameter: 133.22, area: 13939 },
            "200": { diameter: 173.49, area: 23640 },
            "275": { diameter: 216.19, area: 36708 },
            "325": { diameter: 256.46, area: 51657 }
        },
        "hdpeDR13.5Conduit": {
            "16": { diameter: 17.02, area: 228 },
            "21": { diameter: 21.63, area: 367 },
            "27": { diameter: 27.33, area: 587 },
            "35": { diameter: 34.73, area: 947 },
            "41": { diameter: 39.93, area: 1252 },
            "53": { diameter: 50.18, area: 1978 },
            "63": { diameter: 60.68, area: 2892 },
            "78": { diameter: 73.95, area: 4295 },
            "103": { diameter: 94.83, area: 7063 },
            "129": { diameter: 117.25, area: 10797 },
            "155": { diameter: 139.57, area: 15299 },
            "200": { diameter: 181.74, area: 25941 },
            "275": { diameter: 226.49, area: 40289 },
            "325": { diameter: 268.66, area: 56689 }
        },
        "hdpeDR15.5Conduit": {
            "16": { diameter: 17.43, area: 239 },
            "21": { diameter: 22.14, area: 385 },
            "27": { diameter: 27.97, area: 614 },
            "35": { diameter: 35.54, area: 992 },
            "41": { diameter: 40.85, area: 1311 },
            "53": { diameter: 51.40, area: 2075 },
            "63": { diameter: 62.24, area: 3042 },
            "78": { diameter: 75.85, area: 4519 },
            "103": { diameter: 97.29, area: 7434 },
            "129": { diameter: 120.29, area: 11364 },
            "155": { diameter: 143.19, area: 16103 },
            "200": { diameter: 186.43, area: 27297 },
            "275": { diameter: 232.35, area: 42401 },
            "325": { diameter: 275.59, area: 59651 }
        }
    },

    table9C: {    /*Internal diameter and maximum conductor cross-sectional areas allowable fill at 53% for various
    trade conduit and tubing used for 1 conductor or multi-conductor cable (not lead-sheathed) */
        "rigidMetalConduit": {
            "16": { diameter: 16.05, area: 107.23 },
            "21": { diameter: 21.23, area: 187.61 },
            "27": { diameter: 27.00, area: 303.45 },
            "35": { diameter: 35.41, area: 521.94 },
            "41": { diameter: 41.25, area: 708.29 },
            "53": { diameter: 52.91, area: 1165.31 },
            "63": { diameter: 63.22, area: 1663.70 },
            "78": { diameter: 78.49, area: 2564.45 },
            "91": { diameter: 90.68, area: 3422.86 },
            "103": { diameter: 102.87, area: 4404.97 },
            "129": { diameter: 128.85, area: 6910.90 },
            "155": { diameter: 154.76, area: 9969.73 }
        },
        "flexibleMetalConduit": {
            "12": { diameter: 9.52, area: 37.73 },
            "16": { diameter: 15.88, area: 104.97 },
            "21": { diameter: 20.62, area: 176.99 },
            "27": { diameter: 25.40, area: 268.55 },
            "35": { diameter: 31.75, area: 419.62 },
            "41": { diameter: 38.10, area: 604.25 },
            "53": { diameter: 50.80, area: 1074.22 },
            "63": { diameter: 63.50, area: 1678.47 },
            "78": { diameter: 76.20, area: 2416.99 },
            "91": { diameter: 88.90, area: 3289.80 },
            "103": { diameter: 101.60, area: 4296.88 }
        },
        "rigidPVCConduit": {
            "16": { diameter: 14.57, area: 88.37 },
            "21": { diameter: 19.77, area: 162.70 },
            "27": { diameter: 25.40, area: 268.55 },
            "35": { diameter: 31.75, area: 419.62 },
            "41": { diameter: 38.10, area: 604.25 },
            "53": { diameter: 50.80, area: 1074.22 },
            "63": { diameter: 61.30, area: 1564.18 },
            "78": { diameter: 76.20, area: 2416.99 },
            "91": { diameter: 88.40, area: 3252.90 },
            "103": { diameter: 100.10, area: 4170.94 },
            "129": { diameter: 125.85, area: 6592.83 },
            "155": { diameter: 149.75, area: 9334.68 },
            "200": { diameter: 199.39, area: 16549.03 }
        },
        "rigidTypeEB1-EB2-ES2PVCConduit": {
            "53": { diameter: 50.80, area: 1074.22 },
            "78": { diameter: 76.20, area: 2416.99 },
            "91": { diameter: 88.40, area: 3252.90 },
            "103": { diameter: 100.10, area: 4170.94 },
            "129": { diameter: 126.35, area: 6645.33 },
            "155": { diameter: 149.75, area: 9334.68 }
        },
        "metallicLiquidTightFlexibleConduit": {
            "16": { diameter: 15.80, area: 103.92 },
            "21": { diameter: 20.83, area: 180.61 },
            "27": { diameter: 26.44, area: 291.00 },
            "35": { diameter: 35.05, area: 511.38 },
            "41": { diameter: 40.01, area: 666.35 },
            "53": { diameter: 51.31, area: 1095.90 },
            "63": { diameter: 62.99, area: 1651.62 },
            "78": { diameter: 77.98, area: 2531.23 },
            "91": { diameter: 88.90, area: 3289.80 },
            "103": { diameter: 101.60, area: 4296.88 }
        },
        "nonMetallicLiquidTightFlexibleConduit": {
            "12": { diameter: 12.29, area: 62.87 },
            "16": { diameter: 15.49, area: 99.88 },
            "21": { diameter: 20.45, area: 174.08 },
            "27": { diameter: 25.91, area: 279.45 },
            "35": { diameter: 34.54, area: 496.60 },
            "41": { diameter: 40.01, area: 666.35 },
            "53": { diameter: 51.69, area: 1112.19 }
        },
        "electricalMetallicTubing": {
            "16": { diameter: 15.40, area: 98.72 },
            "21": { diameter: 20.50, area: 174.93 },
            "27": { diameter: 26.20, area: 285.74 },
            "35": { diameter: 34.60, area: 498.33 },
            "41": { diameter: 40.50, area: 682.77 },
            "53": { diameter: 52.10, area: 1129.90 },
            "63": { diameter: 69.40, area: 2004.86 },
            "78": { diameter: 85.20, area: 3021.66 },
            "91": { diameter: 97.40, area: 3948.97 },
            "103": { diameter: 110.00, area: 5036.76 }
        },
        "electricalNonMetallicTubing": {
            "16": { diameter: 14.58, area: 88.49 },
            "21": { diameter: 19.66, area: 160.89 },
            "27": { diameter: 25.37, area: 267.92 },
            "35": { diameter: 33.73, area: 473.59 },
            "41": { diameter: 39.57, area: 651.78 },
            "53": { diameter: 51.18, area: 1090.35 }
        }
    },
    table9D: {
        /*Internal diameter and maximum conductor cross-sectional areas allowable fill at 53% for various
        trade conduit and tubing used for 1 conductor or multi-conductor cable (not lead-sheathed) */
        "rigidRTRCConduitMarkedIPS": {
            "16": { diameter: 17.27, area: 124.15 },
            "21": { diameter: 22.61, area: 212.80 },
            "27": { diameter: 29.34, area: 358.33 },
            "35": { diameter: 38.10, area: 604.25 },
            "41": { diameter: 44.20, area: 813.22 },
            "53": { diameter: 56.26, area: 1317.54 },
            "63": { diameter: 69.60, area: 2016.44 },
            "78": { diameter: 84.84, area: 2996.17 },
            "103": { diameter: 109.72, area: 5011.15 },
            "129": { diameter: 136.14, area: 7715.02 },
            "155": { diameter: 162.05, area: 10931.10 }
        },
        "rigidRTRCConduitMarkedID": {
            "16": { diameter: 11.94, area: 59.34 },
            "21": { diameter: 18.29, area: 139.25 },
            "27": { diameter: 24.64, area: 252.72 },
            "35": { diameter: 30.99, area: 399.77 },
            "41": { diameter: 37.34, area: 580.38 },
            "53": { diameter: 50.29, area: 1052.76 },
            "63": { diameter: 63.00, area: 1652.14 },
            "78": { diameter: 75.69, area: 2384.75 },
            "91": { diameter: 88.39, area: 3252.16 },
            "103": { diameter: 101.09, area: 4253.85 },
            "129": { diameter: 126.24, area: 6633.76 }
        },
        "hdpeConduitSchedule40": {
            "16": { diameter: 14.67, area: 89.58 },
            "21": { diameter: 19.78, area: 162.86 },
            "27": { diameter: 25.40, area: 268.55 },
            "35": { diameter: 33.82, area: 476.12 },
            "41": { diameter: 39.63, area: 653.75 },
            "53": { diameter: 51.18, area: 1090.35 },
            "63": { diameter: 61.13, area: 1555.52 },
            "78": { diameter: 76.14, area: 2413.19 },
            "103": { diameter: 100.26, area: 4184.28 },
            "129": { diameter: 125.91, area: 6599.12 },
            "155": { diameter: 151.50, area: 9554.13 },
            "200": { diameter: 199.64, area: 16590.55 }
        },
        "hdpeConduitSchedule80": {
            "16": { diameter: 12.75, area: 67.67 },
            "21": { diameter: 17.70, area: 130.41 },
            "27": { diameter: 23.06, area: 221.35 },
            "35": { diameter: 31.10, area: 402.61 },
            "41": { diameter: 36.63, area: 558.52 },
            "53": { diameter: 47.82, area: 951.89 },
            "63": { diameter: 56.97, area: 1351.01 },
            "78": { diameter: 71.38, area: 2120.89 },
            "103": { diameter: 94.56, area: 3722.04 },
            "129": { diameter: 119.25, area: 5919.47 },
            "155": { diameter: 142.86, area: 8495.46 }
        },
        "hdpeDR9Conduit": {
            "16": { diameter: 15.47, area: 99.62 },
            "21": { diameter: 19.65, area: 160.73 },
            "27": { diameter: 24.86, area: 257.26 },
            "35": { diameter: 31.51, area: 413.30 },
            "41": { diameter: 36.10, area: 542.48 },
            "53": { diameter: 45.19, area: 850.06 },
            "63": { diameter: 54.63, area: 1242.30 },
            "78": { diameter: 66.56, area: 1844.13 },
            "103": { diameter: 85.36, area: 3033.02 },
            "129": { diameter: 105.54, area: 4636.60 },
            "155": { diameter: 125.63, area: 6569.80 },
            "200": { diameter: 163.58, area: 11138.49 },
            "275": { diameter: 203.84, area: 17295.96 }
        },
        "hdpeDR11Conduit": {
            "16": { diameter: 16.30, area: 110.60 },
            "21": { diameter: 20.73, area: 178.88 },
            "27": { diameter: 26.21, area: 285.96 },
            "35": { diameter: 33.31, area: 461.86 },
            "41": { diameter: 38.27, area: 609.65 },
            "53": { diameter: 47.91, area: 955.47 },
            "63": { diameter: 57.92, area: 1396.44 },
            "78": { diameter: 70.60, area: 2074.79 },
            "103": { diameter: 90.52, area: 3410.79 },
            "129": { diameter: 111.93, area: 5215.05 },
            "155": { diameter: 133.22, area: 7387.62 },
            "200": { diameter: 173.49, area: 12528.95 },
            "275": { diameter: 216.19, area: 19455.26 }
        },
        "hdpeDR13.5Conduit": {
            "16": { diameter: 17.02, area: 120.58 },
            "21": { diameter: 21.63, area: 194.75 },
            "27": { diameter: 27.33, area: 310.92 },
            "35": { diameter: 34.73, area: 502.08 },
            "41": { diameter: 39.93, area: 663.69 },
            "53": { diameter: 50.18, area: 1048.16 },
            "63": { diameter: 60.68, area: 1532.70 },
            "78": { diameter: 73.95, area: 2276.37 },
            "103": { diameter: 94.83, area: 3743.32 },
            "129": { diameter: 117.25, area: 5722.57 },
            "155": { diameter: 139.57, area: 8108.68 },
            "200": { diameter: 181.74, area: 13748.86 },
            "275": { diameter: 226.49, area: 21353.24 }
        },
        "hdpeDR15.5Conduit": {
            "16": { diameter: 17.43, area: 126.46 },
            "21": { diameter: 22.14, area: 204.04 },
            "27": { diameter: 27.97, area: 325.65 },
            "35": { diameter: 35.54, area: 525.78 },
            "41": { diameter: 40.85, area: 694.62 },
            "53": { diameter: 51.40, area: 1099.74 },
            "63": { diameter: 62.24, area: 1612.52 },
            "78": { diameter: 75.85, area: 2394.84 },
            "103": { diameter: 97.29, area: 3940.05 },
            "129": { diameter: 120.29, area: 6023.17 },
            "155": { diameter: 143.19, area: 8534.76 },
            "200": { diameter: 186.43, area: 14467.63 },
            "275": { diameter: 232.35, area: 22472.49 }
        }
    }, 

    table9E: {
            /*Internal diameter and maximum conductor cross-sectional areas allowable fill at 31% for various
trade conduit and tubing used for 2 conductors or multi-conductor cables (not lead-sheathed)
(See Rule 12-910 and Table 8.) */
        "rigidMetalConduit": {
            "16": { diameter: 16.05, area: 62.72 },
            "21": { diameter: 21.23, area: 109.74 },
            "27": { diameter: 27.00, area: 177.49 },
            "35": { diameter: 35.41, area: 305.28 },
            "41": { diameter: 41.25, area: 414.29 },
            "53": { diameter: 52.91, area: 681.60 },
            "63": { diameter: 63.22, area: 973.11 },
            "78": { diameter: 78.49, area: 1499.96 },
            "91": { diameter: 90.68, area: 2002.05 },
            "103": { diameter: 102.87, area: 2576.49 },
            "129": { diameter: 128.85, area: 4042.22 },
            "155": { diameter: 154.76, area: 5831.35 }
        },
        "flexibleMetalConduit": {
            "12": { diameter: 9.52, area: 22.07 },
            "16": { diameter: 15.88, area: 61.40 },
            "21": { diameter: 20.62, area: 103.52 },
            "27": { diameter: 25.40, area: 157.08 },
            "35": { diameter: 31.75, area: 245.44 },
            "41": { diameter: 38.10, area: 353.43 },
            "53": { diameter: 50.80, area: 628.32 },
            "63": { diameter: 63.50, area: 981.75 },
            "78": { diameter: 76.20, area: 1413.71 },
            "91": { diameter: 88.90, area: 1924.22 },
            "103": { diameter: 101.60, area: 2513.27 }
        },
        "rigidPVCConduit": {
            "16": { diameter: 14.57, area: 51.69 },
            "21": { diameter: 19.77, area: 95.16 },
            "27": { diameter: 25.40, area: 157.08 },
            "35": { diameter: 31.75, area: 245.44 },
            "41": { diameter: 38.10, area: 353.43 },
            "53": { diameter: 50.80, area: 628.32 },
            "63": { diameter: 61.30, area: 914.90 },
            "78": { diameter: 76.20, area: 1413.71 },
            "91": { diameter: 88.40, area: 1902.64 },
            "103": { diameter: 100.10, area: 2439.61 },
            "129": { diameter: 125.85, area: 3856.19 },
            "155": { diameter: 149.75, area: 5459.91 },
            "200": { diameter: 199.39, area: 9679.62 }
        },
        "rigidTypeEB1-DB2-ES2PVCConduit": {
            "53": { diameter: 50.80, area: 628.32 },
            "78": { diameter: 76.20, area: 1413.71 },
            "91": { diameter: 88.40, area: 1902.64 },
            "103": { diameter: 100.10, area: 2439.61 },
            "129": { diameter: 126.35, area: 3886.89 },
            "155": { diameter: 149.75, area: 5459.91 }
        },
        "metallicLiquidTightFlexibleConduit": {
            "16": { diameter: 15.80, area: 60.78 },
            "21": { diameter: 20.83, area: 105.64 },
            "27": { diameter: 26.44, area: 170.21 },
            "35": { diameter: 35.05, area: 299.11 },
            "41": { diameter: 40.01, area: 389.75 },
            "53": { diameter: 51.31, area: 641.00 },
            "63": { diameter: 62.99, area: 966.04 },
            "78": { diameter: 77.98, area: 1480.53 },
            "91": { diameter: 88.90, area: 1924.22 },
            "103": { diameter: 101.60, area: 2513.27 }
        },
        "nonMetallicLiquidTightFlexibleConduit": {
            "12": { diameter: 12.29, area: 36.78 },
            "16": { diameter: 15.49, area: 58.42 },
            "21": { diameter: 20.45, area: 101.82 },
            "27": { diameter: 25.91, area: 163.45 },
            "35": { diameter: 34.54, area: 290.47 },
            "41": { diameter: 40.01, area: 389.75 },
            "53": { diameter: 51.69, area: 650.53 }
        },
        "electricalMetallicTubing": {
            "16": { diameter: 15.40, area: 57.74 },
            "21": { diameter: 20.50, area: 102.32 },
            "27": { diameter: 26.20, area: 167.13 },
            "35": { diameter: 34.60, area: 291.48 },
            "41": { diameter: 40.50, area: 399.36 },
            "53": { diameter: 52.10, area: 660.89 },
            "63": { diameter: 69.40, area: 1172.66 },
            "78": { diameter: 85.20, area: 1767.38 },
            "91": { diameter: 97.40, area: 2309.77 },
            "103": { diameter: 110.00, area: 2946.03 }
        },
        "electricalNonMetallicTubing": {
            "16": { diameter: 14.58, area: 51.76 },
            "21": { diameter: 19.66, area: 94.11 },
            "27": { diameter: 25.37, area: 156.71 },
            "35": { diameter: 33.73, area: 277.00 },
            "41": { diameter: 39.57, area: 381.23 },
            "53": { diameter: 51.18, area: 637.75 }
        }
    },
    table9F: { 
        // Internal diameter and maximum conductor cross-sectional areas allowable fill at 31% for various trade conduit and tubing used for 2 conductors or multi-conductor cables (not lead-sheathed)
   
        "rigidRTRCConduitMarkedIPS": {
            "16": { diameter: 17.27, area: 72.62 },
            "21": { diameter: 22.61, area: 124.47 },
            "27": { diameter: 29.34, area: 209.59 },
            "35": { diameter: 38.10, area: 353.43 },
            "41": { diameter: 44.20, area: 475.66 },
            "53": { diameter: 56.26, area: 770.64 },
            "63": { diameter: 69.60, area: 1179.42 },
            "78": { diameter: 84.84, area: 1752.48 },
            "103": { diameter: 109.72, area: 2931.05 },
            "129": { diameter: 136.14, area: 4512.56 },
            "155": { diameter: 162.05, area: 6393.66 }
        },
        "rigidRTRCConduitMarkedID": {
            "16": { diameter: 11.94, area: 34.71 },
            "21": { diameter: 18.29, area: 81.45 },
            "27": { diameter: 24.64, area: 147.82 },
            "35": { diameter: 30.99, area: 233.83 },
            "41": { diameter: 37.34, area: 339.47 },
            "53": { diameter: 50.29, area: 615.76 },
            "63": { diameter: 63.00, area: 966.35 },
            "78": { diameter: 75.69, area: 1394.85 },
            "91": { diameter: 88.39, area: 1902.21 },
            "103": { diameter: 101.09, area: 2488.10 },
            "129": { diameter: 126.24, area: 3880.12 }
        },
        "hdpeConduitSchedule40": {
            "16": { diameter: 14.67, area: 52.40 },
            "21": { diameter: 19.78, area: 95.26 },
            "27": { diameter: 25.40, area: 157.08 },
            "35": { diameter: 33.82, area: 278.48 },
            "41": { diameter: 39.63, area: 382.38 },
            "53": { diameter: 51.18, area: 637.75 },
            "63": { diameter: 61.13, area: 909.83 },
            "78": { diameter: 76.14, area: 1411.49 },
            "103": { diameter: 100.26, area: 2447.41 },
            "129": { diameter: 125.91, area: 3859.86 },
            "155": { diameter: 151.50, area: 5588.26 },
            "200": { diameter: 199.64, area: 9703.91 }
        },
        "hdpeConduitSchedule80": {
            "16": { diameter: 12.75, area: 39.58 },
            "21": { diameter: 17.70, area: 76.28 },
            "27": { diameter: 23.06, area: 129.47 },
            "35": { diameter: 31.10, area: 235.49 },
            "41": { diameter: 36.63, area: 326.68 },
            "53": { diameter: 47.82, area: 556.76 },
            "63": { diameter: 56.97, area: 790.21 },
            "78": { diameter: 71.38, area: 1240.52 },
            "103": { diameter: 94.56, area: 2177.04 },
            "129": { diameter: 119.25, area: 3462.33 },
            "155": { diameter: 142.86, area: 4969.04 }
        },
        "hdpeDR9Conduit": {
            "16": { diameter: 15.47, area: 58.27 },
            "21": { diameter: 19.65, area: 94.01 },
            "27": { diameter: 24.86, area: 150.47 },
            "35": { diameter: 31.51, area: 241.74 },
            "41": { diameter: 36.10, area: 317.30 },
            "53": { diameter: 45.19, area: 497.21 },
            "63": { diameter: 54.63, area: 726.63 },
            "78": { diameter: 66.56, area: 1078.64 },
            "103": { diameter: 85.36, area: 1774.03 },
            "129": { diameter: 105.54, area: 2711.98 },
            "155": { diameter: 125.63, area: 3842.72 },
            "200": { diameter: 163.58, area: 6514.96 },
            "275": { diameter: 203.84, area: 10116.50 }
        },
        "hdpeDR11Conduit": {
            "16": { diameter: 16.30, area: 64.69 },
            "21": { diameter: 20.73, area: 104.63 },
            "27": { diameter: 26.21, area: 167.26 },
            "35": { diameter: 33.31, area: 270.15 },
            "41": { diameter: 38.27, area: 356.59 },
            "53": { diameter: 47.91, area: 558.86 },
            "63": { diameter: 57.92, area: 816.79 },
            "78": { diameter: 70.60, area: 1213.56 },
            "103": { diameter: 90.52, area: 1994.99 },
            "129": { diameter: 111.93, area: 3050.31 },
            "155": { diameter: 133.22, area: 4321.06 },
            "200": { diameter: 173.49, area: 7328.25 },
            "275": { diameter: 216.19, area: 11379.49 }
        },
        "hdpeDR13.5Conduit": {
            "16": { diameter: 17.02, area: 70.53 },
            "21": { diameter: 21.63, area: 113.91 },
            "27": { diameter: 27.33, area: 181.86 },
            "35": { diameter: 34.73, area: 293.67 },
            "41": { diameter: 39.93, area: 388.20 },
            "53": { diameter: 50.18, area: 613.07 },
            "63": { diameter: 60.68, area: 896.48 },
            "78": { diameter: 73.95, area: 1331.46 },
            "103": { diameter: 94.83, area: 2189.49 },
            "129": { diameter: 117.25, area: 3347.17 },
            "155": { diameter: 139.57, area: 4742.81 },
            "200": { diameter: 181.74, area: 8041.79 },
            "275": { diameter: 226.49, area: 12489.63 }
        },
        "hdpeDR15.5Conduit": {
            "16": { diameter: 17.43, area: 73.97 },
            "21": { diameter: 22.14, area: 119.35 },
            "27": { diameter: 27.97, area: 190.47 },
            "35": { diameter: 35.54, area: 307.53 },
            "41": { diameter: 40.85, area: 406.29 },
            "53": { diameter: 51.40, area: 643.25 },
            "63": { diameter: 62.24, area: 943.17 },
            "78": { diameter: 75.85, area: 1400.76 },
            "103": { diameter: 97.29, area: 2304.56 },
            "129": { diameter: 120.29, area: 3522.98 },
            "155": { diameter: 143.19, area: 4992.03 },
            "200": { diameter: 186.43, area: 8462.20 },
            "275": { diameter: 232.35, area: 13144.28 }
        }
    },
    table9G:{
    /**Internal diameter and maximum conductor cross-sectional areas allowable fill at 40% for various
trade conduit and tubing used for 3 or more conductors or multi-conductor cables (not lead-sheathed)
(See Rule 12-910 and Table 8.) */
        rigidMetalConduit: {
          "16": { diameter: 16.05, area: 80.93 },
          "21": { diameter: 21.23, area: 141.6 },
          "27": { diameter: 27.0, area: 229.02 },
          "35": { diameter: 35.41, area: 393.91 },
          "41": { diameter: 41.25, area: 534.56 },
          "53": { diameter: 52.91, area: 879.48 },
          "63": { diameter: 63.22, area: 1255.62 },
          "78": { diameter: 78.49, area: 1935.43 },
          "91": { diameter: 90.68, area: 2583.29 },
          "103": { diameter: 102.87, area: 3324.51 },
          "129": { diameter: 128.85, area: 5215.77 },
          "155": { diameter: 154.76, area: 7524.32 }
        },
        flexibleMetalConduit: {
          "12": { diameter: 9.52, area: 28.47 },
          "16": { diameter: 15.88, area: 79.22 },
          "21": { diameter: 20.62, area: 133.58 },
          "27": { diameter: 25.4, area: 202.68 },
          "35": { diameter: 31.75, area: 316.69 },
          "41": { diameter: 38.1, area: 456.04 },
          "53": { diameter: 50.8, area: 810.73 },
          "63": { diameter: 63.5, area: 1266.77 },
          "78": { diameter: 76.2, area: 1824.15 },
          "91": { diameter: 88.9, area: 2482.87 },
          "103": { diameter: 101.6, area: 3242.93 }
        },
        rigidPVCConduit: {
          "16": { diameter: 14.57, area: 66.69 },
          "21": { diameter: 19.77, area: 122.79 },
          "27": { diameter: 25.4, area: 202.68 },
          "35": { diameter: 31.75, area: 316.69 },
          "41": { diameter: 38.1, area: 456.04 },
          "53": { diameter: 50.8, area: 810.73 },
          "63": { diameter: 61.3, area: 1180.51 },
          "78": { diameter: 76.2, area: 1824.15 },
          "91": { diameter: 88.4, area: 2455.02 },
          "103": { diameter: 100.1, area: 3147.88 },
          "129": { diameter: 125.85, area: 4975.72 },
          "155": { diameter: 149.75, area: 7045.04 },
          "200": { diameter: 199.39, area: 12489.83 }
        },
        rigidTypeEB1PVCConduit: {
          "53": { diameter: 50.8, area: 810.73 },
          "78": { diameter: 76.2, area: 1824.15 },
          "91": { diameter: 88.4, area: 2455.02 },
          "103": { diameter: 100.1, area: 3147.88 },
          "129": { diameter: 126.35, area: 5015.34 },
          "155": { diameter: 149.75, area: 7045.04 }
        },
        metallicLiquidTightFlexibleConduit: {
          "12": { diameter: 12.29, area: 47.45 },
          "16": { diameter: 15.8, area: 78.43 },
          "21": { diameter: 20.83, area: 136.31 },
          "27": { diameter: 26.44, area: 219.62 },
          "35": { diameter: 35.05, area: 385.95 },
          "41": { diameter: 40.01, area: 502.91 },
          "53": { diameter: 51.31, area: 827.09 },
          "63": { diameter: 62.99, area: 1246.5 },
          "78": { diameter: 77.98, area: 1910.36 },
          "91": { diameter: 88.9, area: 2482.87 },
          "103": { diameter: 101.6, area: 3242.93 }
        },
        nonMetallicLiquidTightFlexibleConduit: {
          "12": { diameter: 12.07, area: 45.77 },
          "16": { diameter: 15.49, area: 75.38 },
          "21": { diameter: 20.45, area: 131.38 },
          "27": { diameter: 25.91, area: 210.9 },
          "35": { diameter: 34.54, area: 374.8 },
          "41": { diameter: 40.01, area: 502.91 },
          "53": { diameter: 51.69, area: 839.39 }
        },
        electricalMetallicTubing: {
          "16": { diameter: 15.4, area: 74.51 },
          "21": { diameter: 20.5, area: 132.03 },
          "27": { diameter: 26.2, area: 215.65 },
          "35": { diameter: 34.6, area: 376.1 },
          "41": { diameter: 40.5, area: 515.3 },
          "53": { diameter: 52.1, area: 852.76 },
          "63": { diameter: 69.4, area: 1513.1 },
          "78": { diameter: 85.2, area: 2280.49 },
          "91": { diameter: 97.4, area: 2980.35 },
          "103": { diameter: 110.0, area: 3801.33 }
        },
        electricalNonMetallicTubing: {
          "16": { diameter: 14.58, area: 66.78 },
          "21": { diameter: 19.66, area: 121.43 },
          "27": { diameter: 25.37, area: 202.2 },
          "35": { diameter: 33.73, area: 357.42 },
          "41": { diameter: 39.57, area: 491.91 },
          "53": { diameter: 51.18, area: 822.91 }
        }
      },
      table9H: {
        /**Internal diameter and maximum conductor cross-sectional areas allowable fill at 40% for various
trade conduit and tubing used for 3 or more conductors or multi-conductor cables (not lead-sheathed)
(See Rule 12-910 and Table 8.) */
        rigidRTRCConduitMarkedIPS: {
          "16": { diameter: 17.27, area: 93.7 },
          "21": { diameter: 22.61, area: 160.6 },
          "27": { diameter: 29.34, area: 270.44 },
          "35": { diameter: 38.1, area: 456.04 },
          "41": { diameter: 44.2, area: 613.75 },
          "53": { diameter: 56.26, area: 994.37 },
          "63": { diameter: 69.6, area: 1521.84 },
          "78": { diameter: 84.84, area: 2261.26 },
          "103": { diameter: 109.72, area: 3782.0 },
          "129": { diameter: 136.14, area: 5822.66 },
          "155": { diameter: 162.05, area: 8249.89 }
        },
        rigidRTRCConduitMarkedID: {
          "16": { diameter: 11.94, area: 44.79 },
          "21": { diameter: 18.29, area: 105.09 },
          "27": { diameter: 24.64, area: 190.74 },
          "35": { diameter: 30.99, area: 301.71 },
          "41": { diameter: 37.34, area: 438.02 },
          "53": { diameter: 50.29, area: 794.54 },
          "63": { diameter: 63.0, area: 1246.9 },
          "78": { diameter: 75.69, area: 1799.81 },
          "91": { diameter: 88.39, area: 2454.46 },
          "103": { diameter: 101.09, area: 3210.45 },
          "129": { diameter: 126.24, area: 5006.61 }
        },
        HDPEConduitSchedule40: {
          "16": { diameter: 14.67, area: 67.61 },
          "21": { diameter: 19.78, area: 122.91 },
          "27": { diameter: 25.4, area: 202.68 },
          "35": { diameter: 33.82, area: 359.33 },
          "41": { diameter: 39.63, area: 493.4 },
          "53": { diameter: 51.18, area: 822.91 },
          "63": { diameter: 61.13, area: 1173.97 },
          "78": { diameter: 76.14, area: 1821.28 },
          "103": { diameter: 100.26, area: 3157.95 },
          "129": { diameter: 125.91, area: 4980.47 },
          "155": { diameter: 151.5, area: 7210.66 },
          "200": { diameter: 199.64, area: 12521.17 }
        },
        HDPEConduitSchedule80: {
          "16": { diameter: 12.75, area: 51.07 },
          "21": { diameter: 17.7, area: 98.42 },
          "27": { diameter: 23.06, area: 167.06 },
          "35": { diameter: 31.1, area: 303.86 },
          "41": { diameter: 36.63, area: 421.53 },
          "53": { diameter: 47.82, area: 718.4 },
          "63": { diameter: 56.97, area: 1019.63 },
          "78": { diameter: 71.38, area: 1600.67 },
          "103": { diameter: 94.56, area: 2809.08 },
          "129": { diameter: 119.25, area: 4467.52 },
          "155": { diameter: 142.86, area: 6411.67 }
        },
        HDPEDR9Conduit: {
          "16": { diameter: 15.47, area: 75.18 },
          "21": { diameter: 19.65, area: 121.3 },
          "27": { diameter: 24.86, area: 194.16 },
          "35": { diameter: 31.51, area: 311.92 },
          "41": { diameter: 36.1, area: 409.42 },
          "53": { diameter: 45.19, area: 641.56 },
          "63": { diameter: 54.63, area: 937.59 },
          "78": { diameter: 66.56, area: 1391.8 },
          "103": { diameter: 85.36, area: 2289.07 },
          "129": { diameter: 105.54, area: 3499.32 },
          "155": { diameter: 125.63, area: 4958.34 },
          "200": { diameter: 163.58, area: 8406.4 },
          "275": { diameter: 203.84, area: 13053.55 }
        },
        HDPEDR11Conduit: {
          "16": { diameter: 16.3, area: 83.47 },
          "21": { diameter: 20.73, area: 135.0 },
          "27": { diameter: 26.21, area: 215.82 },
          "35": { diameter: 33.31, area: 348.58 },
          "41": { diameter: 38.27, area: 460.12 },
          "53": { diameter: 47.91, area: 721.11 },
          "63": { diameter: 57.92, area: 1053.92 },
          "78": { diameter: 70.6, area: 1565.88 },
          "103": { diameter: 90.52, area: 2574.18 },
          "129": { diameter: 111.93, area: 3935.89 },
          "155": { diameter: 133.22, area: 5575.56 },
          "200": { diameter: 173.49, area: 9455.81 },
          "275": { diameter: 216.19, area: 14683.21 }
        },
        HDPEDR13_5Conduit: {
          "16": { diameter: 17.02, area: 91.01 },
          "21": { diameter: 21.63, area: 146.98 },
          "27": { diameter: 27.33, area: 234.65 },
          "35": { diameter: 34.73, area: 378.93 },
          "41": { diameter: 39.93, area: 500.9 },
          "53": { diameter: 50.18, area: 791.06 },
          "63": { diameter: 60.68, area: 1156.75 },
          "78": { diameter: 73.95, area: 1718.01 },
          "103": { diameter: 94.83, area: 2825.15 },
          "129": { diameter: 117.25, area: 4318.92 },
          "155": { diameter: 139.57, area: 6119.75 },
          "200": { diameter: 181.74, area: 10376.5 },
          "275": { diameter: 226.49, area: 16115.65 }
        },
        HDPEDR15_5Conduit: {
          "16": { diameter: 17.43, area: 95.44 },
          "21": { diameter: 22.14, area: 153.99 },
          "27": { diameter: 27.97, area: 245.77 },
          "35": { diameter: 35.54, area: 396.81 },
          "41": { diameter: 40.85, area: 524.24 },
          "53": { diameter: 51.4, area: 830.0 },
          "63": { diameter: 62.24, area: 1217.0 },
          "78": { diameter: 75.85, area: 1807.43 },
          "103": { diameter: 97.29, area: 2973.63 },
          "129": { diameter: 120.29, area: 4545.79 },
          "155": { diameter: 143.19, area: 6441.33 },
          "200": { diameter: 186.43, area: 10918.96 },
          "275": { diameter: 232.35, area: 16960.37 }
        }
      }
}
