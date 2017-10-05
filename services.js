
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

      const booksPromise = responsePromise.then(function(response) {

        console.log("API response received");
        const books = response.data;

        // create new field in books
        for (book of books) {
          book.date = new Date(book.releaseDate);
          // book.dateFormatted = book.date.getFullYear();
        }

        console.log("returning books");
        return books;

      });

      return booksPromise;
    }
  };
});
