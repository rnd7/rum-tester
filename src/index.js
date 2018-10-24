console.log('@rum-tester index')

const fs = require('fs')

const pkg = JSON.parse(fs.readFileSync('./package.json', "utf8"))
const DEFAULTS = {
  directory: 'test',
}
const opts = Object.assign({}, DEFAULTS)
if (pkg.rum && pkg.rum.tester) Object.assign(opts, pkg.rum.tester)


const { spawn } = require('child_process');
const child = spawn('ava', []);

child.stdout.setEncoding('utf8')
child.stdout.on('data', (chunk) => {
  process.stdout.write(chunk)
})

child.stderr.pipe(process.stdout);

child.on('close', (code) => {})
