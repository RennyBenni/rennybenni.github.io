const youtubeKey = "AIzaSyBvq4st9BGVbJn3tFG03Ioy1G9K6yqfFzo";
const youtubeUser = 'UCn3c2g8wSZFICx5JMx9HOgw';
const subCount = document.getElementById('socials-yt-subCount');

let getSubscribers = () => {

    fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${youtubeUser}&key=${youtubeKey}`)
    .then(response => {
        return response.json()
    })
    .then(data => {
        //console.log(data);
        subCount.innerHTML = data["items"][0].statistics.subscriberCount;
    })

}

getSubscribers();