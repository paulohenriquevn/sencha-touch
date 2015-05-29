Ext.define('GuiaPhone.store.Itens',{
	extend: 'Ext.data.TreeStore',
	config: {
			    model: 'GuiaPhone.model.Item',
			    defaultRootProperty: 'items',
			    storeId: 'stItens',
			    autoLoad: true,
			    proxy:{
			      	type: 'ajax',
			      	//Mobile
					url : 'data/GuiaPhone.json',
			      
				  	//WEB
					//url : '../GuiaPhone/getData/',
			     
				  }
  			}
});