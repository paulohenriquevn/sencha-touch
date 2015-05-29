Ext.define('GuiaPhone.model.Item',{
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
				name: 'tipo'
			},
			{
				name: 'image'
			}
			,
			{
				name: 'lat'
			}
			,
			{
				name: 'lng'
			}
			,
			{
				name: 'isMap'
			}
		],

		associations: [
        	{type: 'hasMany', model: 'GuiaPhone.model.Contato', name: 'contatos', associationKey:'contatos'},
        	{type: 'hasMany', model: 'GuiaPhone.model.Product', name: 'products', associationKey:'products'},
        	{type: 'hasMany', model: 'GuiaPhone.model.Image', name: 'images', associationKey:'images'},
            {type: 'hasMany', model: 'GuiaPhone.model.Localidade', name: 'localidades', associationKey:'localidades'}
    	],
	}	

});