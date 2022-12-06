window.addEventListener("load", function () {
  console.log("we are loaded");
  let id = document.querySelector("#FirstNameAns").value;
  document.querySelector("#sendData").addEventListener('click', function(){
    //GET
    $.get(
      "/imgToMongo",
      {first_name: id},
    // if we get a response from the server .... 
    function(response) {
      console.log(response[0]);
      document.getElementById("finishedImg").src = String(response[0].img_link);
        
    });
  });
});//click