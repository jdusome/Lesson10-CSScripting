var collections;
(function (collections) {
    var Game = (function () {
        // EMPTY CONTRUCTOR
        function Game() {
            this.name = "";
            this.cost = 0;
            this.rating = 0;
        }
        return Game;
    }());
    collections.Game = Game;
})(collections || (collections = {}));
//# sourceMappingURL=games.js.map