let nameUser = document.getElementById("name")
let emailUser = document.getElementById("email")
let phon_number = document.getElementById("phon_number")
let btn = document.getElementById("btn")
let update = document.getElementById("update")
let deleteUser = document.getElementById("delete")
let tbodyUser = document.getElementById("tbody")
let inputSearch = document.getElementById("inputSearch")

let users = [
    { id: 1, name: "Kamoliddin", email: "kamoliddinislamov2000@gmail.com", phon: +998972441313 },
    { id: 2, name: "Bexruz", email: "bexruzpardayev2009@gmail.com", phon: +998972781753 },
    { id: 3, name: "Alisher", email: "alishernoraliyev1995@gmail.com", phon: +998978445644 },
    { id: 4, name: "Odilbek", email: "odilbekxudayberdiyev2013@gmail.com", phon: +998904413023 },
    { id: 5, name: "Jamshid", email: "jamshidiboboqulov2000@gmail.com", phon: +998949321393 }
]
function creadFunc() {
    let strHtml = ""
    users.map((v) => {
        strHtml += `<tr>
                <th style="color:white">${v.id}</th>
                <td>${v.name}</td>
                <td><a href="mailto:kamoliddinislamov2000@gmail.com" style="text-decoration:none">${v.email}</a></td>
                <td><a href="tel:998972441313" style="text-decoration:none">${v.phon}</a></td>
                <td>&nbsp&nbsp&nbsp
                    <i class="fa-solid fa-arrow-rotate-left arrow" id="update"></i>
                    <i class="fa-solid fa-trash-can trash" onclick='deleteUser1(${v.id})' id="delete"></i>
                </td>
            </tr>`
    })
    tbodyUser.innerHTML = strHtml
}
creadFunc()

btn.addEventListener("click", () => {
    if (nameUser.value == "" && emailUser.value == "" && phon_number.value == "") {
        alert("Inputni malumot bilan to'ldiring to'ldiring!")
    }
    if (nameUser.value !== "" && emailUser.value !== "" && phon_number.value !== "") {
        users.push({ id: users.length + 1, name: nameUser.value, email: emailUser.value, phon: phon_number.value })
        creadFunc()
        nameUser.value = ""
        emailUser.value = ""
        phon_number.value = ""
    }
})

function deleteUser1(id) {
    let users1 = users.filter(v => v.id !== id)
    users = users1;
    creadFunc()
    console.log(users);
}
let data = users
inputSearch.addEventListener("keyup", (e) => {
    console.log(e.target.value);
    if (e.target.value == "") {
        users = data
        // users.filter(v => v.name.toUpperCase().includes((e.target.value).toUpperCase()))
    } else {
        let newArr = users.filter(v => v.name.toUpperCase().includes((e.target.value).toUpperCase()))
        users = newArr;
    }
    console.log(users);
    creadFunc()
})


























































// btn.addEventListener("click", () => {
//     if (nameUser.value != "" && emailUser.value != "" && phon_number.value != "") {
//         console.log(typeof Number(tbodyUser));
//         tbodyUser.innerHTML += `<tr>
//             <th>${tbodyUser.length++}</th>
//             <td>${nameUser.value}</td>
//             <td><a href="mailto:kamoliddinislamov2000@gmail.com" class="text-white">${emailUser.value}</a></td>
//             <td><a href="tel:998972441313" class="text-white">${phon_number.value}</a></td>
//             <td>&nbsp&nbsp&nbsp
//                 <i class="fa-solid fa-arrow-rotate-left arrow" id="update"></i>
//                 <i class="fa-solid fa-trash-can trash" id="delete"></i>
//             </td>
//        </tr>`
//     }
//     nameUser.value = ""
//     emailUser.value = ""
//     phon_number.value = ""
// })





































