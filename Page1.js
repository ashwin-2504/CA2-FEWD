document.addEventListener('DOMContentLoaded', function () {

    var instructionBox = document.querySelector('.instructionbox');
    var instructionDescription = document.querySelector('.instructionDescription .text1');

    var aboutBox = document.querySelector('.aboutbox');
    var aboutDescription = document.querySelector('.aboutDescription .text2');


    instructionDescription.style.display = 'none';
    aboutDescription.style.display = 'none';


    instructionBox.addEventListener('click', function () {

        instructionDescription.style.display = instructionDescription.style.display === 'none' ? 'block' : 'none';
    });


    aboutBox.addEventListener('click', function () {

        aboutDescription.style.display = aboutDescription.style.display === 'none' ? 'block' : 'none';
    });
});