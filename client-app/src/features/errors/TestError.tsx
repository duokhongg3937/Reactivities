import axios from "axios";
import { useState } from "react";
import { Button, Header, Segment } from "semantic-ui-react";
import ValidationError from "./ValidationErrors";

export default function TestErrors() {
	const baseUrl = import.meta.env.VITE_API_URL + "/";
	const [error, setError] = useState(null);

	function handleNotFound() {
		axios.get(baseUrl + "buggy/not-found").catch((err) => console.log(err.response));
	}

	function handleBadRequest() {
		axios.get(baseUrl + "buggy/bad-request").catch((err) => console.log(err));
	}

	function handleServerError() {
		axios.get(baseUrl + "buggy/server-error").catch((err) => console.log(err.response));
	}

	function handleUnauthorised() {
		axios.get(baseUrl + "buggy/unauthorised").catch((err) => console.log(err.response));
	}

	function handleBadGuid() {
		axios.get(baseUrl + "activities/not-a-guid").catch((err) => console.log(err));
	}

	function handleValidationError() {
		axios.post(baseUrl + "activities", {}).catch((err) => setError(err));
	}

	return (
		<>
			<Header as="h1" content="Test Error Component" />
			<Segment>
				<Button.Group widths="7">
					<Button onClick={handleNotFound} content="Not Found" basic primary />
					<Button onClick={handleBadRequest} content="Bad Request" basic primary />
					<Button onClick={handleValidationError} content="Validation Error" basic primary />
					<Button onClick={handleServerError} content="Server Error" basic primary />
					<Button onClick={handleUnauthorised} content="Unauthorised" basic primary />
					<Button onClick={handleBadGuid} content="BadGuid" basic primary />
				</Button.Group>
			</Segment>
			{error && <ValidationError errors={error} />}
		</>
	);
}
