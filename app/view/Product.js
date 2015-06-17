Ext.define('Sencha-Touch.view.Product', {

    extend: 'Ext.Panel',

    xtype: 'uiProduct',

    config: {
        cls: 'x-list-item-product',
        scrollable: 'vertical',
        tpl: ['<tpl for="products">',
            '<div class="product">',
            '<img src="resources/images/{image}"/>',
            '<div class="price">{preco}</div>',
            '<h3>{nome}</h3>',
            '<h4>{descricao}</h4>',
            '</div>',
            '</tpl>'
        ]
    }

});
