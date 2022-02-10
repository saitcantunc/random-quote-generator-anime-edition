import { useState, useEffect } from "react";
// Components
import Quote from "./components/Quote";
// React Share
import { TwitterIcon, TwitterShareButton } from "react-share";

function App() {
	const [quote, setQuote] = useState({
		anime: null,
		character: null,
		quote: null,
	});

	const fetchQuote = async () => {
		return await fetch("https://animechan.vercel.app/api/random").then((response) =>
			response.json()
		);
	};

	const generate = async () => {
		setQuote(await fetchQuote());
	};

	useEffect(async () => {
		setQuote(await fetchQuote());
	}, []);

	return (
		<div className='App'>
			<Quote quote={quote} />

			<div className='buttons'>
				<TwitterShareButton url={quote.quote} hashtags={[quote.character, "Anime"]}>
					<TwitterIcon size={32} round />
				</TwitterShareButton>
				<button onClick={generate}>Generate new quote</button>
			</div>
		</div>
	);
}

export default App;
