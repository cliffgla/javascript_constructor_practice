function AddressBook(firstName, lastName, phone, email, twitter) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.email = email;
    this.twitter = twitter;
}

var cliffyAddress = new AddressBook("Clifford", "Gagliardo", "213-804-9687", "cliffordgagliardo@gmail.com",
"@cliffgagliardo");

var cliffyBook = document.getElementById('cliffyBook');

function printAddress() {
    for (i in cliffyAddress) {
        console.log(cliffyAddress[i]);
    };

}

printAddress();