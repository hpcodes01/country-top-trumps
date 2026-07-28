export async function handler(event) {
	const code = event.queryStringParameters.code;

	try {
		const res = await fetch(
		`https://api.restcountries.com/countries/v5/codes.alpha_2/${code}?response_fields=area,population,borders,flag`,
		{ headers: { 'Authorization': 'Bearer ${process.env.RESTCOUNTRIES_API_KEY}' } }
		)

	if (!res.ok) {
		return {statusCode:500, body: JSON.stringify({error: "API error"})};
	}

	const data = await res.json();

	return {statusCode: 200, body: JSON.stringify(data)
	};

	}

	catch (err) {
		return {statusCode: 500, body: JSON.stringify({error: "Server error"})
	};
}
}