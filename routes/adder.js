const AnimeRankingAnimeInfo = require('../data/anime-ranking/animeInfo')
// add()

async function add() {
    const animes = [
        {
            "name": "Kingdom",
            "image": "https://drive.google.com/file/d/1sHI0HrI0YXUxKlVaT61zTvRjvujkDpyx/view?usp=drive_link",
            "characters": {
                "protagonist": {
                    name: "Xin",
                    image: "https://drive.google.com/file/d/1isXDLlifRfoDnoM9OvVhaIgMFOzNwjON/view?usp=drive_link"
                },
                "antagonist": {
                    name: "Ri Boku",
                    image: "https://drive.google.com/file/d/1tNs6xa3Wb3oJ5fGgJCU4pDTlcfs4-RLV/view?usp=drive_link"
                },
                "waifu": {
                    name: "Kyokai",
                    image: "https://drive.google.com/file/d/1AcXe4_LK9-Tuf1k-rYdVFMpAARG19iKr/view?usp=drive_link"
                }
            }
        },
        {
            "name": "Kaguya-sama: Love is War",
            "image": "https://drive.google.com/file/d/1sHI0HrI0YXUxKlVaT61zTvRjvujkDpyx/view?usp=drive_link",
            "characters": {
                "protagonist": {
                    name: "Miyuki Shirogane",
                    image: "https://drive.google.com/file/d/1isXDLlifRfoDnoM9OvVhaIgMFOzNwjON/view?usp=drive_link"
                },
                "antagonist": {
                    name: "Chika Fujiwara",
                    image: "https://drive.google.com/file/d/1tNs6xa3Wb3oJ5fGgJCU4pDTlcfs4-RLV/view?usp=drive_link"
                },
                "waifu": {
                    name: "Kaguya Shinomiya",
                    image: "https://drive.google.com/file/d/1AcXe4_LK9-Tuf1k-rYdVFMpAARG19iKr/view?usp=drive_link"
                }
            }
        },
        {
            "name": "Jusutsu kaisen",
            "image": "https://drive.google.com/file/d/1sHI0HrI0YXUxKlVaT61zTvRjvujkDpyx/view?usp=drive_link",
            "characters": {
                "protagonist": {
                    name: "Yuuji Itadori",
                    image: "https://drive.google.com/file/d/1isXDLlifRfoDnoM9OvVhaIgMFOzNwjON/view?usp=drive_link"
                },
                "antagonist": {
                    name: "Ryomen sukuna",
                    image: "https://drive.google.com/file/d/1tNs6xa3Wb3oJ5fGgJCU4pDTlcfs4-RLV/view?usp=drive_link"
                },
                "waifu": {
                    name: "Nobara Kugisaki",
                    image: "https://drive.google.com/file/d/1AcXe4_LK9-Tuf1k-rYdVFMpAARG19iKr/view?usp=drive_link"
                }
            }
        },
        {
            "name": "Spy X family",
            "image": "https://drive.google.com/file/d/1sHI0HrI0YXUxKlVaT61zTvRjvujkDpyx/view?usp=drive_link",
            "characters": {
                "protagonist": {
                    name: "Loid Forger",
                    image: "https://drive.google.com/file/d/1isXDLlifRfoDnoM9OvVhaIgMFOzNwjON/view?usp=drive_link"
                },
                "antagonist": {
                    name: "Anya",
                    image: "https://drive.google.com/file/d/1tNs6xa3Wb3oJ5fGgJCU4pDTlcfs4-RLV/view?usp=drive_link"
                },
                "waifu": {
                    name: "Yor Forger",
                    image: "https://drive.google.com/file/d/1AcXe4_LK9-Tuf1k-rYdVFMpAARG19iKr/view?usp=drive_link"
                }
            }
        }
    ]
    animes.forEach(async(a) => {
        const anime = new AnimeRankingAnimeInfo(a)
        await anime.save()
    })
}

function replaceUrl(url) {
    const fileIdStartIndex = url.indexOf('/file/d/') + 8;
    const fileIdEndIndex = url.indexOf('/view');

    if (fileIdStartIndex === -1 || fileIdEndIndex === -1) return 0;

    const fileId = url.substring(fileIdStartIndex, fileIdEndIndex);
    const directURL = `https://drive.google.com/uc?export=download&id=${fileId}`;
    return directURL;
}
