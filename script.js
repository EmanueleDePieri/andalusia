const flights = [
  { n: "01", title: "La più lineare", route: "VCE / TSF → AGP\nSVQ → VCE / TSF", price: "Da ~€40–€86 a/r*", note: "Málaga in arrivo, Siviglia al ritorno. Zero rientri inutili.", best: true },
  { n: "02", title: "Il giro inverso", route: "VCE / TSF → SVQ\nAGP → VCE / TSF", price: "Da ~€40–€86 a/r*", note: "Stessa logica, da scegliere se gli orari sono migliori." },
  { n: "03", title: "Loop su Málaga", route: "VCE / TSF ↔ AGP", price: "Da ~€44–€60 a/r*", note: "Niente fee one-way, ma rientro da Ronda verso Málaga." },
  { n: "04", title: "Loop su Siviglia", route: "VCE / TSF ↔ SVQ", price: "Da ~€40–€86 a/r*", note: "Valida se Siviglia offre le tariffe più basse." }
];
const stops = [
  ["01", "Málaga", "Arrivo AGP · centro storico se l’orario lo permette", "Arrivo"],
  ["02–03", "Granada", "Due notti · Alhambra da prenotare appena disponibile", "Málaga → Granada · ~1h45"],
  ["04", "Córdoba", "Una notte · garage fuori dal centro storico", "Granada → Córdoba · ~2h20"],
  ["05–06", "Siviglia", "Due notti · hotel e processioni da bloccare presto", "Córdoba → Siviglia · ~1h40"],
  ["07", "Ronda", "Una notte · possibile deviazione a Setenil", "Siviglia → Ronda · ~1h40"],
  ["08", "Rientro", "Riconsegna in aeroporto con buon margine", "Ronda → SVQ · ~1h50"]
];
const rentals = [
  ["SIXT", "Consentito secondo tariffa", "AGP + SVQ", "Possibile riferimento €0–50; verificare il totale", "1"],
  ["Enterprise / Alamo", "Da verificare", "AGP + SVQ", "Confrontare deposito e franchigia", "2"],
  ["Avis / Budget", "Da verificare", "AGP + SVQ", "La fee può essere più alta", "3"],
  ["Hertz", "Secondo località/tariffa", "AGP + SVQ", "Accertare l’inclusione della one-way fee", "4"],
  ["Europcar", "Da verificare", "AGP + SVQ", "Controllare il supplemento aeroporto", "5"]
];
const planning = [
  ["ORA → NOV 2026", "Monitorare Ryanair, Wizz Air Malta e Vueling per l’operativo estivo 2027."],
  ["APPENA APRONO", "Confrontare 20→28, 21→29 e 21→28 marzo, sia VCE sia TSF, con bagaglio incluso."],
  ["DOPO I VOLI", "Bloccare un’auto cancellabile AGP→SVQ e un piano B AGP↔AGP."],
  ["MOLTO PRESTO", "Prenotare gli hotel di Siviglia e Granada: Semana Santa alza domanda e prezzi."]
];
document.querySelector("#flightCards").innerHTML = flights.map(f => `<article class="flight-card ${f.best ? "best" : ""}"><span class="card-number">${f.n}</span><h3>${f.title}</h3><p class="route-label">${f.route.replace("\n", "<br>")}</p><div class="card-bottom"><strong>${f.price}</strong><span>${f.note}</span></div></article>`).join("");
document.querySelector("#timeline").innerHTML = stops.map(s => `<li><span class="day">${s[0]}</span><div class="stop"><h3>${s[1]}</h3><p>${s[2]}</p></div><span class="drive">${s[3]}</span></li>`).join("");
document.querySelector("#rentalRows").innerHTML = rentals.map(r => `<tr>${r.map(c => `<td>${c}</td>`).join("")}</tr>`).join("");
document.querySelector("#planningList").innerHTML = planning.map(p => `<div class="plan-item"><span>${p[0]}</span><p>${p[1]}</p></div>`).join("");
const button = document.querySelector(".menu-button"); const menu = document.querySelector(".nav-links");
button.addEventListener("click", () => { const open = menu.classList.toggle("open"); button.setAttribute("aria-expanded", open); });
menu.querySelectorAll("a").forEach(a => a.addEventListener("click", () => { menu.classList.remove("open"); button.setAttribute("aria-expanded", "false"); }));
