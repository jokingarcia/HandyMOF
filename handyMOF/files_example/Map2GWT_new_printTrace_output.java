package com.example.client;

import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.core.client.MapWidget;
import com.google.gwt.core.client.control.LargeMapControl;
import com.google.gwt.core.client.control.MenuMapTypeControl;
import com.google.gwt.core.client.geom.LatLng;
import com.google.gwt.core.client.overlay.Marker;
import com.google.gwt.core.client.overlay.MarkerOptions;
import com.google.gwt.core.client.ui.RootPanel;

/**
* Entry point classes define <code>onModuleLoad()</code>.
*/
public class GoogleMapsExample implements EntryPoint {

public void onModuleLoad() {
 // Open a map centered on York
MapWidget map = new MapWidget();
map.setSize("1000", "500");
map.addControl(new LargeMapControl());
map.addControl(new MenuMapTypeControl());
LatLng center = LatLng.newInstance(53.962301, -1.081884);
map.setCenter(center);
map.setZoomLevel(14);

// Set markers
LatLng point1= LatLng.newInstance(53.94833,-1.054221);
MarkerOptions markeroptions1 = MarkerOptions.newInstance();
markeroptions1.setTitle("ICMT, conference
");
Marker marker1 = new Marker(point1, markeroptions1);
LatLng sw1 = LatLng.create(53.94833,-1.054221);
LatLng ne1 = LatLng.create(53.94833,-1.054221);
map.addOverlay(marker1);
LatLng point2= LatLng.newInstance(53.965954,-1.091309);
MarkerOptions markeroptions2 = MarkerOptions.newInstance();
markeroptions2.setTitle("The Grange Hotel, hotel
");
Marker marker2 = new Marker(point2, markeroptions2);
LatLng sw2 = LatLng.create(53.965954,-1.091309);
LatLng ne2 = LatLng.create(53.965954,-1.091309);
map.addOverlay(marker2);
LatLng point3= LatLng.newInstance(53.9613,-1.079723);
MarkerOptions markeroptions3 = MarkerOptions.newInstance();
markeroptions3.setTitle("The Lime House, restaurant
, 0441904632734
");
Marker marker3 = new Marker(point3, markeroptions3);
LatLng sw3 = LatLng.create(53.9613,-1.079723);
LatLng ne3 = LatLng.create(53.9613,-1.079723);
map.addOverlay(marker3);
RootPanel.get("mapContainer").add(map);
 }
}
