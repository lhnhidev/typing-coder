$(document).ready(function () {

    // Hiển thị dòng giới thiệu ở footer bằng hiệu ứng blink cursor
    var index = 0;
    var myText = `My Typing Code website is designed to help people improve their typing speed and accuracy by practicing with the most common words in the field of information technology. You can also choose your own custom word set by clicking on `;
    var myLink = `Your Texting`;
    var myDot = `.`;
    var fullText = myText + myLink + myDot;

    function typingText() {
        if (index < fullText.length) {
            if (index < myText.length) {
                $('#para')[0].innerHTML += fullText.charAt(index);
            }
            else if (index < fullText.length - myDot.length) {
                $('#link')[0].innerHTML += fullText.charAt(index);
            }
            else {
                $('#dot')[0].innerHTML += fullText.charAt(index);
            }
            index++;
            setTimeout(typingText, 40);
        }
    }
    typingText();
    
    // Thư viện lưu trữ những từ sẽ được dùng để cho người chơi gõ
    var libText = ["java", "util", "String", "int", "boolean", "myString", "myArray", "myNumber", "javascript", "script", "jquery", "AI", "kotlin", "IntelliJ", "vscode", "create", "image", "img", "button", "heading", "header", "footer", "head", "body", "main", "wrapper", "developer", "coder", "game", "static", "instance", "memory", "inner", "test", "nested", "args", "println", "printf", "scanf", "read", "readln", "method", "function", "modify", "sql", "database", "db", "public", "private", "c", "c++", "python", "php", "PHP", "c#", "swift", "ios", "android", "web", "backend", "frontend", "jump", "mem", "original", "type", "define", "typeof", "include", "return", "mouse", "cursor", "transition", "transform", "translate", "desktop", "window", "browser", "app", "mobile", "tab", "new", "mongodb", "drive", "...", "[]", "{}", "[", "{", "(", "()", "student", "name", "age", "information", "description", "label", "title", "leagend", "Arduino", "uno", "programming", "primitive", "convert", "boxing", "border", "inherit", "background-color", "background", "color", "ArrayList", "pair", "map", "void", "double", "long", "0", "1", "2", "3", "4", "5", "&", "*", "~", "equal", "computer", "laptop", "phone", "iphone", "postman", "obs", "studio", "ebook", "book", "light", "dark", "electric", "chatgpt", "teach", "teacher", "rule", "role", "object", "json", "bootstrap", "bulma"];
    var randomNumber;
    var randomText;

    // Hàm renderTopic: vẽ ra giao diện của chữ mới
    function renderTopic(text) {
        htmls = '';
        for (var i = 0; i < text.length; i++) {
            htmls += `
                    <div class="wrapper__char">
                        <span class="char" id="char${i}">${text[i]}</span>
                        <div class="underline" id="underline${i}"></div>
                    </div> 
            `;
        }
        return htmls;
    }

    // Hàm random một chữ bất kỳ
    function newTopic() {
        randomNumber = Math.floor(Math.random() * libText.length);
        randomText = libText[randomNumber];
        $('#ansNext .wrapper__text-next')[0].innerHTML = randomText;
    }
    newTopic();
    
    var countRight = 0; // Đếm số từ rõ đúng
    $(`#display #underline${countRight}`)[0].style.display = 'block';

    $(document).on({
        keydown: function (event) {
            // console.log(event.key);
            var currentText = $('#display .wrapper__ans')[0].innerText.replace(/\n/g, '').replace(/ /g, ''); // Loại bỏ những khoảng trắng ở giữa
            // console.log(currentText);
            if (event.key == currentText[countRight]) {
                // console.log('right');
                $(`#display #underline${countRight}`)[0].style.animation = 'unset';
                $(`#display #char${countRight}`)[0].classList.add('right-click');
                if (countRight == currentText.length - 1) {
                    $('#display .wrapper__ans')[0].innerHTML = renderTopic(randomText);
                    $(`#display #underline${0}`)[0].style.display = 'block';
                    newTopic();
                    countRight = 0;
                }
                else {
                    $(`#display #underline${countRight + 1}`)[0].style.display = 'block';
                    countRight++;   
                }
            }
            else if (event.key == 'Shift' || event.key == 'CapsLock' || event.key == 'Tab') {
                
            }
            else {
                console.log($(`#display #char${countRight}`)[0]);  
                $(`#display #char${countRight}`)[0].style.animation = 'headShake 0.5s';
                setTimeout(() => {
                    $(`#display #char${countRight}`)[0].style.animation = 'unset';
                }, 400);
            }
        }
    })
});
