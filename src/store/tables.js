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

    tableD3: [
        // Table D3: 
        // Current: The current property represents the current in amperes.
        // Distances: The distances property is an object where the keys are the wire sizes (AWG) 
        // and the values are the distances in meters for a 1% voltage drop.
        // Distance to centre of distribution measured along the insulated conductor run, m
        // (calculated for conductor insulation temperature of 60 °C)
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
        wireData: new Map([
            ["table6A", {
                types: new Set([
                    "R90XLPE_UNJACKETED_600V",
                    "RW75XLPE_UNJACKETED_600V",
                    "RW90XLPE_UNJACKETED_600V"
                ]),
                specs: {

                    strandedConductors: new Map([
                        ["14", { diameter: 3.36 }],
                        ["12", { diameter: 3.84 }],
                        ["10", { diameter: 4.47 }],
                        ["8", { diameter: 5.99 }],
                        ["6", { diameter: 6.95 }],
                        ["4", { diameter: 8.17 }],
                        ["3", { diameter: 8.88 }],
                        ["2", { diameter: 9.70 }],
                        ["1", { diameter: 11.23 }],
                        ["1/0", { diameter: 12.27 }],
                        ["2/0", { diameter: 13.44 }],
                        ["3/0", { diameter: 14.74 }],
                        ["4/0", { diameter: 16.21 }],
                        ["250", { diameter: 17.90 }],
                        ["300", { diameter: 19.30 }],
                        ["350", { diameter: 20.53 }],
                        ["400", { diameter: 21.79 }],
                        ["450", { diameter: 22.91 }],
                        ["500", { diameter: 23.95 }],
                        ["600", { diameter: 26.74 }],
                        ["700", { diameter: 28.55 }],
                        ["750", { diameter: 29.41 }],
                        ["800", { diameter: 30.25 }],
                        ["900", { diameter: 31.85 }],
                        ["1000", { diameter: 33.32 }],
                        ["1250", { diameter: 37.56 }],
                        ["1500", { diameter: 40.68 }],
                        ["1750", { diameter: 43.58 }],
                        ["2000", { diameter: 46.27 }]
                    ]),
                    solidConductors: new Map([
                        ["14", { diameter: 3.15 }],
                        ["12", { diameter: 3.57 }],
                        ["10", { diameter: 4.11 }]
                    ]),
                }
            }],
            ["table6B", {
                types: new Set([
                    "R90XLPE_UNJACKETED_1000V",
                    "RW75XLPE_UNJACKETED_1000V",
                    "RW90XLPE_UNJACKETED_1000V"
                ]),
                specs: {
                    strandedConductors: new Map([
                        ["14", { diameter: 4.12 }],
                        ["12", { diameter: 4.6 }],
                        ["10", { diameter: 5.23 }],
                        ["8", { diameter: 5.99 }],
                        ["6", { diameter: 7.71 }],
                        ["4", { diameter: 8.93 }],
                        ["3", { diameter: 9.64 }],
                        ["2", { diameter: 10.46 }],
                        ["1", { diameter: 12.49 }],
                        ["1/0", { diameter: 13.53 }],
                        ["2/0", { diameter: 14.7 }],
                        ["3/0", { diameter: 16.0 }],
                        ["4/0", { diameter: 17.47 }],
                        ["250", { diameter: 19.17 }],
                        ["300", { diameter: 20.56 }],
                        ["350", { diameter: 21.79 }],
                        ["400", { diameter: 23.05 }],
                        ["450", { diameter: 24.17 }],
                        ["500", { diameter: 25.21 }],
                        ["600", { diameter: 27.24 }],
                        ["700", { diameter: 29.05 }],
                        ["750", { diameter: 29.91 }],
                        ["800", { diameter: 30.75 }],
                        ["900", { diameter: 32.35 }],
                        ["1000", { diameter: 33.82 }],
                        ["1250", { diameter: 38.32 }],
                        ["1500", { diameter: 41.44 }],
                        ["1750", { diameter: 44.34 }],
                        ["2000", { diameter: 47.03 }]
                    ]),
                    solidConductors: new Map([
                        ["14", { diameter: 3.91 }],
                        ["12", { diameter: 4.33 }],
                        ["10", { diameter: 4.87 }]
                    ])
                }
            }],
            ["table6C", {
                types: new Set([
                    "R90XLPE_JACKETED_600V",
                    "RW75XLPE_JACKETED_600V",
                    "R90EP_JACKETED_600V",
                    "RW75EP_JACKETED_600V",
                    "RW90XLPE_JACKETED_600V",
                    "RW90EP_JACKETED_600V"
                ]),
                specs: {
                    strandedConductors: new Map([
                        ["14", { diameter: 4.12 }],
                        ["12", { diameter: 4.6 }],
                        ["10", { diameter: 5.23 }],
                        ["8", { diameter: 6.75 }],
                        ["6", { diameter: 8.47 }],
                        ["4", { diameter: 9.69 }],
                        ["3", { diameter: 10.4 }],
                        ["2", { diameter: 11.22 }],
                        ["1", { diameter: 13.51 }],
                        ["1/0", { diameter: 14.55 }],
                        ["2/0", { diameter: 15.72 }],
                        ["3/0", { diameter: 17.02 }],
                        ["4/0", { diameter: 18.49 }],
                        ["250", { diameter: 21.21 }],
                        ["300", { diameter: 22.6 }],
                        ["350", { diameter: 23.83 }],
                        ["400", { diameter: 25.09 }],
                        ["450", { diameter: 26.21 }],
                        ["500", { diameter: 27.25 }],
                        ["600", { diameter: 30.04 }],
                        ["700", { diameter: 31.85 }],
                        ["750", { diameter: 32.71 }],
                        ["800", { diameter: 33.55 }],
                        ["900", { diameter: 35.15 }],
                        ["1000", { diameter: 36.62 }],
                        ["1250", { diameter: 42.38 }],
                        ["1500", { diameter: 45.5 }],
                        ["1750", { diameter: 48.4 }],
                        ["2000", { diameter: 51.09 }]
                    ]),
                    solidConductors: new Map([
                        ["14", { diameter: 3.91 }],
                        ["12", { diameter: 4.33 }],
                        ["10", { diameter: 4.87 }]
                    ])
                }
            }],
            ["table6D", {
                types: new Set([
                    "TWU_UNJACKETED",
                    "TWU75_UNJACKETED",
                    "RWU90XLPE_UNJACKETED"
                ]),
                specs: {
                    strandedConductors: new Map([
                        ["14", { diameter: 4.88 }],
                        ["12", { diameter: 5.36 }],
                        ["10", { diameter: 5.97 }],
                        ["8", { diameter: 7.76 }],
                        ["6", { diameter: 8.72 }],
                        ["4", { diameter: 9.95 }],
                        ["3", { diameter: 10.67 }],
                        ["2", { diameter: 11.48 }],
                        ["1", { diameter: 13.25 }],
                        ["1/0", { diameter: 14.28 }],
                        ["2/0", { diameter: 15.45 }],
                        ["3/0", { diameter: 16.76 }],
                        ["4/0", { diameter: 18.28 }],
                        ["250", { diameter: 20.2 }],
                        ["300", { diameter: 21.54 }],
                        ["350", { diameter: 22.81 }],
                        ["400", { diameter: 24.07 }],
                        ["450", { diameter: 25.19 }],
                        ["500", { diameter: 26.24 }],
                        ["600", { diameter: 29.02 }],
                        ["700", { diameter: 30.82 }],
                        ["750", { diameter: 31.69 }],
                        ["800", { diameter: 32.53 }],
                        ["900", { diameter: 34.13 }],
                        ["1000", { diameter: 35.6 }],
                        ["1250", { diameter: 39.08 }],
                        ["1500", { diameter: 42.96 }],
                        ["1750", { diameter: 45.86 }],
                        ["2000", { diameter: 48.55 }]
                    ]),
                    solidConductors: new Map([
                        ["14", { diameter: 4.67 }],
                        ["12", { diameter: 5.09 }],
                        ["10", { diameter: 5.63 }]
                    ])
                }
            }],
            ["table6E", {
                types: new Set([
                    "RPVU90_UNJACKETED_1000V",
                    "RPVU90_UNJACKETED_2000V"
                ]),
                specs: {
                    strandedConductors: new Map([
                        ["14", { diameter: 4.89 }],
                        ["12", { diameter: 5.36 }],
                        ["10", { diameter: 5.99 }],
                        ["8", { diameter: 7.77 }],
                        ["6", { diameter: 8.73 }],
                        ["4", { diameter: 9.95 }],
                        ["3", { diameter: 10.66 }],
                        ["2", { diameter: 11.48 }],
                        ["1", { diameter: 13.25 }],
                        ["1/0", { diameter: 14.27 }],
                        ["2/0", { diameter: 15.44 }],
                        ["3/0", { diameter: 16.76 }],
                        ["4/0", { diameter: 18.23 }],
                        ["250", { diameter: 20.18 }],
                        ["300", { diameter: 21.58 }],
                        ["350", { diameter: 22.88 }],
                        ["400", { diameter: 24.07 }],
                        ["450", { diameter: 25.19 }],
                        ["500", { diameter: 26.23 }],
                        ["600", { diameter: 29.04 }],
                        ["700", { diameter: 30.85 }],
                        ["750", { diameter: 31.71 }],
                        ["800", { diameter: 32.52 }],
                        ["900", { diameter: 34.15 }],
                        ["1000", { diameter: 35.62 }],
                        ["1250", { diameter: 39.86 }],
                        ["1500", { diameter: 42.98 }],
                        ["1750", { diameter: 45.88 }],
                        ["2000", { diameter: 48.57 }]
                    ])
                }
            }],
            ["table6F", {
                types: new Set([
                    "RPVU90_JACKETED_1000V",
                    "RPVU90_JACKETED_2000V"
                ]),
                specs: {
                    strandedConductors: new Map([
                        ["14", { diameter: 5.65 }],
                        ["12", { diameter: 6.12 }],
                        ["10", { diameter: 6.75 }],
                        ["8", { diameter: 9.29 }],
                        ["6", { diameter: 10.25 }],
                        ["4", { diameter: 11.47 }],
                        ["3", { diameter: 12.18 }],
                        ["2", { diameter: 13.76 }],
                        ["1", { diameter: 15.53 }],
                        ["1/0", { diameter: 16.55 }],
                        ["2/0", { diameter: 17.72 }],
                        ["3/0", { diameter: 19.04 }],
                        ["4/0", { diameter: 21.53 }],
                        ["250", { diameter: 23.48 }],
                        ["300", { diameter: 24.88 }],
                        ["350", { diameter: 26.18 }],
                        ["400", { diameter: 27.37 }],
                        ["450", { diameter: 28.49 }],
                        ["500", { diameter: 29.53 }],
                        ["600", { diameter: 32.34 }],
                        ["700", { diameter: 34.15 }],
                        ["750", { diameter: 35.01 }],
                        ["800", { diameter: 35.82 }],
                        ["900", { diameter: 37.45 }],
                        ["1000", { diameter: 38.92 }],
                        ["1250", { diameter: 44.68 }],
                        ["1500", { diameter: 47.8 }],
                        ["1750", { diameter: 50.7 }],
                        ["2000", { diameter: 53.39 }]
                    ])
                }
            }],
            ["table6G", {
                types: new Set([
                    "RPV90_UNJACKETED_2000V"
                ]),
                specs: {
                    strandedConductors: new Map([
                        ["14", { diameter: 4.89 }],
                        ["12", { diameter: 5.36 }],
                        ["10", { diameter: 5.99 }],
                        ["8", { diameter: 7.27 }],
                        ["6", { diameter: 8.23 }],
                        ["4", { diameter: 9.45 }],
                        ["3", { diameter: 10.16 }],
                        ["2", { diameter: 10.98 }],
                        ["1", { diameter: 13.01 }],
                        ["1/0", { diameter: 14.03 }],
                        ["2/0", { diameter: 15.2 }],
                        ["3/0", { diameter: 16.52 }],
                        ["4/0", { diameter: 17.99 }],
                        ["250", { diameter: 19.94 }],
                        ["300", { diameter: 21.34 }],
                        ["350", { diameter: 22.64 }],
                        ["400", { diameter: 23.83 }],
                        ["450", { diameter: 24.95 }],
                        ["500", { diameter: 25.99 }],
                        ["600", { diameter: 28.78 }],
                        ["700", { diameter: 30.59 }],
                        ["750", { diameter: 31.45 }],
                        ["800", { diameter: 32.26 }],
                        ["900", { diameter: 33.89 }],
                        ["1000", { diameter: 35.36 }],
                        ["1250", { diameter: 39.86 }],
                        ["1500", { diameter: 42.98 }],
                        ["1750", { diameter: 45.88 }],
                        ["2000", { diameter: 48.57 }]
                    ])
                }
            }],
            ["table6H", {
                types: new Set([
                    "RPV90_JACKETED_1000V"
                ]),
                specs: {
                    strandedConductors: new Map([
                        ["14", { diameter: 4.89 }],
                        ["12", { diameter: 5.36 }],
                        ["10", { diameter: 5.99 }],
                        ["8", { diameter: 7.51 }],
                        ["6", { diameter: 9.23 }],
                        ["4", { diameter: 10.45 }],
                        ["3", { diameter: 11.16 }],
                        ["2", { diameter: 11.98 }],
                        ["1", { diameter: 14.77 }],
                        ["1/0", { diameter: 15.79 }],
                        ["2/0", { diameter: 16.96 }],
                        ["3/0", { diameter: 18.28 }],
                        ["4/0", { diameter: 19.75 }],
                        ["250", { diameter: 22.46 }],
                        ["300", { diameter: 23.86 }],
                        ["350", { diameter: 25.16 }],
                        ["400", { diameter: 26.35 }],
                        ["450", { diameter: 27.47 }],
                        ["500", { diameter: 28.51 }],
                        ["600", { diameter: 30.54 }],
                        ["700", { diameter: 32.35 }],
                        ["750", { diameter: 33.21 }],
                        ["800", { diameter: 34.02 }],
                        ["900", { diameter: 35.65 }],
                        ["1000", { diameter: 37.12 }],
                        ["1250", { diameter: 43.14 }],
                        ["1500", { diameter: 46.26 }],
                        ["1750", { diameter: 49.16 }],
                        ["2000", { diameter: 51.85 }]
                    ])
                }
            }],
            ["table6I", {
                types: new Set([
                    "RPV90_JACKETED_2000V"
                ]),
                specs: {
                    strandedConductors: new Map([
                        ["14", { diameter: 5.65 }],
                        ["12", { diameter: 6.12 }],
                        ["10", { diameter: 7.51 }],
                        ["8", { diameter: 8.79 }],
                        ["6", { diameter: 9.75 }],
                        ["4", { diameter: 10.97 }],
                        ["3", { diameter: 11.68 }],
                        ["2", { diameter: 13.26 }],
                        ["1", { diameter: 15.29 }],
                        ["1/0", { diameter: 16.31 }],
                        ["2/0", { diameter: 17.48 }],
                        ["3/0", { diameter: 18.8 }],
                        ["4/0", { diameter: 21.29 }],
                        ["250", { diameter: 23.24 }],
                        ["300", { diameter: 24.64 }],
                        ["350", { diameter: 25.94 }],
                        ["400", { diameter: 27.13 }],
                        ["450", { diameter: 28.25 }],
                        ["500", { diameter: 29.29 }],
                        ["600", { diameter: 32.08 }],
                        ["700", { diameter: 33.89 }],
                        ["750", { diameter: 34.75 }],
                        ["800", { diameter: 35.56 }],
                        ["900", { diameter: 37.19 }],
                        ["1000", { diameter: 38.66 }],
                        ["1250", { diameter: 44.68 }],
                        ["1500", { diameter: 47.8 }],
                        ["1750", { diameter: 50.7 }],
                        ["2000", { diameter: 53.39 }]
                    ])
                }
            }],
            ["table6J", {
                types: new Set([
                    "TW",
                    "TW75"
                ]),
                specs: {
                    strandedConductors: new Map([
                        ["14", { diameter: 3.36 }],
                        ["12", { diameter: 3.84 }],
                        ["10", { diameter: 4.47 }],
                        ["8", { diameter: 5.99 }],
                        ["6", { diameter: 7.71 }],
                        ["4", { diameter: 8.93 }],
                        ["3", { diameter: 9.64 }],
                        ["2", { diameter: 10.46 }],
                        ["1", { diameter: 12.49 }],
                        ["1/0", { diameter: 13.53 }],
                        ["2/0", { diameter: 14.7 }],
                        ["3/0", { diameter: 16.0 }],
                        ["4/0", { diameter: 17.47 }],
                        ["250", { diameter: 19.43 }],
                        ["300", { diameter: 20.82 }],
                        ["350", { diameter: 22.05 }],
                        ["400", { diameter: 23.31 }],
                        ["450", { diameter: 24.43 }],
                        ["500", { diameter: 25.47 }],
                        ["600", { diameter: 28.26 }],
                        ["700", { diameter: 30.07 }],
                        ["750", { diameter: 30.93 }],
                        ["800", { diameter: 31.77 }],
                        ["900", { diameter: 33.37 }],
                        ["1000", { diameter: 34.84 }],
                        ["1250", { diameter: 39.08 }],
                        ["1500", { diameter: 42.2 }],
                        ["1750", { diameter: 45.1 }],
                        ["2000", { diameter: 47.79 }]
                    ]),
                    solidConductors: new Map([
                        ["14", { diameter: 3.15 }],
                        ["12", { diameter: 3.57 }],
                        ["10", { diameter: 4.11 }]
                    ])
                }
            }],
            ["table6K", {
                types: new Set([
                    "TWN75",
                    "T90 NYLON"
                ]),
                specs: {
                    strandedConductors: new Map([
                        ["14", { diameter: 2.8 }],
                        ["12", { diameter: 3.28 }],
                        ["10", { diameter: 4.17 }],
                        ["8", { diameter: 5.49 }],
                        ["6", { diameter: 6.45 }],
                        ["4", { diameter: 8.23 }],
                        ["3", { diameter: 8.94 }],
                        ["2", { diameter: 9.76 }],
                        ["1", { diameter: 11.33 }],
                        ["1/0", { diameter: 12.37 }],
                        ["2/0", { diameter: 13.54 }],
                        ["3/0", { diameter: 14.84 }],
                        ["4/0", { diameter: 16.31 }],
                        ["250", { diameter: 18.04 }],
                        ["300", { diameter: 19.44 }],
                        ["350", { diameter: 20.67 }],
                        ["400", { diameter: 21.93 }],
                        ["450", { diameter: 23.05 }],
                        ["500", { diameter: 24.09 }]
                    ]),
                    solidConductors: new Map([
                        ["14", { diameter: 2.59 }],
                        ["12", { diameter: 3.01 }],
                        ["10", { diameter: 3.81 }]
                    ])
                }
            }]
        ])
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
    table9: {
        rigidMetalConduit: {
            "16": { diameter: 16.05 },
            "21": { diameter: 21.23 },
            "27": { diameter: 27.0 },
            "35": { diameter: 35.41 },
            "41": { diameter: 41.25 },
            "53": { diameter: 52.91 },
            "63": { diameter: 63.22 },
            "78": { diameter: 78.49 },
            "91": { diameter: 90.68 },
            "103": { diameter: 102.87 },
            "129": { diameter: 128.85 },
            "155": { diameter: 154.76 }
        },
        flexibleMetalConduit: {
            "12": { diameter: 9.52 },
            "16": { diameter: 15.88 },
            "21": { diameter: 20.62 },
            "27": { diameter: 25.4 },
            "35": { diameter: 31.75 },
            "41": { diameter: 38.1 },
            "53": { diameter: 50.8 },
            "63": { diameter: 63.5 },
            "78": { diameter: 76.2 },
            "91": { diameter: 88.9 },
            "103": { diameter: 101.6 }
        },
        rigidPVCConduit: {
            "16": { diameter: 14.57 },
            "21": { diameter: 19.77 },
            "27": { diameter: 25.4 },
            "35": { diameter: 31.75 },
            "41": { diameter: 38.1 },
            "53": { diameter: 50.8 },
            "63": { diameter: 61.3 },
            "78": { diameter: 76.2 },
            "91": { diameter: 88.4 },
            "103": { diameter: 100.1 },
            "129": { diameter: 125.85 },
            "155": { diameter: 149.75 },
            "200": { diameter: 199.39 }
        },
        rigidTypeEB1PVCConduit: {
            "53": { diameter: 50.8 },
            "78": { diameter: 76.2 },
            "91": { diameter: 88.4 },
            "103": { diameter: 100.1 },
            "129": { diameter: 126.35 },
            "155": { diameter: 149.75 }
        },
        metallicLiquidTightFlexibleConduit: {
            "12": { diameter: 12.29 },
            "16": { diameter: 15.8 },
            "21": { diameter: 20.83 },
            "27": { diameter: 26.44 },
            "35": { diameter: 35.05 },
            "41": { diameter: 40.01 },
            "53": { diameter: 51.31 },
            "63": { diameter: 62.99 },
            "78": { diameter: 77.98 },
            "91": { diameter: 88.9 },
            "103": { diameter: 101.6 }
        },
        nonMetallicLiquidTightFlexibleConduit: {
            "12": { diameter: 12.07 },
            "16": { diameter: 15.49 },
            "21": { diameter: 20.45 },
            "27": { diameter: 25.91 },
            "35": { diameter: 34.54 },
            "41": { diameter: 40.01 },
            "53": { diameter: 51.69 }
        },
        electricalMetallicTubing: {
            "16": { diameter: 15.4 },
            "21": { diameter: 20.5 },
            "27": { diameter: 26.2 },
            "35": { diameter: 34.6 },
            "41": { diameter: 40.5 },
            "53": { diameter: 52.1 },
            "63": { diameter: 69.4 },
            "78": { diameter: 85.2 },
            "91": { diameter: 97.4 },
            "103": { diameter: 110.0 }
        },
        electricalNonMetallicTubing: {
            "16": { diameter: 14.58 },
            "21": { diameter: 19.66 },
            "27": { diameter: 25.37 },
            "35": { diameter: 33.73 },
            "41": { diameter: 39.57 },
            "53": { diameter: 51.18 }
        },
        rigidRTRCConduitMarkedIPS: {
            "16": { diameter: 17.27 },
            "21": { diameter: 22.61 },
            "27": { diameter: 29.34 },
            "35": { diameter: 38.1 },
            "41": { diameter: 44.2 },
            "53": { diameter: 56.26 },
            "63": { diameter: 69.6 },
            "78": { diameter: 84.84 },
            "103": { diameter: 109.72 },
            "129": { diameter: 136.14 },
            "155": { diameter: 162.05 }
        },
        rigidRTRCConduitMarkedID: {
            "16": { diameter: 11.94 },
            "21": { diameter: 18.29 },
            "27": { diameter: 24.64 },
            "35": { diameter: 30.99 },
            "41": { diameter: 37.34 },
            "53": { diameter: 50.29 },
            "63": { diameter: 63.0 },
            "78": { diameter: 75.69 },
            "91": { diameter: 88.39 },
            "103": { diameter: 101.09 },
            "129": { diameter: 126.24 }
        },
        HDPEConduitSchedule40: {
            "16": { diameter: 14.67 },
            "21": { diameter: 19.78 },
            "27": { diameter: 25.4 },
            "35": { diameter: 33.82 },
            "41": { diameter: 39.63 },
            "53": { diameter: 51.18 },
            "63": { diameter: 61.13 },
            "78": { diameter: 76.14 },
            "103": { diameter: 100.26 },
            "129": { diameter: 125.91 },
            "155": { diameter: 151.5 },
            "200": { diameter: 199.64 }
        },
        HDPEConduitSchedule80: {
            "16": { diameter: 12.75 },
            "21": { diameter: 17.7 },
            "27": { diameter: 23.06 },
            "35": { diameter: 31.1 },
            "41": { diameter: 36.63 },
            "53": { diameter: 47.82 },
            "63": { diameter: 56.97 },
            "78": { diameter: 71.38 },
            "103": { diameter: 94.56 },
            "129": { diameter: 119.25 },
            "155": { diameter: 142.86 }
        },
        HDPEDR9Conduit: {
            "16": { diameter: 15.47 },
            "21": { diameter: 19.65 },
            "27": { diameter: 24.86 },
            "35": { diameter: 31.51 },
            "41": { diameter: 36.1 },
            "53": { diameter: 45.19 },
            "63": { diameter: 54.63 },
            "78": { diameter: 66.56 },
            "103": { diameter: 85.36 },
            "129": { diameter: 105.54 },
            "155": { diameter: 125.63 },
            "200": { diameter: 163.58 },
            "275": { diameter: 203.84 }
        },
        HDPEDR11Conduit: {
            "16": { diameter: 16.3 },
            "21": { diameter: 20.73 },
            "27": { diameter: 26.21 },
            "35": { diameter: 33.31 },
            "41": { diameter: 38.27 },
            "53": { diameter: 47.91 },
            "63": { diameter: 57.92 },
            "78": { diameter: 70.6 },
            "103": { diameter: 90.52 },
            "129": { diameter: 111.93 },
            "155": { diameter: 133.22 },
            "200": { diameter: 173.49 },
            "275": { diameter: 216.19 }
        },
        HDPEDR13_5Conduit: {
            "16": { diameter: 17.02 },
            "21": { diameter: 21.63, },
            "27": { diameter: 27.33, },
            "35": { diameter: 34.73, },
            "41": { diameter: 39.93 },
            "53": { diameter: 50.18, },
            "63": { diameter: 60.68, },
            "78": { diameter: 73.95, },
            "103": { diameter: 94.83, },
            "129": { diameter: 117.25, },
            "155": { diameter: 139.57, },
            "200": { diameter: 181.74, },
            "275": { diameter: 226.49, }
        },
        HDPEDR15_5Conduit: {
            "16": { diameter: 17.43 },
            "21": { diameter: 22.14 },
            "27": { diameter: 27.97 },
            "35": { diameter: 35.54 },
            "41": { diameter: 40.85 },
            "53": { diameter: 51.4 },
            "63": { diameter: 62.24 },
            "78": { diameter: 75.85, },
            "103": { diameter: 97.29, },
            "129": { diameter: 120.29, },
            "155": { diameter: 143.19, },
            "200": { diameter: 186.43, },
            "275": { diameter: 232.35, }
        }

    }
}
