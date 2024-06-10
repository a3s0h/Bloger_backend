const userToSessionIdMap = new Map();


const setSessionId = (name,id) => {
    userToSessionIdMap.set(name,id);
}

const getSessionId = (id) => {
    return userToSessionIdMap.get(id);
}


module.exports = {
    setSessionId,
    getSessionId
}