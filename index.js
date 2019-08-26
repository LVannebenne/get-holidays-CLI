#!/usr/bin/env node

const validator = require('validator');
const axios = require('axios');
const chalk = require('chalk');
const figlet = require('figlet');
const boxen = require('boxen');
const { getCode, getName } = require('country-list');
const currentYear = new Date().getFullYear();
const api = "https://date.nager.at/api/v2/publicholidays/";
const days = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
const months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];

process.argv.forEach((val, index) => {
	if (validator.isAlpha(val)) {

		let code = getCode(val);

		if (code == undefined) {
			console.log("Erreur. Le paramètre entré n'est pas un nom de pays")
		} else {
			figlet('Get-Holidays', {
				font: 'Contessa',
				horizontalLayout: 'default',
				verticalLayout: 'default'
			}, function (err, data) {
				if (err) {
					console.log('Something went wrong...');
					console.error(err);
					return;
				}
				
				console.log(boxen(chalk.bold.blue(data), {padding: 1, borderStyle: 'round'}))
			})
			console.log(chalk.bgBlack(`There is the official public Holidays dates for ${val} in ${currentYear}`));
			let holidays = axios.get(`${api}${currentYear}/${code}`)
				.then(response => {
					response.data.forEach(day => {
						let fixed = "";
						if (day.fixed) {
							fixed = "C'est une date fixe."
						} else {
							fixed = "C'est une date variable."
						}
						let dateHol = new Date(day.date);
						console.log(chalk.bold.bgBlack.blueBright(`-- ${days[dateHol.getDay()]} ${dateHol.getDate()} ${months[dateHol.getMonth()]} ${dateHol.getFullYear()} --`));
						console.log(chalk.bold.green(day.localName) + ` (${day.name}). ${fixed}
						`);
					})
				}).catch(error => {
					console.error(error);
				})
		}

	}
});


