submit.addEventListener('click', async (e) => {
    e.preventDefault();//to prevent the page from automatic reload
    console.log("clicked");
    let email = document.getElementById("username").value;

    let key = "ema_live_yGxWIgf32myENBdPfmKw7t7WgotAsxLIZ3Fjoo0p";
    let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`;
    let res = await fetch(url);
    let result = await res.json();

    let str = ``;

    for (let key of Object.keys(result)) {
        if (result[key] !== " " && result[key] !== "")
            str += `<div>${key}=${result[key]}</div>`
    }

    console.log(str);
    resultcont.innerHTML = str;

})


