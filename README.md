# Currency Exchange

### Created by Noah Lundquist in September of 2022

## Links

* [Repository](https://github.com/nalundquist/currex)

## Description

An exercise in API usage and promises done as a part of my curriculum at Epicodus.  Converts between 9 currencies I chose at random aside from defaulting to USD because its the only currency I know well.  I could not think of a way to make this particularly entertaining.  

## Features

* Converts 9 different currencies amongst one another
* Calls upon an API


## Technologies Used

* Built in VS Code (v.1.70.1) using the following languages:
	* HTML
	* CSS
	* Javascript

* Packages used include:
	* Webpack
	* ESLint
	* Babel
	* Jest

* Calls upon the [exchangerate-api](https://exchangerate-api.com)

* Tested in the following browsers:
	* Google Chrome (v.104.0)


## Installation

* Download [Git Bash](https://git-scm.com/downloads)
* Input the following into Git Bash to clone this repository onto your computer:

		>git clone https://github.com/nalundquist/currex

* Enter the cloned project folder "currex" and type:

		>npm install

* After such you can type:

		>npm run start

* To host the site on your machine at localhost:8080.

Currency exchange functionality will *not* be available until you do the following:

* Make an account on [exchangerate-api](https://exchangerate-api.com)
* Apply for an API key.  The free tier will suffice for 1500 queries a month.
* Create a .env file in the root of the "currex" folder
* Open the .env file in VS Code or the editor of your choice and put "API_KEY=[your api key here]"

Once the above is done the API key will automatically be used in pulling the calculations from ExchangeRate-API.

## Known Bugs

* None at this point

## License

Licensed under [GNU GPL 3.0](https://www.gnu.org/licenses/gpl-3.0.en.html)