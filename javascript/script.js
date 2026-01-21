function tabuada() {
    let num = document.getElementById('num')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        alert('Digite um número!')        
    } else {
        let i = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${i} x ${c} = ${i*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }   
}