if (typeof jQuery != 'undefined') {  
    // jQuery is loaded => print the version
  console.log('Version ' + jQuery.fn.jquery + ' of jQuery is loaded.');
} else {
  console.log('jQuery is not loaded');
}