let date = new Date(2023, 0, 9, 1, 2, 3, 4);

date = date.toLocaleDateString("tr-TR", {
	weekday: "long",
	year: "numeric",
	month: "long",
	day: "2-digit",
});

console.log(date); // 9 Ocak 2023 Pazartesi
