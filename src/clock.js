export function update() {
	let currentTime = new Date()

	let currentHours = currentTime.getHours()
	let currentMinutes = currentTime.getMinutes()

	// Pad the minutes and seconds with leading zeros, if required
	currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes

	// Choose either "AM" or "PM" as appropriate
	let timeOfDay = (currentHours < 12) ? "AM" : "PM"

	// Convert the hours component to 12-hour format if needed
	currentHours = (currentHours > 12) ? currentHours - 12 : currentHours

	// Convert an hours component of "0" to "12"
	currentHours = (currentHours == 0) ? 12 : currentHours

	// Compose the string for display
	let currentTimeString = currentHours + ":" + currentMinutes + " " + timeOfDay

	// Update the time display
	$("#timeString").html(currentTimeString)
}