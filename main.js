ractive = new Ractive({
  el: 'demo',
  template: '#demo-template',
  data: {
    incounter: 0,
    outcounter: 0,
    total: 0,
    format: function ( num ) {
      if (! num > 0) { return ""; }
      return (num * 100).toFixed(2);
    }
  }
});

ractive.on( 'increment', function ( event, counter ) {
  this.add( counter, 1 );
  var i = ractive.get('incounter');
  var o = ractive.get('outcounter');
  var total = i+o;
  ractive.set( 'total', total);
  ractive.set( 'accuracy', i / total);
});
