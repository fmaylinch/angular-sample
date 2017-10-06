
// Services for organizing functions
myApp.factory('bookService', function($http) {
  return {

    getBooks: function() {

      const url = "http://localhost:8080/dw/api/books";

      console.log("making http request to API");
      const responsePromise = $http({
        method: 'GET',
        url: url
      });

      // Using then() we turn a promise of a response into a promise of books
      const booksPromise = responsePromise.then(function(response) {

        console.log("API response received from promise of reponse");
        const books = response.data;

        console.log("preparing books");
        // create new field in books
        for (book of books) {
          book.date = new Date(book.releaseDate); // turn millis into Date
          // book.dateFormatted = book.date.getFullYear();
        }

        console.log("returning books");
        return books;
      });

      console.log("returning promise of books");
      return booksPromise;
    }
  };
});
