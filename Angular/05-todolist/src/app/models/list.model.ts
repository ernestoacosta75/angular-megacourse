import { ItemList } from './item-list.model';

export class List {
    id: number;
    title: string;
    createdIn: Date;
    terminatedIn: Date;
    completed: boolean;
    items: ItemList [];

    constructor( title: string ) {
        this.title = title;
        this.createdIn = new Date();
        this.completed = false;
        this.items = [];

        this.id = new Date().getTime();
    }
}