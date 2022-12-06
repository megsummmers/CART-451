window.addEventListener("load", function () {
  console.log("loaded");
  var userID = document.getElementById("FirstNameAns").value;
  var artistID = document.getElementById("FirstNameRand").value;

  //GET
  $.get(
    "/varsToMongo",
    {first_name: userID},
  // if we get a response from the server .... 
    function(response) {
      console.log(response[0]);
      console.log(response[0].first_name);
      document.getElementById("FirstNameAns").textContent = String(response[0].first_name);
      document.getElementById("LastNameAns").textContent = String(response[0].last_name);
      document.getElementById("GenderAns").textContent = String(response[0].gender);
      document.getElementById("SkinAns").textContent = String(response[0].skin);
      document.getElementById("HairAns").textContent = String(response[0].hair);
      document.getElementById("BodyAns").textContent = String(response[0].bod);
      document.getElementById("EyeAns").textContent = String(response[0].eye);
      document.getElementById("BirthdayAns").textContent = String(response[0].birthday);
      document.getElementById("SeasonAns").textContent = String(response[0].season);
      document.getElementById("AnimalAns").textContent = String(response[0].animal);
      document.getElementById("ColourAns").textContent = String(response[0].colour);
      document.getElementById("ShowAns").textContent = String(response[0].show);
      document.getElementById("MusicAns").textContent = String(response[0].music);
      document.getElementById("SchoolAns").textContent = String(response[0].school_course);
      document.getElementById("BookAns").textContent = String(response[0].book);
      document.getElementById("PlaceAns").textContent = String(response[0].place);
      document.getElementById("AestheticAns").textContent = String(response[0].aesthetic);
      document.getElementById("PersonalityAns").textContent = String(response[0].personality);
      document.getElementById("HobbyAns").textContent = String(response[0].hobby);
      document.getElementById("OutfitAns").textContent = String(response[0].outfit);
        
    })
  });//click