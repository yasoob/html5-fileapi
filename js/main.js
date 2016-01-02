// We can deal with iframe uploads using this URL:
var options = {iframe: {url: 'upload.php'}}
// 'zone' is an ID but you can also give a DOM node:
var zone = new FileDrop('zone', options)

// Do something when a user chooses or drops a file:
zone.event('send', function (files) {
  // FileList might contain multiple items.
  // files is a FileList of File objects. List some properties.
  var output = [];
  for (var i = 0, f; f = files[i]; i++) {
  	output.push('<ul class="item"><li><b>Name:</b> ', decodeURIComponent(escape(f.name)), '</li><li><b>Type:</b> ', f.type || 'n/a', '</li><li><b>Size:</b> ',
  		f.size, ' bytes, </li><li><b>last modified:</b> ',
  		f.lastModifiedDate ? f.lastModifiedDate.toLocaleDateString() : 'n/a',
  		'</li></ul>');
  }
  document.getElementById('list').innerHTML = '<h4>Information</h4><ul class="main">' + output.join('') + '</ul>';
})

zone.multiple(true);


function handleFileSelect(evt) {
var files = evt.target.files; // FileList object

// files is a FileList of File objects. List some properties.
var output = [];
for (var i = 0, f; f = files[i]; i++) {
	output.push('<ul class="item"><li><b>Name:</b> ', decodeURIComponent(escape(f.name)), '</li><li><b>Type:</b> ', f.type || 'n/a', '</li><li><b>Size:</b> ',
		f.size, ' bytes, </li><li><b>last modified:</b> ',
		f.lastModifiedDate ? f.lastModifiedDate.toLocaleDateString() : 'n/a',
		'</li></ul>');
}
document.getElementById('list').innerHTML = '<h4>Information</h4><ul class="main">' + output.join('') + '</ul>';
}

document.getElementById('files').addEventListener('change', handleFileSelect, false);