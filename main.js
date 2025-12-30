/* PASSWORD LOGIN */
function login() {
  const pass = document.getElementById("password").value;
  const error = document.getElementById("loginError");

  if (pass === "sayang") {
    // GANTI PASSWORD DI SINI
    document.getElementById("loginBox").style.display = "none";
    document.getElementById("content").style.display = "block";
    startHearts();
    showSurprise();
  } else {
    error.innerText = "Password salah 💔";
  }
}

/* HATI JATUH */
function startHearts() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerText = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 3 + "s";
    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 6000);
  }, 300);
}

/* SURPRISE MESSAGE */
function showSurprise() {
  const text = document.getElementById("surpriseText");
  const message =
    "Aku ingin kamu tahu bahwa rasa sayangku ke kamu tidak bergantung pada keadaan. Di saat kamu bahagia aku akan ikut tersenyum, dan di saat kamu lelah aku akan tetap tinggal. Apa pun masalah yang datang, aku mungkin tidak selalu bisa menyelesaikannya, tapi aku akan selalu ada untuk menemani kamu menghadapinya. Aku memilih kamu bukan hanya di hari-hari yang mudah, tapi juga di saat semuanya terasa berat. Selama aku masih di sini, kamu tidak akan pernah sendirian. 🤍";

  let i = 0;
  setInterval(() => {
    if (i < message.length) {
      text.innerHTML += message.charAt(i);
      i++;
    }
  }, 60);
}

function showLove() {
  const text = document.getElementById("loveText");
  text.innerHTML = "Aku sayang kamu hari ini, besok, dan selamanya 💕";
}
