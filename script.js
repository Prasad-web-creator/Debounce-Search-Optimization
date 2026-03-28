

const search1 = document.getElementById('search-1')
const search2 = document.getElementById('search-2')
const result1 = document.getElementById('result-1')
const result2 = document.getElementById('result-2')


search1.addEventListener('input',(e)=>{
    let value = e.target.value
    if(String(value).length>20){
        result1.textContent = "⚠️ Max 20 characters allowed"
        search1.value = ""
        return;
    }
    result1.textContent = "Search Results : " + value
})

const debouncedSearch = debounce(searchQuery,300)

search2.addEventListener('input',(e)=>{
    let value = e.target.value
    if(String(value).length>20){
        result2.textContent = "⚠️ Max 20 characters allowed"
        search2.value = ""
        return;
    }
    debouncedSearch(value)
})

function debounce(func,delay){
    let timer;
    return function(...args){
        clearTimeout(timer)
        timer = setTimeout(()=>{
            func.apply(this,args)
        },delay)
    }
}

function searchQuery(value){
    result2.textContent = "Search Results : " + value
}
