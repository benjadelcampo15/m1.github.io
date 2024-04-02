

class Activity {
    constructor( id, title , description , url){
        this.id = id;
        this.title = title;
        this.description = description;
        this.url = url;
    }
}

class Repository {

    constructor(){

        this.activities = [];

        this.id = 0;

    }
    
    createActivitie(title , description , url) {
        
        const id = this.id++;

        const actividad = new Activity( id ,title , description , url);
    
        this.activities.push(actividad);

    }

    getAllActivities() {

        return this.activities;

    }

     deleteActivitie(id){

         this.activities =  this.activities.filter(Activity => Activity.id !== id);

     }
}

const repo = new Repository();

hacerTarjeta = (actividad) =>{
     
    const {id ,title , description , url} = actividad;

    const h3 =  document.createElement('h3');

    const p = document.createElement('p');

    const img = document.createElement('img');

    const eliminar = document.createElement("img");

    h3.innerHTML= title;

    p.innerHTML = description;
    
    img.src = url;

    // eliminar.innerHTML = "X"

    eliminar.src = "imagenes/cruz.png"

    eliminar.classList.add('boton');

    h3.classList.add('tarjetaTitulo');

    p.classList.add('tarjetaDescripcion');

    img.classList.add('tarjetaImg');

    const div = document.createElement('div');

    div.appendChild(h3);

    div.appendChild(p);

    div.appendChild(img);

    div.appendChild(eliminar);

    div.classList.add("tarjetaActividad");

    eliminar.addEventListener("click" , (event) => {
         
        repo.deleteActivitie(id)

        div.remove()

    })

    return div;

}

appenderDeTarjetas = () => {

    const section = document.getElementById('tarjetas2');

    section.innerHTML = '';

    const actividades = repo.getAllActivities();

    const array =  actividades.map(actividad => hacerTarjeta(actividad))

        array.forEach(actividad => {

        section.appendChild(actividad)
        
     }); 

     
}

const handler = () => {

    const titulo = document.getElementById('titulo').value;

    const descripcion = document.getElementById('descripcion').value;

    const url = document.getElementById('url').value;

    if (titulo  == '') {

        alert('Campo incompleto : titulo');
        
    }else if  (descripcion == '') {

        alert('Campo incompleto : descripcion')
        
    }else if (url =='') {

        alert('Campo incompleto: url de imagen')

    }else {
        
        repo.createActivitie(titulo , descripcion , url);

        appenderDeTarjetas();

    }
}
const boton = document.getElementById('boton');

boton.addEventListener('click' , handler);






