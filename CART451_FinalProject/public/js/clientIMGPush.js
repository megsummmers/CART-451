var id;

window.onload = function () {
  console.log("we are loaded");

  function imgPost(img){
    //receive form info
    $.ajax({
      type: "POST",
      data: {name: id, image: img},
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
  }
}