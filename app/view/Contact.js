Ext.define('GuiaPhone.view.Contact', {

	extend: 'Ext.Panel',

	xtype: 'uiContact',

	config: {
				cls: 'contactInfo',
				scrollable: 'vertical',
			     tpl:['<tpl for="contatos">',
                                 '<div class="info">',
                                     '<div class="type">{tipo}:</div>',
                                     '<div class="value">{fullContato}</div>',
                                 '</div>',
                     '</tpl>']
			}

});
