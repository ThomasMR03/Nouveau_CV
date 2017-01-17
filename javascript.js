var posBan=0, ban, delai, msgBan;
msgBan="Bienvenue sur mon Cv Web !";
function banniere() {
  delai = 100;
  if (posBan >= msgBan.length)
    posBan = 0;
  else if (posBan == 0) {
    msgBan = '        ' + msgBan;
    while (msgBan.length < 128)
      msgBan += '        ' + msgBan;
  }
  document.formBan.Fbanniere.value = msgBan.substring(posBan,posBan+msgBan.length);
  posBan++;
  ban = setTimeout("banniere(delai)",delai);
}