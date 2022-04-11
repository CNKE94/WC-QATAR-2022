function refreshPage() {
  window.location.reload();
} 

const main = () => {
  winnersOfGroups = [];

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
        // console.log(grupe);

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
        winnersOfGroups.push(qualification);
        // console.log(qualification);
        // console.log(winnersOfGroups);

        let a1 = winnersOfGroups[0][0];
        let a2 = winnersOfGroups[0][1];

        let b1 = winnersOfGroups[1][0];
        let b2 = winnersOfGroups[1][1];

        let c1 = winnersOfGroups[2][0];
        let c2 = winnersOfGroups[2][1];

        let d1 = winnersOfGroups[3][0];
        let d2 = winnersOfGroups[3][1];

        let e1 = winnersOfGroups[4][0];
        let e2 = winnersOfGroups[4][1];

        let f1 = winnersOfGroups[5][0];
        let f2 = winnersOfGroups[5][1];

        let g1 = winnersOfGroups[6][0];
        let g2 = winnersOfGroups[6][1];

        let h1 = winnersOfGroups[7][0];
        let h2 = winnersOfGroups[7][1];

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

        EliminationPhase(a1, b2, osmina1, "osminaFinala");
        EliminationPhase(c1, d2, osmina2, "osminaFinala");
        EliminationPhase(e1, f2, osmina3, "osminaFinala");
        EliminationPhase(g1, h2, osmina4, "osminaFinala");
        EliminationPhase(b1, a2, osmina5, "osminaFinala");
        EliminationPhase(d1, c2, osmina6, "osminaFinala");
        EliminationPhase(f1, e2, osmina7, "osminaFinala");
        EliminationPhase(h1, g2, osmina8, "osminaFinala");

        EliminationPhase(osmina1, osmina2, cetvrtina1, "cetvrtinaFinala");
        EliminationPhase(osmina3, osmina4, cetvrtina2, "cetvrtinaFinala");
        EliminationPhase(osmina5, osmina6, cetvrtina3, "cetvrtinaFinala");
        EliminationPhase(osmina7, osmina8, cetvrtina4, "cetvrtinaFinala");

        EliminationPhase(cetvrtina1, cetvrtina2, polu1, "poluFinale");
        EliminationPhase(cetvrtina3, cetvrtina4, polu2, "poluFinale");

        EliminationPhase(polu1, polu2, final, "Finale");
        EliminationPhase(final, "", prazno, "winner");
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

    function EliminationPhase(prvi, drugi, variabla, final) {
      let mec = [
        prvi,
        Math.round(Math.random() * 6),
        Math.round(Math.random() * 6),
        drugi,
      ];

      if (mec[1] != mec[2]) {
        if (mec[1] > mec[2]) {
          variabla.push(mec[0]);
        }

        if (mec[1] < mec[2]) {
          variabla.push(mec[3]);
        }
      } else {
        mec[1] = Math.round(Math.random() * 6);
        mec[2] = Math.round(Math.random() * 6);
        if (mec[1] > mec[2]) {
          variabla.push(mec[0]);
        }

        if (mec[1] < mec[2]) {
          variabla.push(mec[3]);
        }

        if (mec[1] == mec[2]) {
          let pobednik = Math.ceil(Math.random() * 2);
          if (pobednik == 1) {
            mec[1] += 1;
            variabla.push(mec[0]);
          } else {
            mec[2] += 1;
            variabla.push(mec[3]);
          }
        }
      }

      let mecevi = ``;

      mecevi += `
      <ul class="margin blue">
        <li class=""><span class="levo">${mec[0]}</span> <span class="res red">${mec[1]} : ${mec[2]}</span> <span class="desno">${mec[3]}</span></li>
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