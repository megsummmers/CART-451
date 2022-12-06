window.addEventListener("load", function () {
  console.log("loaded");
    //GET
    $.get(
      "/varsToMongoRand",
    // if we get a response from the server .... 
      function(response) {
        console.log(response[0]);
        console.log(response[0].first_name);
        document.getElementById("FirstNameRand").textContent = String(response[0].first_name);
        document.getElementById("LastNameRand").textContent = String(response[0].last_name);
        document.getElementById("GenderRand").textContent = String(response[0].gender);
        document.getElementById("SkinRand").textContent = String(response[0].skin);
        document.getElementById("HairRand").textContent = String(response[0].hair);
        document.getElementById("BodyRand").textContent = String(response[0].bod);
        document.getElementById("EyeRand").textContent = String(response[0].eye);
        document.getElementById("BirthdayRand").textContent = String(response[0].birthday);
        document.getElementById("SeasonRand").textContent = String(response[0].season);
        document.getElementById("AnimalRand").textContent = String(response[0].animal);
        document.getElementById("ColourRand").textContent = String(response[0].colour);
        document.getElementById("ShowRand").textContent = String(response[0].show);
        document.getElementById("MusicRand").textContent = String(response[0].music);
        document.getElementById("SchoolRand").textContent = String(response[0].school_course);
        document.getElementById("BookRand").textContent = String(response[0].book);
        document.getElementById("PlaceRand").textContent = String(response[0].place);
        document.getElementById("AestheticRand").textContent = String(response[0].aesthetic);
        document.getElementById("PersonalityRand").textContent = String(response[0].personality);
        document.getElementById("HobbyRand").textContent = String(response[0].hobby);
        document.getElementById("OutfitRand").textContent = String(response[0].outfit);
          
      })
    });//click