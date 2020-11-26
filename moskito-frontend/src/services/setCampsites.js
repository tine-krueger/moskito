export default function setCampsites(newCampsite) {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        const copy = Object.assign({}, newCampsite)

        const raw = JSON.stringify(copy);
       

        const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch("http://moskito.local/campsite", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}
