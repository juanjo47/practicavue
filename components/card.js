Vue.component (
    'card-ent',
    { 
        data: function () 
        {
            return {
                upHere: false,
            }
        },
        template: "<div class='card' style='width: 18rem;'><div class='card-body' @mouseover='upHere = true' @mouseleave='upHere = false'><h5 class='card-title'>{{ cnombre }}</h5><img :src='cimagen' alt='' width='100%'><p class='card-text' v-show='upHere'> {{ cdescripcion }} </p><div class='producto-relacionado-precio' :style='precioEstilos'>Precio: {{ cprecio }} BB</div><div><div class='row'><div class='color-box clic' v-for='c in ccolores' :style='{background:c}'></div></div></div></div></div>",

        props: ["cid", "cnombre", "cdescripcion", "cimagen", "cprecio", "ccolores"]
    }
)