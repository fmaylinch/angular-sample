
myApp.component('bookListPage', {

  controller: function(bookService) {

    console.log("getting books");
    bookService.getBooks().then(books => {

      console.log("books received");
      this.books = books;

    }, function(response) {
      console.error(response);
    });
  },

  template: `
    <div class="list">
      <!-- ng-repeat repeats the HTML element for each item in the array -->
      <book-detail ng-repeat="b in $ctrl.books" book="b" />
    </div>
  `
});


myApp.component('bookPage', {

  controller: function($routeParams, bookService) {

    this.bookId = $routeParams.bookId;

    /* TODO make new getBook method in bookService
    bookService.getBook(this.bookId).then(book => {
      this.book = book;
    });
    */

  },
  template: `
    <section>
      <!-- TODO draw details -->
      Book page for book {{ $ctrl.bookId }}
    </section>
  `
  // templateUrl: 'book-detail.html' // This needs an http server
});


myApp.component('bookDetail', {

  bindings: {
    book: '<'
  },

  controller: function() {
    // we can add things to this instead of $scope
    this.formatDate = function(date) {
      return date.getFullYear() + "-" + (date.getMonth() + 1);
    };
  },

  template: `
    <section>
      <div class="details">
        <header>Title: {{ $ctrl.book.title }}</header>
        <p>Author: {{ $ctrl.book.author }}</p>
        <p>Date: <format-date date="$ctrl.book.date"/></p>
      </div>
    </section>
  `
  // templateUrl: 'book-detail.html' // This needs an http server
});


myApp.component('formatDate', {

  bindings: {
    date: '<'
  },

  controller: function() {
    // we can add things to this instead of $scope
    this.formatDate = function(date) {
      return date.getFullYear() + "-" + (date.getMonth() + 1);
    };
  },

  template: `{{ $ctrl.formatDate($ctrl.date) }}`
});
