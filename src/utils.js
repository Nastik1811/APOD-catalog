export const formatDate = date => {
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    month = month < 10 ? '0' + month : month
    let day = date.getDate()
    day = day < 10 ? '0' + day : day

    return year + '-' + month + '-' + day
}

export const fetchApod = (date, callback) => {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}&date=${date}`).then(
                response =>  response.json()
            )
            .then(apod => {
                if(apod.url.match(/\.(gif|jpe?g|png)$/)){
                    callback(apod)
                }
                else{
                    throw Error("No image")
                }
            })
}

export const getDatesRange = () =>{
    const today = new Date()
    const dates = []
    for(let i = 0; i < 30; i++){
        let day = new Date()
        day.setDate(today.getDate() - i)
        dates.push(day)
    }
    console.log( dates)
    return dates.map(date => formatDate(date))
}