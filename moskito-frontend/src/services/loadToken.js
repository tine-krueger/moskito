import { loadFromLocal} from '../lib/localStorage'

export default function loadToken() {
    const tokens = loadFromLocal('tokens')
    const value = tokens.value
    
    return value
}
