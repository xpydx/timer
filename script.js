let detik = document.getElementById("day");
let ulang = document.getElementById("ulang");
let berhenti = document.getElementById("berhenti");
let mulai = document.getElementById("mulai");
let tanggal = document.getElementById("tanggal");
let jam = document.getElementById("waktu");
let waktu;
let mundur;
let pause = true;

function update() {
  let now = new Date().getTime();
  let selisih = waktu - now;
  console.log(selisih);

  if (selisih <= 0) {
    clearInterval(mundur);
    detik.textContent = "Times up!";
    return;
  }

  const day = Math.floor(selisih / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (selisih % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((selisih % (1000 * 60 * 60 * 24)) / (1000 * 60));
  const second = Math.floor(selisih / (1000 * 60 * 60 * 24) / 1000);
  console.log(day, hours, minutes, second);
  detik.textContent = `${String(day).padStart(2, "0")} :${String(
    hours
  ).padStart(2, "0")} :${String(minutes).padStart(2, "0")} :${String(
    second
  ).padStart(2, "0")} `;
  //console.log(detik);
  // console.log(selisih);
}
function starttime() {
  if (pause) {
    mundur = new Date(tanggal.value + "" + jam.value).getTime();
    pause = false;
    waktu = setInterval(update, 1000);
    mulai.textContent = "resume";
    berhenti.disabled = false;
    ulang.disabled = false;
  } else {
    pause = true;
    clearInterval(update);
    mulai.textContent = "resume";
    berhenti.disabled = false;
    ulang.disabled = false;
  }
}
function pausetimer() {
  pause = true;
  clearInterval(update);
  mulai.textContent = "resume";
  berhenti.disabled = false;
  ulang.disabled = false;
}
function resettimer() {
  clearInterval(mundur);
  detik.textContent = "00:00:00:00";
  pause = true;
  mulai.textContent = "start";
  berhenti.disabled = true;
  ulang.disabled = true;
}
mulai.addEventListener("click", starttime);
berhenti.addEventListener("click", pausetimer);
ulang.addEventListener("click", resettimer);
