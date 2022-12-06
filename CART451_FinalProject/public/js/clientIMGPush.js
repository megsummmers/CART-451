window.addEventListener("load", function () {
  console.log("we are loaded");
  document.querySelector("#submitBtn").addEventListener('click', function(){
    let mData={
      //physical descriptors
      subject_name:document.querySelector("#FirstNameRand").innerHTML,
      artist_name:document.querySelector("#FirstNameAns").innerHTML,
      img_link:document.querySelector("#finishedImg").src
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
      console.log("we had success!");
      console.log(response);
    },
        error:function(e){
      console.log(e);
       console.log("error occurred");

     }
   });
  });
});