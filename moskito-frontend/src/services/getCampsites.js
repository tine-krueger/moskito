export default function getCampsites() {
   return fetch('http://moskito.local/campsite') 
   .then(res => res.json())
}