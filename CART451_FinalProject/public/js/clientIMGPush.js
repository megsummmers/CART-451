var id;

window.onload = function () {
  console.log("we are loaded");
    //receive form info
    document.querySelector("#sendImg").addEventListener('click', 
    function(event){
      event.preventDefault();
      console.log("clicked");
      let mData={
          //physical descriptors
          full_name:document.querySelector("#firstname").value + document.querySelector("#lastname").value,
        };
        console.log(mData);

        /*** request ***/
      $.ajax({
              type: "POST",
              data: JSON,
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