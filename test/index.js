import test from 'ava'

test('test sync', t => {
	t.pass();
});

test('test async', async t => {
	const bar = Promise.resolve('bar');

	t.is(await new Promise((resolve, reject) => {
    setTimeout(() => { resolve(true) }, 500)
  }), true);
});
