export function loadFromLocal(key) {
    try {
      return JSON.parse(localStorage.getItem(key))
    } catch (error) {
      console.log(error)
    }
  }
  
export function saveToLocal(key, data) {
    localStorage.setItem(key, JSON.stringify(data))
}