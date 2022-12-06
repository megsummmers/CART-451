

window.onload = function () {
  console.log("we are loaded");
  document.querySelector("#submitBtn").addEventListener('click', function(){
    let link = document.querySelector("#finishedImg").src;
    let id = "Meg";
    //receive form info
    $.ajax({
      type: "POST",
      data: {name: id, image: link},
      url: "/postIMG",
      processData: false,
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
  });
}