var List = /** @class */ (function () {
    function List(title) {
        this.title = title;
        this.createdIn = new Date();
        this.completed = false;
        this.items = [];
        this.id = new Date().getTime();
    }
    return List;
}());
export { List };
//# sourceMappingURL=list.model.js.map