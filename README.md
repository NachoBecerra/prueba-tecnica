
###  
<div  align="center"> 
<h2> Prueba Técnica de Fco Ignacio Becerra 'Nacho' </h2>
</div>

<div align="center">
<img alt="ignacioBecerra" height="25px" src="https://img.shields.io/badge/-JavaScript-%23F7DF1C?style=flat-square&logo=javascript&logoColor=000000&labelColor=%23F7DF1C&color=%23FFCE5A"/>
<img alt="ignacioBecerra" height="25px" src="https://camo.githubusercontent.com/32f7eabbb5fe286fbef8c54edd4e11e30722216a79c104f49289c310fb11494b/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d52656163742d2532333238324333343f7374796c653d666c61742d737175617265266c6f676f3d7265616374"/>  
<img alt="ignacioBecerra" height="25px" src="https://user-images.githubusercontent.com/110669441/195196758-724a31db-aebc-4e2d-845c-a1059974e7a9.jpg"/>  
<img alt="ignacioBecerra" height="25px" src="https://img.shields.io/badge/-HTML5-%23E44D27?style=flat-square&logo=html5&logoColor=ffffff"/>
<img alt="css" height="25px" src="https://user-images.githubusercontent.com/110669441/195194693-0dd33b71-d93d-44da-8453-f90c3b2dc13e.jpg"/>
<img alt="firebase" height="25px" src="https://user-images.githubusercontent.com/110669441/195194574-076e693e-dac2-4c41-bd0e-b31d9d5147e1.jpg"/>
<img alt="materialUI" height="25px" src="https://user-images.githubusercontent.com/110669441/195195155-d8312e49-1a10-4638-88e0-dddc08eb2488.jpg"/>
<img alt="ignacioBecerra" height="25px" src="http://img.shields.io/badge/-VS%20Code-007ACC?style=flat-square&logo=visual-studio-code&logoColor=ffffff"/>
</div> 

<br/><br/>

<h3>Breve explicación y método de uso</h3>
<p>
Proyecto realizado con la tecnología de React, con el objetivo de añadir, modificar o eliminar salas dentro de un listado de plantas disponible.
</p>

<p align="justify">
Para comenzar, se debe elegir la planta que se desea visualizar. Para ello utilizaremos el selector desplegable que se encuentra disponible en la primera pantalla. Una vez seleccionada la planta, se mostrará el listado de salas incluidas en esta.
</p>
<p align="justify">  
  En el primer uso, este listado se salas estará totalmente vacío, por lo que será necesario ejecutar la opción disponible de "añadir sala". Todas las salas nuevas serán creadas con los mismos valores por defectos, valores que podrán ser editados posteriormente por el usuario.
</p>
<p align="justify">  
  Cada sala dispondrá de la siguiente información: nombre de la sala, máxima capacidad y porcentaje de ocupación. Estos tres valores son editables y se ven afectados por una serie de limitaciones, en el caso de la capacidad, su valor no puede ser inferior a 0, mientras que el valor de la ocupación debe estar comprendido entre los valores de 0 y 100, ambos incluidos respectivamente.
</p>
<p align="justify">  
  Finalmente, cualquier sala puede ser eliminada del listado mediante el botón de papelera que se encuentra disponible junto al nombre de la misma. Antes de su eliminación, se pedirá una confirmación al usuario para evitar las posibles pérdidas involuntarias de datos.
</p>
<br><br>
<h3>Decisiones tomadas y flujo de desarrollo</h3>
<p align="justify">
  Para completar el desarrollo solicitado, el primer paso a seguir ha sido el de crear la interfaz gráfica completa sin aplicar ninguna funcionalidad a los elementos de la misma.<br>
  Para realizar el diseño, he usado de guía la imagen adjunta incluida en el email del challenge y he utilizado la biblioteca de Material UI para conseguir este fin.<br>
 </p>
 <p align="justify">
  Posteriormente, he implementado Redux al proyecto y he empezado a añadir las funcionalidades necesarias del mismo, almacenando toda la información en el árbol de estado ahora disponible. Para gestionar dicha información, he implementado la librería de Formik, y así controlar los formularios usados en la edición de datos de cada salas.<br>
</p>
<p align="justify">  
  En el árbol de estado suministrado por Redux podemos encontrar los siguientes valores:
  <ul>
    <li>isSaving: puede tener los valores de true o false, e indica cuando la aplicación está disponible o necesita recopilar información para continuar.</li>
    <li>Plantas: este valor incluye un arrays con las plantas disponibles. Dentro de cada objeto/planta podemos encontrar toda la información de las salas incluidas en esa planta.</li>
    <li>Active: en este valor se incluirá la información de la planta que se encuentre seleccionada en cada momento, y serán estos valores los que se utilicen para mostrar los datos en la interfaz gráfica</li>
 </ul>   
 </p>
<p align="justify">
  Por último, se ha implementado el proceso CRUD para trabajar con la base de datos de Firebase y así conseguir que los valores almacenados en la aplicación sean  persistentes. Paralelamente a esta inserción de datos en la BBDD, se ha realizado un POST de la información obtenida a la web API Mocha, para realizar una simulación de comunicación con un servicio backend.
</p>


<br><br>
<h4>Para ver la aplicación en funcionamiento, puedes hacerlo desde la dirección: <strong> https://nachobecerra.github.io/ </strong> </h4>
<br><br>

<div>
<img align="left" alt="ignacioBecerra" width="100%" src="https://user-images.githubusercontent.com/110669441/195170304-f6e780d8-25f4-4955-a09e-d299547bb2ae.png" />
</div>  

<br><br>

<div align="center"> 
<a target="_blank" href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"><img alt="ignacioBecerra"  src="https://camo.githubusercontent.com/6c1dafd006af15bce395e2d124db54c52a24827e7a8763b59314eeb97d5c6857/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6c696e6b6564696e2d2532333031373742353f7374796c653d666c6174266c6f676f3d6c696e6b6564696e266c6f676f436f6c6f723d7768697465" /></a>
</div>
