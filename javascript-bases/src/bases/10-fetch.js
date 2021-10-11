const apiKey = 'WEREoENXcdwL7CjuCdMEbD3sggdJo80T';

fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
    .then(res => res.json())
    .then(({data}) => {
        const {url} = data.images.original;
        console.log(url)

        const img = document.createElement('img');
        img.src = url;
        document.body.appendChild(img);
    })
    .catch(console.log)