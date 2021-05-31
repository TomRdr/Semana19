const mongoose =require('mongoose')


mongoose.connect('mongodb://localhost:27017/EmployeeDB', { useNewUrlParser: true }, (err) => {
    if (!err) { console.log('MongoDB conexion correcta.') }
    else { console.log('Error al conectar al mongodb : ' + err) }
});

require('./employee.model');

