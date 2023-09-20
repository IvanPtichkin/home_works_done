const node_for_click = document.getElementById("for_click")

function edit(){
    const p0 = document.getElementsByTagName('p')[0]
    console.log(p0.innerHTML)
    p0.innerHTML = 'Last Name <span>Ptichkin</span>'

    const p1 = document.getElementsByTagName('p')[1]
    console.log(p1.innerHTML)
    p1.innerHTML = 'First Name <span>Ivan</span>'

    const p2 = document.getElementsByTagName('p')[2]
    console.log(p2.innerHTML)
    p2.innerHTML = 'Year of birth <span>2004</span>'
    }

node_for_click.addEventListener("click",edit)
