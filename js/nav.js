
    function showCase() {
        $('.options').addClass("showcase");
        $('.options').css('display', 'block')
        console.log("Opened");
    }

    function closeNav(){
    $('.options').removeClass("showcase");
    $('.options').css('display', 'none')
    console.log("Closed");
}
document.querySelector("#hamburger").addEventListener('click', showCase);
document.querySelector("#icon-close").addEventListener('click', closeNav);
