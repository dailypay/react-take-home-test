const express = require('express');

const app = express();

const port = process.env.PORT || 8080;
app.listen(port);

const generateBallotData = () => {
  return {
    items: [
      {
        id: "best-picture",
        items: [
          {
            title: 'Nomadland',
            photoUrL: 'https://variety.com/wp-content/uploads/2020/12/nomadland_ver2.jpg',
            id: 'nomadland'
          },
          {
            title: 'The Trial of the Chicago 7',
            photoUrL: 'https://variety.com/wp-content/uploads/2020/12/trial_of_the_chicago_seven.jpg',
            id: 'the-trial-of-the-chicago-7'
          },
          {
            title: 'Minari',
            photoUrL: 'https://variety.com/wp-content/uploads/2020/12/Minari.jpg',
            id: 'minari'
          },
          {
            title: 'Mank',
            photoUrL: 'https://variety.com/wp-content/uploads/2020/12/mank.jpg',
            id: 'mank'
          },
          {
            title: 'One Night in Miami',
            photoUrL: 'https://variety.com/wp-content/uploads/2020/12/one_night_in_miami.jpg',
            id: 'one-night-in-miami'
          },
        ],
        title: "Best Picture"
      },
      {
        id: "best-director",
        items: [
          {
            title: 'Chloé Zhao for Nomadland',
            photoUrL: 'https://variety.com/wp-content/uploads/2020/12/nomadland_ver2.jpg',
            id: 'chloe-zhao'
          },
          {
            title: 'Aaron Sorkin for The Trial of the Chicago 7',
            photoUrL: 'https://variety.com/wp-content/uploads/2020/12/trial_of_the_chicago_seven.jpg',
            id: 'aaron-sorkin'
          },
          {
            title: 'Lee Isaac Chung for Minari',
            photoUrL: 'https://variety.com/wp-content/uploads/2020/12/Minari.jpg',
            id: 'lee-isaac-chung'
          },
          {
            title: 'David Fincher for Mank',
            photoUrL: 'https://variety.com/wp-content/uploads/2020/12/mank.jpg',
            id: 'david-fincher'
          },
          {
            title: 'Regina King for One Night in Miami',
            photoUrL: 'https://variety.com/wp-content/uploads/2020/12/one_night_in_miami.jpg',
            id: 'regina-king'
          },
        ],
        title: "Best Director"
      },
      {
        id: "best-actor",
        items: [
          {
            title: 'Chadwick Boseman for Ma Rainey\'s Black Bottom',
            photoUrL: 'https://variety.com/wp-content/uploads/2020/12/ma_raineys_black_bottom_ver2.jpg',
            id: 'chadwick-boseman'
          },
          {
            title: 'Anthony Hopkins for The Father',
            photoUrL: 'https://variety.com/wp-content/uploads/2020/12/father_ver3.jpg',
            id: 'anthony-hopkins'
          },
          {
            title: 'Delroy Lindo for Da 5 Bloods',
            photoUrL: 'https://variety.com/wp-content/uploads/2020/12/da_five_bloods_ver2.jpg',
            id: 'delroy-lindo'
          },
          {
            title: 'Steven Yeun for Minari',
            photoUrL: 'https://variety.com/wp-content/uploads/2020/12/minari-1.jpg',
            id: 'steven-yeun'
          },
          {
            title: 'Riz Ahmed for The Sound of Metal',
            photoUrL: 'https://variety.com/wp-content/uploads/2020/12/sound_of_metal_ver2.jpg',
            id: 'riz-ahmed'
          },
        ],
        title: "Best Actor"
      },
      {
        id: "best-actress",
        items: [
          {
            title: 'Vanessa Kirby for Pieces of a Woman',
            photoUrL: 'https://variety.com/wp-content/uploads/2020/12/pieces_of_a_woman.jpg',
            id: 'vanessa-kirby'
          },
          {
            title: 'Frances McDormand for Nomadland',
            photoUrL: 'https://variety.com/wp-content/uploads/2020/12/nomadland_ver2.jpg',
            id: 'frances-mcdormand'
          },
          {
            title: 'Carey Mulligan for Promising Young Woman',
            photoUrL: 'https://variety.com/wp-content/uploads/2020/12/promising_young_woman_ver2.jpg',
            id: 'carey-mulligan'
          },
          {
            title: 'Viola Davis for Ma Rainey\'s Black Bottom',
            photoUrL: 'https://variety.com/wp-content/uploads/2020/12/ma_raineys_black_bottom.jpg',
            id: 'viola-davis'
          },
          {
            title: 'Meryl Streep for The Prom',
            photoUrL: 'https://variety.com/wp-content/uploads/2020/12/prom_ver2.jpg',
            id: 'meryl-streep'
          },
        ],
        title: "Best Actress"
      },
      {
        id: "best-supporting-actor",
        items: [
          {
            title: 'Daniel Kaluuya for Judas and the Black Messiah',
            photoUrL: 'https://variety.com/wp-content/uploads/2020/12/judas_and_the_black_messiah.jpg',
            id: 'daniel-kaluuya'
          },
          {
            title: 'Leslie Odom, Jr. for One Night in Miami',
            photoUrL: 'https://variety.com/wp-content/uploads/2020/12/one_night_in_miami.jpg',
            id: 'leslie-odom'
          },
          {
            title: 'Sacha Baron Cohen for The Trial of the Chicago 7',
            photoUrL: 'https://variety.com/wp-content/uploads/2020/12/trial_of_the_chicago_seven.jpg',
            id: 'sacha-baron-cohen'
          },
          {
            title: 'Stanley Tucci for Supernova',
            photoUrL: 'https://variety.com/wp-content/uploads/2020/12/supernova.jpg',
            id: 'stanley-tucci'
          },
          {
            title: 'Chadwick Boseman for Da 5 Bloods',
            photoUrL: 'https://variety.com/wp-content/uploads/2020/12/da_five_bloods_ver2.jpg',
            id: 'chadwick-boseman'
          },
        ],
        title: "Best Supporting Actor"
      },
      {
        id: "best-supporting-actress",
        items: [
          {
            title: 'Olivia Colman for The Father',
            photoUrL: 'https://variety.com/wp-content/uploads/2020/12/father_ver3.jpg',
            id: 'olivia-coleman'
          },
          {
            title: 'Amanda Seyfried for Mank',
            photoUrL: 'https://variety.com/wp-content/uploads/2020/12/mank.jpg',
            id: 'amanda-seyfried'
          },
          {
            title: 'Ellen Burstyn for Pieces of a Woman',
            photoUrL: 'https://variety.com/wp-content/uploads/2020/12/pieces_of_a_woman.jpg',
            id: 'ellen-burstyn'
          },
          {
            title: 'Maria Bakalova for Borat Subsequent Moviefilm',
            photoUrL: 'https://variety.com/wp-content/uploads/2020/12/borat_two_ver2.jpg',
            id: 'maria-bakalova'
          },
          {
            title: 'Yuh-jung Youn for Minari',
            photoUrL: 'https://variety.com/wp-content/uploads/2020/12/minari-1.jpg',
            id: 'yuh-jung-youn'
          },
        ],
        title: "Best Supporting Actress"
      },
      {
        id: "best-visual-effects",
        items: [
          {
            title: 'The Midnight Sky',
            photoUrL: 'https://variety.com/wp-content/uploads/2020/12/midnight_sky_ver2.jpg',
            id: 'midnight-sky'
          },
          {
            title: 'Tenet',
            photoUrL: 'https://variety.com/wp-content/uploads/2020/12/tenet_ver7.jpg',
            id: 'tenet'
          },
          {
            title: 'Wonder Woman 1984',
            photoUrL: 'https://variety.com/wp-content/uploads/2020/12/wonder_woman_nineteen_eighty_four_ver18.jpg',
            id: 'wonder-woman'
          },
          {
            title: 'The Invisible Man',
            photoUrL: 'https://variety.com/wp-content/uploads/2020/12/invisible_man.jpg',
            id: 'the-invisible-man'
          },
          {
            title: 'Mulan',
            photoUrL: 'https://variety.com/wp-content/uploads/2020/12/minari-1.jpg',
            id: 'mulan'
          },
        ],
        title: "Best Visual Effects"
      }
    ],
  }
}

const ballotData = generateBallotData();

app.get('/api/getBallotData', (req, res) => {
  res.json(ballotData);
  console.log('Sent navigation categories and list of nominees');
});

console.log('App is listening on port ' + port);