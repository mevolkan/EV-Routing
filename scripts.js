
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-79.4512, 43.6568],
    zoom: 13,
    cooperativeGestures: true
});

map.addControl(
    new MapboxDirections({
        accessToken: mapboxgl.accessToken,
        profile: 'mapbox/driving',
        unit: 'metric',
        engine: 'electric',
        ev_initial_charge:10,
        ev_max_charge:6000,
        ev_connector_types:'ccs_combo_type1',
        energy_consumption_curve:'20,160',
        ev_max_ac_charging_power:20,
        ev_min_charge_at_destination:20,
        ev_min_charge_at_charging_station:20

    }),
    'top-left'
);
map.addControl(new mapboxgl.NavigationControl('top-right'));