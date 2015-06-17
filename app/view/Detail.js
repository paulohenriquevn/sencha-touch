Ext.define("Sencha-Touch.view.Detail", {
    extend: 'Ext.Container',

    xtype: 'uiDetailContainer',

    config: {
        cls: 'itemInfo',
        scrollable: 'vertical',
        tpl: [
            '<div class="header">',
            '<img class"avatar" src="resources/images/{image}"/>',
            '<h3>{nome}</h3>',
            '<h4>{tipo}</h4>',
            '</div>',
            '<p>{descricao}</p>'
        ]
    }
});
