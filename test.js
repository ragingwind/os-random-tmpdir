import test from 'ava';
import unique from './';

test(t => {
	let dirs = [];
	let max = Math.floor(Math.random() * (9999 - 5000 + 1) + 5000);

	for (let i = 0; i < max; ++i) {
		const dir = unique();
		console.log(dir);
		t.is(dirs.indexOf(dir), -1);
		dirs.push(dir);
	}
});
