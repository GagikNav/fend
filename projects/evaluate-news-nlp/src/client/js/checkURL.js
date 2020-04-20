//checking URL wether  it's valid
function urlCheck(url) {
   let regex = /(http(s)?):[\/\/(www\.)?a-zA-Z0-9@:%._\+~#={2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
   if (regex.test(url)) {
      return true;
   } else {
      return false;
   }
}
export { urlCheck };
