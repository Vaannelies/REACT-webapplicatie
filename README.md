# React JSON Workshop

In deze workshop gaan we het volgende doen:

- JSON laden in het POKEDEX component
- Het POKEDEX component maakt voor elke pokemon in de JSON een nieuw CARD component.
- Het CARD component laadt detail info over de pokemon
- De blauwe knop laadt telkens de volgende 9 pokemon

## Bonus

- In de CARD zit een "catch" knop, deze update de "caught" state van het POKEDEX component.

## JSON laden 

Met fetch halen we de eerste 9 pokemon op. Let op de "offset" en "limit" waarden in de GET request. Als het ophalen geslaagd is verschijnen de waarden in de console. Nu moet je de json array van pokemon in de `state` van je React component plaatsen.

```
async loadPokemon() {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=9`)
    const json = await response.json()
    console.log(json.results)
} 
```

## Lokale JSON

Om te testen kan het handig zijn een API result even als lokaal `.json` bestand op te slaan. Als je geen verbinding kan maken met [https://pokeapi.co](https://pokeapi.co) dan kan je de "pokemon.json" en "ditto.json" gebruiken om te testen.

## Button

```
<button onClick={() => this.loadPokemon()}>Load next 9 Pokémon</button >
```

## De volgende 9 pokemon laden

De pokedex kan bijhouden welke 9 pokemon we geladen hebben. Dit hoeft geen onderdeel van de state te zijn, omdat we dit nergens in de UI tonen. Je kan de offset ophogen als je op de knop hebt gedrukt.

```
constructor(){
    super()
    this.offset = 9
}
async loadPokemon() {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${this.offset}&limit=9`
} 
```

## Componenten renderen in for loop

In plaats van een `div` of `li` kan je ook een heel component renderen met een for loop:

```
render(){
    let thumbs = this.state.pokemon.map((pokemon, i) =>
        <Card key={i} />
    )

    return <div>{thumbs}</div>
}
```


## Pokemon url doorgeven aan Card

Via **Props** kan je een waarde doorgeven aan een card

POKEDEX.JS
```
<Card name="ditto" />
```
CARD.JS
```
<h1>{this.props.name}</h1>
```
Als je de Card in een For loop aanmaakt, dan kan je de variabele uit de for loop als prop doorgeven:
```
let thumbs = this.state.pokemon.map((pokemon, i) =>
    <Card key={i} name={pokemon.name} />
)
```

Let op, als je props ontvangt in een component, dan moet je dat in de constructor aangeven. Maar je mag nog wel steeds de hele constructor weg laten.

CARD.JS
```
constructor(props){
    super(props)
}
```

## Plaatjes renderen via state

[Bekijk de data van een Pokemon](https://pokeapi.co/api/v2/pokemon/ditto). De pokemon JSON data heeft een image: `sprites.front_default`. Dit kan je in de state zetten:

```
this.setState({image : json.sprites.front_default})
```

In de render functie kan je het image als volgt tonen:
```
<img src={this.state.image} />
```

# Caught Pokemon Button

De "caught" button zit in een card component. Maar de "caught" state zit in het Pokedex component. We hebben Props nodig om vanuit de Card een functie van de Pokedex aan te roepen.

## Functie doorgeven aan Card

Via props kan je de `catchPokemon` functie doorgeven aan een card. De card button kan die dan aanroepen.

POKEDEX.JS
```
<Card onCatch={() => this.catchPokemon()} />
```
CARD.JS
```
<button onClick = {()=>this.props.onCatch()}>
```

## Getal in state ophogen 

Om een getal in de state op te hogen gebruik je deze syntax:

```
constructor() {
    this.state.caught = 0
}
catchPokemon() {
    this.setState((state) => ({
        caught: state.caught +1
    }))
}
```

