# get-holidays-CLI
NPM CLI to get holiday dates with Country name

## Intro

Command line tool (CLI) available via NPM. It retrieve the Public Holidays dates for a provided country in a large scope of years and display them, formatted, in console. It displays :
* Localname of the holiday
* global name
* if it's fixed or variable
* date... Obviously
* start date if applicable

### Installation 

```
npm install @lvannebenne/get-holidays
```

### Usage 

Use the "get-holidays" command, followed by the country name whose you want holidays dates.

``` 
get-holidays Belgium 
```

You can also provide the year, it's an optionnal parameter.

``` 
get-holidays 2024 Belgium 
```
If not provided, the year is determined as "Current year"

### Maintainers

* Lindsay Vannebenne (lvannebenne)
https://github.com/LVannebenne/get-holidays-CLI

### More...

There's a manual, you can access it with 

```
man get-holidays
```
