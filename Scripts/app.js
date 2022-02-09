// IIFE -- Immediately Invoked Function Expression
// AKA -- Anonymous Self-Executing Function
(function()
{
    function Start()
    {
        console.log("App Started!");
    }

    window.addEventListener("load", Start);

})();

//Function for animating text over hero image to type text
function heroOverlay()
{
    hero = document.getElementById("text-hero");

    text = "";
    
}