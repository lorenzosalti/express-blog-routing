# Express Blog (Routing)

---

## Descrizione

Creare un file di routing (*routers/posts.js*) che conterrà le rotte necessarie per l'entità *post*. <br>
All'interno creare le rotte per le operazioni CRUD (***Index, Show, Create, Update e Delete***). <br>
Tutte le risposte saranno dei testi che confermeranno l’operazione che il server deve eseguire, secondo le convenzioni REST. <br>

#### Ad esempio:

Se viene chiamata */posts* col verbo *GET* ci aspettiamo “Lista dei post”; <br>
Se viene chiamato */posts/1* col verbo *DELETE* ci aspettiamo “Cancellazione del post 1”; <br>
Eccetera... <br>

Registrare il router dentro *app.js* con il prefisso *posts/*.

#### Nota:

É stato fornito anche l’array dei post.
Potrebbe servire nel caso dei bonus.

---

## Bonus

- Provare a restituire la lista dei post dalla rotta ***index***, in formato *json*.
- Provare a restituire un singolo post dalla rotta ***show***, sempre in formato *json*.