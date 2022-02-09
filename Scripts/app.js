// IIFE -- Immediately Invoked Function Expression
// AKA -- Anonymous Self-Executing Function
(function()
{
    function DisplayHome()
    {
        let AboutButton = document.getElementById("AboutButton");
        AboutButton.addEventListener("click", function(){
            location.href = "about.html";
        });

        let MainContent = document.getElementsByTagName("main")[0];

        let MainParagraph = document.createElement("p");

        MainParagraph.setAttribute("id", "MainParagraph");
        MainParagraph.textContent = "Place holder for welcome";
        MainContent.appendChild(MainParagraph);
    }
    function Start()
    {
        console.log("App Started!");
        
        switch(document.title)
        {
            case "Home":
                DisplayHome();
                break;
        }
    }

    window.addEventListener("load", Start);

})();
