function tabuada() {
    var num = document.getElementById('num')
    var tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        alert('Digite um número!')        
    } else {
        var i = Number(num.value)
        var c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            var item = document.createElement('option')
            item.text = `${i} x ${c} = ${i*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }   
}