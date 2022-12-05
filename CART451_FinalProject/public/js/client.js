window.onload = function () {
    console.log("we are loaded");
  
  //   //search feature
  //   document.querySelector("#findData").addEventListener('click', function(event){
  
  //     let searchCrit = document.getElementById("searchCrit").value;
  //     $.get(
  //       "/varsToMongo",
  //       {paramOne : searchCrit},
  //      // if we get a response from the server .... 
  //       function(response) {
  //          console.log(response);
           
  //   })
  // });//click
  
    //receive form info
    document.querySelector("#sendData").addEventListener('click', 
      function(event){
        event.preventDefault();
        console.log("clicked");
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
  };