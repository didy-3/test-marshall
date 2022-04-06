
export async function getCatalog() {
    let catalog = await fetchMock()
    return catalog.catalog;
}

function fetchMock() {
    return Promise.resolve({
            catalog: {
                filters: [
                    "multi-room",
                    "Amazon alexa",
                    "Google assistant",
                    "spotify connect",
                    "Chromecast Built-in",
                    "Wi-Fi",
                    "Bluetooth",
                    "Airplay",
                    "3.5 mm Input",
                    "RCA Input",
                    "Portable (Battery)"
                ],
                speakers: [
                    {
                        name: "ACTON II BLUETOOTH",
                        img: "ACTON II BLUETOOTH.png",
                        price: 309.00,
                        filters: {
                            "multi-room": false,
                            "Amazon alexa": false,
                            "Google assistant": false,
                            "spotify connect": false,
                            "Chromecast Built-in": false,
                            "Wi-Fi": false,
                            "Bluetooth": true,
                            "Airplay": false,
                            "3.5 mm Input": false,
                            "RCA Input": false,
                            "Portable (Battery)": false,
                        },
                        desc: ''
                    },
                    {
                        name: "STANMORE II BLUETOOTH",
                        img: "STANMORE II BLUETOOTH.png",
                        price: 429.00,
                        filters: {
                            "multi-room": false,
                            "Amazon alexa": false,
                            "Google assistant": true,
                            "spotify connect": false,
                            "Chromecast Built-in": false,
                            "Wi-Fi": false,
                            "Bluetooth": true,
                            "Airplay": false,
                            "3.5 mm Input": false,
                            "RCA Input": false,
                            "Portable (Battery)": false,
                        },
                        desc: 'WITH GOOGLE ASSISTANT'
                    },
                    {
                        name: "WOBURN II BLUETOOTH",
                        img: "WOBURN II BLUETOOTH.png",
                        price: 619.00,
                        filters: {
                            "multi-room": false,
                            "Amazon alexa": false,
                            "Google assistant": false,
                            "spotify connect": false,
                            "Chromecast Built-in": false,
                            "Wi-Fi": false,
                            "Bluetooth": true,
                            "Airplay": false,
                            "3.5 mm Input": false,
                            "RCA Input": false,
                            "Portable (Battery)": false,
                        },
                        desc: ''
                    },
                    {
                        name: "STOCKWELL II",
                        img: "STOCKWELL II.png",
                        price: 239.99,
                        filters: {
                            "multi-room": false,
                            "Amazon alexa": false,
                            "Google assistant": false,
                            "spotify connect": false,
                            "Chromecast Built-in": false,
                            "Wi-Fi": false,
                            "Bluetooth": true,
                            "Airplay": false,
                            "3.5 mm Input": false,
                            "RCA Input": false,
                            "Portable (Battery)": true,
                        },
                        desc: 'portable'
                    },
                    {
                        name: "KILBURN II",
                        img: "KILBURN II.png",
                        price: 309.00,
                        filters: {
                            "multi-room": false,
                            "Amazon alexa": false,
                            "Google assistant": false,
                            "spotify connect": false,
                            "Chromecast Built-in": false,
                            "Wi-Fi": false,
                            "Bluetooth": true,
                            "Airplay": false,
                            "3.5 mm Input": false,
                            "RCA Input": false,
                            "Portable (Battery)": true,
                        },
                        desc: 'portable'
                    },
                    {
                        name: "TUFTON",
                        img: "TUFTON.png",
                        price: 499.00,
                        filters: {
                            "multi-room": false,
                            "Amazon alexa": false,
                            "Google assistant": false,
                            "spotify connect": false,
                            "Chromecast Built-in": false,
                            "Wi-Fi": false,
                            "Bluetooth": true,
                            "Airplay": false,
                            "3.5 mm Input": false,
                            "RCA Input": false,
                            "Portable (Battery)": true,
                        },
                        desc: 'portable'
                    },
                    {
                        name: "ACTON II VOICE",
                        img: "ACTON II VOICE.png",
                        price: 9999.00,
                        filters: {
                            "multi-room": false,
                            "Amazon alexa": false,
                            "Google assistant": true,
                            "spotify connect": false,
                            "Chromecast Built-in": false,
                            "Wi-Fi": false,
                            "Bluetooth": true,
                            "Airplay": false,
                            "3.5 mm Input": false,
                            "RCA Input": false,
                            "Portable (Battery)": false,
                        },
                        desc: 'WITH GOOGLE ASSISTANT'
                    },
                    {
                        name: "STANMORE II VOICE",
                        img: "STANMORE II VOICE.png",
                        price: 9999.00,
                        filters: {
                            "multi-room": false,
                            "Amazon alexa": false,
                            "Google assistant": true,
                            "spotify connect": false,
                            "Chromecast Built-in": false,
                            "Wi-Fi": false,
                            "Bluetooth": true,
                            "Airplay": false,
                            "3.5 mm Input": false,
                            "RCA Input": false,
                            "Portable (Battery)": false,
                        },
                        desc: 'WITH GOOGLE ASSISTANT'
                    },
                    {
                        name: "ACTON MULTI-ROOM",
                        img: "ACTON MULTI-ROOM.png",
                        price: 349.00,
                        filters: {
                            "multi-room": true,
                            "Amazon alexa": false,
                            "Google assistant": false,
                            "spotify connect": false,
                            "Chromecast Built-in": false,
                            "Wi-Fi": false,
                            "Bluetooth": true,
                            "Airplay": false,
                            "3.5 mm Input": false,
                            "RCA Input": false,
                            "Portable (Battery)": false,
                        },
                        desc: ''
                    },
                    {
                        name: "STANMORE MULTI-ROOM",
                        img: "STANMORE MULTI-ROOM.png",
                        price: 449.00,
                        filters: {
                            "multi-room": true,
                            "Amazon alexa": false,
                            "Google assistant": true,
                            "spotify connect": false,
                            "Chromecast Built-in": false,
                            "Wi-Fi": false,
                            "Bluetooth": true,
                            "Airplay": false,
                            "3.5 mm Input": false,
                            "RCA Input": false,
                            "Portable (Battery)": false,
                        },
                        desc: 'WITH GOOGLE ASSISTANT'
                    },
                    {
                        name: "WOBURN MULTI-ROOM",
                        img: "WOBURN MULTI-ROOM.png",
                        price: 599.00,
                        filters: {
                            "multi-room": true,
                            "Amazon alexa": false,
                            "Google assistant": false,
                            "spotify connect": false,
                            "Chromecast Built-in": false,
                            "Wi-Fi": false,
                            "Bluetooth": true,
                            "Airplay": false,
                            "3.5 mm Input": false,
                            "RCA Input": false,
                            "Portable (Battery)": false,
                        },
                        desc: ''
                    },

                ]
            }
        }
    )
}

