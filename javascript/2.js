//Jihee Kim
//jiheek1@andrew.cmu.edu


//go through the spec list of the first dish and sort the items in alphabetical order
function sortList1() {
  var list, i, sorting, b, shouldSwitch;
  list = document.getElementById("id01");
  sorting = true;
  while (sorting) {
    //no sorting is done in the initial state
    sorting = false;
    b = list.getElementsByTagName("LI");
    //Loop through all list items:
    for (i = 0; i < (b.length - 1); i++) {
      //at the initial stage, say that there is not switching to do
      shouldSwitch = false;
      //check if the next list item should switch places with the current item
      if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
        // if the next list item starts with a word that is alphabetically lower
        // than the current list item, say that a switch is needed and break the loop
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      // when a switch of orders in the list items is needed, make the switch
      // and say that the sorting was done
      b[i].parentNode.insertBefore(b[i + 1], b[i]);
      sorting = true;
    }
  }
}

//go through the spec list of the second dish and sort the items in alphabetical order
function sortList2() {
  var list, i, sorting, b, shouldSwitch;
  list = document.getElementById("id02");
  sorting = true;
  while (sorting) {
    //no sorting is done in the initial state
    sorting = false;
    b = list.getElementsByTagName("LI");
    //Loop through all list items:
    for (i = 0; i < (b.length - 1); i++) {
      //at the initial stage, say that there is not switching to do
      shouldSwitch = false;
      //check if the next list item should switch places with the current item
      if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
        // if the next list item starts with a word that is alphabetically lower
        // than the current list item, say that a switch is needed and break the loop
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      // when a switch of orders in the list items is needed, make the switch
      // and say that the sorting was done
      b[i].parentNode.insertBefore(b[i + 1], b[i]);
      sorting = true;
    }
  }
}

//go through the spec list of the third dish and sort the items in alphabetical order
function sortList3() {
  var list, i, sorting, b, shouldSwitch;
  list = document.getElementById("id03");
  sorting = true;
  while (sorting) {
    //no sorting is done in the initial state
    sorting = false;
    b = list.getElementsByTagName("LI");
    //Loop through all list items:
    for (i = 0; i < (b.length - 1); i++) {
      //at the initial stage, say that there is not switching to do
      shouldSwitch = false;
      //check if the next list item should switch places with the current item
      if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
        // if the next list item starts with a word that is alphabetically lower
        // than the current list item, say that a switch is needed and break the loop
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      // when a switch of orders in the list items is needed, make the switch
      // and say that the sorting was done
      b[i].parentNode.insertBefore(b[i + 1], b[i]);
      sorting = true;
    }
  }
}

//go through the spec list of the fourth dish and sort the items in alphabetical order
function sortList4() {
  var list, i, sorting, b, shouldSwitch;
  list = document.getElementById("id04");
  sorting = true;
  while (sorting) {
    //no sorting is done in the initial state
    sorting = false;
    b = list.getElementsByTagName("LI");
    //Loop through all list items:
    for (i = 0; i < (b.length - 1); i++) {
      //at the initial stage, say that there is not switching to do
      shouldSwitch = false;
      //check if the next list item should switch places with the current item
      if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
        // if the next list item starts with a word that is alphabetically lower
        // than the current list item, say that a switch is needed and break the loop
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      // when a switch of orders in the list items is needed, make the switch
      // and say that the sorting was done
      b[i].parentNode.insertBefore(b[i + 1], b[i]);
      sorting = true;
    }
  }
}

//go through the spec list of the fifth dish and sort the items in alphabetical order
function sortList5() {
  var list, i, sorting, b, shouldSwitch;
  list = document.getElementById("id05");
  sorting = true;
  while (sorting) {
    //no sorting is done in the initial state
    sorting = false;
    b = list.getElementsByTagName("LI");
    //Loop through all list items:
    for (i = 0; i < (b.length - 1); i++) {
      //at the initial stage, say that there is not switching to do
      shouldSwitch = false;
      //check if the next list item should switch places with the current item
      if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
        // if the next list item starts with a word that is alphabetically lower
        // than the current list item, say that a switch is needed and break the loop
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      // when a switch of orders in the list items is needed, make the switch
      // and say that the sorting was done
      b[i].parentNode.insertBefore(b[i + 1], b[i]);
      sorting = true;
    }
  }
}

//go through the spec list of the sixth dish and sort the items in alphabetical order
function sortList6() {
  var list, i, sorting, b, shouldSwitch;
  list = document.getElementById("id06");
  sorting = true;
  while (sorting) {
    //no sorting is done in the initial state
    sorting = false;
    b = list.getElementsByTagName("LI");
    //Loop through all list items:
    for (i = 0; i < (b.length - 1); i++) {
      //at the initial stage, say that there is not switching to do
      shouldSwitch = false;
      //check if the next list item should switch places with the current item
      if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
        // if the next list item starts with a word that is alphabetically lower
        // than the current list item, say that a switch is needed and break the loop
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      // when a switch of orders in the list items is needed, make the switch
      // and say that the sorting was done
      b[i].parentNode.insertBefore(b[i + 1], b[i]);
      sorting = true;
    }
  }
}

//go through the spec list of the seventh dish and sort the items in alphabetical order
function sortList7() {
  var list, i, sorting, b, shouldSwitch;
  list = document.getElementById("id07");
  sorting = true;
  while (sorting) {
    //no sorting is done in the initial state
    sorting = false;
    b = list.getElementsByTagName("LI");
    //Loop through all list items:
    for (i = 0; i < (b.length - 1); i++) {
      //at the initial stage, say that there is not switching to do
      shouldSwitch = false;
      //check if the next list item should switch places with the current item
      if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
        // if the next list item starts with a word that is alphabetically lower
        // than the current list item, say that a switch is needed and break the loop
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      // when a switch of orders in the list items is needed, make the switch
      // and say that the sorting was done
      b[i].parentNode.insertBefore(b[i + 1], b[i]);
      sorting = true;
    }
  }
}

//go through the spec list of the eighth dish and sort the items in alphabetical order
function sortList8() {
  var list, i, sorting, b, shouldSwitch;
  list = document.getElementById("id08");
  sorting = true;
  while (sorting) {
    //no sorting is done in the initial state
    sorting = false;
    b = list.getElementsByTagName("LI");
    //Loop through all list items:
    for (i = 0; i < (b.length - 1); i++) {
      //at the initial stage, say that there is not switching to do
      shouldSwitch = false;
      //check if the next list item should switch places with the current item
      if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
        // if the next list item starts with a word that is alphabetically lower
        // than the current list item, say that a switch is needed and break the loop
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      // when a switch of orders in the list items is needed, make the switch
      // and say that the sorting was done
      b[i].parentNode.insertBefore(b[i + 1], b[i]);
      sorting = true;
    }
  }
}
