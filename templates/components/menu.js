Vue.component (
    'menu-s',
    { 
        data: function () 
        {
            return {
                marca: "MegaDron",
                menuColor: {
                    backgroundColor: "lightblue"
                },
                menu1:{
                    etiqueta1: "Inicio",
                    url1: "?"
                },
                menu2:{
                    etiqueta2: "Tienda",
                    url2: "?"
                },    
            }
            
        },
        template: "<ul class='navbar-nav me-auto mb-2 mb-lg-0'> <li class='nav-item'> <a class='nav-link' aria-current='page' :href='menu1.url1'> {{ menu1.etiqueta1 }} </a> </li>  <li class='nav-item'><a class='nav-link' :href='menu2.url2'> {{ menu2.etiqueta2 }} </a> </li> </ul>",
    }
)