const API_URL = "https://api.thedogapi.com/v1/breeds?limit=8";

async function getaRazas() {
    try {
        const response = await fetch (API_URL)
        const data = await response.json();
        //data.forEach(raza => console.log(raza.name));
        return data;
    } catch (error) {
    console.log("error:", error )
   }
};

async function obtenerdatos(){
    const raza = await getaRazas();

    const element = document.getElementById("listrazas");

    raza.forEach(raza => {
        const li = document.createElement("li");
        li.textContent = raza.name;

        element.appendChild(li);
    });
}

