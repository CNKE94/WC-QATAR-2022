function refreshPage() {
  window.location.reload();
} 

const main = () => {
  winnersOfGroups = [];
  winnersOfGroupsList = [];

  podaciJson("groupA");
  podaciJson("groupB");
  podaciJson("groupC");
  podaciJson("groupD");
  podaciJson("groupE");
  podaciJson("groupF");
  podaciJson("groupG");
  podaciJson("groupH");

  function podaciJson(file) {
    let xHr = new XMLHttpRequest();

    xHr.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        let grupe = JSON.parse(this.responseText);
        console.log(grupe);

        mecevi(
          grupe[0],
          grupe[1],
          grupe[2],
          grupe[3],
          "Grupna faza - I kolo",
          grupe[0].group,
          `matches1`
        );
        mecevi(
          grupe[0],
          grupe[2],
          grupe[1],
          grupe[3],
          "Grupna faza - II kolo",
          grupe[0].group,
          `matches2`
        );
        mecevi(
          grupe[0],
          grupe[3],
          grupe[1],
          grupe[2],
          "Grupna faza - III kolo",
          grupe[0].group,
          `matches3`
        );

        grupe.sort(function (a, b) {
          return (
            b.points - a.points ||
            b.goaldifference - a.goaldifference ||
            b.goals - a.goals || a.teamNum - b.teamNum
          );
        });

        let grupe1 = grupe[0].group + "1";
        let grupe2 = grupe[1].group + "2";
        console.log( grupe1, grupe2);

        grupe[0].position = grupe1;
        grupe[1].position = grupe2;

        let html = ``;

        html += `
          <div class="lista">
              <ul class="lista1">
              <li class="group"> GROUP ${grupe[0].group}</li>
              <li class="green list">1. ${grupe[0].team} (${grupe[0].rang}) <span class="right">${grupe[0].win} ${grupe[0].draw} ${grupe[0].lose} ${grupe[0].goals}:${grupe[0].goalsConceded} ${grupe[0].goaldifference} <span class="bold">${grupe[0].points}</span></span></li>
              <li class="qualification green list">2. ${grupe[1].team} (${grupe[1].rang}) <span class="right">${grupe[1].win} ${grupe[1].draw} ${grupe[1].lose} ${grupe[1].goals}:${grupe[1].goalsConceded} ${grupe[1].goaldifference} <span class="bold">${grupe[1].points}</span></span></li>
              <li class="red list">3. ${grupe[2].team} (${grupe[2].rang}) <span class="right">${grupe[2].win} ${grupe[2].draw} ${grupe[2].lose} ${grupe[2].goals}:${grupe[2].goalsConceded} ${grupe[2].goaldifference} <span class="bold">${grupe[2].points}</span></span></li>
              <li class="red list">4. ${grupe[3].team} (${grupe[3].rang}) <span class="right">${grupe[3].win} ${grupe[3].draw} ${grupe[3].lose} ${grupe[3].goals}:${grupe[3].goalsConceded} ${grupe[3].goaldifference} <span class="bold">${grupe[3].points}</span></span></li>
              </ul>
          </div>`;
        document.getElementById(`groups`).innerHTML += html;

        let qualification = [grupe[0].team, grupe[1].team];
        let qualificationGroup = [grupe[0].position, grupe[1].position];
        winnersOfGroupsList.push(qualificationGroup);

        console.log(winnersOfGroupsList);
        winnersOfGroups.push(qualification);

        let a1 = [winnersOfGroups[0][0], winnersOfGroupsList[0][0]];
        let a2 = [winnersOfGroups[0][1], winnersOfGroupsList[0][1]];

        let b1 = [winnersOfGroups[1][0], winnersOfGroupsList[1][0]];
        let b2 = [winnersOfGroups[1][1], winnersOfGroupsList[1][1]];

        let c1 = [winnersOfGroups[2][0], winnersOfGroupsList[2][0]];
        let c2 = [winnersOfGroups[2][1], winnersOfGroupsList[2][1]];

        let d1 = [winnersOfGroups[3][0], winnersOfGroupsList[3][0]];
        let d2 = [winnersOfGroups[3][1], winnersOfGroupsList[3][1]];

        let e1 = [winnersOfGroups[4][0], winnersOfGroupsList[4][0]];
        let e2 = [winnersOfGroups[4][1], winnersOfGroupsList[4][1]];

        let f1 = [winnersOfGroups[5][0], winnersOfGroupsList[5][0]];
        let f2 = [winnersOfGroups[5][1], winnersOfGroupsList[5][1]];

        let g1 = [winnersOfGroups[6][0], winnersOfGroupsList[6][0]];
        let g2 = [winnersOfGroups[6][1], winnersOfGroupsList[6][1]];

        let h1 = [winnersOfGroups[7][0], winnersOfGroupsList[7][0]];
        let h2 = [winnersOfGroups[7][1], winnersOfGroupsList[7][1]];

        let osmina1 = [];
        let osmina2 = [];
        let osmina3 = [];
        let osmina4 = [];
        let osmina5 = [];
        let osmina6 = [];
        let osmina7 = [];
        let osmina8 = [];

        let cetvrtina1 = [];
        let cetvrtina2 = [];
        let cetvrtina3 = [];
        let cetvrtina4 = [];

        let polu1 = [];
        let polu2 = [];

        let final = [];
        let prazno = [];

        EliminationPhase(a1[0], b2[0], osmina1, "osminaFinala", a1[1], b2[1]);
        EliminationPhase(c1[0], d2[0], osmina2, "osminaFinala", c1[1], d2[1]);
        EliminationPhase(e1[0], f2[0], osmina3, "osminaFinala", e1[1], f2[1]);
        EliminationPhase(g1[0], h2[0], osmina4, "osminaFinala", g1[1], h2[1]);
        EliminationPhase(b1[0], a2[0], osmina5, "osminaFinala", b1[1], a2[1]);
        EliminationPhase(d1[0], c2[0], osmina6, "osminaFinala", d1[1], c2[1]);
        EliminationPhase(f1[0], e2[0], osmina7, "osminaFinala", f1[1], e2[1]);
        EliminationPhase(h1[0], g2[0], osmina8, "osminaFinala", h1[1], g2[1]);

        EliminationPhase(osmina1[0], osmina2[0], cetvrtina1, "cetvrtinaFinala", osmina1[1], osmina2[1]);
        EliminationPhase(osmina3[0], osmina4[0], cetvrtina2, "cetvrtinaFinala", osmina3[1], osmina4[1]);
        EliminationPhase(osmina5[0], osmina6[0], cetvrtina3, "cetvrtinaFinala", osmina5[1], osmina6[1]);
        EliminationPhase(osmina7[0], osmina8[0], cetvrtina4, "cetvrtinaFinala", osmina7[1], osmina8[1]);

        EliminationPhase(cetvrtina1[0], cetvrtina2[0], polu1, "poluFinale", cetvrtina1[1], cetvrtina2[1]);
        EliminationPhase(cetvrtina3[0], cetvrtina4[0], polu2, "poluFinale", cetvrtina3[1], cetvrtina4[1]);

        EliminationPhase(polu1[0], polu2[0], final, "Finale", polu1[1], polu2[1]);
        EliminationPhase(final[0], "", prazno, "winner");
      }

      if (this.status >= 400) {
        var greska = new Error("Request failed:" + xHr.statusText);
        console.log(greska);
      }
    };

    function mecevi(domacin, gost, domacin1, gost1, kolo, grupa, round) {
      let mec = [
        domacin.team,
        Math.round(Math.random() * 6),
        Math.round(Math.random() * 6),
        gost.team,
      ];

      let scoredGoalsHome = mec[1];
      let concededGoalsHome = mec[2];
      let goalDiffHome = scoredGoalsHome - concededGoalsHome;

      let scoredGoalsAway = mec[2];
      let concededGoalsAway = mec[1];
      let goalDiffAway = scoredGoalsAway - concededGoalsAway;

      domacin.goals += scoredGoalsHome;
      gost.goals += scoredGoalsAway;

      domacin.goalsConceded += concededGoalsHome;
      gost.goalsConceded += concededGoalsAway;

      domacin.goaldifference += goalDiffHome;
      gost.goaldifference += goalDiffAway;

      if (mec[1] > mec[2]) {
        domacin.points += 3;
        domacin.win += 1;
        gost.lose += 1;
      }

      if (mec[1] == mec[2]) {
        domacin.points += 1;
        domacin.draw += 1;
        gost.points += 1;
        gost.draw += 1;
      }

      if (mec[1] < mec[2]) {
        gost.points += 3;
        domacin.lose += 1;
        gost.win += 1;
      }

      let mec1 = [
        domacin1.team,
        Math.round(Math.random() * 6),
        Math.round(Math.random() * 6),
        gost1.team,
      ];

      let scoredGoalsHome1 = mec1[1];
      let concededGoalsHome1 = mec1[2];
      let goalDiffHome1 = scoredGoalsHome1 - concededGoalsHome1;

      let scoredGoalsAway1 = mec1[2];
      let concededGoalsAway1 = mec1[1];
      let goalDiffAway1 = scoredGoalsAway1 - concededGoalsAway1;

      domacin1.goals += scoredGoalsHome1;
      gost1.goals += scoredGoalsAway1;

      domacin1.goalsConceded += concededGoalsHome1;
      gost1.goalsConceded += concededGoalsAway1;

      domacin1.goaldifference += goalDiffHome1;
      gost1.goaldifference += goalDiffAway1;

      if (mec1[1] > mec1[2]) {
        domacin1.points += 3;
        domacin1.win += 1;
        gost1.lose += 1;
      }

      if (mec1[1] == mec1[2]) {
        domacin1.points += 1;
        domacin1.draw += 1;
        gost1.points += 1;
        gost1.draw += 1;
      }

      if (mec1[1] < mec1[2]) {
        gost1.points += 3;
        domacin1.lose += 1;
        gost1.win += 1;
      }

      let matches = ``;

      matches += `
              <ul class="">
              <li><span class="bold">${kolo} - Grupa ${grupa}</span></li>
              <li class="">${mec[0]} ${mec[1]} : ${mec[2]} ${mec[3]}</li>
              <li class="">${mec1[0]} ${mec1[1]} : ${mec1[2]} ${mec1[3]}</li>
              </ul><br>
          `;
      document.getElementById(`${round}`).innerHTML += matches;
    }

    function EliminationPhase(prvi, drugi, variabla, final, position1, position2) {
      let mec = [
        prvi,
        Math.round(Math.random() * 6),
        Math.round(Math.random() * 6),
        drugi,
      ];

      let klasaPobednik1 = '';
      let klasaPobednik2 = '';

      if (mec[1] != mec[2]) {
        if (mec[1] > mec[2]) {
          variabla.push(mec[0], position1);
          klasaPobednik1 = 'pobednik';
          klasaPobednik2 = '';
        }

        if (mec[1] < mec[2]) {
          variabla.push(mec[3], position2);
          klasaPobednik2 = 'pobednik';
          klasaPobednik1 = '';
        }
      } else {
        mec[1] = Math.round(Math.random() * 6);
        mec[2] = Math.round(Math.random() * 6);
        if (mec[1] > mec[2]) {
          variabla.push(mec[0], position1);
          klasaPobednik1 = 'pobednik';
          klasaPobednik2 = '';
        }

        if (mec[1] < mec[2]) {
          variabla.push(mec[3], position2);
          klasaPobednik2 = 'pobednik';
          klasaPobednik1 = '';
        }

        if (mec[1] == mec[2]) {
          let pobednik = Math.ceil(Math.random() * 2);
          if (pobednik == 1) {
            mec[1] += 1;
            variabla.push(mec[0], position1);
            klasaPobednik1 = 'pobednik';
            klasaPobednik2 = '';
          } else {
            mec[2] += 1;
            variabla.push(mec[3], position2);
            klasaPobednik2 = 'pobednik';
            klasaPobednik1 = '';
          }
        }
      }

      let mecevi = ``;

      mecevi += `
      <ul class="margin blue">
        <li class=""><span class="levo ${klasaPobednik1}">(${position1})${mec[0]}</span> <span class="res red">${mec[1]} : ${mec[2]}</span> <span class="desno ${klasaPobednik2}">(${position2})${mec[3]}</span></li>
      </ul>`;

      let winner = `
      <img class="trophy trophyLeft" src="images/trophy.png"><span class="winner">🎇  ${prvi}  🎇</span><img class="trophy trophyRight" src="images/trophy.png">`;

      document.getElementById(`${final}`).innerHTML += mecevi;
      document.getElementById(`winner`).innerHTML = winner;
    }

    xHr.open("GET", "json/" + file + ".json");
    xHr.send();
  }
};
main();
