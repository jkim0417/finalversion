//Jihee Kim
//jiheek1@andrew.cmu.edu


// use jQuery
$(document).ready(function() {
  // select all the <span> elements inside <li> elements
  $("li").find("span").addClass("spanselected");
  // select all lists associated with the id "one" to add color through css
  $("li").filter("#one").addClass("selected1");
  // select all lists associated with the id "two" to add color through css
  $("li").filter("#two").addClass("selected2");
  // select all lists associated with the id "three" to add color through css
  $("li").filter("#three").addClass("selected3");
  // select all lists associated with the id "four" to add color through css
  $("li").filter("#four").addClass("selected4");
  // change properties of an image tag using jquery
  // set the title to a certain phrase for all dish images on the page
  $("img").attr({
   title: "pictureofdish",
  });
});


var dishes = [
  {"name": "BIBIMBAP";
   "description": "rice mixed with meat, vegetables, egg, and chili pepper paste";
   "recipeimage": "bibimbap.jpg";
   "tags": ["rice", "noodles", "soup", "meat"];
   "containsMeat": "yes";
   "spicy": "yes";
   "prepTime": "20 mins";
   "sweetSavory": "savory";
   "badge": "most popular";
 },

  {"name": "BIBIMBAP";
   "description": "rice mixed with meat, vegetables, egg, and chili pepper paste";
   "recipeimage": "bibimbap.jpg";
   "tags": ["rice", "noodles", "soup", "meat"];
   "containsMeat": "yes";
   "spicy": "yes";
   "prepTime": "20 mins";
   "sweetSavory": "savory";
   "badge": "most popular";
  }
]

function makeCards() {
  for (var i=0; i < cards.length; i++) {

  }
}


<div class="container-fluid">
  <div class="row">
    <div class="filterDiv rice"> <!-- The filterable elements. this dish falls in the
                                      rice category-->
    <div class="col-sm-12 col-md-6 col-lg-3">
    <!--use baotstrap component, badge, highlight the most popular item-->
    <h3> BIBIMBAP <span class="badge">most popular</span></h3>
    <h5> rice mixed with meat, vegetables, egg, and chili pepper paste </h5>

    <div class="recipeimage">
      <a href="bibimbaprecipe.html">
        <img src="images/bibimbap.jpg" alt="Bibimbap">
      </a>
    </div>
      <!--use baotstrap component, list group, to list important quick facts-->
      <button class="sortbt" onclick="sortList1()">sort alphabetically</button>
      <ul class="list-group list-group-flush" id="id01" style="font-family: Economica">
        <li></li>
        <li class="list-group-item" id="one"> contains meat? <span> yes </span> </li>
        <li class="list-group-item" id="two"> spicy? <span> yes </span></li>
        <li class="list-group-item" id="three"> prep time: <span> 20 mins </span></li>
        <li class="list-group-item" id="four"> sweet or savory?<span> savory <span> </li>
      </ul>
    </div>
    </div>
