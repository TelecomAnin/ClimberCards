/* eslint-disable */
var ghRelease = require('gh-release')
const exec = require('child_process').execSync;

const isBeta = ''.length !== 0;
const betaTag = isBeta ? 'beta-': '';
 
// all options have defaults and can be omitted
var options = {
  tag_name: 'v1.3.1',
  target_commitish: 'master',
  name: 'v1.3.1',
  draft: false,
  prerelease: false,
  repo: 'ClimberCards',
  owner: 'ClimberAB',
  assets: ['./build/cl-cards-v1.3.1.zip', './build/cl-cards-v1.3.1.pdf'],
  endpoint: 'https://api.github.com' // for GitHub enterprise, use http(s)://hostname/api/v3
}

options.auth = {
  token: process.env.ClimberExtensionAccessToken,
}

if (isBeta) {
  options.prerelease = true;
}

ghRelease(options, function (err, result) {
  if (err) {
    console.log(err);
    // Ensure the make-release tag gets removed if release failed.
    exec(`git push --delete origin make-${betaTag}release`, (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return;
      }
      console.log(`stdout: ${stdout}`);
      console.log(`stderr: ${stderr}`);
    });

    
    process.exit(1);
    throw err;
  }
  console.log(result) // create release response: https://developer.github.com/v3/repos/releases/#response-4
})
