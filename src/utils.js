const createISODate = (year, month, day) =>  year + '-' + month + '-' + day
const isCurrentMonth = (month, year) => {
    const today = new Date()
    return month === today.getMonth() + 1 && year === today.getFullYear()
}

export const formatDate = date => {
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    month = month < 10 ? '0' + month : month
    let day = date.getDate()
    day = day < 10 ? '0' + day : day

    return createISODate(year, month, day)
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
export const isImage = url => {
    return url.match(/\.(gif|jpe?g|png)$/)
}

export const getDatesRange = (month, year) =>{
    const dates = []
    let lastDay = isCurrentMonth(month, year) ? new Date().getDate() : new Date(year, month, 0).getDate()
    for(let day = lastDay; day > 0; day--){
        dates.push(createISODate(year, month, day))
    }
    return dates
}

export const getYearsRange = (min, max) => {
    const years = []
    for(let i = min; i <= max; i++){
        years.push(i)
    }
    return years
}