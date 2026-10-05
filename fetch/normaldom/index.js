const root = document.getElementById('root');
const button = document.getElementById('btn');
console.log(root);
    // document.createElement('h2');
    document.createElement('h3');

    // const h2 = document.createElement('h2');
    const h3 = document.createElement('h3');
    const img= document.createElement('img');
    const loader = document.createElement('h3');
    loader.innerHTML = 'Loading data..';

async function showData() {
    try{
        root.appendChild(loader);
        const serverData = await fetch('https://fakestoreapi.com/products');
     const jsonData = await serverData.json();

     let table = `<table>
                ${
                jsonData.map((ele))=>{
                    `<tr>
                    </tr>`
                }
                }
                  </table>`
                // console.log(jsonData);
    //   h3.innerHTML = `<h2 style="color: blue;">${jsonData[0].title}</h2>`;
      root.appendChild(h3);          

    // h2.innerText = 'Welcome to DOM manipulation';
    // h3.innerHTML = 'ABES Engineering College';
    // img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwxFr8DsPqnApj7IGYzgTsYBLEEiucqKIpu9Jc7j8NJw&s=10';
    // img.setAttribute('height',200);
    // img.setAttribute('width',200);
    // root.appendChild(h2);
    // root.appendChild(h3);
    // root.appendChild(img);
    }catch(err){
        console.log(err);
    }
    finally{
        root.removeChild(loader);
    }
    // alert("Hiii");
}
button.addEventListener('click',showData);