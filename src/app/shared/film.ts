export class Film {
    constructor(
        public id:Number,
        public name:string,
        public salle:string,
        public statut:string,
        public image:string,
        public alt:string,
        public description:string
    ){
        this.id=id;
        this.name=name;
        this.salle=salle;
        this.statut=statut;
        this.image=image;
        this.alt=alt;
        this.description=description;
    }
    
};