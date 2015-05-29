Ext.define('GuiaPhone.model.Contato', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
			{
			    name: 'id'
			},
			{
			    name: 'contato'
			},
			{
			    name: 'tipo'
			},
			{
			    name: 'fullContato',
			    convert: function (value, record) {

			        var fullContato = '';

			        var contato = record.get('contato');

			        var valueContato = contato.replace('(', '').replace(')', '').replace('-', '');

			        if (contato.indexOf("www") != -1) {
			            fullContato = '<a href="' + contato + '" >' + contato + '</a>';
			            return fullContato;
			        }

			        if (contato.indexOf("@") != -1) {

			            fullContato = '<a href="mailto:' + contato + '" >' + contato + '</a>';
			            console.log('item Contato->' + fullContato);

			            return fullContato;
			        }

			        fullContato = '<a href="tel:' + valueContato + '" >' + contato + '</a>';
			        return fullContato;

			    }
			}
		]
    }

});