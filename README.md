index.html:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Delayed Text Animation</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="style" id="text-container">
        <span class="word">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non velit ligula. Duis bibendum gravida massa, ac lobortis sem vehicula eu. Sed id dolor elementum, blandit eros sit amet, volutpat odio. Proin vitae dui risus. Morbi dictum massa quis nunc ullamcorper commodo. Vivamus aliquam, diam ut tincidunt vulputate, tellus arcu vehicula mauris, non facilisis quam mauris eget orci. Maecenas eu sem fringilla, congue elit ac, sodales purus. Donec at augue semper, molestie enim quis, egestas arcu.

Maecenas fringilla quis urna dignissim efficitur. Mauris dictum nisi eu odio malesuada, sit amet eleifend ipsum interdum. Cras congue neque est, quis dictum lorem finibus eget. Praesent sit amet imperdiet velit. In lobortis non ex sed accumsan. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam a sapien eu sapien pellentesque accumsan. Proin euismod fringilla magna ut porttitor. Aliquam ac finibus massa. Donec porta tellus eget facilisis malesuada. Aenean feugiat vel tellus ac laoreet. Nam laoreet turpis vitae nibh euismod rutrum.

Aliquam erat volutpat. Nam aliquet et erat et venenatis. Proin venenatis sapien augue, sit amet porttitor ligula cursus non. Curabitur gravida lectus ac magna maximus, suscipit molestie ipsum ornare. Proin erat sapien, lobortis id posuere dapibus, interdum vestibulum enim. Sed lacinia iaculis pulvinar. Aliquam accumsan commodo sapien, eget scelerisque quam laoreet et. Maecenas cursus nibh nec velit aliquam, ut aliquet turpis rutrum.

Aliquam feugiat et sem ut blandit. Maecenas hendrerit nec urna egestas fringilla. Nam volutpat in diam non sagittis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam eget orci ut ipsum viverra viverra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean metus dui, ullamcorper vel sapien id, dignissim dictum libero. Vivamus lorem turpis, mollis in velit interdum, dignissim vehicula nibh. Integer ultricies accumsan lectus quis sagittis.

Nulla quis cursus mi. Sed aliquet justo et diam tincidunt, sit amet volutpat enim consectetur. Donec tempor, diam lacinia ornare fermentum, neque est faucibus enim, at congue dolor eros sit amet massa. Etiam pulvinar laoreet placerat. Sed aliquam dignissim dolor, facilisis dictum est lobortis in. Maecenas blandit lorem in imperdiet gravida. Donec quam dolor, pulvinar a congue eu, sodales ac est. Vivamus lobortis tempus nunc, non fermentum augue iaculis quis. Donec blandit nec lectus vel vestibulum. In faucibus porttitor orci, lobortis pharetra mauris gravida id. Curabitur ornare hendrerit elit non imperdiet. Etiam gravida fringilla velit blandit commodo. Fusce posuere iaculis libero, feugiat eleifend est varius a. Donec at dolor eget ante commodo hendrerit. Suspendisse sed aliquet justo, id ultricies risus.</span>
    </div>

    <script src="script.js"></script>
</body>
</html>

```
script.js:
```js
document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('text-container');
    const textElement = container.querySelector('.word');
    const words = textElement.textContent.split(' ');
    container.innerHTML = '';

    words.forEach((word, index) => {
        const span = document.createElement('span');
        span.className = 'word';
        span.textContent = word + (index !== words.length - 1 ? ' ' : '');
        span.style.animationDelay = `${index * 0.1}s`; // Задержка для каждого слова
        container.appendChild(span);
    });
});

```
styles.css:
```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&family=Quicksand:wght@600&display=swap');

body {
    display: flex;
    height: 100vh;
    align-items: center;
    justify-content: center;
    background-color: black;
}

.word {
    display: inline-block;
    opacity: 0;
    filter: blur(10px);
    margin: 0 5px;
    animation-name: fadeInBlur;
    animation-duration: 0.3s; 
    animation-timing-function: ease-out;
    animation-fill-mode: forwards;
}

.style {
    font-family: 'Poppins', sans-serif;
    font-family: 'Quicksand', sans-serif;
    font-size: 2em;
    color: white;
    text-align: justify;
}

@keyframes fadeInBlur {
    to {
        opacity: 1;
        filter: blur(0);
    }
}

```
