function navigated() {
  var newURI = window.location.hash.substr(1);
  var location = ROUTER.lookupURI(newURI);
  var canonicalURI = location.name && ROUTER.makeURI(location.name, location.options);

  if (!canonicalURI || canonicalURI == newURI) {
    setState({location: location, transitioning: false});
  }
  else if (location.name) {
    startNavigating(location.name, location.options);
  }
}

function startNavigating(name, options) {
  var currentURI = window.location.hash.substr(1);
  var newURI = ROUTER.makeURI(name, options);

  if (currentURI != newURI) {
    setState({transitioning: true});

    window.location.replace(
      window.location.pathname + window.location.search + '#' + newURI
    );
  }
}
