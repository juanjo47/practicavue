Vue.component (
    'foot-er',
    { 
        data: function () 
        {
            return {
                footerColor: {
                        backgroundColor: "slategrey"
                    },    
            }
            
        },
        template: "<footer :style='footerColor'></footer>" ,
    }
)