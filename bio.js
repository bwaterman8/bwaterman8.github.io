

document.querySelector('.bio_column').addEventListener('click', function() {
    document.querySelector('.modal_back').style.display = 'flex';
})

document.querySelector('.close').addEventListener('click', function() {
    document.querySelector('.modal_back').style.display = 'none';
})

document.querySelector('.projects_column').addEventListener('mouseover', function() {
    document.querySelector('.projects_list').style.display = 'flex';
}) 

document.querySelector('.projects_column').addEventListener('mouseout', function() {
    document.querySelector('.projects_list').style.display = 'none';
}) 