module.exports = function(bh) {
    bh.match('block-hello', function(ctx) {
        ctx.content([
            {
                block: 'example',
                content: { block: 'hello' }
            }
        ]);
    });
};
