window.addEventListener('DOMcontentloaded', (event) => {
    getvisitcount();
})

const functionapi ='';

const getvisitcount = () => 
{
    let count = 30;
    fetch(functionapi).then(Response => {
        return Response.json()
    }).then(reponse => {
        console.log("fonction call api")
        count = Response.count;
        document.getElementById("conter").innerText =count ;
    }).catch(function(error){
        console.log(error);

    })
    return count;
}