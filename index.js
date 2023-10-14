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
		 // Display the results
		 document.getElementById('bookNameDisplay').innerHTML = outputHtml;

		} catch (error) {
			console.error(error);
		}
	}
	
	document.getElementById('bookNameSearchButton').addEventListener('click', () => {
		searchBooksByName(document.getElementById('bookNameInput').value);
	});
	
	document.addEventListener('DOMContentLoaded', async () => {
		const url = 'https://hapi-books.p.rapidapi.com/top/2021';
		const options = {
			method: 'GET',
			headers: {
				'X-RapidAPI-Key': '6b3542ccbbmsh9b69be6392a288fp1473e1jsn40f76518b8bc',
				'X-RapidAPI-Host': 'hapi-books.p.rapidapi.com'
			}
		};
	
		try {
			const response = await fetch(url, options);
			const books = await response.json();
	
			const bookListDiv = document.getElementById('bookList');
			
			let bookHTML = '';
	
			for (const book of books) {
				bookHTML += `
					<div class="book-item">
						<img src="${book.cover}" alt="${book.name}">
						<h2>${book.name}</h2>
						<p><strong>Category:</strong> ${book.category}</p>
						<p><a href="${book.url}" target="_blank">Read More</a></p>
					</div>
				`;
			}
	
			bookListDiv.innerHTML = bookHTML;
	
		} catch (error) {
			console.error(error);
		}
	});
