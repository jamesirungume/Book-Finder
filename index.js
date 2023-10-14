async function searchBooksByName(bookName) {
    // Replace the placeholder with the book name after encoding it for safe use in URLs
    const url = `https://hapi-books.p.rapidapi.com/search/${encodeURIComponent(bookName)}`;

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '6b3542ccbbmsh9b69be6392a288fp1473e1jsn40f76518b8bc',
            'X-RapidAPI-Host': 'hapi-books.p.rapidapi.com'
        }
    };

	try {
        const response = await fetch(url, options);
        const books = await response.json(); // Assuming the response is in JSON format

        let outputHtml = '';
        for (const book of books) {
            outputHtml += `
                <div class="book-item">
                    <img src="${book.cover}" alt="${book.name}" />
                    <h3><a href="${book.url}" target="_blank">${book.name}</a></h3>
                    <p>Rating: ${book.rating}</p>
                    <p>Year: ${book.year}</p>
                </div>
            `;
        }
