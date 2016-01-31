var OTR = (function (OTR){

    //  TODO: generate map from blogposts & refactor this

    OTR.map = (function () {
        var color2014 = '#3ca0d3',// blue
            color2015 = '#fa946e',// red
            colorAnother = '#a3e46b',// green
            markerAirport = 'airport',
            markerLodging = 'lodging',
            markerPost = 'star',
            map = L.mapbox.map('map', 'elhornair.i86a4e50'),
            markerLayer = L.mapbox.featureLayer().addTo(map);

        var geoJson = [
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [8.549079895019531, 47.45780853075031]},
                properties: {
                    title: 'Flughafen Zürich',
                    'marker-symbol': markerAirport,
                    'marker-color': color2014
                }
            }, {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [8.557062149047852, 50.04258876970728]},
                properties: {
                    title: 'Flughafen Frankfurt am Main',
                    'marker-symbol': markerAirport,
                    'marker-color': color2014
                }
            }, {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [-69.67254638671875, 18.428804841695086]},
                properties: {
                    title: 'Aeropuerto Las Américas',
                    'marker-symbol': markerAirport,
                    'marker-color': color2014
                }
            }, {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [-79.38617706298827, 9.06582194006815]},
                properties: {
                    title: 'Aeropuerto Internacional de Tocumen',
                    'marker-symbol': markerAirport,
                    'marker-color': color2014
                }
            }, {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [-79.5351791381836, 8.969523431038501]},
                properties: {
                    title: '¡Hola Panamà!',
                    image: '/content/blog/pics/20140413/panama_by_night.jpg',
                    url: '/blog/20140413_hola_panama',
                    'marker-symbol': markerPost,
                    'marker-color': color2014
                }
            }, {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [-79.53715324401855, 8.95214288967389]},
                properties: {
                    title: 'Casco Viejo - Downtown Panamà',
                    image: '/content/blog/pics/20140423/cinta_costera.jpg',
                    url: '/blog/20140423_casco_viejo',
                    'marker-symbol': markerPost,
                    'marker-color': color2014
                }
            }, {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [-78.89556884765625, 9.5486147523414]},
                properties: {
                    title: 'Guna Yala',
                    image: '/content/blog/pics/20140503/palms.jpg',
                    url: '/blog/20140503_guna_yala',
                    'marker-symbol': markerPost,
                    'marker-color': color2014
                }
            }, {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [-82.4315357208252, 8.43204551291853]},
                properties: {
                    title: 'David',
                    'marker-symbol': markerLodging,
                    'marker-color': color2014
                }
            }, {    type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [-82.43316650390625, 8.779225128474094]},
                properties: {
                    title: 'Boquete',
                    'marker-symbol': markerLodging,
                    'marker-color': color2014
                }
            }, {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [-82.22648620605469, 8.68760277162524]},
                properties: {
                    title: 'Lost & Found',
                    image: '/content/blog/pics/20140518/rain_forest.jpg',
                    url: '/blog/20140518_welcome_to_the_jungle',
                    'marker-symbol': markerPost,
                    'marker-color': color2014
                }
            }, {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [-82.24571228027344, 9.34168849215449]},
                properties: {
                    title: 'Bocas del Toro - Bocas Town',
                    'marker-symbol': markerLodging,
                    'marker-color': color2014
                }
            }, {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [-82.20708847045898, 9.347320490604648]},
                properties: {
                    title: 'Bocas del Toro - Isla Bastimentos',
                    'marker-symbol': markerLodging,
                    'marker-color': color2014
                }
            }, {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [-82.75468826293945, 9.65630399818669]},
                properties: {
                    title: 'Puerto Viejo de Talamanca',
                    'marker-symbol': markerLodging,
                    'marker-color': color2014
                }
            }, {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [-82.61478424072266, 9.500534980425044]},
                properties: {
                    title: 'Costa Rica - Pura Vida',
                    image: '/content/blog/pics/20140610/border_2.jpg',
                    url: '/blog/20140610_pura_vida',
                    'marker-symbol': markerPost,
                    'marker-color': color2014
                }
            }, {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [-83.50278854370117, 10.542369577211335]},
                properties: {
                    title: 'Tortuguero - Im Land der Riesenschildkröten',
                    image: '/content/blog/pics/20140623/butterfly.jpg',
                    url: '/blog/20140623_tortuguero',
                    'marker-symbol': markerPost,
                    'marker-color': color2014
                }
            }, {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [-84.64485168457031, 10.470763265031524]},
                properties: {
                    title: 'La Fortuna',
                    'marker-symbol': markerLodging,
                    'marker-color': color2014
                }
            }, {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [-85.836181640625, 10.301408031016377]},
                properties: {
                    title: 'Tamarindo',
                    'marker-symbol': markerLodging,
                    'marker-color': color2014
                }
            }, {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [-85.69232940673828, 10.551271734271523]},
                properties: {
                    title: 'El Coco',
                    'marker-symbol': markerLodging,
                    'marker-color': color2014
                }
            }, {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [-85.69790840148926, 11.540033288762634]},
                properties: {
                    title: 'Isla de Ometepe',
                    'marker-symbol': markerLodging,
                    'marker-color': color2014
                }
            }, {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [-85.96012115478516, 11.93453955357028]},
                properties: {
                    title: 'Granada',
                    'marker-symbol': markerLodging,
                    'marker-color': color2014
                }
            }, {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [-87.04733848571777, 12.381503157582879]},
                properties: {
                    title: 'Isla Los Brasiles',
                    'marker-symbol': markerLodging,
                    'marker-color': color2014
                }
            }, {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [-86.87747955322266, 12.434523021824024]},
                properties: {
                    title: 'León',
                    'marker-symbol': markerLodging,
                    'marker-color': color2014
                }
            }, {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [-86.27426147460938, 12.145738903416227]},
                properties: {
                    title: 'Hasta la vista Nicaragua',
                    image: '/content/blog/pics/20140702/granada.jpg',
                    url: '/blog/20140702_hasta_la_vista_nicaragua',
                    'marker-symbol': markerPost,
                    'marker-color': color2014
                }
            }, {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [-86.17096424102783, 12.144941762742599]},
                properties: {
                    title: 'Aeropuerto Internacional Augusto C. Sandino',
                    'marker-symbol': markerAirport,
                    'marker-color': color2014
                }
            }, {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [-95.3321886062622, 29.983858437390165]},
                properties: {
                    title: 'George Bush Intercontinental Airport',
                    'marker-symbol': markerAirport,
                    'marker-color': color2014
                }
            }, {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [-157.91653633117676, 21.32128031061892]},
                properties: {
                    title: 'Honolulu International Airport',
                    'marker-symbol': markerAirport,
                    'marker-color': color2014
                }
            }, {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [-157.82202064990997, 21.27271393669496]},
                properties: {
                    title: 'Waikīkī / Honolulu, Oʻahu',
                    'marker-symbol': markerLodging,
                    'marker-color': color2014
                }
            }, {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [-158.01807403564453, 21.514087317806545]},
                properties: {
                    title: 'Aloha Hawaiʻi',
                    image: '/content/blog/pics/20140707/sunset.jpg',
                    url: '/blog/20140707_aloha_hawaii',
                    'marker-symbol': markerPost,
                    'marker-color': color2014
                }
            }, {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [-156.0443115234375, 19.729866662553302]},
                properties: {
                    title: 'Kona International Airport at Keahole',
                    'marker-symbol': markerAirport,
                    'marker-color': color2014
                }
            }, {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [-155.9955596923828, 19.642587534013046]},
                properties: {
                    title: 'Kailua-Kona, Big Island',
                    'marker-symbol': markerLodging,
                    'marker-color': color2014
                }
            }, {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [-155.07751464843747, 19.71241464369998]},
                properties: {
                    title: 'Hilo, Big Island',
                    'marker-symbol': markerLodging,
                    'marker-color': color2014
                }
            }, {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [-159.33621883392334, 21.972101217632755]},
                properties: {
                    title: 'Lihue Airport',
                    'marker-symbol': markerAirport,
                    'marker-color': color2014
                }
            }, {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [-159.32066202163696, 22.074186731191713]},
                properties: {
                    title: 'Kapaa, Kauaʻi',
                    'marker-symbol': markerLodging,
                    'marker-color': color2014
                }
            }, {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [-159.7528839111328, 22.08866211118619]},
                properties: {
                    title: 'Polihale, Kauaʻi',
                    'marker-symbol': markerLodging,
                    'marker-color': color2014
                }
            }, {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [-159.66739654541016, 22.1669783711213]},
                properties: {
                    title: 'Kalalau, Kauaʻi',
                    'marker-symbol': markerLodging,
                    'marker-color': color2014
                }
            }, {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [-159.49813842773438, 22.067823457478664]},
                properties: {
                    title: 'Kauaʻi - Camping im Garten Hawaiis',
                    image: '/content/blog/pics/20140726/polihale.jpg',
                    url: '/blog/20140726_kauai',
                    'marker-symbol': markerPost,
                    'marker-color': color2014
                }
            }, {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [121.23138427734378, 25.07502651556338]},
                properties: {
                    title: 'Táiwān Táoyuán Gúojì Jīchǎng Táoyuán Jīchǎng',
                    'marker-symbol': markerAirport,
                    'marker-color': color2014
                }
            }, {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [115.16126632690433, -8.746650870360723]},
                properties: {
                    title: 'Bandara Internasional Ngurah Rai',
                    'marker-symbol': markerAirport,
                    'marker-color': color2014
                }
            }, {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [115.16658782958984, -8.802212011809926]},
                properties: {
                    title: 'Jimbaran, Bali',
                    'marker-symbol': markerLodging,
                    'marker-color': color2014
                }
            }, {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [116.0816287994385, -8.357833275889565]},
                properties: {
                    title: 'Gili Air',
                    'marker-symbol': markerLodging,
                    'marker-color': color2014
                }
            }, {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [116.03708267211917, -8.344925354623067]},
                properties: {
                    title: 'Gili Trawangan',
                    'marker-symbol': markerLodging,
                    'marker-color': color2014
                }
            }, {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [116.05236053466797, -8.498348974939065]},
                properties: {
                    title: 'Senggigi, Lombok',
                    'marker-symbol': markerLodging,
                    'marker-color': color2014
                }
            }, {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [116.27715110778809, -8.892703649897694]},
                properties: {
                    title: 'Kuta, Lombok',
                    'marker-symbol': markerLodging,
                    'marker-color': color2014
                }
            }, {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [116.36444091796878, -8.586452849594236]},
                properties: {
                    title: 'Selamat datang di lombok',
                    image: '/content/blog/pics/20140822/swing.jpg',
                    url: '/blog/20140822_lombok',
                    'marker-symbol': markerPost,
                    'marker-color': color2014
                }
            }, {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [115.26460647583008, -8.505139977027781]},
                properties: {
                    title: 'Ubud, Bali',
                    'marker-symbol': markerLodging,
                    'marker-color': color2014
                }
            }, {// TODO: goodbye bali blogpost is not linked
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [115.16869068145752, -8.703341358911395]},
                properties: {
                    title: 'Legian, Bali',
                    'marker-symbol': markerLodging,
                    'marker-color': color2014
                }
            }, {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [121.02706432342532, 14.512177239772166]},
                properties: {
                    title: 'Paliparang Pandaigdig ng Ninoy Aquino',
                    'marker-symbol': markerAirport,
                    'marker-color': color2014
                }
            }, {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [115.21636962890628, -8.381355164877718]},
                properties: {
                    title: 'Selamat tinggal Bali',
                    image: '/content/blog/pics/20140825/jatiluwih.jpg',
                    url: '/blog/20140825_bali',
                    'marker-symbol': markerPost,
                    'marker-color': color2014
                }
            }, {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [55.354957580566406, 25.25463261974945]},
                properties: {
                    title: 'Maṭār Dubayy ad-duwalī',
                    'marker-symbol': markerAirport,
                    'marker-color': color2014
                }
// TODO: uncomment once the Dubai blogpost is online
//            }, {
//                type: 'Feature',
//                geometry: {
//                    type: 'Point',
//                    coordinates: [55.14085292816162, 25.070478555947957]},
//                properties: {
//                    title: 'TBD',
//                    image: '/content/blog/pics/20140822/tbd.jpg',
//                    url: '/blog/20140822_tbd',
//                    'marker-symbol': markerPost,
//                    'marker-color': color2014
//                }
            }, {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [6.108913421630859, 46.236615111857255]},
                properties: {
                    title: 'Aéroport International de Genève',
                    'marker-symbol': markerAirport,
                    'marker-color': color2014
                }
            }, {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [6.108913421630859, 46.236615111857255]},
                properties: {
                    title: 'Aéroport International de Genève',
                    'marker-symbol': markerAirport,
                    'marker-color': color2015
                }
            }, {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [-0.451812744140625, 51.469407923261336]},
                properties: {
                    title: 'London Heathrow Airport',
                    'marker-symbol': markerAirport,
                    'marker-color': color2015
                }
            }, {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [100.75149536132812, 13.69269058732703]},
                properties: {
                    title: 'Bangkok Suvarnabhumi Airport',
                    'marker-symbol': markerAirport,
                    'marker-color': color2015
                }
            }, {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [100.52777767181396, 13.717414813898882]},
                properties: {
                    title: 'Unterwegs nach Südostasien',
                    image: '/content/blog/pics/20151209/rooftop_pool.jpg',
                    url: '/blog/20151209_unterwegs_nach_sea',
                    'marker-symbol': markerPost,
                    'marker-color': color2015
                }
            }, {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [100.26260375976562, 16.817687088808363]},
                properties: {
                    title: 'Bangkok – Chiang Mai',
                    image: '/content/blog/pics/20151218/bangkok_hua_lamphong.jpg',
                    url: '/blog/20151218_bangkok_chiang_mai',
                    'marker-symbol': markerPost,
                    'marker-color': color2015
                }
            }, {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [98.97828429937363, 18.80170874229552]},
                properties: {
                    title: 'Chiang Mai',
                    'marker-symbol': markerLodging,
                    'marker-color': color2015
                }
            }, {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [98.68537902832031, 17.794458210705457]},
                properties: {
                    title: 'Zu Besuch in Huay-Mai-Hok',
                    image: '/content/blog/pics/20151231/karen_people.jpg',
                    url: '/blog/20151231_huay-mai-hok',
                    'marker-symbol': markerPost,
                    'marker-color': color2015
                }
            }, {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [98.96415710449219, 19.369777963323845]},
                properties: {
                    title: 'Chiang Dao',
                    'marker-symbol': markerLodging,
                    'marker-color': color2015
                }
            }, {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [19.74182342686909, 98.96347045898438]},
                properties: {
                    title: 'Ang Khang',
                    'marker-symbol': markerLodging,
                    'marker-color': color2015
                }
            }, {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [98.44058990478516, 19.358765334468117]},
                properties: {
                    title: 'Pai',
                    'marker-symbol': markerLodging,
                    'marker-color': color2015
                }
            }, {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [97.96568870544434, 19.30036979184848]},
                properties: {
                    title: 'Mae Hong Son',
                    'marker-symbol': markerLodging,
                    'marker-color': color2015
                }
            }, {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [97.8387451171875, 19.40977345524309]},
                properties: {
                    title: 'Motorradtour durch Nordthailand',
                    image: '/content/blog/pics/20160124/chiang_dao_to_pai.jpg',
                    url: '/blog/20160124_nordthailand',
                    'marker-symbol': markerPost,
                    'marker-color': color2015
                }
            }
        ];

        markerLayer.on('layeradd', function(e) {
            var marker = e.layer,
                feature = marker.feature;

            // create custom popup content
            var popupContent =  '' +
                (feature.properties.url ? ('<a target="_blank" class="popup" href="' + feature.properties.url + '">') : '') +
                (feature.properties.image ? '<img src="' + feature.properties.image + '">' : '') +
                '<h2>' + feature.properties.title + '</h2>' +
                (feature.properties.url ? '</a>' : '');

            marker.bindPopup(popupContent,{
                closeButton: false,
                minWidth: 240
            });
        });

        markerLayer.setGeoJSON(geoJson);

        map.setView([10.88, -21.53], 1);
    })();

    return OTR;
})(OTR || {});