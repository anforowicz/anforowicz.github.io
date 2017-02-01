window.reportDragAndDropEvent = function(ev) {
  var msg = "Got a " + ev.type + " event from the " + window.name + " frame";
  msg = msg + " at (" + ev.clientX + ", " + ev.clientY + ")";
  console.log(msg);
}
