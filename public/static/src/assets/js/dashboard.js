const menu = document.getElementById('menu-label'); 
const sidebar = document.getElementsByClassName('sidebar')[0]; 

menu.addEventListener('click', function() {
    sidebar.classList.toggle('hide');
})

document.getElementById('createbutton').addEventListener('click', function() {
    document.querySelector('#modalcreate').style.display = 'flex';
});

document.getElementById('updatebutton').addEventListener('click', function() {
    document.querySelector('#modalupdate').style.display = 'flex';
});

function updateModal (id) {
    document.querySelector('#modalupdate').style.display = 'flex';
}

function closeModal () {
    document.querySelector('#modalcreate').style.display = 'none';
    document.querySelector('#modalupdate').style.display = 'none';
}

