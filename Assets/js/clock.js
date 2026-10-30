function strikeback() {
    const strike = new Date();
    let omea = strike.getHours()
    let wa = strike.getMinutes()
    let mou = strike.getSeconds()

    omea = String(omea).padStart(2 , "0")
    wa = String(wa).padStart(2 , "0")
    mou = String(mou).padStart(2 , "0")

    document.getElementById("omea").textContent = omea
    document.getElementById("wa").textContent = wa
    document.getElementById("mou").textContent = mou

    const shindru = strike.toLocaleDateString("en-US" , {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric" 
    });
    document.getElementById("shindru").textContent = shindru;
}

strikeback()
setInterval(strikeback, 250)