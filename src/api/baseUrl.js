export default function getBaseUrl(){
  //const inDevelopment = window.location.hostname === 'localhost';
  //return inDevelopment ? 'http://localhost:3001/' : '/';
  return getQueryStringParameterByName('useMockApi') ? 'http://localhost:3001/' : '/';
}
/*eslint-disable*/
function getQueryStringParameterByName(name, url) {
  if(!url) url = window.location.href;
  console.log("passed on value is" + name);

  name = name.replace(/[\[\]]/g, "\\$&");

  console.log("After replace, the value is" + name);
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);

    console.log("Value of results, the result value is" + name);
  if(!results) return null;
  if(!results[2]) return '';
  console.log("return result string is" + decodeURIComponent(results[2].replace(/\+/g, " ")));
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}
/*eslint-enable */
