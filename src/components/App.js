import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

class App extends React.Component {
	onSearchSubmit(term) {
		axios
			.get("https://api.unsplash.com/search/photos", {
				params: { query: term },
				headers: {
					Authorization:
						"Client-ID wJeGWkfycKuFI0fF31pOvlpcSYkds3iTfaZzEzMbKBA",
				},
			})
			.then(response => {
				console.log(response.data.results);
			});
	}
	render() {
		return (
			<div>
				<div className='ui container' style={{ marginTop: "10px" }}>
					<SearchBar onSubmit={this.onSearchSubmit} />
				</div>
			</div>
		);
	}
}

export default App;
