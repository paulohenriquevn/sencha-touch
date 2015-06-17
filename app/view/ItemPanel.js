Ext.define('Sencha-Touch.view.ItemPanel', {
    extend: 'Ext.tab.Panel',

    config: {
        border: 10,
        tabBarPosition: 'bottom',

        items: [{
            xtype: 'uiDetailContainer',
            title: 'Detalhes',
            iconCls: 'home',
        }, {
            xtype: 'uiContact',
            title: 'Contatos',
            iconCls: 'maps'
        }, {
            xtype: 'uilocation',
            title: 'Localização',
            iconCls: 'locate'
        }]


    }

});
