interface Clickable {
    click (): void
}

abstract class Button implements Clickable {

    private _name: string;

    constructor(name: string) {
        this._name = name;
    }
    
    abstract click(): void 

    get name() {
        return this._name;
    }
    
}

class LikeButton extends Button {

    private _likes: number = 0;

    constructor(name: string) {
        super(name);
    }
    
    click(): void {
        this._likes += 1;
    }

    get likes () {
        return this._likes;
    }

}

let likeButton = new LikeButton('Like');
console.log(`Current like count: ${likeButton.likes}`);
likeButton.click();
console.log(`Current like count: ${likeButton.likes}`);
console.log('About to click it 5 times');

for (let i = 0; i < 5; i++){
    likeButton.click();
}

console.log(`Current like count: ${likeButton.likes}`);