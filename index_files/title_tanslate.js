const rndTtls = {
title1: "Best Dating Site", 
 title2: "Find your match today",
 title3: "You have 3 message from...",
 title4: "4 girls are ready to meet you",
 title5: "Hot Dates"
};
const ttlsTrans = {
en: {
 title: "Best Dating Site",
  title1: "Best Dating Site",
  title2: "Find your match today",
  title3: "You have 3 message from...",
  title4: "4 girls are ready to meet you",
  title5: "Hot Dates"
 }
 ,
 de: {
 title: "Beste Dating-Site",
  title1: "Beste Dating-Site",
  title2: "Finden Sie noch heute Ihre Übereinstimmung",
  title3: "Du hast 3 Nachrichten von...",
  title4: "4 Mädchen sind bereit, dich kennenzulernen",
  title5: "Heiße Termine"
 }
 ,
 fr: {
 title: "Meilleur site de rencontre",
  title1: "Meilleur site de rencontre",
  title2: "Trouvez votre match aujourd'hui",
  title3: "Vous avez 3 messages de...",
  title4: "4 filles sont prêtes à vous rencontrer",
  title5: "Dates chaudes"
 }
 ,
 es: {
 title: "Mejor sitio de citas",
  title1: "Mejor sitio de citas",
  title2: "Encuentra tu pareja hoy",
  title3: "Tienes 3 mensajes de...",
  title4: "4 chicas están listas para conocerte",
  title5: "Fechas calientes"
 }
 ,
 ru: {
 title: "Лучший сайт знакомств",
  title1: "Лучший сайт знакомств",
  title2: "Найдите свою пару сегодня",
  title3: "У вас 3 сообщения от...",
  title4: "4 девушки готовы встретиться с вами",
  title5: "Горячие свидания"
 }
 ,
 ja: {
 title: "最高の出会い系サイト",
  title1: "最高の出会い系サイト",
  title2: "今日あなたの試合を見つけてください",
  title3: "3 件のメッセージがあります...",
  title4: "4人の女の子があなたに会う準備ができています",
  title5: "暑い日"
 }
};
function detectLanguage() {
  let userLang =
      (navigator.languages && navigator.languages[0]) ||
      navigator.language ||
      navigator.userLanguage;
  if (userLang === "zh-CN" || userLang === "zh-SG" || userLang === "zh-MY" || userLang === "zh-CHS") {
    userLang = "zh";
  }
  else if (
    userLang === "zh-HK" ||
    userLang === "zh-MO" ||
    userLang === "zh-TW" ||
    userLang === "zh-CHT"
  ) {
    userLang = "zh";
  }
  else if (userLang.length > 2) {
    userLang = userLang[0] + userLang[1];
  }
  return userLang;
}
window.addEventListener('DOMContentLoaded', (event) => {
  let bL = detectLanguage();
  const lT = ttlsTrans[bL] && Object.keys(ttlsTrans[bL]).length > 0 ? ttlsTrans[bL] : {
  };
  let ttls = Object.keys(rndTtls);
  let tk = 'title';
  let tv = document.getElementsByTagName('title')[0].innerText;
  if (ttls.length > 0) {
    tk = ttls[Math.floor(Math.random() * ttls.length)];
    tv = rndTtls[tk];
  }
  if (lT.hasOwnProperty(tk) && lT[tk] !== "") {
    tv = lT[tk];
  }
  document.getElementsByTagName('title')[0].innerText = tv;
}
                        );
