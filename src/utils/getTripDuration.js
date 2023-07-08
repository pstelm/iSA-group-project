export const getTripDuration = (trip, setTripDuration) => {
	let tripDurationText = '';
	const startDay = trip.startDate.toDate().getDate();
	const startMonth = trip.startDate.toDate().getMonth() + 1;
	const startYear = trip.endDate.toDate().getFullYear();

	const endDay = trip.endDate.toDate().getDate();
	const endMonth = trip.endDate.toDate().getMonth() + 1;
	const endYear = trip.endDate.toDate().getFullYear();

	if (startYear === endYear && startMonth === endMonth) {
		tripDurationText = startDay + '-' + endDay + '.' + endMonth + '.' + endYear;
	} else if (startYear === endYear) {
		tripDurationText =
			startDay + '.' + startMonth + '-' + endDay + '.' + endMonth + '.' + endYear;
	} else {
		tripDurationText =
			startDay +
			'.' +
			startMonth +
			'.' +
			startYear +
			'-' +
			endDay +
			'.' +
			endMonth +
			'.' +
			endYear;
	}
	setTripDuration(tripDurationText);
};
