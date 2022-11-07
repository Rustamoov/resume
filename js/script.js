
class Write{
    constructor({el, speed}){
        this.el = document.querySelector(el);

        this.content = this.el.innerHTML;
        this.fullText = '';
        this.speed = speed;

        this.javoxir();
    }
    javoxir(i = 0) {
        this.fullText += this.content[i++];
        this.el.innerHTML = this.fullText;

        if (this.content != this.fullText) {
            setTimeout(() =>  this.javoxir(i), this.speed)
        }
    }
}

const write = new Write ({
    el: '.info__title',
    speed: 100
})