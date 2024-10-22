// Read SQLite file
// Tables: Main, sqlite_sequence, Data, Types, CopyBuffers, MainDeletes
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database("C:/Users/theli/Documents/Clipboard_History/ClipboardHist.db");

const tables = ["Main", "sqlite_sequence", "Data", "Types", "CopyBuffers", "MainDeletes"];

db.serialize(() => {
	db.each('SELECT * FROM Main', (err, row) => {
		console.log(row);
	});
});

db.close();