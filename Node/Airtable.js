var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyIxwGRPGV4EPa3A'}).base('appqMlyvLiFtJJ04d');



base('Table 1').update('recU9qaKbCTrQ99tU', {
  "Nombre": "Julio ",
  "Apellido": "ITE ",
  "Asistencia": true
}, function(err, record) {
  if (err) { console.error(err); return; }
  console.log(record.get('id'));
});

base('Table 1').find('recU9qaKbCTrQ99tU', function(err, record) {
    if (err) { console.error(err); return; }
    console.log(record);
});
