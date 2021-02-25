export class Recipe {
    public name: string;
    public decription: string;
    public imagePath: string;

    constructor(name: string, des: string, img: string) {
        this.name = name;
        this.decription = des;
        this.imagePath = img;
    }
}