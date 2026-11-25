myLinks = []
const inputEl = document.getElementById("input")
const inputBtn = document.getElementById("input-btn")
const tabBtn = document.getElementById("tab-btn")
const deleteBtn = document.getElementById("delete-btn")
const ulEl = document.getElementById("ul-el")
const linksFromLocalStorage = JSON.parse ( localStorage.getItem("myLinks") )

function render(boom) {
    let listItems = ""
    for (let i=0; i<boom.length; i++) {
        listItems += `
            <li>
                <a target = "_blank" href = "${boom[i]}">
                    ${boom[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems
}

if (linksFromLocalStorage) {
    myLinks = linksFromLocalStorage
    render(myLinks)
}

inputBtn.addEventListener("click", function() {
    myLinks.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem( "myLinks", JSON.stringify(myLinks) )
    render(myLinks)
})

tabBtn.addEventListener("click", function() {
    chrome.tabs.query({active:true, currentWindow: true}, function(tabs){
        myLinks.push(tabs[0].url)
        localStorage.setIte,( "myLinks", JSON.stringify(myLinks) )
        render(myLinks)
    })
})

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myLinks = []
    render(myLinks)
})
