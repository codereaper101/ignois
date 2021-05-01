searchBtn = document.querySelector(".search-btn")
cancelBtn = document.querySelector(".cancel-btn")
// searchInput = document.querySelector(".search-box")
searchBox = document.querySelector(".search-box")
searchBtn.addEventListener('click', ()=>{
    searchBox.classList.toggle('active');
    
})
burger = document.querySelector('.burger')
function myFunction(x) {
    x.classList.toggle("change")
}