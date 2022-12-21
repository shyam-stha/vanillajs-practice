import data from "./data.json" assert { type: "json" };

document.querySelector(".blog").innerHTML = `
    <div>
        <span>${data[0].title}</span>
        <img src='${data[0].image}' alt="img"/>
        <span>${data[0].author}</span>
        <span>${data[0].date}</span>
    </div>
`;
