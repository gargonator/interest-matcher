var interestsSelect = [];

function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function(e) {
    var a, b, i, val = this.value;
    /*close any already open lists of autocompleted values*/
    closeAllLists();
    if (!val) { return false;}
    currentFocus = -1;
    /*create a DIV element that will contain the items (values):*/
    a = document.createElement("DIV");
    a.setAttribute("id", this.id + "autocomplete-list");
    a.setAttribute("class", "autocomplete-items");
    
    /*append the DIV element as a child of the autocomplete container:*/
    this.parentNode.appendChild(a);
    /*for each item in the array...*/
    for (i = 0; i < arr.length; i++) {
      /*check if the item starts with the same letters as the text field value:*/
      if (arr[i].interest.substr(0, val.length).toUpperCase() == val.toUpperCase()) {
        /*create a DIV element for each matching element:*/
        b = document.createElement("DIV");
        /*make the matching letters bold:*/
        b.setAttribute("id",arr[i].id);
        b.innerHTML = "<strong>" + arr[i].interest.substr(0, val.length) + "</strong>";
        b.innerHTML += arr[i].interest.substr(val.length);
        /*insert a input field that will hold the current array item's value:*/
        b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
        /*execute a function when someone clicks on the item value (DIV element):*/
        b.addEventListener("click", function(e) {

          
          var selectedId = this.id;

          if (interestsSelect.findIndex(function(e) {
            return (e.id === selectedId);
          }) === -1) {
      

            interestsSelect.push(selectedId);
            var interests = JSON.stringify(interestsSelect);
          
          
            console.log(this.textContent);
            console.log(this.id);
            
            
            localStorage.setItem("interests", interests);
    
            var div = document.createElement("DIV");
            div.classList.add("interestPill");
            div.setAttribute("id", this.id);
            div.innerHTML = '<p class="wordInPill">' + this.textContent + "</p>";
            
            var anchor = document.createElement("A");
            anchor.innerHTML = "x"
            anchor.classList.add("deleteButton");
            anchor.setAttribute("id", this.id);

            
            anchor.addEventListener("click", function(e){
              $(`#${this.id}`).remove();
              var index = interestsSelect.findIndex(function(e){
                return (e.id === this.id);
              })

              interestsSelect.splice(index, 1);

              var interests = JSON.stringify(interestsSelect);

              localStorage.setItem("interests", interests); 
            });
  
            div.appendChild(anchor);
            selection.appendChild(div);
            
            closeAllLists(b);
            document.getElementById("srch-term").value = "";
          } else {
            alert("You already chose this one!");
            document.getElementById("srch-term").value = "";
          }
        });
        a.appendChild(b);
      }
    }
  });

  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
    var x = document.getElementById(this.id + "autocomplete-list");
    if (x) x = x.getElementsByTagName("div");
    if (e.keyCode == 40) {
      /*If the arrow DOWN key is pressed,
      increase the currentFocus variable:*/
      currentFocus++;
      /*and and make the current item more visible:*/
      addActive(x);
    } else if (e.keyCode == 38) { //up
      /*If the arrow UP key is pressed,
      decrease the currentFocus variable:*/
      currentFocus--;
      /*and and make the current item more visible:*/
      addActive(x);
    } else if (e.keyCode == 13) {
      /*If the ENTER key is pressed, prevent the form from being submitted,*/
      e.preventDefault();
      if (currentFocus > -1) {
        /*and simulate a click on the "active" item:*/
        if (x) x[currentFocus].click();
      }
    }
  });

  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
};

var interestArray = []


$.get('/api/interests/', (interests) => {
  interests.forEach( interest => {
    interestArray.push(interest);
  });
});





    /*initiate the autocomplete function on the "myInput" element, and pass along the countries array as possible autocomplete values:*/
autocomplete(document.getElementById("srch-term"), interestArray);




