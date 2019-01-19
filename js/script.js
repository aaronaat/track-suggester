$(document).ready(function() {
      $("#code").submit(function() {
        var c = 0
        var java = 0
        var php = 0
        var ruby = 0
         if ($('#company').find(":selected").text() === "Working at a large corporation.") {
           c++
           java++

         } else if ($('#company').find(":selected").text() === "Working at a small startup company.") {
           php++
           ruby++
         } else {
           alert("Please select an answer for all options!")
         }

         if ($('#software').find(":selected").text() === "Working on user facing web apps.") {
           php++
           ruby++

         } else if ($('#software').find(":selected").text() === "Working on software for businesses.") {
           c++
           java++

         } else {
           alert("Please select an answer for all options!")
         }

         if ($('#resources').find(":selected").text() === "Abundant technical resources and other developers outside of work to discuss issues with.") {
           c++
           php++

         } else if ($('#resources').find(":selected").text() === "Willing to figure things out on my own at times in exchange for more performance or power.") {
           ruby++
           java++

         } else {
           alert("Please select an answer for all options!")
         }

         if ($('#content').find(":selected").text() === "Working with dynamic content and user interaction.") {
           php++
           ruby++

         } else if ($('#content').find(":selected").text() === "Working with content management systems like Wordpress.") {
           c++
           java++

         } else {
           alert("Please select an answer for all options!")
         }

         if ($('#software2').find(":selected").text() === "Working on software to be deployed at large scale.") {
           php++
           ruby++

         } else if ($('#software2').find(":selected").text() === "Working on high performance specialized software.") {
           c++
           java++

         } else {
           alert("Please select an answer for all options!")
         }

         if(c + java > ruby + php) {
            alert("Looks like you might prefer Java or C#!  Your preferred programming language scores are C#: " + c + ".   Java: " + java + ".   PHP: " + php + ".    Ruby: "+ ruby + ".")
           $("#javac").show();
           }
           else if (ruby + java > c + php) {
             alert("Looks like you might prefer Ruby or Java!  Your preferred programming language scores are C#: " + c + ".   Java: " + java + ".   PHP: " + php + ".    Ruby: "+ ruby + ".")
            $("#rubyjava").show();
           }
           else if (c + php > ruby + java) {
            alert("Looks like you might prefer C# or PHP!  Your preferred programming language scores are C#: " + c + ".   Java: " + java + ".   PHP: " + php + ".    Ruby: "+ ruby + ".")
            $("#cphp").show();
           }

          event.preventDefault();

    })

});
