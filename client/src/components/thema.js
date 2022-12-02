function Thema() {
  var icon = document.getElementById('icon')
  if(document.body.classList.contains("light")){
    document.body.classList.remove("light")
    document.body.classList.add("dark")
    icon.setAttribute('class', 'bi bi-moon-fill')
  } else {
    document.body.classList.remove("dark")
    document.body.classList.add("light")
    icon.setAttribute('class', 'bi bi-sun-fill')
  }
}
export default Thema
