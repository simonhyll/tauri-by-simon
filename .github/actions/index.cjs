const { exec } = require('child_process');
const https = require('https');

const host = 'tauri.by.simon.hyll.nu';
const key = '10dd01d8da0f49a48f5e3163f16ddcfb'; // Your IndexNow key
const keyLocation = `https://${host}/10dd01d8da0f49a48f5e3163f16ddcfb.txt`;

function getChangedFiles() {
  return new Promise((resolve, reject) => {
    exec("git diff --name-only HEAD HEAD~1", (error, stdout, stderr) => {
      if (error) {
        reject(error);
        return;
      }
      if (stderr) {
        reject(stderr);
        return;
      }
      resolve(stdout.split('\n').filter(file => file));
    });
  });
}

function filterDocsFiles(files) {
  return files.filter(file => file.startsWith('src/content/docs'));
}

function convertFilesToUrls(files) {
  // Implement your own logic to convert file paths to URLs
  return files.map(file => {
    file = file.replace('src/content/docs', '')
    file = file.replace('/index.mdx', '')
    file = file.replace('.mdx', '')
    return `https://${host}${file}`;
  })
}

function postToIndexNow(urls) {
  const data = JSON.stringify({
    host: host,
    key: key,
    keyLocation: keyLocation,
    urlList: urls
  });

  const options = {
    hostname: 'api.indexnow.org',
    port: 443,
    path: '/IndexNow',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': data.length
    }
  };

  const req = https.request(options, res => {
    console.log(`statusCode: ${res.statusCode}`);

    res.on('data', d => {
      process.stdout.write(d);
    });
  });

  req.on('error', error => {
    console.error(error);
  });

  req.write(data);
  req.end();
}

async function main() {
  try {
    const changedFiles = await getChangedFiles();
    const docFiles = filterDocsFiles(changedFiles);
    const urls = convertFilesToUrls(docFiles);
    urls.forEach((url)=>{
      console.log('Submitting: ', url)
    })
    return

    if (urls.length > 0) {
      postToIndexNow(urls);
    } else {
      console.log('No documentation files changed');
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

main();
