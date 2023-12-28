async function getAPI(){
    var response = await fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=eaa86ae5ef2157748f0b8021bb6ec5df&language=en")
    var finalResponse = await response.json()
    console.log(finalResponse);
}


getAPI()
