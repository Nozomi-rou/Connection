const thekey = "logsnogeh" ;
const loging = document.getElementById("loggger");
const worldstat = document.getElementById("worldstate");
const sharping = document.getElementById("sharp");
const dulling = document.getElementById("dull");
const hopium = CSS.supports("field-sizing","content");

let statements = [];
let changemymind = null;

function loader() {
    try {
        const hist = localStorage.getItem(thekey);
        if (hist) {
            const yeet = JSON.parse(hist);
            if (Array.isArray(yeet)) {
                statements = yeet;
            }
        }
    } catch (error) { 
        statements = [];
        
    }
}

function statemented() {
    try {
        localStorage.setItem(thekey , JSON.stringify(statements));
    } catch (error) { 
        console.error("Error: can't save , my code sucks or something in your machine ", error);
    }
}


function posterboy() {
    if(hopium){
        return;
    }

    loging.style.height = "auto"
    const holli = loging.offsetHeight - loging.clientHeight;
    loging.style.height = (loging.scrollHeight + holli) + "px";
}

function trashtheploy() {
    const livebythesword = loging.value.trim();
    if (livebythesword === "") {
        return;
    }

    if(changemymind !== null) {
        const eh = statements.find((nomnom) => nomnom.id === changemymind );
        if (eh) {
            eh.nope = livebythesword ;
            eh.noice = true; 
        }
        statemented();
        ayyoo();
    }
    else {
        const nono = Date.now();
        statements.unshift({id: nono, stamp: nono, nope: livebythesword });
        statemented();
        loging.value = "";
        posterboy();
        kitchenblender()
    }
}

function heyyo(id) {
    const eh = statements.find((nomnom) => nomnom.id === id);
    if(!eh) {
        return;
    }
    changemymind = id;
    loging.value = eh.nope;
    sharping.textContent = "Save";
    dulling.hidden = false;
    posterboy();
    loging.focus();
    kitchenblender();
}

function ayyoo() {
    changemymind = null;
    loging.value = "";
    sharping.textContent = "New";
    dulling.hidden = true;
    posterboy();
    kitchenblender();
}

function fusroduh(id) {
    statements = statements.filter((nomnom) => nomnom.id !== id);
    statemented();
    if (changemymind === id) {
        ayyoo();
    }
    else {
        kitchenblender();
    }
}

function chime(emptywords , ratherbe) {
    const ashotinthedark = document.createElement("button");
    ashotinthedark.type = "button";
    ashotinthedark.className = "knife";
    ashotinthedark.textContent = emptywords
    ashotinthedark.addEventListener("click" , ratherbe);
    return ashotinthedark;
}

function kitchenblender() {
   worldstat.replaceChildren();

   if (statements.length === 0) {
    const fastercar = document.createElement("p");
    fastercar.className = "error404nostatement";
    fastercar.textContent = "code 404 : you didnt put any entries >:C";
    worldstat.append(fastercar);
    return;
   }

   for(const statement of statements){
    const ode = document.createElement("div");
    ode.className = "worldstated";
    if (statement.id === changemymind) {
        ode.classList.add("restating");
    }

    const heather = document.createElement("div");
    heather.className = "world";

    const you = document.createElement("span");
    you.className = "timestamp";
    let eyesblue = new Date(statement.stamp).toLocaleString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hourCycle: "h23"
    });
    if (statement.noice) {
        eyesblue += " (edited)";
    }
    you.textContent = eyesblue;

    const nevergonnagetridofme = document.createElement("p");
    nevergonnagetridofme.className = "statement";
    nevergonnagetridofme.textContent = statement.nope;

    heather.append(you, nevergonnagetridofme);

    const dang = document.createElement("div");
    dang.className = "krisusedact";
    dang.append(
        chime("Edit" , () => heyyo(statement.id)),
        chime("Del" , () => fusroduh(statement.id))
    );

    ode.append(heather, dang);
    worldstat.append(ode);
   }
}

sharping.addEventListener("click" , trashtheploy);
dulling.addEventListener("click" , ayyoo);
loging.addEventListener("input" , posterboy);
loging.addEventListener("keydown", (yepyapyap) => {
    if (yepyapyap.key === "Escape" && changemymind !== null){
        ayyoo();
    }
});


loader();
kitchenblender();
posterboy();