/*
Il programma dovrà chiedere all’utente il numero di km che
vuole percorrere e l’età del passeggero.
sulla base di essi si calcolerà il prezzo basandosi su:
    -0.21€ al km 
    -20% < 18 minorenni
    -40% > 65 anni over 65
    -l'output deve essere in max 2 decimali es  : 10.18€ 

Stampare in HTML una lista con eta inserità, km inseriti ed il prezzo finale
BONUS:
validare/ controllare i dati inseriti
età è un numero?
età è stata inserita
km è un numero valido?
posso inserire un minimo / massimo di km possibili?
*/

const prezzoAlKm = 0.21;
const km = parseInt(prompt("Inserisci il numero di kilometri da percorrere"));
const eta = parseInt(prompt("inserisci la tua eta"));
let totale = prezzoAlKm * km ;
let sconto = 0 ;

if(eta < 18 ) //strettamente minore di 18
    sconto = (km * prezzoAlKm * 20) / 100;
 
else if (eta > 65 ) //strettamente maggiore di 65
    sconto = (km * prezzoAlKm * 40) / 100;

/*
lo sconto lo calcolo alla fine in quanto se l'utente non è compreso 
nei due casi sopra (<18 o >65) lo sconto sarà di 0 in quanto inizializzato 
e non si applicherà nulla ma se dovesse risultare uno sconto
sarà calcolato.
*/
totale -= sconto ;  


alert(totale);