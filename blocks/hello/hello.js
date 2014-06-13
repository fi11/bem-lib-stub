modules.define('hello', ['i-bem__dom'], function(provide, BEMDOM) {

    provide(BEMDOM.decl('hello', {
        onSetMod: {
            js: {
                inited: function() {
                    console.log('Hello world!');
                }
            }
        }
    }));
});
