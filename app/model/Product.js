Ext.define('GuiaPhone.model.Product',{
	extend: 'Ext.data.Model',
	config: {
		fields: [
			{
				name: 'id'
			},
			{
				name: 'nome'
			},
			{
				name: 'descricao'
			}, 
			{
				name: 'preco'
			}, 
			{
				name: 'image'
			}
		]
	}	

});