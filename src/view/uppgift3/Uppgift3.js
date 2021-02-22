import { useState, useEffect } from 'react'

import StarwarsService from '../../shared/api/service/StarwarsService'

export const Uppgift3 = () => {
	//const character = []
	//const count = 1
	const [myCharacter, setCharacter] = useState([]);
	const [count, setCount] = useState(1);


	const getCharacterNameFromStarwarsAPI = async () => {
		const { data } = await StarwarsService.getStarwarsCharacter(count);
		setCharacter(data);
	}
	useEffect(() => {
		getCharacterNameFromStarwarsAPI()
	})

	const handleIncrement = () => {
		setCount(prevCount => prevCount + 1);
	};
	const handleDecrement = () => {
		setCount(prevCount => (prevCount === 0 ? 1 : prevCount - 1) );
    };

	const buttons = () => {
		return <div>
			<button onClick={handleDecrement}>-</button>
			<h2>Count is {count}</h2>
			<button onClick={handleIncrement}>+</button>
			<div>
			<p>
			<button onClick={() => setCount(2)}>Reset</button>
			</p>
			</div>
		</div>
	}

	const displayCharacterName = () => {
	
		if (myCharacter || undefined) {
			return <div>
				<h2>{(myCharacter || undefined)?.name}</h2>
			</div>
		}
	}

	return (
		
		<div>
			<h1>Uppgift 3</h1>
			{displayCharacterName()}
			{buttons()}
		</div>
	)
}

/*

INSTRUKTIONER FÖR UPPGIFT 3:
Denna vy skall använda sig av useEffect tillsammans med useState för att hämta information om Starwars karaktärer.

	1. Du hittar två variabler i denna vy, character & count, dessa variabler skall bytas ut mot varsitt state.
	(variabelnamnen skall fortsatt heta likadant och de tidigare variabeldeklarationerna kan tas bort)

	2. ditt count state skall ha initialvärdet 1 
	och ditt character initialvärde skall vara en tom array

	3. i funktionen getCharacterNameFromStarwarsAPI() skall du spara 
	värdet av data variabeln i ditt character state

	4. I funktionen buttons() hittar du två button taggar. Skriv funktionalitet för knapparna att 
	addera värdet av count med 1 respektive subtrahera värdet med 1

	6. Vid första renderingen av denna vy-komponent 
	skall funktionen getCharacterNameFromStarwarsAPI() att anropas

	7. När värdet av count uppdateras skall det ske en ny rendering

	Ifall du lyckats slutföra detta ordentligt skall du nu i applikationen kunna hämta ett nytt karaktärnamn 
	genom att använda dig av de knappar som finns innuti buttons() funktionen.

 */