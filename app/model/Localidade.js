Ext.define('GuiaPhone.model.Localidade', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
			{
			    name: 'id'
			},
			{
			    name: 'lat'
			},
			{
			    name: 'lng'
			},
			{
			    name: 'nome'
			}
		]
    }

});