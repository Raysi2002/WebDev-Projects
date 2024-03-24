const searchInput = document.getElementById("searchInput");
const search = document.getElementById("search");
let actualSearch;
search.addEventListener('click', (e) => {
    let query = searchInput.value.trim();
    if(query !== ''){
        actualSearch = `https://www.google.com/search?q=${searchInput.value}`;
        window.location.href = actualSearch;
    }
})

//Using enter key for search
searchInput.addEventListener('keypress', (e) => {
    let query = searchInput.value.trim();
    if(query !== ''){
        if(e.key === 'Enter'){
            actualSearch = `https://www.google.com/search?q=${searchInput.value}`;
        window.location.href = actualSearch;
        }
    }
})