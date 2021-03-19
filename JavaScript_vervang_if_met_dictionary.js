/*
Voorbeeld met if :(
*/

document.addEventListener('keydown', e => {
    if(e.code == "Space"){
        console.log('ik doe iets met spatie');
    }
    if(e.code == "KeyA"){
        console.log('ik doe iets met de letter A');
    }
    if(e.code == "ArrowLeft"){
        console.log('we gaan naar links');
    }
    if(e.code == "ArrowRight"){
        console.log('we gaan naar rechts');
    }
    if(e.code == "ArrowUp"){
        console.log('we gaan naar boven');
    }
    if(e.code == "ArrowDown"){
        console.log('we gaan naar beneden');
    }
});



/*
Voorbeeld waar ik de if heb vervangen met een object/dictionary
Als je naar een nieuwe/andere knop wilt luisteren dan hoef je die nu alleen maar toe te voegen
aan het object. Dit zou al een stukje herbruikbare code kunnen zijn. Je zou het invullen van het object
ook vanuit een andere class kunnen doen. Zo is het nog meer herbruikbaar.
*/
const keys = {
    Space 	: () => console.log('spatie'),
    KeyA 	: () => console.log('letter A'),
    ArrowLeft 	: () => console.log('we gaan naar links'),
    ArrowRight 	: () => console.log('we gaan naar rechts'),
    ArrowUp 	: () => console.log('we gaan naar boven'),
    ArrowDown 	: () => console.log('we gaan naar beneden'),
};

document.addEventListener('keydown', e => {
    if(keys[e.code] != undefined)
        keys[e.code]();
});
