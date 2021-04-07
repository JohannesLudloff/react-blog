import { useState } from "react";

const Home = () => {
	// let name = "Mario";
	const [name, setName] = useState("Mario");
	const [age, setAge] = useState(25);

	function handleClick() {
		setName("Luigi");
		setAge(30);
		console.log(`Hello ${name}`);
	}

	return (
		<div className="home">
			<h2>Home Page</h2>
			<p>
				{name} is {age} years old
			</p>
			<button onClick={() => handleClick()}>Click me</button>
		</div>
	);
};

export default Home;
