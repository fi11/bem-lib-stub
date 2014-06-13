module.exports = function(bh) {
    bh.match('hello', function(ctx, json) {
        ctx.js(true);
        ctx.content('Let`s create your awesome lib');
    });
};
