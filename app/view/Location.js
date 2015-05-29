Ext.define('GuiaPhone.view.Location', {

	extend: 'Ext.Container',
	requires: 'Ext.Map',

	xtype: 'uilocation',

	config: {

		layout: 'fit'
	},


	show:function( me,  eOpts )
	{

		var directionsDisplay = new google.maps.DirectionsRenderer();
		

       var position = new google.maps.LatLng(this.getRecord().get('lat'), this.getRecord().get('lng')),
			infoWindow = new google.maps.InfoWindow({ content: this.getRecord().get('nome') }),
			map, marker;

		this.callParent();
        
		map = this.add({
			xtype: 'map',
			mapOptions: {
				center: position,
				zoom : 17,
		        mapTypeId: google.maps.MapTypeId.ROADMAP
			}
		});

		marker = new google.maps.Marker({
	        position: position,
	        map: map.getMap(),
	        visible: true
	    });


        //CRIA AS ROTAS 
        var geo = new Ext.util.Geolocation({
		        autoUpdate: true,
		        allowHighAccuracy: true,
		        listeners: {
		            locationupdate: function(geo) {
		                latCurrent = geo.getLatitude();
		                lonCurrent = geo.getLongitude();
		                 
					    directionsDisplay.setMap(map.getMap());

					    

						var positionCurrent = new google.maps.LatLng(latCurrent, lonCurrent);
					    var directionsService = new google.maps.DirectionsService();
						var start = positionCurrent;
						var end = position;
						var request = {
						    origin:start,
						    destination:end,
						    travelMode: google.maps.TravelMode.DRIVING
						};
						  
						directionsService.route(request, function(result, status) {
						    if (status == google.maps.DirectionsStatus.OK) {
						      directionsDisplay.setDirections(result);
						    }
						});

		            },
		            locationerror: function(geo, bTimeout, bPermissionDenied, bLocationUnavailable, message) {
                       
                        google.maps.event.addListener(marker, 'click', function() {
					        infoWindow.open(map, marker);
					    });

        			}
		        }
		 });

        
	},


});
