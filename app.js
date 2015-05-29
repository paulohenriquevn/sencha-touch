//<debug>
Ext.Loader.setPath({
    'Ext': 'sdk/src'
});
//</debug>

Ext.application({
    name: 'GuiaPhone',

    requires: [
        'Ext.Map',
        'Ext.MessageBox',
        'Ext.Video',
        'Ext.dataview.NestedList',
        'Ext.data.reader.Xml',
        'Ext.util.Geolocation',
        'Ext.device.Geolocation'
    ],

    views: [
        'Main', 
        'ListItem',
        'ItemPanel',
        'Location',
        'Contact',
        'Images',
        'Detail',
        'Product',
        'SlideShow',
        'MapGeral'
    ],

    controllers: [
       'Itens'
    ],

    models: [
        'Item',
        'Contato',
        'Image',
        'Product',
        'Localidade'
    ],

    stores: [
        'Itens'
    ],

    icon: {
        57: 'resources/icons/Icon.png',
        72: 'resources/icons/Icon~ipad.png',
        114: 'resources/icons/Icon@2x.png',
        144: 'resources/icons/Icon~ipad@2x.png'
    },
    
    phoneStartupScreen: 'resources/loading/Homescreen.jpg',
    tabletStartupScreen: 'resources/loading/Homescreen~ipad.jpg',

    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        // Initialize the main view
        // Ext.Viewport.add(Ext.create('GuiaPhone.view.Main'));
        Ext.Viewport.add(Ext.create('GuiaPhone.view.ListItem'));
        //Ext.Viewport.add(Ext.create('GuiaPhone.view.DetailContainer'));
        
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function() {
                window.location.reload();
            }
        );
    }
});
