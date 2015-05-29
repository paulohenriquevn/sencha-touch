
Ext.define('GuiaPhone.view.ItemPanel', {
    extend: 'Ext.tab.Panel',

    config: {
        border: 10,
        tabBarPosition: 'bottom',
        
                items: [
                    //Pronto
                    {
                        xtype: 'uiDetailContainer',
                        title: 'Detalhes',
                        iconCls: 'home',
                    },
                    {
                        //Pronto
                        xtype: 'uiContact',
                        title: 'Contatos',
                        iconCls: 'maps'
                    },
                    {
                        //Pronto
                        xtype: 'uilocation',
                        title: 'Localização',
                        iconCls: 'locate'
                       
                    }
                ]
            
        
    }

});