$(document).ready(function() {



      $("#code").submit(function() {
        var c = 0
        var java = 0
        var php = 0
        var ruby = 0

         var software = ($('#software').find(":selected").text())
         var resources = ($('#resources').find(":selected").text())
         var content = ($('#content').find(":selected").text())
         var software2 = ($('#software2').find(":selected").text())

         if ($('#company').find(":selected").text() === "Working at a large corporation.") {
           c++
           java++

         } else if ($('#company').find(":selected").text() === "Working at a small startup company.") {
           php++
           ruby++
         }



      })

      });


//});
