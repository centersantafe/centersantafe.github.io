document.addEventListener("DOMContentLoaded", function () {
    let idx = null;
    let docs = [];

    fetch('/search.json')
        .then(response => response.json())
        .then(data => {
            docs = data;
            idx = lunr(function () {
                this.ref('url');
                this.field('title');
                this.field('content');
                docs.forEach(function (doc) {
                    this.add(doc);
                }, this);
            });
        });

    const searchBox = document.getElementById('search-box');
    const resultsList = document.getElementById('search-results');

    searchBox.addEventListener('input', function () {
        const query = this.value;
        resultsList.innerHTML = '';
        if (idx && query.length > 1) {
            const results = idx.search(query);
            results.forEach(result => {
                const doc = docs.find(d => d.url === result.ref);
                if (doc) {
                    const li = document.createElement('li');
                    li.innerHTML = `<a href="${doc.url}">${doc.title}</a>`;
                    resultsList.appendChild(li);
                }
            });
            if (results.length === 0) {
                resultsList.innerHTML = '<li>No results found.</li>';
            }
        }
    });
});


