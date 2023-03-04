Vue.component (
    'produc-t',
    { 
        data: function () 
        {
            return {
                id:1,
                imagen: "https://ae01.alicdn.com/kf/Sc3cc58f2a441419f970cc01f9e5358fbw/Dron-LU3-MAX-GPS-8K-HD-profesional-con-c-mara-Dual-card-n-autoestabilizador-Motor-sin.jpg_Q90.jpg_.webp",
                nombre: "Dron LU3 MAX GPS 8K HD",
                descripcion: "Dron LU3 MAX GPS 8K HD profesional con cámara Dual cardán autoestabilizador, Motor sin escobillas para evitar obstáculos, cuadricóptero plegable",
                precio:"620",
                precioEstilos:
                {
                    background: "orangered",
                    color: "white",
                    'font-weight': "bold",
                    'text-align': "center",
                    padding: "10px",
                },
                colores: ["red", "blue", "black", "yellow"],
                bid: null,
                bcantidad: 1,
                bcolor: null,
                    
                }
            },
        
        template: "<div><div class='row'> <h3> {{ nombre }} </h3> </div> <div class='row'> <div class='col-12 col-sm-6 col-md-4'> <img :src='imagen' alt='' width='100%'> </div> <div class='col-12 col-sm-6 col-md-8'> <h6> {{ descripcion }} </h6> <div class='p-3 mb-2 text-white' :style='precioEstilos'>Precio: {{ precio }} BB </div> <h5> Color </h5> <div class='row'> <div class='color-box clic' v-for='c in colores' :style='{background:c}'></div> </div> <h5> Cantidad </h5> <div class='quantity'> <button>-</button> <div>1</div> <button>+</button> </div> <div class='buy-box'> <button v-if= 'bcantidad >= 1' type='button' class='btn btn-primary' :style='{backgroundColor: bcolor}'> Comprar </button> </div> </div> </div></div>",
    },
)