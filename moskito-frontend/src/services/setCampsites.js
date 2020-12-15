export default function setCampsites(newCampsite) {
        const baseUrl = process.env.REACT_APP_BASE_URL
        const myHeaders = { "Content-Type": "application/json" }
        const raw = JSON.stringify(newCampsite);

        const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch(`${baseUrl}/campsite`, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}
