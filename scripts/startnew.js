var StartNewPage = function() {

    var displayNewCo = document.getElementById('selectNew');
    var displayCurrentCo = document.getElementById('selectCurrent');
    var selectFrame = document.getElementById('select-frame');
    var newFrame = document.getElementById('new-frame');
    var currentFrame = document.getElementById('current-frame');

    displayNewCo.addEventListener('click', function() {
        selectFrame.style.display='none';
        newFrame.style.display='block';
    });
    displayCurrentCo.addEventListener('click', function() {
        selectFrame.style.display='none';
        currentFrame.style.display='block';
    });

}();