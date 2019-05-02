//Jihee Kim
//jiheek1@andrew.cmu.edu


// consider each dish presented on the Traaditional Food Homepage as a card
// that we will sort through with the filterSelection function
// there will be four control buttons, including "show all", "rice," "noodles,"
// "soup," and "meat." Each card will be given one or more classes (rice, noddle,
// soup, and meat) to be listed in those categories when the cards are sorted

filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  // add "show" class to filtered (relevant to category) elements and remove the
  // "show class" from elements that are not relevant
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered (relevant to category) elements
function w3AddClass(element, name) {
  var i, array1, array2;
  array1 = element.className.split(" ");
  array2 = name.split(" ");
  for (i = 0; i < array2.length; i++) {
    if (array1.indexOf(array2[i]) == -1) {
      element.className += " " + array2[i];
    }
  }
}

// Hide elements that are not relevant
function w3RemoveClass(element, name) {
  var i, array1, array2;
  array1 = element.className.split(" ");
  array2 = name.split(" ");
  for (i = 0; i < array2.length; i++) {
    while (array1.indexOf(array2[i]) > -1) {
      array1.splice(array1.indexOf(array2[i]), 1);
    }
  }
  element.className = array1.join(" ");
}

// Add "active" class to the currently used button
// adding color with css would help making this button stand out
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
