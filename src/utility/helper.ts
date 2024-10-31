import axios from "axios";

function isValidGoogleMapsApiKey(apiKey: string): boolean {
	// Check if the key is 39 characters long and contains valid characters
	const pattern = /^[A-Za-z0-9\-]{39}$/;
	return pattern.test(apiKey);
}

export async function checkGoogleMapsApiKey(apiKey: string): Promise<boolean> {
	if (!isValidGoogleMapsApiKey(apiKey)) {
		console.error("Invalid API key format.");
		return false;
	}

	const url = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&v=alpha&libraries=maps3d`;

	try {
		const response = await axios.get(url);
		if (response.status === 200) {
			return true; // Valid API key
		} else if (response.status === 403) {
			console.error("Invalid API key or insufficient permissions.");
			return false;
		} else {
			console.error(`Error: ${response.status} - ${response.data.error_message}`);
			return false;
		}
	} catch (error) {
		if (axios.isAxiosError(error)) {
			console.error(`Request failed: ${error.message}`);
		} else {
			console.error(`Unexpected error: ${error}`);
		}
		return false;
	}
}
