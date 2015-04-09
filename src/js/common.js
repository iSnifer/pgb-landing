(function () {

    var handler = document.getElementById('step__example');
    var hiddenText = document.getElementById('step__text_example');
    var numbers = document.getElementById('numbers');

    handler.addEventListener('click', toggleClass);

    function toggleClass () {
        var textClassName = 'step__text_hidden';
        var textClassList = hiddenText.className.split(' ');
        var textIndex = textClassList.indexOf(textClassName);

        var numbersClassName = 'numbers_hidden';
        var numbersClassList = numbers.className.split(' ');
        var numbersIndex = numbersClassList.indexOf(numbersClassName);

        if (textIndex > -1) {
            textClassList.splice(textIndex, 1).join(' ');
            hiddenText.className = textClassList;
            numbersClassList.splice(numbersIndex, 1).join(' ');
            numbers.className = numbersClassList;
        } else {
            hiddenText.className += (' ' + textClassName);
            numbers.className += (' ' + numbersClassName);
        }
    }


})();
