//creating our map
const feiMap = L.map('map').setView([48.15184603697047, 17.07333923512792], 18);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(feiMap);

//creating some icons
const icons = L.Icon.extend({
    options: {
        iconSize:     [27, 27],
        iconAnchor:   [13, 27],
        popupAnchor:  [1, -24]
    }
});


//creating object from icon classes
const bus = new icons({iconUrl: 'images/bus.png'}),
    tram = new icons({iconUrl: 'images/tram.png'}),
    restCafe = new icons({iconUrl: 'images/restaurant.png'}),
    gps = new icons({iconUrl: 'images/gps.png'});


//the marker for main gate of fei
L.marker([48.15184603697047, 17.07333923512792],{icon:gps}).addTo(feiMap)
    .bindPopup('VSTUP FEI STU.<br> lat:48.151749 <br>  lng:17.073291')
    .openPopup();


//the router for creating routes
const con = L.Routing.control({
    waypoints: [
        L.latLng(null),
        L.latLng(48.15184603697047, 17.07333923512792)
    ],
    routeWhileDragging: true,
    geocoder: L.Control.Geocoder.nominatim()
}).addTo(feiMap);


//getting the distance and displaying it at the screen
con.on('routesfound', function (e) {
    distance = e.routes[0].summary.totalDistance;
    time = e.routes[0].summary.totalTime;
    document.getElementById("distance").innerHTML="vzdialenosť medzi vybranými súradnicami je ( "+distance+" ) metrov";
});


//All blocks of fei with description
const AllBlocks = [
    {"type": "FeatureCollection",
        "features": [
            {
                "type": "Feature",
                "properties": {
                    "name": "Block A",
                    "popupContent": "Block A<br> 5.POSCHODIE :Ústav jadrového a fyzikálneho inžinierstva,<br>" +
                        "6.POSCHODIE : Inštitút komunikácie a aplikovanej lingvistiky,<br>" +
                        "\"coordinates\": [48.151891, 17.073043]"
                },
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [
                        [
                            [
                                17.07254469394684,
                                48.15182898379371
                            ],
                            [
                                17.073880434036255,
                                48.15182898379371
                            ],
                            [
                                17.073880434036255,
                                48.15196140365195
                            ],
                            [
                                17.07254469394684,
                                48.15196140365195
                            ],
                            [
                                17.07254469394684,
                                48.15182898379371
                            ]
                        ]
                    ]
                }
            }
        ]
    }
    ,
    {
        "type": "FeatureCollection",
        "features": [
            {
                "type": "Feature",
                "properties": {"name": "Block B",
                    "popupContent": "Block B<br> 3.POSCHODIE : Ústav elektrotechniky,<br>" +
                        "6.POSCHODIE : Ústav multimediálnych informačných a komunikačných technológií,<br>" +
                        "\"coordinates\": [17.073631,48.152391]"},
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [
                        [
                            [
                                17.07299530506134,
                                48.15232466177886
                            ],
                            [
                                17.07436054944992,
                                48.15232466177886
                            ],
                            [
                                17.07436054944992,
                                48.15246781698457
                            ],
                            [
                                17.07299530506134,
                                48.15246781698457
                            ],
                            [
                                17.07299530506134,
                                48.15232466177886
                            ]
                        ]
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "name": "Block C",
                    "popupContent": "Block C<br> 3.POSCHODIE : Ústav elektroenergetiky a aplikovanej elektrotechniky,<br>" +
                        "5.POSCHODIE : Ústav informatiky a matematiky<br>" +
                        "\"coordinates\": [17.073664,48.153381]"
                },
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [
                        [
                            [
                                17.072818279266357,
                                48.152831071526535
                            ],
                            [
                                17.073875069618225,
                                48.152831071526535
                            ],
                            [
                                17.073875069618225,
                                48.15297780415916
                            ],
                            [
                                17.072818279266357,
                                48.15297780415916
                            ],
                            [
                                17.072818279266357,
                                48.152831071526535
                            ]
                        ]
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "name": "Block D",
                    "popupContent": "Block D<br> 1.POSCHODIE : Ústav automobilovej mechatroniky,<br>" +
                        "4.POSCHODIE : Ústav robotiky a kybernetiky<br>" +
                        "\"coordinates\": [17.073449,48.152908]"
                },
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [
                        [
                            [
                                17.073196470737457,
                                48.153332108054464
                            ],
                            [
                                17.074368596076965,
                                48.153332108054464
                            ],
                            [
                                17.074368596076965,
                                48.15348062865663
                            ],
                            [
                                17.073196470737457,
                                48.15348062865663
                            ],
                            [
                                17.073196470737457,
                                48.153332108054464
                            ]
                        ]
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "name": "Block E",
                    "popupContent": "Block E<br>, 6.POSCHODIE : Ústav elektroniky a fotoniky,<br>" +
                        "\"coordinates\": [17.073305,48.153921]"
                },
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [
                        [
                            [
                                17.072815597057343,
                                48.153840297249474
                            ],
                            [
                                17.073885798454285,
                                48.153840297249474
                            ],
                            [
                                17.073885798454285,
                                48.15398165884208
                            ],
                            [
                                17.072815597057343,
                                48.15398165884208
                            ],
                            [
                                17.072815597057343,
                                48.153840297249474
                            ]
                        ]
                    ]
                }
            }
        ]
    }
    ];


//function to display the features
function display(feature, layer){
    if (feature.properties && feature.properties.popupContent){
        layer.bindPopup(feature.properties.popupContent);
    }
}

L.geoJSON(AllBlocks,{
    onEachFeature:display
}).addTo(feiMap);



                   //favourite part
//creating listener to show the cafes and restaurants on the maps
document.getElementById('btn').addEventListener('click',()=>{

    const faynfood = [48.151306799443695, 17.070482336140543];
    const freefood = [48.15242031394946, 17.06892155790753];
    const dodopizza = [48.14962083749534, 17.07057345531065];
    const drag = [48.151102150876234, 17.06723447392013];
    const fiitfood = [48.15355819243595, 17.071903137537337];
    const mlynskakoliba = [48.15476308917688, 17.072350989674245];
    const UEgona = [48.154017831170634, 17.077319251437604];
    const idyla = [48.15379793325742, 17.078050742624285];
    const pizzamiska = [48.149433561702395, 17.07873909242424];
    const estevicka = [48.15580237872885, 17.071501482635398];

    L.marker(pizzamiska,{icon:restCafe}).addTo(feiMap).bindPopup(" Pizza u Miška<br> Pizza restaurant<br> open until 21:30");
    L.marker(idyla,{icon:restCafe}).addTo(feiMap).bindPopup("Idyla Cafe & Restaurant<br> Restaurant<br> open until 22:00");
    L.marker(mlynskakoliba,{icon:restCafe}).addTo(feiMap).bindPopup("Mlynská Koliba<br> Restaurant<br> open until 22:00");
    L.marker(estevicka,{icon:restCafe}).addTo(feiMap).bindPopup("Estévéčka<br> Hamburger restaurant<br> open until 22:00");
    L.marker(fiitfood,{icon:restCafe}).addTo(feiMap).bindPopup("FIITFOOD<br> Restaurant<br> open until 15:00");
    L.marker(freefood,{icon:restCafe}).addTo(feiMap).bindPopup(" FreeFood<br>Food court<br> open until 15:00");
    L.marker(faynfood,{icon:restCafe}).addTo(feiMap).bindPopup(" FaynFood<br>Food court<br> open until 15:30");
    L.marker(dodopizza,{icon:restCafe}).addTo(feiMap).bindPopup(" Dodo pizza<br> Restaurant<br> open until 16:00");
    L.marker(drag,{icon:restCafe}).addTo(feiMap).bindPopup(" Reštaurácia Drag<br> Restaurant<br> open until 22:00");
    L.marker(UEgona,{icon:restCafe}).addTo(feiMap).bindPopup("U Egona S.r.o<br> Restaurant");
})

//creating variables for staions coordinates
const zoo1 = [48.154100, 17.075150];
const zoo2 = [48.154520, 17.074555];
const zoo3 = [48.154620, 17.075735];
const zoo4 = [48.154040, 17.076897];

const TV1 = [48.155974, 17.071952];
const TV2 = [48.156331, 17.071714];

const lanf1=[48.145537, 17.077728];
const lanf2=[48.144810, 17.078488];
const lanfT1=[48.145140, 17.078060];
const lanfT2=[48.145156, 17.078167];

const botanickaBus1=[48.148295, 17.071995];
const botanickaBus2=[48.147899, 17.072326];
const botanickaTram1=[48.148104, 17.071754];
const botanickaTram2=[48.148113, 17.072466];


//showing them on the map
L.marker(zoo1,{icon:bus}).addTo(feiMap).bindPopup("Zoo <br> bus stop: <br> 31 ,39 ,N31");
L.marker(TV1,{icon:bus}).addTo(feiMap).bindPopup("Televízia <br> bus stop: <br> 31 ,39 ,N31");
L.marker(TV2,{icon:bus}).addTo(feiMap).bindPopup("Televízia <br> bus stop: <br> 31 ,39 ,N31");
L.marker(zoo2,{icon:bus}).addTo(feiMap).bindPopup("Zoo <br> bus stop: <br> 31 ,39 ,N31");
L.marker(zoo3,{icon:bus}).addTo(feiMap).bindPopup("Zoo <br> bus stop: <br> 30 ,32 ,37 ,92 ,192 ,N29");
L.marker(zoo4,{icon:bus}).addTo(feiMap).bindPopup("Zoo <br> bus stop: <br> 30 ,32 ,37 ,92 ,192 ,N29");
L.marker(botanickaBus1,{icon:bus}).addTo(feiMap).bindPopup("Botanická záhrada <br> bus stop: <br> 29 ,32 ,N29, N33, N34");
L.marker(botanickaBus2,{icon:bus}).addTo(feiMap).bindPopup("Botanická záhrada <br> bus stop: <br> 29 ,32 ,N29, N33, N34");
L.marker(lanf1,{icon:bus}).addTo(feiMap).bindPopup("Lanfranconi <br> bus stop: <br> 29 ,30 ,31, 37, 39, N31, N33, N34");
L.marker(lanf2,{icon:bus}).addTo(feiMap).bindPopup("Lanfranconi <br> bus stop: <br> 29 ,30 ,31, 37, 39, N31, N33, N34");

L.marker(botanickaTram1,{icon:tram}).addTo(feiMap).bindPopup("Botanická záhrada <br> Tram stop: <br> 4, 9");
L.marker(botanickaTram2,{icon:tram}).addTo(feiMap).bindPopup("Botanická záhrada <br> Tram stop: <br> 4, 9");
L.marker(lanfT1,{icon:tram}).addTo(feiMap).bindPopup("Lanfranconi <br> Tram stop: <br> 4, 9");
L.marker(lanfT2,{icon:tram}).addTo(feiMap).bindPopup("Lanfranconi<br> Tram stop: <br> 4, 9");





