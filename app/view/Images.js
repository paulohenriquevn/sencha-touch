Ext.define('Sencha-Touch.view.Images', {

	extend: 'Ext.Carousel',

	xtype: 'uiImages',

	config: {
			    title: 'Images',
			    styleHtmlContent: true,
			    scrollable: 'vertical',
			     tpl:['<tpl for="images">',
                                 '<div class="image-info">',
                                     '<div class="image-item"><image src="resources/images/{src}"/></div>',
                                     '<div class="image-name">{descricao}</div>',
                                 '</div>',
                             '</tpl>']
			}

});
