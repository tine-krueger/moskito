export default async function getCampsites() {
   const baseUrl = process.env.REACT_APP_BASE_URL
   try {
      const res = await fetch(`${baseUrl}/campsite`)
      if(!res.ok) {
         throw Error(res.statusText)
      }
      const data = res.json()
      return data
   } catch (error) {
      console.log(error)
   } 
}