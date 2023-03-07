let pitanje1 = {
  tekst: "Najbolji prijatelj Freda Kamenka je?",
  odgovori: ["Donald", "Kamičak", "Barni"],
  indeks: 2,
};
let pitanje2 = {
  tekst: "Koja od navedenih zemalja, nije članica NATO saveza?",
  odgovori: ["Danska", "Norveška", "Austrija"],
  indeks: 2,
};
let pitanje3 = {
  tekst: "Na teritoriji koje današnje države se rodio Johan Sebastijan Bah?",
  odgovori: ["Nemačka", "Češka", "Austrija"],
  indeks: 0,
};
let pitanje4 = {
  tekst:
    "Pusti da ti sviram, duša gine od tišine. I ne boj se buke, to što svira to su ruke..  Refren je pesme kog izvođača?",
  odgovori: ["Đorđe Balašević", "Darko Rundek", "Oliver Mandić"],
  indeks: 1,
};
let pitanje5 = {
  tekst:
    "Nankiški masakr, u kojem je ubijeno oko 200.000 Kineza povezan je sa ratom Kineza i ?",
  odgovori: ["Japanaca", "Korejanaca", "Britanaca"],
  indeks: 0,
};
let pitanje6 = {
  tekst:
    "Kako se zove faza dubokog sna u kojoj se nalaze medvedi tokom zimskih meseci?",
  odgovori: ["Hiperbolacija", "Hibernacija", "Hipertenzija"],
  indeks: 1,
};
let pitanje7 = {
  tekst:
    "Koji je igrač NBA u toku svoje karijere promašio čak 5317 slobodnih bacanja?",
  odgovori: ["Denis Rodman", "Majkl Džordan", "Šakil O'Nil"],
  indeks: 2,
};
let pitanje8 = {
  tekst: "Za vreme kog američkog predsednika je trajao građanski rat u SAD-u ?",
  odgovori: ["Abraham Linkoln", "Hari Truman", "Herbert Huver"],
  indeks: 0,
};
let pitanje9 = {
  tekst:
    "Maradona je sa Argentinom osvojio svetsko prvenstvo 1986. pobedivši u finalu Zapadnu Nemačku sa rezultatom?",
  odgovori: ["3-2", "3-1", "4-2"],
  indeks: 0,
};
let pitanje10 = {
  tekst: "Skulpturu 'Bacač diska' izvajao je?",
  odgovori: ["Fidija", "Miron", "Poliklet"],
  indeks: 1,
};
let pitanje11 = {
  tekst: "Ko je autor dela 'Ujka Vanja'?",
  odgovori: ["Čehov", "Dostojevski", "Tolstoj"],
  indeks: 0,
};
let pitanje12 = {
  tekst:
    "Koji poznati brazilski fudbaler je izjavio 'Bog me je stvorio da oduševim ljude svojim golovima'?",
  odgovori: ["Ronaldo", "Romario", "Pele"],
  indeks: 1,
};
let pitanje13 = {
  tekst: "Ako bolujete od Frigofobije imate strah od ?",
  odgovori: ["otvorenog prostora", "hladnoće", "jedenja mesa"],
  indeks: 1,
};
let pitanje14 = {
  tekst:
    "Koji vozač Formule 1 je najmlađi osvajač svetske titule (tada je imao 23 godine i 133 dana)?",
  odgovori: ["Džim Klark", "Sebastijan Fetel", "Luis Hamilton"],
  indeks: 1,
};
let pitanje15 = {
  tekst:
    "Kako se zove android i član posade broda Enterprise, pod komandom kapetana Pikarda?",
  odgovori: ["Zoom", "Flopi", "Dejta"],
  indeks: 2,
};
let pitanje16 = {
  tekst: "Kako se zove najveća pustinja u Australiji?",
  odgovori: [
    "Velika Viktorijina Pustinja",
    "Pustinja Tanami",
    "Velika peščana pustinja",
  ],
  indeks: 0,
};
let pitanje17 = {
  tekst: "Paja Jovanović je likovnu akademiju završio u ?",
  odgovori: ["Beču", "Berlinu", "Moskvi"],
  indeks: 0,
};
let pitanje18 = {
  tekst: "U antičkom grčkom epu 'Ilijada' opevana je srdžba junaka?",
  odgovori: ["Perseja", "Ahila", "Menelaja"],
  indeks: 1,
};
let pitanje19 = {
  tekst: "Jedini organizmi koji ratuju su ljudi, šimpanze i:",
  odgovori: ["komarci", "pauci", "mravi"],
  indeks: 2,
};
let pitanje20 = {
  tekst: "Najduža reka Evrope je?",
  odgovori: ["Volga", "Dnjepar", "Dunav"],
  indeks: 0,
};
let svaPitanja = [
  pitanje1,
  pitanje2,
  pitanje3,
  pitanje4,
  pitanje5,
  pitanje6,
  pitanje7,
  pitanje8,
  pitanje9,
  pitanje10,
  pitanje11,
  pitanje12,
  pitanje13,
  pitanje14,
  pitanje15,
  pitanje16,
  pitanje17,
  pitanje18,
  pitanje19,
  pitanje20,
];
///////////////////////////////////////////////////////////////----------------------------DOM KOMUNIKACIJA----------------------------/////////////////////////////////////
let spanPitanje1 = document.getElementById("pitanje1");
let spanPitanje2 = document.getElementById("pitanje2");
let spanPitanje3 = document.getElementById("pitanje3");
let spanPitanje4 = document.getElementById("pitanje4");
let spanPitanje5 = document.getElementById("pitanje5");
let labelOdg1_1 = document.getElementById("odgovor1_1");
let labelOdg1_2 = document.getElementById("odgovor1_2");
let labelOdg1_3 = document.getElementById("odgovor1_3");
let labelOdg2_1 = document.getElementById("odgovor2_1");
let labelOdg2_2 = document.getElementById("odgovor2_2");
let labelOdg2_3 = document.getElementById("odgovor2_3");
let labelOdg3_1 = document.getElementById("odgovor3_1");
let labelOdg3_2 = document.getElementById("odgovor3_2");
let labelOdg3_3 = document.getElementById("odgovor3_3");
let labelOdg4_1 = document.getElementById("odgovor4_1");
let labelOdg4_2 = document.getElementById("odgovor4_2");
let labelOdg4_3 = document.getElementById("odgovor4_3");
let labelOdg5_1 = document.getElementById("odgovor5_1");
let labelOdg5_2 = document.getElementById("odgovor5_2");
let labelOdg5_3 = document.getElementById("odgovor5_3");
let spanRez1 = document.getElementById("rez1");
let spanRez2 = document.getElementById("rez2");
let spanRez3 = document.getElementById("rez3");
let spanRez4 = document.getElementById("rez4");
let spanRez5 = document.getElementById("rez5");
let dugmePošaljiOdgovore = document.getElementById("pošaljiOdgovore");
let dugmeNovaPitanja = document.getElementById("novaPitanja");
let index1;
let index2;
let index3;
let index4;
let index5;
let petKartica = [];
/////////////////////////////////////////////////////////////---------------------IZVLAČENJE 5 RANDOM PITANJA--------------------///////////////////////////////
let izaberiPitanje = (niz) => {
  for (let i = 0; i < 5; i++) {
    let object = Math.floor(Math.random() * niz.length);
    petKartica.push(niz[object]);
    niz.splice(object, 1);
  }
};
izaberiPitanje(svaPitanja);
/////////////////////////////////////////////////////---------------------------UPISIVANJE 5 RANDOM PITANJA---------------------//////////////////////////////
let učitajPitanja = (kartice) => {
  for (let i = 0; i < kartice.length; i++) {
    if (i == 0) {
      spanPitanje1.innerText = `${kartice[i].tekst}`;
      labelOdg1_1.innerText = `${kartice[i].odgovori[0]}`;
      labelOdg1_2.innerText = `${kartice[i].odgovori[1]}`;
      labelOdg1_3.innerText = `${kartice[i].odgovori[2]}`;
      index1 = `${kartice[i].indeks}`;
    } else if (i == 1) {
      spanPitanje2.innerText = `${kartice[i].tekst}`;
      labelOdg2_1.innerText = `${kartice[i].odgovori[0]}`;
      labelOdg2_2.innerText = `${kartice[i].odgovori[1]}`;
      labelOdg2_3.innerText = `${kartice[i].odgovori[2]}`;
      index2 = `${kartice[i].indeks}`;
    } else if (i == 2) {
      spanPitanje3.innerText = `${kartice[i].tekst}`;
      labelOdg3_1.innerText = `${kartice[i].odgovori[0]}`;
      labelOdg3_2.innerText = `${kartice[i].odgovori[1]}`;
      labelOdg3_3.innerText = `${kartice[i].odgovori[2]}`;
      index3 = `${kartice[i].indeks}`;
    } else if (i == 3) {
      spanPitanje4.innerText = `${kartice[i].tekst}`;
      labelOdg4_1.innerText = `${kartice[i].odgovori[0]}`;
      labelOdg4_2.innerText = `${kartice[i].odgovori[1]}`;
      labelOdg4_3.innerText = `${kartice[i].odgovori[2]}`;
      index4 = `${kartice[i].indeks}`;
    } else if (i == 4) {
      spanPitanje5.innerText = `${kartice[i].tekst}`;
      labelOdg5_1.innerText = `${kartice[i].odgovori[0]}`;
      labelOdg5_2.innerText = `${kartice[i].odgovori[1]}`;
      labelOdg5_3.innerText = `${kartice[i].odgovori[2]}`;
      index5 = `${kartice[i].indeks}`;
    }
  }
};
učitajPitanja(petKartica);
//////////////////////////////////////////////////////////////////////////////-----------------ISPIŠI REZULTATE ODGOVORA-------------/////////////
let brojTacnihOdgovora = 0;
let brojNetacnihOdgovora = 0;
dugmePošaljiOdgovore.addEventListener("click", () => {
  let input1 = document.querySelector("input[name='odgovori1']:checked").value;
  let input2 = document.querySelector("input[name='odgovori2']:checked").value;
  let input3 = document.querySelector("input[name='odgovori3']:checked").value;
  let input4 = document.querySelector("input[name='odgovori4']:checked").value;
  let input5 = document.querySelector("input[name='odgovori5']:checked").value;
  if (input1 == index1) {
    spanRez1.innerText = `Tačno ste odgovorili na 1. pitanje.`;
    spanRez1.style = "color:green";
    brojTacnihOdgovora++;
  } else {
    spanRez1.innerText = `Niste tačno odgovorili na 1. pitanje.`;
    spanRez1.style = "color:red";
    brojNetacnihOdgovora++;
  }
  if (input2 == index2) {
    spanRez2.innerText = `Tačno ste odgovorili na 2. pitanje.`;
    spanRez2.style = "color:green";
    brojTacnihOdgovora++;
  } else {
    spanRez2.innerText = `Niste tačno odgovorili na 2. pitanje.`;
    spanRez2.style = "color:red";
    brojNetacnihOdgovora++;
  }
  if (input3 == index3) {
    spanRez3.innerText = `Tačno ste odgovorili na 3. pitanje.`;
    spanRez3.style = "color:green";
    brojTacnihOdgovora++;
  } else {
    spanRez3.innerText = `Niste tačno odgovorili na 3. pitanje.`;
    spanRez3.style = "color:red";
    brojNetacnihOdgovora++;
  }
  if (input4 == index4) {
    spanRez4.innerText = `Tačno ste odgovorili na 4. pitanje.`;
    spanRez4.style = "color:green";
    brojTacnihOdgovora++;
  } else {
    spanRez4.innerText = `Niste tačno odgovorili na 4. pitanje.`;
    spanRez4.style = "color:red";
    brojNetacnihOdgovora++;
  }
  if (input5 == index5) {
    spanRez5.innerText = `Tačno ste odgovorili na 5. pitanje.`;
    spanRez5.style = "color:green";
    brojTacnihOdgovora++;
  } else {
    spanRez5.innerText = `Niste tačno odgovorili na 5. pitanje.`;
    spanRez5.style = "color:red";
    brojNetacnihOdgovora++;
  }
  let inputi = document.querySelectorAll("input[type=radio]");
  for (let i = 0; i < inputi.length; i++) {
    inputi[i].disabled = true;
  }
  dugmePošaljiOdgovore.disabled = true;
});
/////////////////////////////////////////////////////////////--------------NOVA PITANJA----------------------//////////////////////////
let inputi = document.querySelectorAll("input[type=radio]");

dugmeNovaPitanja.addEventListener("click", () => {
  if (svaPitanja.length == 0) {
    inputi.disabled = true;
    dugmePošaljiOdgovore.disabled = true;
    dugmeNovaPitanja.disabled = true;
    let smile = String.fromCodePoint(128516);
    spanRez1.innerText = `ČESTITAMO, ZAVRŠILI STE KVIZ!	
    ${smile}`;
    spanRez2.innerText = `Broj netačnih odgovora je ${brojNetacnihOdgovora}.`;
    spanRez3.innerText = `Broj tačnih odgovora je ${brojTacnihOdgovora}.`;
    spanRez4.innerText = ``;
    spanRez5.innerText = ``;
  } else {
    petKartica = [];
    spanRez1.innerText = ``;
    spanRez2.innerText = ``;
    spanRez3.innerText = ``;
    spanRez4.innerText = ``;
    spanRez5.innerText = ``;
    let izaberiPitanje = (niz) => {
      for (let i = 0; i < 5; i++) {
        let object = Math.floor(Math.random() * niz.length);
        petKartica.push(niz[object]);
        niz.splice(object, 1);
      }
    };
    izaberiPitanje(svaPitanja);
    učitajPitanja(petKartica);
    for (let i = 0; i < inputi.length; i++) {
      inputi[i].disabled = false;
      if (i == 0 || i % 3 == 0) {
        inputi[i].checked = true;
      }
    }
    dugmePošaljiOdgovore.disabled = false;
  }
});
