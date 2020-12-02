export default async function getCampsites() {
   try {
      const res = await fetch('http://moskito.local/campsite')
      if(!res.ok) {
         throw Error(res.statusText)
      }
      const data = res.json()
      return data
   } catch (error) {
      console.log(error)
   } 
}