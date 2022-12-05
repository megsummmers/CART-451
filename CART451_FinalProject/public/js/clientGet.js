var id = "Meg";

window.onload = function () {

  //GET
  $.get(
    "/varsToMongo",
    {first_name: id},
  // if we get a response from the server .... 
    function(response) {
      console.log(response.first_name);
      document.getElementById("#FirstNameAns").value = String(response.first_name);
      document.getElementById("#LastNameAns").value = String(response.last_name);
      document.getElementById("#GenderAns").value = String(response.gender_name);
      document.getElementById("#SkinAns").value = String(response.skin_name);
      document.getElementById("#HairAns").value = String(response.hair_name);
      document.getElementById("#BodyAns").value = String(response.body_name);
      document.getElementById("#EyeAns").value = String(response.eye_name);
      document.getElementById("#BirthdayAns").value = String(response.birthday_name);
      document.getElementById("#SeasonAns").value = String(response.season_name);
      document.getElementById("#AnimalAns").value = String(response.animal_name);
      document.getElementById("#ColourAns").value = String(response.colour_name);
      document.getElementById("#ShowAns").value = String(response.show_name);
      document.getElementById("#MusicAns").value = String(response.music_name);
      document.getElementById("#SchoolAns").value = String(response.school_course_name);
      document.getElementById("#BookAns").value = String(response.book_name);
      document.getElementById("#PlaceAns").value = String(response.place_name);
      document.getElementById("#AestheticAns").value = String(response.aesthetic_name);
      document.getElementById("#PersonalityAns").value = String(response.personality_name);
      document.getElementById("#HobbyAns").value = String(response.hobby_name);
      document.getElementById("#OutfitAns").value = String(response.outfit_name);
        
    })
  };//click