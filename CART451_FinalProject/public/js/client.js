window.localStorage;
var title;

window.addEventListener("load", function () {
  title = this.document.title;
  switch(title){
    case "ProfileCreate": pushText(); break;
    case "ProfileCanvas": pushIMG(); break;
    case "ProfileView": getUser(); getIMG(); break;
    case "CanvasGame": getRandUser(); getUser(); getRandIMG(); break;
    case "Gallery": getUsers(); break;
  }

    function pushText(){
      //receive form info
      document.querySelector("#sendData").addEventListener('click', 
        function(event){
          event.preventDefault();
          localStorage.setItem("userID", document.querySelector("#firstname").value);
          let mData={
              //physical descriptors
              first_name:document.querySelector("#firstname").value,
              last_name:document.querySelector("#lastname").value,
              gender:document.querySelector("#gender").value,
              skin:document.querySelector("#skin").value,
              hair:document.querySelector("#hair").value,
              body:document.querySelector("#body").value,
              eye:document.querySelector("#eye").value,
              birthday:document.querySelector("#birthday").value,
              //descriptive kind
              season:document.querySelector("#season").value,
              animal:document.querySelector("#animal").value,
              colour:document.querySelector("#colour").value,
              show:document.querySelector("#show").value,
              music:document.querySelector("#music").value,
              school_course:document.querySelector("#school").value,
              book:document.querySelector("#book").value,
              place:document.querySelector("#place").value,
              //full descriptive ones
              aesthetic:document.querySelector("#aesthetic").value,
              personality:document.querySelector("#personality").value,
              hobby:document.querySelector("#hobby").value,
              outfit:document.querySelector("#outfit").value,
            };
            console.log(mData);
      
      
            /*** request ***/
          $.ajax({
                  type: "POST",
                  data: JSON.stringify(mData),
                  url:'/postForm',
                  processData: false,
                  contentType: "application/json",
                  cache: false,
                  timeout: 600000,
                  success: function (response) {
                  //reponse is a STRING
                  console.log("we had success!");
                  console.log(response);
                },
                    error:function(e){
                  console.log(e);
                  console.log("error occurred");
      
                }
              });
    
        });//click
    }

    function pushIMG(){
      document.querySelector("#submitBtn").addEventListener('click', function(){
        let user = localStorage.getItem("userID");
        let img_link = document.querySelector("#finishedImg").src;
        console.log(user);
        let mData={
          //physical descriptors
          subject_name:user,
          artist_name:user,
          img_link:img_link
        };
        console.log(mData);
    
        //receive form info
        $.ajax({
          type: "POST",
          data: JSON.stringify(mData),
          url:'/postIMG',
          processData: false,
          contentType: "application/json",
          cache: false,
          timeout: 600000,
          success: function (response) {
          //reponse is a STRING
          console.log(response);
        },
            error:function(e){
          console.log(e);
          console.log("error occurred");
    
        }
      });
      });
    }

    function getRandUser(){
      $.get(
        "/varsToMongoRand",
      // if we get a response from the server .... 
        function(response) {
          console.log(response[0]);
          localStorage.setItem("randUserID", response[0].first_name);
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
          //finished image stuff
          document.getElementById("FinalFNameRand").textContent = String(response[0].first_name);
          document.getElementById("FinalLNameRand").textContent = String(response[0].last_name);
        })
      }

      function getUser(){
        //let user = localStorage.getItem("userID");
        user = "Shandon";
        console.log(user);
        //GET
        $.get(
        "/varsToMongo",
        {first_name: user},
        // if we get a response from the server .... 
        function(response) {
          console.log(response[0]);
          if(title == "ProfileView"){
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
          } else if(title == "CanvasGame"){
            //finished image stuff
            document.getElementById("FinalFNameAns").textContent = String(response[0].first_name);
            document.getElementById("FinalLNameAns").textContent = String(response[0].last_name);
          }
            
        })
      }

      function getIMG(){
        //let user = localStorage.getItem("userID");
        user = "Shandon";
        console.log(user);
          //GET
          $.get(
            "/imgToMongo",
            {
              artist_name: user, 
              subject_name: user
            },
          // if we get a response from the server .... 
          function(response) {
            console.log(response[0]);
            document.getElementById("finishedDrawing").src = String(response[0].img_link);
          });
      }

      function getRandIMG(){
        let randUser = localStorage.getItem("randUserID");
        console.log(randUser);
          //GET
          $.get(
            "/imgToMongo",
            {
              artist_name: randUser, 
              subject_name: randUser
            },
          // if we get a response from the server .... 
          function(response) {
            console.log(response[0]);
            document.getElementById("finishedImg").src = String(response[0].img_link);
          });
      }

      function getUsers(){
        
        let user1 = "Sharon";
        let user2 = "Sarah";
        let user3 = "Sabine";
        let user4 = "Shandon";
          //GET
          $.get(
            "/imgToMongo",
            {
              artist_name: user1, 
              subject_name: user1
            },
          // if we get a response from the server .... 
          function(response) {
            console.log(response[0]);
            document.getElementById("finishedDrawing1").src = String(response[0].img_link);
            document.getElementById("FinalFNameAns1").textContent = String(response[0].subject_name);
          });
          //GET
          $.get(
            "/imgToMongo",
            {
              artist_name: user2, 
              subject_name: user2
            },
          // if we get a response from the server .... 
          function(response) {
            console.log(response[0]);
            document.getElementById("finishedDrawing2").src = String(response[0].img_link);
            document.getElementById("FinalFNameAns2").textContent = String(response[0].subject_name);
          });
          //GET
          $.get(
            "/imgToMongo",
            {
              artist_name: user3, 
              subject_name: user3
            },
          // if we get a response from the server .... 
          function(response) {
            console.log(response[0]);
            document.getElementById("finishedDrawing3").src = String(response[0].img_link);
            document.getElementById("FinalFNameAns3").textContent = String(response[0].subject_name);
          });
          //GET
          $.get(
            "/imgToMongo",
            {
              artist_name: user4, 
              subject_name: user4
            },
          // if we get a response from the server .... 
          function(response) {
            console.log(response[0]);
            document.getElementById("finishedDrawing4").src = String(response[0].img_link);
            document.getElementById("FinalFNameAns4").textContent = String(response[0].subject_name);
          });
      }
  });