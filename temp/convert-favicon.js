const svgToIco = require('svg-to-ico');
const fs = require('fs');
const path = require('path');

// Path to the SVG file
const svgPath = path.join(__dirname, 'new-favicon.svg');
// Path to save the ICO file
const icoPath = path.join(__dirname, '..', 'app', 'favicon.ico');

// Convert SVG to ICO
svgToIco(svgPath, { sizes: [16, 32, 48, 64] })
  .then(buf => {
    // Write the buffer to the ICO file
    fs.writeFileSync(icoPath, buf);
    console.log('Favicon successfully created and replaced!');
  })
  .catch(err => {
    console.error('Error converting SVG to ICO:', err);
  });