
    //Mapbox Access Token
    mapboxgl.accessToken = 'pk.eyJ1IjoicGw3ODIyIiwiYSI6ImNtZjdwNHViNjA3N2gya29tMWwwdzdlcWYifQ.IvhJBkurzFi2keVZjYHt7Q';

    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [ 73.8786 ,18.5246], // Longitude, Latitude (Mumbai example)
      zoom: 10
    });

    // Marker + Popup
    new mapboxgl.Marker({ color: "red" })
      .setLngLat([ 73.8786,18.5246])
      .setPopup(new mapboxgl.Popup().setHTML("<h4>My Office</h4><p>Mumbai, India</p>"))
      .addTo(map);
