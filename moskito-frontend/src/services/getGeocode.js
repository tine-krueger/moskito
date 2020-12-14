
export default function getGeocode(location) {
    const lowerCaseLocation = location.toLowerCase()
    const urlLocation = lowerCaseLocation.replace(/\s+/g, "+" )
    const apiKey = process.env.REACT_APP_HERE_API_KEY
    const url = `https://geocoder.ls.hereapi.com/6.2/geocode.json?apiKey=${apiKey}&searchtext=${urlLocation}&country=DEU`

    const requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };

    try {    
        return fetch(url, requestOptions)
        .then(response => response.json())
    } catch (error) {
        return { error: 'Server does not answer!'}
    } 

}
