export default class DoorModel {
    private number: number;
    private hasGift: boolean;
    private selected: boolean;  
    private opened: boolean;

    constructor(number: number, hasGift = false, selected = false, opened = false) {
        this.number = number;
        this.hasGift = hasGift;
        this.selected = selected;
        this.opened = opened;
    }

    getNumber() {
        return this.number;
    }

    isHasGift() {
        return this.hasGift;
    }

    isSelected() {
        return this.selected;
    }

    isOpened() {
        return this.opened;
    }

    toggleSelected() {
        const selected = !this.selected;
        return new DoorModel(this.number, this.hasGift, selected, this.opened);
    }

    open() {
        const opened = true;
        return new DoorModel(this.number, this.hasGift, false, opened);
    }

    unselect() {
        const selected = false;
        return new DoorModel(this.number, this.hasGift, selected, this.opened);
    }
}