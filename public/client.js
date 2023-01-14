let socket = io()
let btnColorIt=document.getElementById('colorIt')
socket.on('connect',()=>{
    document.getElementById('socket-id').innerText=socket.id
})

function colorTheBox(color){
    document.querySelector('.'+color).style.backgroundColor = color
    setTimeout(()=>{document.querySelector('.'+color).style.backgroundColor = null},500)
}
btnColorIt.onclick = ()=>{
    let color=document.getElementById('selectedColor').value
    socket.emit('colorit',{color})
}
socket.on('colorit',(data)=>{
    colorTheBox(data.color)
})
