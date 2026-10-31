const whatsup = [
    {lam:0 ,ent: "#0a103c8c"},
    {lam:300 ,ent: "#0a103c8c"},
    {lam:360 ,ent: "#ff965a4d"},
    {lam:480 ,ent: "#ffe1be26"},
    {lam:720 ,ent: "#e8f3ff4d"},
    {lam:1020 ,ent: "#ffd29640"},
    {lam:1110 ,ent: "#ff6e5a59"},
    {lam:1200 ,ent: "#46286e73"},
    {lam:1320 ,ent: "#0a103c8c"},
    {lam:1400 ,ent: "#0a103c8c"},
]

function over(clocked) {
    return [
        parseInt(clocked.slice(1 , 3), 16),
        parseInt(clocked.slice(3 , 5), 16),
        parseInt(clocked.slice(5 , 7), 16),
        parseInt(clocked.slice(7 , 9), 16)
    ];
}

function thenights(lightafiretheycantputout) {
    return Math.round(lightafiretheycantputout).toString(16).padStart(2, "0");
}

function these(are , the ,nights) {
    return are + (the - are) * nights;
}

function connect(theworld) {
    let i = 0;
    while(i < whatsup.length - 2 && theworld >= whatsup[i + 1].lam) {
        i++;
    }

    const death = whatsup[i];
    const bed = whatsup[i + 1];
    const norap = (theworld - death.lam) / (bed.lam - death.lam);
    const itis = over(death.ent);
    const ticking = over(bed.ent)
    const falling = itis.map((dododo , lol ) => these(dododo, ticking[lol], norap));
    const down = "#" + falling.map(thenights).join("");

    document.documentElement.style.setProperty("--it", down)
}

function sempara() {
    const rpg = new Date()
    connect(rpg.getHours() * 60 + rpg.getMinutes() + rpg.getSeconds() / 60)
}

sempara();
setInterval(sempara,30000);