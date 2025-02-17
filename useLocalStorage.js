const DEFAULT_STORAGE = "LoadUsers"
const DEFAULT_USERS = ["Asier","Ander","Kepa","Txutxi","Samuel","Ortzi","Maite","Arantxa","Erika","Pablo","Tony"]
const local = window.localStorage

export function loadData(storage = DEFAULT_STORAGE) {
    let tempData = JSON.parse(local.getItem(storage))
    if (!tempData) {
        tempData = DEFAULT_USERS
        saveData(tempData)
    }
    return tempData
}
export function saveData(data,storage = DEFAULT_STORAGE) {
    local.setItem(storage,JSON.stringify(data))
}
export function clearData() {
    local.clear()
}