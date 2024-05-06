// XmlHttpRequest metho to call api data

// const myreq = new XMLHttpRequest()
// myreq.onreadystatechange = () => {
//   if (myreq.readyState == 4 && myreq.status == 200) {
//     data = JSON.parse(myreq.responseText)
//     nameT = data.results[0].name.title
//     fName = data.results[0].name.first
//     lName = data.results[0].name.last
//     gender = data.results[0].gender
//     imgSrc = data.results[0].picture.large
//     console.log(nameT)
//     document.getElementById('name').innerText = "Name:- " + nameT + ". " + fName + " " + lName
//     document.getElementById('gender').innerText = "Gender:- " + gender
//     const img = document.createElement('img')
//     img.src = imgSrc
//     document.getElementById('imgtag').appendChild(img)
//   }
// }
// myreq.open('GET', 'https://randomuser.me/api/', true)
// myreq.send()


// new fetch method to call api data

let uname, gender, imgSrc, data
fetch("https://randomuser.me/api/")
  .then((res) => {
    return res.json()
  }).then((resData) => {

    data = resData
    uname = data.results[0].name.title + ". " + data.results[0].name.first + " " + data.results[0].name.last
    console.log(uname)
    document.getElementById('name').innerText = uname
    document.getElementById('gender').innerText = data.results[0].gender
    document.getElementById("dob").innerText = data.results[0].dob.date
    document.getElementById('age').innerText = data.results[0].dob.age
    document.getElementById('id').innerText = data.results[0].login.username
    document.getElementById('pass').innerText = data.results[0].login.password
    document.getElementById('addr1').innerText = data.results[0].location.city + ", " + data.results[0].location.state
    document.getElementById('addr2').innerText = data.results[0].location.postcode + ", " + data.results[0].location.country
    document.getElementById('mail').innerText = data.results[0].email
    document.getElementById('phone').innerText = data.results[0].phone

    const pic = document.createElement('img')
    pic.src = data.results[0].picture.large
    document.getElementById('image').appendChild(pic)

  })