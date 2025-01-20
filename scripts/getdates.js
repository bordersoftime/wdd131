'this is a string'

const copyrightParagraph = document.getElementById('copyright');
const currentYear = new Date().getFullYear();
copyrightParagraph.textContent = `© ${currentYear} Your Company Name`;


const lastModifiedParagraph = document.getElementById('last-modified');
const lastModifiedDate = document.lastModified;
lastModifiedParagraph.textContent = `Last modified: ${lastModifiedDate}`;