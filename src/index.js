console.log('@rum-tester index')

import Mocha from 'mocha'
import fs from 'fs'
import path from 'path'

const mocha = new Mocha();
const pkg = JSON.parse(fs.readFileSync('./package.json', "utf8"))
const DEFAULTS = {
  directory: 'test',
}
const opts = Object.assign({}, DEFAULTS)
if (pkg.rum && pkg.rum.tester) Object.assign(opts, pkg.rum.tester)

fs.readdirSync(opts.directory).filter((file) => {
    return file.substr(-3) === '.js';
}).forEach(function(file){
    mocha.addFile(
        path.join(opts.directory, file)
    );
});

// Run the tests.
mocha.run(function(failures){
  process.exitCode = failures ? 1 : 0;  // exit with non-zero status if there were failures
});
