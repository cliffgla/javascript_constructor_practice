function AddressBook(firstName, lastName, phone, email, twitter) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.email = email;
    this.twitter = twitter;
}

var cliffyAddress = new AddressBook("First: Clifford", "Last: Gagliardo", "Phone:213-804-9687", "Email:cliffordgagliardo@gmail.com",
"Twitter:@cliffgagliardo");

var cliffyBook = document.getElementById('cliffyBook');

function printAddress() {
    for (var i in cliffyAddress) {
        cliffyBook.innerHTML += "<p>" + cliffyAddress[i] + "</p>";
    };

}

printAddress();
