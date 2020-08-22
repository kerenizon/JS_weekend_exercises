'use strict';

const nb_year = (p0, percent, aug, p) => {
    percent = percent / 100;
    let population = p0, counter =0;
    do{
        population = population + population*percent + aug;
        counter += 1;
    } while(population < p);
    return counter
}

console.log(nb_year(1500, 5, 100, 5000));
console.log(nb_year(1500000, 2.5, 10000, 2000000));