// console.log("Hello, World!");
const root = document.getElementById('container');
const button = document.getElementById('Btn');
console.log(root);
console.log(button);

async function getdata() {
// alert("Hello World!");

const serverData = await fetch('https://fakestoreapi.com/products');
                const jsonData = await serverData.json();
        root.innerHTML = `<h2 style="color: blue;">${jsonData[0].title}</h2>`;
// console.log(jsonData[0].title);
}

button .addEventListener('click', getdata);