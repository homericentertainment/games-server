const AnimeRankingAnimeInfo = require('../data/anime-ranking/animeInfo')
// add()

async function add() {
    const animes = [
        {
            "name": "The Irregular at Magic High School",
            "image": "https://e1.pxfuel.com/desktop-wallpaper/721/122/desktop-wallpaper-mahouka-koukou-no-rettousei.jpg",
            "characters": {
                "protagonist": {
                    name: "Tatsuya Shiba",
                    image: "https://static.wikia.nocookie.net/p__/images/3/33/Mahouka27634.jpg/revision/latest?cb=20150323035039&path-prefix=protagonist"
                },
                "antagonist": {
                    name: " Katsuto Jyumonji",
                    image: "https://external-preview.redd.it/bvCqB1Lbd93zIMTv1xXVrOLGHEiVgN1pyEarNP_biic.png?auto=webp&s=3f25229702f7eae3cfef2d5246b7178983937ce8"
                },
                "waifu": {
                    name: "Miyuki Shiba",
                    image: "https://w0.peakpx.com/wallpaper/350/237/HD-wallpaper-anime-anime-girls-shiba-miyuki-long-hair-blue-eyes-mahouka-koukou-no-rettousei-looking-at-viewer-standing-blue-hair-tie-women-pixiv-thumbnail.jpg"
                }
            }
        },
        {
            "name": "Rurouni Kenshin",
            "image": "https://drive.google.com/file/d/1Hq7d9FYnJIJRe2uLIDu09rf9sGCQA1l7/view?usp=sharing",
            "characters": {
                "protagonist": {
                    name: " Samurai X",
                    image: "https://images.saymedia-content.com/.image/t_share/MTczODYwNTM2NTI0Njc4MjA4/rurounikenshinthemes.jpg"
                },
                "antagonist": {
                    name: "Makoto Shishio",
                    image: "https://upload.wikimedia.org/wikipedia/en/b/b3/ShishioMakoto.png"
                },
                "waifu": {
                    name: "Kaoru Kamiya",
                    image: "https://static.wikia.nocookie.net/doblaje/images/f/ff/Kaoru_Kamiya.png/revision/latest?cb=20190816010014&path-prefix=es"
                }
            }
        },
        {
            "name": "Ghost in the Shell: Stand Alone Complex",
            "image": "https://drive.google.com/file/d/19b1FJ7dEzBndHBTy7NkxXo6vkvlSPJ4J/view?usp=sharing",
            "characters": {
                "protagonist": {
                    name: " Major Motoko Kusanagi",
                    image: "https://drive.google.com/file/d/1q5_Kq8FWAJiTwhVI3gE432AveGaOsf9b/view?usp=sharing"
                },
                "antagonist": {
                    name: "Hideo Kuzeo",
                    image: "https://static.wikia.nocookie.net/ghostintheshell/images/d/de/VisualBook.jpg/revision/latest?cb=20200208050819&path-prefix=en"
                },
                "waifu": {
                    name: "Major Motoko Kusanagi",
                    image: "https://drive.google.com/file/d/1y-LyDrkEkMd2Oy6kDJcrjCQVII9WN2_N/view?usp=sharing"
                }
            }
        },
        {
            "name": "Mobile Suit Gundam",
            "image": "https://static.wikia.nocookie.net/gundam/images/f/f8/Mobile_Suit_Gundam_Poster.jpg/revision/latest?cb=20190330030719",
            "characters": {
                "protagonist": {
                    name: " Amuro Ray",
                    image: "https://drive.google.com/file/d/1UKmgO5w4UF89_xMqHXEigAJRN4fUs9IA/view?usp=sharing"
                },
                "antagonist": {
                    name: " Char Aznable",
                    image: "https://static.wikia.nocookie.net/gundam/images/8/86/Char_Aznable_One_Year_War.jpg/revision/latest/scale-to-width-down/1200?cb=20100401174631"
                },
                "waifu": {
                    name: "Sayla Mass",
                    image: "https://static.zerochan.net/Sayla.Mass.full.3261598.png"
                }
            }
        },
        {
            "name": "Blue Exorcist",
            "image": "https://drive.google.com/file/d/15PRZMmaWCfAirWCjexrYBArutb0ehPdW/view?usp=sharing",
            "characters": {
                "protagonist": {
                    name: " Rin Okumura",
                    image: "https://drive.google.com/file/d/1KSBFYGoa5gU7IA0nzsRQZ8kOcrtUCQ8q/view?usp=sharing"
                },
                "antagonist": {
                    name: " satan",
                    image: "https://drive.google.com/file/d/1uVwQP7-PCXhgpEP7pRWSFG1F3hdXsLAC/view?usp=sharing"
                },
                "waifu": {
                    name: "Shura Kirigakure",
                    image: "https://markerix.weebly.com/uploads/5/4/6/7/54673641/20161229161258_orig.png"
                }
            }
        },
        {
            "name": "Ergo Proxy",
            "image": "https://drive.google.com/file/d/1FtSLiB3Hw63NJafJB-thOk-r7Kokgz63/view?usp=sharing",
            "characters": {
                "protagonist": {
                    name: "re-l mayer",
                    image: "https://drive.google.com/file/d/11SEQgQcsfvseyuXReTlw6pb8ojD0zk3f/view?usp=drive_link"
                },
                "antagonist": {
                    name: "Proxy One",
                    image: "https://drive.google.com/file/d/1KulwtkYe_ZBQIBkaRdWYbi9pCnhnLCiO/view?usp=sharing"
                },
                "waifu": {
                    name: " Pino",
                    image: "https://drive.google.com/file/d/1oJRr0LuB-Yx_1Pp-iLEcvUgIlqz4Zg2R/view?usp=sharing"
                }
            }
        },
        {
            "name": "Black Lagoon",
            "image": "https://drive.google.com/file/d/1aAwzhci2yS16R4Fpfd5u7mQlfZtdzv0y/view?usp=sharing",
            "characters": {
                "protagonist": {
                    name: "Rokurou Okajima",
                    image: "https://cdn-us.anidb.net/images/main/54579.jpg"
                },
                "antagonist": {
                    name: "Balalaika",
                    image: "https://drive.google.com/file/d/11o-XjNEG25wT47yY7FkwIlouDXSvSlqM/view?usp=sharing"
                },
                "waifu": {
                    name: "Ravy",
                    image: "https://w0.peakpx.com/wallpaper/796/24/HD-wallpaper-revy-black-lagoon-anime-black-lagoon.jpg"
                }
            }
        },
        {
            "name": "High school DXD",
            "image": "https://drive.google.com/file/d/1SFTWuW55mkU1-yb1IKtjAjTOQB33bKxH/view?usp=sharing",
            "characters": {
                "protagonist": {
                    name: "Issei Hyoudou",
                    image: "https://highschooldxd.fandom.com/pl/wiki/Issei_Hyoudou"
                },
                "antagonist": {
                    name: " fallen angels",
                    image: "https://img.wattpad.com/0425b875bf85191018d0c49c7af59937c620b7ff/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f6934322d6d626c43502d525056413d3d2d3738303432343733312e313563326332373331643131633430383539383032313832373733392e6a7067?s=fit&w=720&h=720"
                },
                "waifu": {
                    name: "Rias Gremory",
                    image: "https://static.wikia.nocookie.net/highschooldxd/images/1/14/Rias_uniform.jpg/revision/latest?cb=20130413060054"
                }
            }
        },
        {
            "name": "Durarara!!",
            "image": "https://drive.google.com/file/d/1SFTWuW55mkU1-yb1IKtjAjTOQB33bKxH/view?usp=sharing",
            "characters": {
                "protagonist": {
                    name: "Mikado Ryuugamine",
                    image: "https://kawaii-mobile.com/2012/05/durarara/durarara-mikado-ryugamine-360x640/"
                },
                "antagonist": {
                    name: " Izaya Orihara",
                    image: "https://drive.google.com/file/d/196gZUr1pQjMz555Yd8HMGsAk27RzhcT0/view?usp=sharing"
                },
                "waifu": {
                    name: "Celty Sturluson",
                    image: "https://drive.google.com/file/d/1jm4D2FlmOVszHsQEe9LNoknXl3uv6WR6/view?usp=sharing"
                }
            }
        },
        {
            "name": "Mirai Nikki ",
            "image": "https://drive.google.com/file/d/11dPF2ibU2rUe3qhDTWW7DUEKY4Qt29aT/view?usp=drive_link",
            "characters": {
                "protagonist": {
                    name: " Yukiteru Amano",
                    image: "https://drive.google.com/file/d/1n8qDSk4RFlVNfJJu7bzvPS1Sk64b7ABP/view?usp=drive_link"
                },
                "antagonist": {
                    name: " Yuno Gasai ",
                    image: "https://w0.peakpx.com/wallpaper/380/946/HD-wallpaper-yuno-gasai-anime-anime-edit-anime-girl-anime-future-diary-gasai-yuno-mirai-nikki-thumbnail.jpg"
                },
                "waifu": {
                    name: " Yuno Gasai",
                    image: "https://w0.peakpx.com/wallpaper/708/337/HD-wallpaper-mirai-nikki-anime-art-asasins-girl-nikki-pink-random-waifu-thumbnail.jpg"
                }
            }
        },
        {
            "name": "Akame ga Kill!",
            "image": "https://drive.google.com/file/d/1H5ZfRmP9BClzgy4P71NLRADuLFv_mZMW/view?usp=sharing",
            "characters": {
                "protagonist": {
                    name: "Tatsumi",
                    image: "https://w0.peakpx.com/wallpaper/786/144/HD-wallpaper-akame-ga-kill-anime-designs-drawings-entertainment-japan-japon-manga-mine-tatsumi-thumbnail.jpg"
                },
                "antagonist": {
                    name: " Esdeath",
                    image: "https://drive.google.com/file/d/1r-Ip0afA6bLSHShlawdqkE83MrK84Evd/view?usp=sharing"
                },
                "waifu": {
                    name: "Sheele",
                    image: "https://w0.peakpx.com/wallpaper/787/829/HD-wallpaper-soul-eater-maka-thumbnail.jpg"
                }
            }
        },
        {
            "name": "Death Parade",
            "image": "https://drive.google.com/file/d/1A9UtQHi4MeqNoR_zqwL70tJGpgD-vtMa/view?usp=sharing",
            "characters": {
                "protagonist": {
                    name: "Decim",
                    image: "https://i.pinimg.com/236x/61/5e/b3/615eb34be4c92c448e7bed1354104c1f--death-parade-anime-guys.jpg"
                },
                "antagonist": {
                    name: " Nona",
                    image: "https://i.pinimg.com/474x/53/20/c7/5320c7409fdcc47b9341a35a91f44ae5.jpg"
                },
                "waifu": {
                    name: "Chiyuki",
                    image: "https://death-parade.fandom.com/wiki/Chiyuki/Image_Gallery"
                }
            }
        },
        {
            "name": "Soul Eater",
            "image": "https://w0.peakpx.com/wallpaper/787/829/HD-wallpaper-soul-eater-maka-thumbnail.jpg",
            "characters": {
                "protagonist": {
                    name: " Maka Albarn",
                    image: "https://drive.google.com/file/d/1ilFTkzEx_hZfJCytpFeK8vDeTP19zYrA/view?usp=sharing"
                },
                "antagonist": {
                    name: " Medusa Gorgoni ",
                    image: "https://drive.google.com/file/d/17Z5xw0aRq8RDPauZ4mZVnJYYG5W-XgZF/view?usp=sharing"
                },
                "waifu": {
                    name: "Tsubaki Nakatsukasa ",
                    image: "https://drive.google.com/file/d/18x0oyvbGyP3q99NVPog7JanwfXgtcmp1/view?usp=sharing"
                }
            }
        },
        {
            "name": "The Promised Neverland",
            "image": "https://w0.peakpx.com/wallpaper/280/964/HD-wallpaper-emma-norman-e-ray-the-promised-neverland-tpn-thumbnail.jpg ",
            "characters": {
                "protagonist": {
                    name: " Emma   ",
                    image: "https://w0.peakpx.com/wallpaper/61/17/HD-wallpaper-the-promised-neverland-emma-the-promised-neverland-yakusoku-no-neverland-thumbnail.jpg"
                },
                "antagonist": {
                    name: "Isabella ",
                    image: "https://cdna.artstation.com/p/assets/images/images/030/102/982/large/jayson-reyes-isabella-final.jpg?1599610599"
                },
                "waifu": {
                    name: " Norman ",
                    image: "https://w0.peakpx.com/wallpaper/963/216/HD-wallpaper-norman-the-promised-neverland-yakusoku-no-neverland-thumbnail.jpg"
                }
            }
        },
        {
            "name": "Assassination Classroom",
            "image": "https://w0.peakpx.com/wallpaper/569/461/HD-wallpaper-a-s-class-assassination-classroom-thumbnail.jpg",
            "characters": {
                "protagonist": {
                    name: " Nagisa Shiota ",
                    image: "https://w0.peakpx.com/wallpaper/678/868/HD-wallpaper-class-assassination-nagisa-shiota-anime-weapons-slayer-boy-thumbnail.jpg"
                },
                "antagonist": {
                    name: "Koro-sensei ",
                    image: "https://w0.peakpx.com/wallpaper/505/769/HD-wallpaper-koro-sensei-anime-thumbnail.jpg"
                },
                "waifu": {
                    name: "Kaede Kayano",
                    image: "https://static.wikia.nocookie.net/assassinationclassroom/images/5/5d/Kayano_Kaede_Transparent.png/revision/latest?cb=20161202043645 "
                }
            }
        },
        {
            "name": "Haikyu!! ",
            "image": "https://w0.peakpx.com/wallpaper/802/743/HD-wallpaper-karasuno-fight-anime-daichi-haikyu-haikyuu-haikyuu-to-the-top-hinata-karasuno-team-volleyball-thumbnail.jpg",
            "characters": {
                "protagonist": {
                    name: "  Shoyo Hinata ",
                    image: "https://w0.peakpx.com/wallpaper/771/166/HD-wallpaper-shoyo-hinata-haikyuu-hinata-thumbnail.jpg"
                },
                "antagonist": {
                    name: "Toru Oikawa ",
                    image: "https://w0.peakpx.com/wallpaper/677/143/HD-wallpaper-oikawa-haikyu-haikyuu-handsome-hot-volleyball-thumbnail.jpg"
                },
                "waifu": {
                    name: " Yachi Hitoka",
                    image: "https://drive.google.com/file/d/1AMpy0D0O5MgBd2l8yYtFejwhaRSRSyGc/view?usp=sharing "
                }
            }
        },
        {
            "name": "Steins;Gate ",
            "image": "https://w0.peakpx.com/wallpaper/253/861/HD-wallpaper-okabe-steins-gate-rintaro-thumbnail.jpg ",
            "characters": {
                "protagonist": {
                    name: "  Rintarou Okabe ",
                    image: "https://w0.peakpx.com/wallpaper/97/741/HD-wallpaper-okabe-rintarou-hououin-kyouma-steins-gate-thumbnail.jpg"
                },
                "antagonist": {
                    name: "SERN ",
                    image: "https://m.media-amazon.com/images/I/51XmX8EQgjL._AC_UF1000,1000_QL80_.jpg"
                },
                "waifu": {
                    name: "Asuna Yuuki ",
                    image: "https://w0.peakpx.com/wallpaper/213/796/HD-wallpaper-portrait-display-anime-steins-gate-makise-kurisu-anime-girls-thumbnail.jpg "
                }
            }
        },
        {
            "name": "My Hero Academia ",
            "image": "https://w0.peakpx.com/wallpaper/190/542/HD-wallpaper-my-hero-academia-midoriya-my-hero-academia-todoroki-thumbnail.jpg ",
            "characters": {
                "protagonist": {
                    name: " Izuku Midoriya  ",
                    image: "https://w0.peakpx.com/wallpaper/690/260/HD-wallpaper-deku-izuku-midoriya-ofa-oneforall-super-thumbnail.jpg"
                },
                "antagonist": {
                    name: " Tomura Shigaraki ",
                    image: " https://w0.peakpx.com/wallpaper/566/632/HD-wallpaper-tomura-shigaraki-thumbnail.jpg "
                },
                "waifu": {
                    name: "Ochaco Uraraka ",
                    image: "https://w0.peakpx.com/wallpaper/649/863/HD-wallpaper-my-hero-academia-anime-ochaco-uraraka-thumbnail.jpg"
                }
            }
        },
        {
            "name": "Sword Art Online ",
            "image": "https://w0.peakpx.com/wallpaper/814/709/HD-wallpaper-sword-art-online-art-asuna-kirito-online-sword-thumbnail.jpg ",
            "characters": {
                "protagonist": {
                    name: "  Kirito   ",
                    image: "https://w0.peakpx.com/wallpaper/225/192/HD-wallpaper-kirito-sao-thumbnail.jpg"
                },
                "antagonist": {
                    name: "Sugou Nobuyuki ",
                    image: "https://drive.google.com/file/d/1UOFVGWoFe1MGkF70gjWxAONDVgmm_l0L/view?usp=sharing "
                },
                "waifu": {
                    name: "Asuna Yuuki ",
                    image: "https://w0.peakpx.com/wallpaper/969/891/HD-wallpaper-anime-sword-art-online-yuuki-asuna-armor-sword-portrait-display-anime-girls-thumbnail.jpg"
                }
            }
        },
        {
            "name": "Cowboy Bebop ",
            "image": " https://drive.google.com/file/d/1X8v-AmWvlN-0D28ssetlM9x2xsa0A_4C/view?usp=drive_link ",
            "characters": {
                "protagonist": {
                    name: " Spike Spiegel ",
                    image: "https://wallpapers-clan.com/wp-content/uploads/2023/06/cowboy-bebop-spike-spiegel-dark-wallpaper.jpg"
                },
                "antagonist": {
                    name: " Vicious - Vicious ",
                    image: " https://preview.redd.it/how-do-yall-feel-about-vicious-v0-ms9sksju3q5a1.jpg?auto=webp&s=669ffbe1747437a321977d995823ede7e2dba827 "
                },
                "waifu": {
                    name: " Faye Valentine ",
                    image: "https://64.media.tumblr.com/9a1c9592e46b3f78541598107937ec1c/19dbe60bb33e70ac-91/s640x960/47eff8cad9838c2e409baedd856505f23011ce4f.png"
                }
            }
        },
        {
            "name": "Demon Slayer ",
            "image": "https://w0.peakpx.com/wallpaper/943/193/HD-wallpaper-demon-slayer-anime-demon-slayer-thumbnail.jpg",
            "characters": {
                "protagonist": {
                    name: " Tanjiro Kamado",
                    image: "https://w0.peakpx.com/wallpaper/836/994/HD-wallpaper-tanjiro-kamado-demon-slayer-thumbnail.jpg"
                },
                "antagonist": {
                    name: "Muzan Kibutsuji",
                    image: "https://w0.peakpx.com/wallpaper/634/720/HD-wallpaper-muzan-kibutsuji-demon-demon-slayer-kimetsu-no-yaiba-tanjiro-thumbnail.jpg"
                },
                "waifu": {
                    name: "Nezuko Kamado",
                    image: "https://w0.peakpx.com/wallpaper/988/267/HD-wallpaper-nezuko-kamado-anime-demon-demon-slayer-girl-kimetsu-no-yaiba-thumbnail.jpg"
                }
            }
        },
        {
            "name": "One Piece",
            "image": "https://w0.peakpx.com/wallpaper/599/734/HD-wallpaper-one-piece-one-piece-anime-thumbnail.jpg",
            "characters": {
                "protagonist": {
                    name: "Luffy",
                    image: "https://w0.peakpx.com/wallpaper/425/322/HD-wallpaper-luffy-one-piece-thumbnail.jpg"
                },
                "antagonist": {
                    name: "Donquixote Doflamingo",
                    image: "https://i.pinimg.com/564x/db/51/f8/db51f8b86389d202f665c12831944e9e.jpg"
                },
                "waifu": {
                    name: "Nami",
                    image: "https://w0.peakpx.com/wallpaper/68/460/HD-wallpaper-nami-anime-one-piece-manga-thumbnail.jpg"
                }
            }
        },
        {
            "name": "One Punch Man",
            "image": "https://w0.peakpx.com/wallpaper/415/984/HD-wallpaper-one-punch-man-saitama-thumbnail.jpg",
            "characters": {
                "protagonist": {
                    name: " Saitama",
                    image: "https://w0.peakpx.com/wallpaper/270/95/HD-wallpaper-one-punch-man-genos-genos-one-punch-man-saitama-saitama-one-punch-man-thumbnail.jpg"
                },
                "antagonist": {
                    name: "Garou",
                    image: "https://w0.peakpx.com/wallpaper/700/589/HD-wallpaper-garou-opm-thumbnail.jpg"
                },
                "waifu": {
                    name: "Tatsumaki",
                    image: "https://w0.peakpx.com/wallpaper/990/843/HD-wallpaper-tatsumaki-galaxy-fubuki-one-punch-man-purple-tornado-thumbnail.jpg"
                }
            }
        },
        {
            "name": "devilman crybaby",
            "image": " https://w0.peakpx.com/wallpaper/728/978/HD-wallpaper-devilman-anime-crybaby-thumbnail.jpg ",
            "characters": {
                "protagonist": {
                    name: " akira fudo ",
                    image: "https://i.pinimg.com/564x/ba/0a/00/ba0a00a17a7407380b3971535c504b6a.jpg"
                },
                "antagonist": {
                    name: " Ryo Asuka ",
                    image: " https://static.wikia.nocookie.net/cyborg009/images/9/98/Ryo_%28009_vs_Devilman%29..jpg/revision/latest?cb=20150718192335 "
                },
                "waifu": {
                    name: " Miki Makimura ",
                    image: " https://animebathscenewiki.com/images/thumb/9/94/Devilman_Crybaby_3_27.png/382px-Devilman_Crybaby_3_27.png "
                }
            }
        },
        {
            "name": "Attack On Titan",
            "image": "https://w0.peakpx.com/wallpaper/67/350/HD-wallpaper-eren-jaeger-attack-on-titan-shingeki-no-kyojin-thumbnail.jpg",
            "characters": {
                "protagonist": {
                    name: " Eren Yeager",
                    image: "https://w0.peakpx.com/wallpaper/294/226/HD-wallpaper-eren-jaeger-aot-attack-on-titan-eren-yeager-fire-season-4-shingeki-on-kyojin-thumbnail.jpg"
                },
                "antagonist": {
                    name: "Annie Leonhart",
                    image: "https://e0.pxfuel.com/wallpapers/460/990/desktop-wallpaper-leonhart-and-titan-annie-leonhart-and-titan.jpg"
                },
                "waifu": {
                    name: "Mikasa Ackerman",
                    image: "https://w0.peakpx.com/wallpaper/870/330/HD-wallpaper-mikasa-ackerman-attack-on-titan-thumbnail.jpg"
                }
            }
        },
        {
            "name": "Naruto",
            "image": " https://w0.peakpx.com/wallpaper/675/394/HD-wallpaper-naruto-and-saske-naruto-shippuden-naruto-uzumakie-saske-uchiha-sasuke-sasuke-uchiha-thumbnail.jpg",
            "characters": {
                "protagonist": {
                    name: " Naruto Uzumaki",
                    image: " https://w0.peakpx.com/wallpaper/10/338/HD-wallpaper-naruto-uzumaki-naruto-anime-thumbnail.jpg"
                },
                "antagonist": {
                    name: " orochimaru ",
                    image: "https://w0.peakpx.com/wallpaper/605/78/HD-wallpaper-orochimaru-kakashi-manga-saske-sasuke-serpientes-snakes-thumbnail.jpg"
                },
                "waifu": {
                    name: " Hinata Hyuga ",
                    image: " https://static.wikia.nocookie.net/p__/images/f/fc/HinasNaruto-Storm-4-Hinata-Art.jpg/revision/latest?cb=20150215011132&path-prefix=protagonist "
                }
            }
        },
        {
            "name": "Pokémon",
            "image": " https://static.posters.cz/image/1300/plakatok/pokemon-pikachu-neon-i71936.jpg",
            "characters": {
                "protagonist": {
                    name: " Ash Ketchum",
                    image: "https://w0.peakpx.com/wallpaper/10/936/HD-wallpaper-ash-ketchum-hero-pokemon-super-thumbnail.jpg"
                },
                "antagonist": {
                    name: " Team Rocket",
                    image: "https://i.pinimg.com/originals/76/0d/34/760d34ae38d89116337fb22cad9b0da3.png"
                },
                "waifu": {
                    name: " Misty",
                    image: "https://static.wikia.nocookie.net/sonicpokemon/images/f/f3/Misty_kasumi_by_songokukai.png/revision/latest/scale-to-width-down/1200?cb=20130303233843"
                }
            }
        },
        {
            "name": "Food Wars!: Shokugeki no Soma",
            "image": " https://w0.peakpx.com/wallpaper/755/127/HD-wallpaper-shokugeki-no-soma-food-wars-thumbnail.jpg",
            "characters": {
                "protagonist": {
                    name: " Yukihira Soma",
                    image: "https://w0.peakpx.com/wallpaper/1019/187/HD-wallpaper-shokugeki-no-souma-soma-yukihira-yukihira-soma-thumbnail.jpg"
                },
                "antagonist": {
                    name: " Azami Nakiri",
                    image: " https://i.pinimg.com/originals/9e/ee/49/9eee4978a1be9191a7f182024d890997.jpg"
                },
                "waifu": {
                    name: " Erina Nakiri",
                    image: " https://w0.peakpx.com/wallpaper/209/843/HD-wallpaper-nakiri-erina-shokugeki-no-souma-anime-anime-girls-blonde-long-hair-looking-at-viewer-schoolgirl-school-uniform-miniskirt-plaid-skirt-thigh-highs-artwork-drawing-digital-art-illustration-thumbnail.jpg"
                }
            }
        },
        {
            "name": "JoJo's Bizarre Adventure",
            "image": "https://external-preview.redd.it/rF5X4XRrAwjOpUq46-F9IVi14uM-WPyIaNfyL-7d4uM.jpg?auto=webp&s=6e9c2204db86760b532f7808b210a1fd34f2fedf",
            "characters": {
                "protagonist": {
                    name: " Josuke Higashikata",
                    image: " https://w0.peakpx.com/wallpaper/970/717/HD-wallpaper-josuke-aesthetic-jojo-bizarre-adventure-crazy-diamond-josuke-higashikata-thumbnail.jpg"
                },
                "antagonist": {
                    name: " Enrico Pucci",
                    image: " https://static.jojowiki.com/images/0/05/latest/20220427004019/EnricoPucci_jojoeoh.png"
                },
                "waifu": {
                    name: "Trish Una",
                    image: " https://w0.peakpx.com/wallpaper/110/231/HD-wallpaper-trish-una-golden-wind-jojo-jojo-bizarre-adventure-jojo-kimyou-na-bouken-ougon-na-kaze-spice-girl-spicy-lady-vento-aureo-thumbnail.jpg"
                }
            }
        },
        {
            "name": "bleach",
            "image": "https://w0.peakpx.com/wallpaper/84/442/HD-wallpaper-ichigo-anime-anime-bleach-black-bleach-ichigo-demon-thumbnail.jpg",
            "characters": {
                "protagonist": {
                    name: " Ichigo Kurosaki",
                    image: " https://w0.peakpx.com/wallpaper/496/128/HD-wallpaper-ichigo-anime-black-bleach-ichigo-kurosaki-thumbnail.jpg"
                },
                "antagonist": {
                    name: " aizen",
                    image: "https://w0.peakpx.com/wallpaper/894/272/HD-wallpaper-aizen-sosuke-art-anime-bleach-thumbnail.jpg"
                },
                "waifu": {
                    name: "Yoruichi Shihōin",
                    image: " https://w0.peakpx.com/wallpaper/77/724/HD-wallpaper-yoruichi-bleach-thumbnail.jpg"
                }
            }
        },
        {
            "name": "Dragon Ball Z: Bardock ",
            "image": "https://w0.peakpx.com/wallpaper/297/897/HD-wallpaper-bardock-ball-dragon-dragon-ball-dragon-ball-z-final-sayian-gokus-dad-legend-sayian-elite-super-sayian-bardock-thumbnail.jpg",
            "characters": {
                "protagonist": {
                    name: "Bardock",
                    image: " https://w0.peakpx.com/wallpaper/523/96/HD-wallpaper-bardock-dragon-ball-dragon-ball-z-legends-thumbnail.jpg"
                },
                "antagonist": {
                    name: " Frieza",
                    image: "https://w0.peakpx.com/wallpaper/880/118/HD-wallpaper-golden-frieza-ball-dragon-super-thumbnail.jpg"
                },
                "waifu": {
                    name: "fasha",
                    image: "https://pm1.aminoapps.com/7570/cf9727e78084e21b13cc91ff0b523d0c20a5fd34r1-340-531v2_uhq.jpg"
                }
            }
        },
        {
            "name": "Hunter x Hunter",
            "image": " https://flxt.tmsimg.com/assets/p20421488_v_v8_ac.jpg",
            "characters": {
                "protagonist": {
                    name: "Gon Freecss",
                    image: " https://w0.peakpx.com/wallpaper/830/669/HD-wallpaper-hxh-gon-green-one-thumbnail.jpg"
                },
                "antagonist": {
                    name: "Uvogin",
                    image: "https://i.imgur.com/KUaYpgE.jpg"
                },
                "waifu": {
                    name: "Machi Komacine",
                    image: " https://static.wikia.nocookie.net/hunterxhunter/images/3/33/Machi_2011.png/revision/latest?cb=20170817184807&path-prefix=de"
                }
            }
        },
        {
            "name": "Tokyo Ghoul: Jack",
            "image": "https://bookupgdl.com.mx/wp-content/uploads/2022/05/9781421590578.jpg",
            "characters": {
                "protagonist": {
                    name: "Arima Kishou",
                    image: "https://drive.google.com/file/d/1zCL-8a5RnoIoCvHIusYanOFfoUjMN6zk/view?usp=sharing"
                },
                "antagonist": {
                    name: "Uruka Minami",
                    image: "https://static.wikia.nocookie.net/antagonists/images/6/6e/Tokyo-Ghoul-JACK-OVA-screenshot-22.jpg/revision/latest/scale-to-width-down/401?cb=20180324045041"
                },
                "waifu": {
                    name: "Kamishiro Rize",
                    image: " https://w0.peakpx.com/wallpaper/777/631/HD-wallpaper-rize-kamishiro-anime-girl-thumbnail.jpg"
                }
            }
        },
        {
            "name": "Fullmetal Alchemist: Brotherhood",
            "image": "https://w0.peakpx.com/wallpaper/529/326/HD-wallpaper-dark-vertical-fullmetal-alchemist-brotherhood-thumbnail.jpg",
            "characters": {
                "protagonist": {
                    name: "Edward Elric",
                    image: " https://w0.peakpx.com/wallpaper/867/657/HD-wallpaper-edward-elric-alchemist-anime-blonde-brotherhood-cartoon-fma-fullmetal-super-thumbnail.jpg"
                },
                "antagonist": {
                    name: "Homunculi",
                    image: "https://preview.redd.it/4hf2w68phz561.png?auto=webp&s=d6776dceaf3f0bb809156e5d6706a17eb0d34394"
                },
                "waifu": {
                    name: "Riza Hawkeye",
                    image: "https://w0.peakpx.com/wallpaper/568/649/HD-wallpaper-anime-full-metal-alchemist-dog-riza-hawkeye-thumbnail.jpg"
                }
            }
        },
        {
            "name": "Death Note",
            "image": "https://drive.google.com/file/d/1zCL-8a5RnoIoCvHIusYanOFfoUjMN6zk/view?usp=drive_link",
            "characters": {
                "protagonist": {
                    name: "light yagami",
                    image: " https://w0.peakpx.com/wallpaper/791/228/HD-wallpaper-light-yagami-anime-death-note-deaths-detective-kira-police-ryuk-school-shinigami-thumbnail.jpg"
                },
                "antagonist": {
                    name: "L Lawliet",
                    image: "https://w0.peakpx.com/wallpaper/822/382/HD-wallpaper-death-note-l-lawliet-anime-thumbnail.jpg"
                },
                "waifu": {
                    name: "misa amane",
                    image: "https://w0.peakpx.com/wallpaper/4/778/HD-wallpaper-death-note-anime-chica-anime-kira-misa-misa-amane-misa-misa-ryuk-shinigami-thumbnail.jpg"
                }
            }
        }
    ]
    animes.forEach(async(a) => {
        const anime = new AnimeRankingAnimeInfo(a)
        await anime.save()
    })
}