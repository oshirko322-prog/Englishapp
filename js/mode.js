function startGame(mode){
    sessionStorage.setItem("mode",mode);
    location.href = "game.html";
}