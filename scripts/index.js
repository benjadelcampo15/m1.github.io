class Activity {
    constructor(id , title , url , description){
         this.id = id,
         this.title = title,
         this.url = url,
         this.description = description

    }
}

class Repository{
    constructor(){

        this.activities = [];

        this.id = 0;

    }

    createActivitie(title , url , descripcion){

        const id = this.id ++;

        const activity = new Activity(id , title , url , descripcion);

        this.activities.push(activity);

    }

    getAllActivities(){
        return this.activities;
    }

    deleteActivities(id){
        this.activities = this.activities.filter(Activity => Activity.id != id);
        this.getAllActivities();
    }
}

const repository = new Repository();

CreateCard = (activity) => {

   const  {id ,title , url , description} = activity;

   const tituloElemento = document.createElement('h2');

   const urlElemento = document.createElement('img');

   const pElemento = document.createElement('p');

   const eliminar = document.createElement('img');

   eliminar.src = 'imagenes/borrar.png';

   tituloElemento.innerHTML = title;

   urlElemento.src = url;

   pElemento.innerHTML = description;

   eliminar.classList.add('cardEliminar');

   tituloElemento.classList.add('cardTitle');

   urlElemento.classList.add('cardUrl');

   pElemento.classList.add('cardDescription');

   eliminar.addEventListener('click' , borrar = (event) => {

    div.remove();

    repository.deleteActivities(id);

   })

   const div = document.createElement('div');

   div.classList.add('cardsActivities');

   div.appendChild(tituloElemento);

   div.appendChild(urlElemento);

   div.appendChild(pElemento);

   div.appendChild(eliminar);

   return div;
}

Apender = () => {
    const contenedor = document.getElementById('contenedor');
    const actividades = document.getElementById('titulo');
    const h1 = document.createElement('h1');
    contenedor.innerHTML = ('');
    actividades.innerHTML = '';
    h1.innerHTML = 'Activities';
    actividades.appendChild(h1);
    const array = repository.getAllActivities().map(Activity => CreateCard(Activity));
    
    array.forEach(Activity => {
        contenedor.appendChild(Activity);
    })
}



const Handler = () => {

    const form = document.getElementById('formulario');

    
    const InputTitle = document.getElementById('title').value;

    const InputUrl = document.getElementById('url').value;
    
    const InputDescription = document.getElementById('description').value;

    if (InputTitle  == '') {

        alert('Campo incompleto : titulo');
        
    }else if  (InputDescription == '') {

        alert('Campo incompleto : descripcion')
        
    }else if (InputUrl =='') {

        alert('Campo incompleto: url de imagen')

    }else {
      
        repository.createActivitie(InputTitle , InputUrl , InputDescription);

        Apender();
    
        form.reset();
    }
}

const button = document.getElementById('button');

button.addEventListener('click' , Handler)

