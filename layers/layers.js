var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt0.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_keptidore2_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "kep tidore2",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/keptidore2_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [14177840.303893, -1120.762016, 14230174.222984, 88000.836308]
                            })
                        });
var format_kontur_2 = new ol.format.GeoJSON();
var features_kontur_2 = format_kontur_2.readFeatures(json_kontur_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kontur_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kontur_2.addFeatures(features_kontur_2);
var lyr_kontur_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_kontur_2, 
                style: style_kontur_2,
                interactive: true,
    title: 'kontur<br />\
    <img src="styles/legend/kontur_2_0.png" /> 0<br />\
    <img src="styles/legend/kontur_2_1.png" /> 250<br />\
    <img src="styles/legend/kontur_2_2.png" /> 500<br />\
    <img src="styles/legend/kontur_2_3.png" /> 750<br />\
    <img src="styles/legend/kontur_2_4.png" /> 1000<br />\
    <img src="styles/legend/kontur_2_5.png" /> 1250<br />\
    <img src="styles/legend/kontur_2_6.png" /> 1500<br />\
    <img src="styles/legend/kontur_2_7.png" /> <br />'
        });

lyr_GoogleSatellite_0.setVisible(true);lyr_keptidore2_1.setVisible(true);lyr_kontur_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_keptidore2_1,lyr_kontur_2];
lyr_kontur_2.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'ELEV': 'ELEV', });
lyr_kontur_2.set('fieldImages', {'fid': 'TextEdit', 'ID': 'Range', 'ELEV': 'TextEdit', });
lyr_kontur_2.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'ELEV': 'no label', });
lyr_kontur_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});