const AnimeRankingAnimeInfo = require('../data/anime-ranking/animeInfo')
// add()

async function add() {
    const animes = [
        {
            "name": "The Irregular at Magic High School",
            "image": "https://drive.google.com/file/d/1sHI0HrI0YXUxKlVaT61zTvRjvujkDpyx/view?usp=drive_link",
            "characters": {
                "protagonist": {
                    name: "Tatsuya Shiba",
                    image: "https://drive.google.com/file/d/1isXDLlifRfoDnoM9OvVhaIgMFOzNwjON/view?usp=drive_link"
                },
                "antagonist": {
                    name: " Katsuto Jyumonji",
                    image: "https://drive.google.com/file/d/1tNs6xa3Wb3oJ5fGgJCU4pDTlcfs4-RLV/view?usp=drive_link"
                },
                "waifu": {
                    name: "Miyuki Shiba",
                    image: "https://drive.google.com/file/d/1AcXe4_LK9-Tuf1k-rYdVFMpAARG19iKr/view?usp=drive_link"
                }
            }
        },
        {
            "name": "Rurouni Kenshin",
            "image": "https://drive.google.com/file/d/1Hq7d9FYnJIJRe2uLIDu09rf9sGCQA1l7/view?usp=sharing",
            "characters": {
                "protagonist": {
                    name: " Samurai X",
                    image: "https://drive.google.com/file/d/1VB2m8wmNmsz01Hios6ickUF1jhXgzZls/view?usp=drive_link"
                },
                "antagonist": {
                    name: "Makoto Shishio",
                    image: "https://drive.google.com/file/d/1c01ei6q1_vaADvkw44H5eebPFKpxz3rJ/view?usp=drive_link"
                },
                "waifu": {
                    name: "Kaoru Kamiya",
                    image: "https://drive.google.com/file/d/16fVofinmw2addnDZeAtcT-PF_icJDXp2/view?usp=drive_link"
                }
            }
        },
        {
            "name": "Ghost in the Shell",
            "image": "https://drive.google.com/file/d/19b1FJ7dEzBndHBTy7NkxXo6vkvlSPJ4J/view?usp=sharing",
            "characters": {
                "protagonist": {
                    name: " Major Motoko Kusanagi",
                    image: "https://drive.google.com/file/d/1q5_Kq8FWAJiTwhVI3gE432AveGaOsf9b/view?usp=sharing"
                },
                "antagonist": {
                    name: "Hideo Kuzeo",
                    image: "https://drive.google.com/file/d/1Vhh-iNEJqzOKXqvd4xWpw17cKtn3t70_/view?usp=drive_link"
                },
                "waifu": {
                    name: "Major Motoko Kusanagi",
                    image: "https://drive.google.com/file/d/1y-LyDrkEkMd2Oy6kDJcrjCQVII9WN2_N/view?usp=sharing"
                }
            }
        },
        {
            "name": "Mobile Suit Gundam",
            "image": "https://drive.google.com/file/d/1bUmBqGpPbscQJFkRGLuA_FLfBqWOhiZz/view?usp=drive_link",
            "characters": {
                "protagonist": {
                    name: " Amuro Ray",
                    image: "https://drive.google.com/file/d/1UKmgO5w4UF89_xMqHXEigAJRN4fUs9IA/view?usp=sharing"
                },
                "antagonist": {
                    name: " Char Aznable",
                    image: "https://drive.google.com/file/d/1R2fIdQCuVz2I7LZ9LP6tVGgNEgZq1w6A/view?usp=drive_link"
                },
                "waifu": {
                    name: "Sayla Mass",
                    image: "https://drive.google.com/file/d/1wtf385U7DjOZvh-ZdP0BX0uDgfjFDZiS/view?usp=sharing"
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
                    image: "https://drive.google.com/file/d/1N6PqgTBfv5W-GA5odlaacKvo6awk97in/view?usp=sharing"
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
                    image: "https://drive.google.com/file/d/1oVefBfVLncTKQ_8-7JEOJ4PJI27k73_F/view?usp=sharing"
                },
                "antagonist": {
                    name: "Balalaika",
                    image: "https://drive.google.com/file/d/11o-XjNEG25wT47yY7FkwIlouDXSvSlqM/view?usp=sharing"
                },
                "waifu": {
                    name: "Ravy",
                    image: "https://drive.google.com/file/d/1rD8QZ8LoX0st8QYt-UP7qS-ng--em2OG/view?usp=sharing"
                }
            }
        },
        {
            "name": "High school DXD",
            "image": "https://drive.google.com/file/d/1SFTWuW55mkU1-yb1IKtjAjTOQB33bKxH/view?usp=sharing",
            "characters": {
                "protagonist": {
                    name: "Issei Hyoudou",
                    image: "https://drive.google.com/file/d/1DGdRS1P5nHa04KtBIR487pcXYgHGhxj2/view?usp=sharing"
                },
                "antagonist": {
                    name: " fallen angels",
                    image: "https://drive.google.com/file/d/1ZsnkaOavqNBxLgfyBRYa4P52gk0u89-3/view?usp=sharing"
                },
                "waifu": {
                    name: "Rias Gremory",
                    image: "https://drive.google.com/file/d/1VYl57rgAv1PQZiIn0KPn0GKo9tPtSpVM/view?usp=sharing"
                }
            }
        },
        {
            "name": "Durarara!!",
            "image": "https://drive.google.com/file/d/1SFTWuW55mkU1-yb1IKtjAjTOQB33bKxH/view?usp=sharing",
            "characters": {
                "protagonist": {
                    name: "Mikado Ryuugamine",
                    image: "https://drive.google.com/file/d/17OPrQkRYsuUAQnXU3PUwt6QtporYWRNv/view?usp=sharing"
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
                    image: "https://drive.google.com/file/d/1unVCVhICQrm70No6hOc7IwjMlJnjhmDW/view?usp=drive_link"
                },
                "waifu": {
                    name: " Yuno Gasai",
                    image: "https://drive.google.com/file/d/147M6coc3J4JVGpkHOIpR2kl9YOH-EQP9/view?usp=drive_link"
                }
            }
        },
        {
            "name": "Akame ga Kill!",
            "image": "https://drive.google.com/file/d/1H5ZfRmP9BClzgy4P71NLRADuLFv_mZMW/view?usp=sharing",
            "characters": {
                "protagonist": {
                    name: "Tatsumi",
                    image: "https://drive.google.com/file/d/1nM0oPplEuoP2coo66ACYPiqmiIILYDJn/view?usp=drive_link"
                },
                "antagonist": {
                    name: " Esdeath",
                    image: "https://drive.google.com/file/d/1r-Ip0afA6bLSHShlawdqkE83MrK84Evd/view?usp=sharing"
                },
                "waifu": {
                    name: "Sheele",
                    image: "https://drive.google.com/file/d/1w75D_0JPMzcwCeE6udbIWV4s1FcKCbFL/view?usp=sharing"
                }
            }
        },
        {
            "name": "Death Parade",
            "image": "https://drive.google.com/file/d/1A9UtQHi4MeqNoR_zqwL70tJGpgD-vtMa/view?usp=sharing",
            "characters": {
                "protagonist": {
                    name: "Decim",
                    image: "https://drive.google.com/file/d/1a0oZUFPIXbOnepYSdvwA0Yn39PK3cjIh/view?usp=drive_link"
                },
                "antagonist": {
                    name: " Nona",
                    image: "https://drive.google.com/file/d/1OJeL_9uxFgxcbcfEx3OTaluz6xoGQrj3/view?usp=sharing"
                },
                "waifu": {
                    name: "Chiyuki",
                    image: "https://drive.google.com/file/d/1Kne-A7ReJVBeVTgD7TpfepcpO1_9E3H_/view?usp=sharing"
                }
            }
        },
        {
            "name": "Soul Eater",
            "image": "https://drive.google.com/file/d/1YqdhPVyLdkrd658X5ONj7X10jO4JWdkV/view?usp=sharing",
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
            "image": "https://drive.google.com/file/d/1W22kNZsoVidChvn70XF3YVEc-4Tm7iDP/view?usp=drive_link",
            "characters": {
                "protagonist": {
                    name: " Emma   ",
                    image: "https://drive.google.com/file/d/17OMhY4kR3rKKmvGVh1_bLdCESkGCJJx-/view?usp=drive_link"
                },
                "antagonist": {
                    name: "Isabella ",
                    image: "https://drive.google.com/file/d/14n89uKDUSPXq8m3fqk3CszYDzM5ghtHF/view?usp=drive_link"
                },
                "waifu": {
                    name: " Norman ",
                    image: "https://drive.google.com/file/d/1-SmzPfa-3DlKTsdeuIWDs8CZBIjBIy6M/view?usp=drive_link"
                }
            }
        },
        {
            "name": "Assassination Classroom",
            "image": "https://drive.google.com/file/d/1ubGw3vIq5B8kYPiQcJ_8ygmnIUVTb_Gk/view?usp=sharing",
            "characters": {
                "protagonist": {
                    name: " Nagisa Shiota ",
                    image: "https://drive.google.com/file/d/1yf96ea2JoOj1ov8mstBsWzkPGCi6hAHV/view?usp=drive_link"
                },
                "antagonist": {
                    name: "Koro-sensei ",
                    image: "https://drive.google.com/file/d/1auug5fi0Hi3t8QYJTj20QI5Uj22S4l3Z/view?usp=sharing"
                },
                "waifu": {
                    name: "Kaede Kayano",
                    image: "https://drive.google.com/file/d/1NRkUTF5WWRZkNChLxInIUfJ-HtoAbtHf/view?usp=sharing"
                }
            }
        },
        {
            "name": "Haikyu!! ",
            "image": "https://drive.google.com/file/d/1YTXVGvW579eP8vXtF-s9ZlYQtXyBgHJu/view?usp=sharing",
            "characters": {
                "protagonist": {
                    name: "  Shoyo Hinata ",
                    image: "https://drive.google.com/file/d/1Dc2rZDpta4TyFHd9CQf18WxKylwUuTjo/view?usp=sharing"
                },
                "antagonist": {
                    name: "Toru Oikawa ",
                    image: "https://drive.google.com/file/d/1_p5qEPmf1Ftp3UZb6--6_5sYhPVWTxa5/view?usp=sharing"
                },
                "waifu": {
                    name: " Yachi Hitoka",
                    image: "https://drive.google.com/file/d/1AMpy0D0O5MgBd2l8yYtFejwhaRSRSyGc/view?usp=sharing "
                }
            }
        },
        {
            "name": "Steins;Gate ",
            "image": "https://drive.google.com/file/d/1C2GyCFkF0v7tJR2ECmALmansp5hE4ADV/view?usp=drive_link ",
            "characters": {
                "protagonist": {
                    name: "  Rintarou Okabe ",
                    image: "https://drive.google.com/file/d/1EhpirZn4n2RAgY5xNEn75g9acUDe9p_g/view?usp=drive_link"
                },
                "antagonist": {
                    name: "SERN ",
                    image: "https://drive.google.com/file/d/1FbggVTD0zVvSxN83_XSpMrJ2D7zFjjrM/view?usp=drive_link"
                },
                "waifu": {
                    name: "Kurisu Makise ",
                    image: "https://drive.google.com/file/d/1ifv0apjh1bxuFNgTjQhTUs8PJswPC_7E/view?usp=sharing "
                }
            }
        },
        {
            "name": "My Hero Academia ",
            "image": "https://drive.google.com/file/d/18PP2G32AEnlLPmOUUbLrf5lwVSjDWkG2/view?usp=sharing",
            "characters": {
                "protagonist": {
                    name: " Izuku Midoriya  ",
                    image: "https://drive.google.com/file/d/1FAUBGUqnaVBTxkCjQorWFy1rmK0-aG6P/view?usp=sharing"
                },
                "antagonist": {
                    name: " Tomura Shigaraki ",
                    image: " https://drive.google.com/file/d/1kpS4wnvcTXrHFRfaJZeo1VNC2Mztc_za/view?usp=sharing "
                },
                "waifu": {
                    name: "Ochaco Uraraka ",
                    image: "https://drive.google.com/file/d/1RsJImtLTJWsp4gev_VZUWJu2J_oDsAEv/view?usp=sharing"
                }
            }
        },
        {
            "name": "Sword Art Online ",
            "image": "https://drive.google.com/file/d/1E4lMsaAPp8z7phD_TQz4eSoilpI36kSs/view?usp=drive_link",
            "characters": {
                "protagonist": {
                    name: "  Kirito   ",
                    image: "https://drive.google.com/file/d/1lKH69G1GU52J7T_ChG3PpE6wA4Zk8cP0/view?usp=drive_link"
                },
                "antagonist": {
                    name: "Sugou Nobuyuki ",
                    image: "https://drive.google.com/file/d/1UOFVGWoFe1MGkF70gjWxAONDVgmm_l0L/view?usp=sharing "
                },
                "waifu": {
                    name: "Asuna Yuuki ",
                    image: "https://drive.google.com/file/d/1e5ZGnxzZl-EvuChb1nZLnbPzHzTA_0Ni/view?usp=drive_link"
                }
            }
        },
        {
            "name": "Cowboy Bebop ",
            "image": " https://drive.google.com/file/d/1X8v-AmWvlN-0D28ssetlM9x2xsa0A_4C/view?usp=drive_link ",
            "characters": {
                "protagonist": {
                    name: " Spike Spiegel ",
                    image: "https://drive.google.com/file/d/1pdQ2l1-u1dTdIDT38peOEJ4OvqJd6s2r/view?usp=drive_link"
                },
                "antagonist": {
                    name: " Vicious - Vicious ",
                    image: " https://drive.google.com/file/d/196ozlapmCYHV9xPMkgy5uAz-MLnRst7I/view?usp=drive_link "
                },
                "waifu": {
                    name: " Faye Valentine ",
                    image: "https://drive.google.com/file/d/1BPTgoGFceCrB4vJ9F--NyBq2PQv2TwDy/view?usp=drive_link"
                }
            }
        },
        {
            "name": "Demon Slayer ",
            "image": "https://drive.google.com/file/d/17VLJosV2t_3nWXFT6aiAYN5dAAuK4a4o/view?usp=drive_link",
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
            "image": "https://drive.google.com/file/d/1oek8pgJtxsVA9ZrVWyaCULXWToRpUMCl/view?usp=drive_link",
            "characters": {
                "protagonist": {
                    name: "Luffy",
                    image: "https://drive.google.com/file/d/1hAMREDmsRIsFFr1YpAUd4e7gTjHIfMl_/view?usp=drive_link"
                },
                "antagonist": {
                    name: "Donquixote Doflamingo",
                    image: "https://drive.google.com/file/d/1yu0O0R6Svy_XLYP2WbkIOkF181DLbdmp/view?usp=drive_link"
                },
                "waifu": {
                    name: "Nami",
                    image: "https://drive.google.com/file/d/1EuO1stiJ45F1KoohH-lZ9Dc1pWCtDEuJ/view?usp=drive_link"
                }
            }
        },
        {
            "name": "One Punch Man",
            "image": "https://drive.google.com/file/d/1xHCEHjEdRwo7no5XN7of8WYCIuMiFrSC/view?usp=drive_link",
            "characters": {
                "protagonist": {
                    name: " Saitama",
                    image: "https://drive.google.com/file/d/1u5wrYFyoxf00sgPDsFv97KD35l5Hhl2X/view?usp=drive_link"
                },
                "antagonist": {
                    name: "Garou",
                    image: "https://drive.google.com/file/d/1DUIOaT434KoxphEux2DevO-LtgMN9NAN/view?usp=drive_link"
                },
                "waifu": {
                    name: "Tatsumaki",
                    image: "https://drive.google.com/file/d/1MxrR_ENVI76PnEUOSDxNQuGNpysMixLQ/view?usp=drive_link"
                }
            }
        },
        {
            "name": "devilman crybaby",
            "image": " https://drive.google.com/file/d/11zj6POvLVY_PawO2gVajVFXlpiRiV1K7/view?usp=drive_link ",
            "characters": {
                "protagonist": {
                    name: " akira fudo ",
                    image: "https://drive.google.com/file/d/10-RCWE_j_OgxzxtyzD20fm59znzz609z/view?usp=drive_link"
                },
                "antagonist": {
                    name: " Ryo Asuka ",
                    image: " https://drive.google.com/file/d/1OZJFa9HY4fidvvfHrXO2j1bggLijuW18/view?usp=drive_link "
                },
                "waifu": {
                    name: " Miki Makimura ",
                    image: " https://drive.google.com/file/d/1dbRgnI0RIHkwqyZlu8lIUFXlGgWkAYDc/view?usp=drive_link"
                }
            }
        },
        {
            "name": "Attack On Titan",
            "image": "https://drive.google.com/file/d/1HfFjoYUjcr5y8oARnUpuVuRGEkxcApcp/view?usp=drive_link",
            "characters": {
                "protagonist": {
                    name: " Eren Yeager",
                    image: "https://drive.google.com/file/d/1PPEGDIPO6jMcaEmNWfYc8viEESy_jbhn/view?usp=drive_link"
                },
                "antagonist": {
                    name: "Annie Leonhart",
                    image: "https://drive.google.com/file/d/1CeqaT-HAPsQv0P53NpffhtymOcBw1Bn6/view?usp=drive_link"
                },
                "waifu": {
                    name: "Mikasa Ackerman",
                    image: "https://drive.google.com/file/d/1PPEGDIPO6jMcaEmNWfYc8viEESy_jbhn/view?usp=drive_link"
                }
            }
        },
        {
            "name": "Naruto",
            "image": " https://drive.google.com/file/d/1CSQEC_JY4tCwEX0dl3KTJbX_U4UJoYrg/view?usp=drive_link",
            "characters": {
                "protagonist": {
                    name: " Naruto Uzumaki",
                    image: " https://drive.google.com/file/d/1J883UEKmbaaFQM5G_bWQDGCXiJMf-G1W/view?usp=drive_link"
                },
                "antagonist": {
                    name: " orochimaru ",
                    image: "https://drive.google.com/file/d/1lzS3AdKOjsEiDAKoxAfNVd_ZuP6ghScl/view?usp=drive_link"
                },
                "waifu": {
                    name: " Hinata Hyuga ",
                    image: " https://drive.google.com/file/d/12DjOQCQVLS11bGcMWDjJVojMl0AYySjz/view?usp=drive_link "
                }
            }
        },
        {
            "name": "Pokémon",
            "image": " https://drive.google.com/file/d/1rwpdR_GJjBoTyjB1aFjn7D641AtX9acv/view?usp=drive_link",
            "characters": {
                "protagonist": {
                    name: " Ash Ketchum",
                    image: "https://drive.google.com/file/d/1GvgA0-C-tiH3J90YlBydDUD50-w9rJKq/view?usp=drive_link"
                },
                "antagonist": {
                    name: " Team Rocket",
                    image: "https://drive.google.com/file/d/1v3i1pWBnA8hYAQ0b3goEIJRgwdu_Kh2E/view?usp=drive_link"
                },
                "waifu": {
                    name: " Misty",
                    image: "https://drive.google.com/file/d/1v3i1pWBnA8hYAQ0b3goEIJRgwdu_Kh2E/view?usp=drive_link"
                }
            }
        },
        {
            "name": "Food Wars!",
            "image": " https://drive.google.com/file/d/1KoryaxdQ2guwkE8lDr7xTSNw399Q8-M0/view?usp=drive_link",
            "characters": {
                "protagonist": {
                    name: " Yukihira Soma",
                    image: "https://drive.google.com/file/d/1TvlR8bFVvhIOHZ-TZogsj2iCPz4kylq7/view?usp=drive_link"
                },
                "antagonist": {
                    name: " Azami Nakiri",
                    image: " https://drive.google.com/file/d/1ZFTjEwD07y_RKglFh4YuppLj2ClzFZLo/view?usp=drive_link"
                },
                "waifu": {
                    name: " Erina Nakiri",
                    image: " https://drive.google.com/file/d/14NYGpUyvD2J-w6w6_fhGlTSsdXC9UUFq/view?usp=drive_link"
                }
            }
        },
        {
            "name": "JoJo's Bizarre Adventure",
            "image": "https://drive.google.com/file/d/1vKB8HFavVvw1E9terRMikAxpOdf4n3du/view?usp=drive_link",
            "characters": {
                "protagonist": {
                    name: " Josuke Higashikata",
                    image: " https://drive.google.com/file/d/1WIivAgyzk71MBdXiG0FHhIR4Clc3I4sE/view?usp=drive_link"
                },
                "antagonist": {
                    name: " Enrico Pucci",
                    image: " https://drive.google.com/file/d/1TvGCM714N9AsaCoVV2mpdgRWDTGVn6Y0/view?usp=drive_link"
                },
                "waifu": {
                    name: "Trish Una",
                    image: " https://drive.google.com/file/d/1TyGaLMpuoz2ziRp3y6zvyB67m1_lilcq/view?usp=drive_link"
                }
            }
        },
        {
            "name": "bleach",
            "image": "https://drive.google.com/file/d/1PoO4A3-gKxvG1KaRoaNZ-T__RqtvF1dv/view?usp=drive_link",
            "characters": {
                "protagonist": {
                    name: " Ichigo Kurosaki",
                    image: " https://drive.google.com/file/d/16YXvm_O0thBMvEQIK5AtscO40hlHCLyI/view?usp=drive_link"
                },
                "antagonist": {
                    name: " aizen",
                    image: "https://drive.google.com/file/d/1okAPKxi1xVdaO0qLToo7l6yTx4rdEZOb/view?usp=drive_link"
                },
                "waifu": {
                    name: "Yoruichi Shihōin",
                    image: " https://drive.google.com/file/d/1ka2gIZBXWsOM3t2m5CnI0l6nfp6UyIaN/view?usp=sharing"
                }
            }
        },
        {
            "name": "Dragon Ball Z: Bardock ",
            "image": "https://drive.google.com/file/d/1HBR8sSBmTC1Bz3pMIC0rGLppNV4YJ8TY/view?usp=drive_link",
            "characters": {
                "protagonist": {
                    name: "Bardock",
                    image: " https://drive.google.com/file/d/1xM_m0r_PGdfPHdWx_KR33A7RlxGFjhsu/view?usp=drive_link"
                },
                "antagonist": {
                    name: " Frieza",
                    image: "https://drive.google.com/file/d/1VPsKZTjKHUFx-PIIPLgQFlRWpqa3tW3q/view?usp=drive_link"
                },
                "waifu": {
                    name: "fasha",
                    image: "https://drive.google.com/file/d/1HBwnFfbBUFj4GgrF-nO3m5POMamwczeZ/view?usp=drive_link"
                }
            }
        },
        {
            "name": "Hunter x Hunter",
            "image": " https://drive.google.com/file/d/10kTauyAEkBXZBoP7EOeqXUOdMbBXv66k/view?usp=drive_link",
            "characters": {
                "protagonist": {
                    name: "Gon Freecss",
                    image: " https://drive.google.com/file/d/1YA5j-xy8awUxwnkdcwuddRbSC7b905vy/view?usp=drive_link"
                },
                "antagonist": {
                    name: "Uvogin",
                    image: "https://drive.google.com/file/d/1lYlF54wsvZNdpXMgXdwPnan_yQ4MwbtI/view?usp=drive_link"
                },
                "waifu": {
                    name: "Machi Komacine",
                    image: " https://drive.google.com/file/d/14vRXizzL2QQ-2VIDufBPKDqEWYlmyKaW/view?usp=drive_link"
                }
            }
        },
        {
            "name": "Tokyo Ghoul: Jack",
            "image": "https://drive.google.com/file/d/1soML6IRLQ-vZ5Iuq0eekXjsduWxLqLts/view?usp=drive_link",
            "characters": {
                "protagonist": {
                    name: "Ken Kaneki",
                    image: "https://drive.google.com/file/d/1rnQioLUv-yqA55KMlqmCsT2r97g92z0r/view?usp=drive_link"
                },
                "antagonist": {
                    name: "Uruka Minami",
                    image: "https://drive.google.com/file/d/19fUwWb_pe4DnN19PAPkYxkBKjNJfM-hr/view?usp=drive_link"
                },
                "waifu": {
                    name: "Kamishiro Rize",
                    image: " https://drive.google.com/file/d/1-b3GH2v_IYceUeF1BtpbfOxUz7w3Y5Oj/view?usp=drive_link"
                }
            }
        },
        {
            "name": "Fullmetal Alchemist: Brotherhood",
            "image": "https://drive.google.com/file/d/1m_6bmVEjdLB0EK_2TAX11oNkyYopKRr-/view?usp=drive_link",
            "characters": {
                "protagonist": {
                    name: "Edward Elric",
                    image: " https://drive.google.com/file/d/1CmOqnKZs864sDR5twt1fXOHz7ugrEA8g/view?usp=drive_link"
                },
                "antagonist": {
                    name: "homunculus",
                    image: "https://drive.google.com/file/d/1tWdXfRjUJTvr_w_3mc7_Qnua-UoiRM0K/view?usp=drive_link"
                },
                "waifu": {
                    name: "Riza Hawkeye",
                    image: "https://drive.google.com/file/d/1g9Muuy0LaoYflVdt1j6ax44KNbKxMyFp/view?usp=drive_link"
                }
            }
        },
        {
            "name": "Death Note",
            "image": "https://drive.google.com/file/d/1zCL-8a5RnoIoCvHIusYanOFfoUjMN6zk/view?usp=drive_link",
            "characters": {
                "protagonist": {
                    name: "light yagami",
                    image: " https://drive.google.com/file/d/1By9dvYrcaWLdWhyuZzSNl61jKKo8xnma/view?usp=drive_link"
                },
                "antagonist": {
                    name: "L Lawliet",
                    image: "https://drive.google.com/file/d/11jbuqrxbex8LHsUh1Q0n_lyX-WWYpyjT/view?usp=drive_link"
                },
                "waifu": {
                    name: "misa amane",
                    image: "https://drive.google.com/file/d/1Zbm0nFK5lUVkw23SK76243i4KxeUj453/view?usp=drive_link"
                }
            }
        }
    ]
    animes.forEach(async(a) => {
        const anime = new AnimeRankingAnimeInfo(a)
        await anime.save()
    })
}