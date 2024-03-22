const htmlBuilder = (data) => {
    return `
            <h1>Full Cycle Rocks!</h1>
            <br>
            <ul>${data.map((register) => `<li>${register.id} - ${register.name}</li>`)}</ul>
    `.replaceAll(',','')
};

module.exports = {
    htmlBuilder
}