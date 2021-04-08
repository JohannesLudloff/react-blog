import { useState, useEffect } from "react";

const useFetch = (url) => {
	const [data, setData] = useState(null);
	const [isLoading, setisLoading] = useState(true);
	const [error, setError] = useState(null);
	// useEffect with empty dependency to only run it on load
	useEffect(() => {
		const abortCont = new AbortController();

		setTimeout(() => {
			getData()
				.then((data) => {
					setisLoading(false);
					setData(data);
				})
				.catch((err) => {
					if (err.name === "AbortError") {
						console.log("fetch aborted");
					} else {
						setisLoading(false);
						setError(err.message);
					}
				});
		}, 0);

		async function getData() {
			const res = await fetch(url, { signal: abortCont.signal });
			if (!res.ok) {
				throw Error("Sorry! We could not fetch data ");
			}
			return await res.json();
		}
		// abort the fetch when moving away while loading
		return () => abortCont.abort();
	}, [url]);

	return { data, isLoading, error };
};

export default useFetch;
