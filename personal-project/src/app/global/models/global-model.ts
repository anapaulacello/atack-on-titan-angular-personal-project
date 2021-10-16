export interface GlobalModel {
    nav:Nav;
    hero:Hero;
    gallery:Gallery;
    form:Form;
}

export interface Nav{
    img:Img;
}

export interface Hero{
    logo:Img;
    button:string;
}

export interface Gallery{
    card:Card[];
}

export interface Form{
    title:string;
}

export interface Img {
    src: string;
    alt: string;
}
export interface Card{
    img:Img;
    name:string;
}

