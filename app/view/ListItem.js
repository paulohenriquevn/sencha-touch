Ext.define('Sencha-Touch.view.ListItem', {
    extend: 'Ext.NestedList',
    xtype: 'uiListItem',
    config: {
        store: 'stItens',
        displayField: 'nome',
        title: 'Cidades',
        detailCard: {
            xclass: 'Sencha-Touch.view.ItemPanel'
        }
    },


    getItemTextTpl: function(node) {
        return '<img class"avatar" src="resources/images/{image}"/><h3>{nome}</h3><h4>{nome}</h4>'
    }

});
