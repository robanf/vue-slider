const app= new Vue(
    {
        el: "#app",
        data:{
            counter:0,
            foto:[
                "img/img1.jpg",
                "img/img2.jpg",
                "img/img3.jpg",
                "img/img4.jpg"
            ]
        },
        methods:{
            nextfoto(){
                this.counter++;
                if(this.counter==(this.foto.length)){
                    this.counter=0;
                }
            },
            prevfoto(){
                this.counter--;
                if(this.counter<0){
                    this.counter=this.foto.length -1;
                }
            },
            cambiopallino(index){
                this.counter=index;
            }
        }
    }
);
