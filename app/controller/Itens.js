Ext.define('Sencha-Touch.controller.Itens',{
 extend: 'Ext.app.Controller',

config:{
    
    views:['ListItem','Detail','Location','MapGeral'],

    models:['Item'],

    stores:['Itens'],

    refs:{
    	  listCidade: 'uiListItem',
        item: 'Sencha-Touch.model.Item',
        contato: 'Sencha-Touch.model.Item',
        itemPanel: 'Sencha-Touch.view.ItemPanel',
    },

    control:{

    	listCidade:{
    		leafitemtap: 'tapList'
    	}
    }
},


tapList: function(me,list,index,record)
{
    item = list.getStore().getAt(index);
    var detailCard = me.getDetailCard();

    //if(item.get("isMap") != true)
    //{
	   console.log('Teste');
		
      // detailCard.getItems().each(function(component){
       //      component.setHidden(false);
       //});

        var panel01 = detailCard.getComponent(0);
        panel01.setRecord(item);

        var panel02 = detailCard.getComponent(2);
        panel02.setRecord(item);

        var panel03 = detailCard.getComponent(3);
        panel03.setRecord(item);


        detailCard.removeAt(4);
      //  detailCard.removeAt(5);

        var count = 0;
        item.products().each(function(rec){ count++; });

        if(count != 0)
        {
            detailCard.add({xtype:'uiProduct', title: 'Produtos',  iconCls: 'compose'});
            var panel04 = detailCard.getComponent(4);
            panel04.setRecord(item);
        }
   // }
    //else
    //{
     //   detailCard.getItems().each(function(component){
     //      component.setHidden(true);
      // });
       
      // detailCard.add({xtype:'uiMapGeral', title: 'Locais',  iconCls: 'locate'});

       
    //}

}

});