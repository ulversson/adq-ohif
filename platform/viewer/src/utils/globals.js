const getParameterByName = paramName => {
  paramName = paramName.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  var regexS = '[\\?&]' + paramName + '=([^&#]*)';
  var regex = new RegExp(regexS);
  var results = regex.exec(window.location.href);
  if (results == null) return '';
  else return decodeURIComponent(results[1].replace(/\+/g, ' '));
};

const removeParam = (paramName) => {
  let searchParams = new URLSearchParams(window.location.search);
  searchParams.delete(paramName);
  if (history.replaceState) {
    let searchString = searchParams.toString().length > 0 ? '?' + searchParams.toString() : '';
    let newUrl = window.location.protocol + "//" + window.location.host + window.location.pathname + searchString + window.location.hash;
    history.replaceState(null, '', newUrl);
  }
}

export { getParameterByName, removeParam };
