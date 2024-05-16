$(document).ready(function() {
    // Book Search Functionality
    $('#btnSearch').click(function() {
        var strSearchQuery = $('#strSearchQuery').val();
        $('#searchResults').html('Searching for: ' + strSearchQuery).addClass('highlight');
        // Add API search functionality here
    });

    // Display Current Date
    var currentDate = new Date();
    $('#currentDate').text(currentDate.toLocaleDateString());

    // Book Recommendations using Arrays and .each()
    var arrRecommendations = ["1984", "Harry Potter", "To Kill a Mockingbird", "Hunger Games", "Percy Jackson"];
    $('#btnShowRecommendations').click(function() {
        $('#recommendationsList').empty();
        $.each(arrRecommendations, function(index, value) {
            $('#recommendationsList').append(`<li class='recommendation-item'>${value}</li>`);
        });
    });

    // Book of the Month Object
    var objBookOfTheMonth = {
        title: "1984",
        author: "George Orwell",
        displayDetails: function() {
            $('#bookOfTheMonthDetails').html(`Title: ${this.title}, Author: ${this.author}`);
        }
    };
    $('#btnShowBookOfTheMonth').click(function() {
        objBookOfTheMonth.displayDetails();
    });

    // Special Offers with jQuery Animation and Chaining
    $('#specialOffers').hover(function() {
        var discount = Math.floor(Math.random() * 10 + 1); // Use Math object to calculate random discount
        $('#offersList').html(`${discount}% off on all orders!`).slideToggle().addClass('discount');
    });

    // Form Validation with Regular Expression
    $('#purchaseForm').on('submit', function(event) {
        event.preventDefault();
        var strCustomerEmail = $('#strCustomerEmail').val();
        var emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
        if (!emailRegex.test(strCustomerEmail)) {
            $('#purchaseResult').text('Please enter a valid email.');
            return;
        }
        var strNumBooks = $('#strNumBooks').val();
        var intNumBooks = parseInt(strNumBooks);
        if (isNaN(intNumBooks) || intNumBooks <= 0) {
            $('#purchaseResult').text('Please enter a valid number of books.');
            return;
        }
        $('#purchaseResult').text(`Thank you for your purchase of ${intNumBooks} book(s)!`);
    });

    // Enable submit button conditionally
    $('#purchaseForm input').on('input', function() {
        var isFormFilled = $('#strCustomerName').val() && $('#strCustomerEmail').val() && $('#strNumBooks').val();
        $('#btnPurchase').prop('disabled', !isFormFilled);
    });
});
