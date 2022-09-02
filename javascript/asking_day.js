// Asking to author, day of the week
day = prompt("What is the day of the week?");

// With switch statement, we're going to show what day of the week it is for tomorrow
switch ( day ) {
	case "monday":
		console.log( "Tomorrow is tuesday" );
		break;
	case "tuesday":
		console.log( "Tomorrow is wednesday" );
		break;
	case "wednesday":
		console.log( "Tomorrow is thursday" );
		break;
	case "thursday":
		console.log( "Tomorrow is friday" );
		break;
	case "friday":
		console.log( "Tomorrow is saturday" );
		break;
	case "saturday":
		console.log( "Tomorrow is sunday" );
		break;
	case "sunday":
		console.log( "Tomorrow is monday" );
		break;
	default:
		console.log( "Unrecognized day!" )
}

