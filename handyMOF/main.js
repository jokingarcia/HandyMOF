//Para pintar el código bonito usamos CodeMirror
/*var tracesJokin=[{"line":15,"column":10,"linecode":1,"startColumn":1,"endColumn":27},{"line":17,"column":9,"linecode":3,"startColumn":1,"endColumn":45},{"line":18,"column":10,"linecode":4,"startColumn":1,"endColumn":44},{"line":19,"column":10,"linecode":5,"startColumn":1,"endColumn":58},{"line":20,"column":10,"linecode":6,"startColumn":1,"endColumn":61},{"line":21,"column":10,"linecode":7,"startColumn":1,"endColumn":46},{"line":22,"column":10,"linecode":8,"startColumn":1,"endColumn":49},{"line":23,"column":10,"linecode":9,"startColumn":1,"endColumn":56},{"line":24,"column":10,"linecode":10,"startColumn":1,"endColumn":47},{"line":26,"column":10,"linecode":12,"startColumn":1,"endColumn":3},{"line":27,"column":10,"linecode":13,"startColumn":1,"endColumn":57},{"line":28,"column":10,"linecode":14,"startColumn":1,"endColumn":2},{"line":29,"column":10,"linecode":15,"startColumn":1,"endColumn":54},{"line":31,"column":10,"linecode":17,"startColumn":1,"endColumn":28},{"line":32,"column":10,"linecode":18,"startColumn":1,"endColumn":31},{"line":33,"column":12,"linecode":19,"startColumn":1,"endColumn":32},{"line":34,"column":13,"linecode":20,"startColumn":1,"endColumn":27},{"line":35,"column":13,"linecode":21,"startColumn":1,"endColumn":38},{"line":36,"column":13,"linecode":22,"startColumn":1,"endColumn":41},{"line":37,"column":15,"linecode":23,"startColumn":1,"endColumn":57},{"line":38,"column":13,"linecode":24,"startColumn":1,"endColumn":22},{"line":39,"column":13,"linecode":25,"startColumn":1,"endColumn":21},{"line":42,"column":11,"linecode":27,"startColumn":1,"endColumn":14},{"line":54,"column":13,"linecode":28,"startColumn":1,"endColumn":12},{"line":54,"column":29,"linecode":28,"startColumn":13,"endColumn":13},{"line":54,"column":36,"linecode":28,"startColumn":14,"endColumn":34},{"line":54,"column":62,"linecode":28,"startColumn":35,"endColumn":42},{"line":54,"column":78,"linecode":28,"startColumn":43,"endColumn":43},{"line":54,"column":84,"linecode":28,"startColumn":44,"endColumn":52},{"line":54,"column":101,"linecode":28,"startColumn":53,"endColumn":54},{"line":55,"column":13,"linecode":29,"startColumn":1,"endColumn":27},{"line":55,"column":45,"linecode":29,"startColumn":28,"endColumn":28},{"line":55,"column":53,"linecode":29,"startColumn":29,"endColumn":59},{"line":56,"column":12,"linecode":30,"startColumn":1,"endColumn":13},{"line":56,"column":30,"linecode":30,"startColumn":14,"endColumn":14},{"line":56,"column":38,"linecode":30,"startColumn":15,"endColumn":25},{"line":56,"column":55,"linecode":30,"startColumn":26,"endColumn":29},{"line":56,"column":67,"linecode":30,"startColumn":30,"endColumn":31},{"line":56,"column":74,"linecode":30,"startColumn":32,"endColumn":44},{"line":61,"column":12,"linecode":31,"startColumn":1,"endColumn":13},{"line":61,"column":30,"linecode":31,"startColumn":14,"endColumn":14},{"line":61,"column":38,"linecode":31,"startColumn":15,"endColumn":23},{"line":61,"column":62,"linecode":31,"startColumn":34,"endColumn":34},{"line":61,"column":70,"linecode":31,"startColumn":35,"endColumn":49},{"line":61,"column":90,"linecode":31,"startColumn":50,"endColumn":50},{"line":61,"column":98,"linecode":31,"startColumn":51,"endColumn":52},{"line":62,"column":12,"linecode":32,"startColumn":1,"endColumn":9},{"line":62,"column":26,"linecode":32,"startColumn":10,"endColumn":10},{"line":62,"column":34,"linecode":32,"startColumn":11,"endColumn":27},{"line":62,"column":54,"linecode":32,"startColumn":28,"endColumn":35},{"line":62,"column":69,"linecode":32,"startColumn":36,"endColumn":36},{"line":62,"column":73,"linecode":32,"startColumn":37,"endColumn":45},{"line":62,"column":88,"linecode":32,"startColumn":46,"endColumn":47},{"line":63,"column":13,"linecode":33,"startColumn":1,"endColumn":9},{"line":63,"column":27,"linecode":33,"startColumn":10,"endColumn":10},{"line":63,"column":35,"linecode":33,"startColumn":11,"endColumn":27},{"line":63,"column":56,"linecode":33,"startColumn":28,"endColumn":35},{"line":63,"column":71,"linecode":33,"startColumn":36,"endColumn":36},{"line":63,"column":75,"linecode":33,"startColumn":37,"endColumn":45},{"line":63,"column":91,"linecode":33,"startColumn":46,"endColumn":47},{"line":69,"column":12,"linecode":34,"startColumn":1,"endColumn":21},{"line":69,"column":38,"linecode":34,"startColumn":22,"endColumn":22},{"line":69,"column":46,"linecode":34,"startColumn":23,"endColumn":24},{"line":54,"column":13,"linecode":35,"startColumn":1,"endColumn":12},{"line":54,"column":29,"linecode":35,"startColumn":13,"endColumn":13},{"line":54,"column":36,"linecode":35,"startColumn":14,"endColumn":34},{"line":54,"column":62,"linecode":35,"startColumn":35,"endColumn":43},{"line":54,"column":78,"linecode":35,"startColumn":44,"endColumn":44},{"line":54,"column":84,"linecode":35,"startColumn":45,"endColumn":53},{"line":54,"column":101,"linecode":35,"startColumn":54,"endColumn":55},{"line":55,"column":13,"linecode":36,"startColumn":1,"endColumn":27},{"line":55,"column":45,"linecode":36,"startColumn":28,"endColumn":28},{"line":55,"column":53,"linecode":36,"startColumn":29,"endColumn":59},{"line":56,"column":12,"linecode":37,"startColumn":1,"endColumn":13},{"line":56,"column":30,"linecode":37,"startColumn":14,"endColumn":14},{"line":56,"column":38,"linecode":37,"startColumn":15,"endColumn":25},{"line":56,"column":55,"linecode":37,"startColumn":26,"endColumn":41},{"line":56,"column":67,"linecode":37,"startColumn":42,"endColumn":43},{"line":56,"column":74,"linecode":37,"startColumn":43,"endColumn":51},{"line":61,"column":12,"linecode":38,"startColumn":1,"endColumn":13},{"line":61,"column":30,"linecode":38,"startColumn":14,"endColumn":14},{"line":61,"column":38,"linecode":38,"startColumn":15,"endColumn":33},{"line":61,"column":62,"linecode":38,"startColumn":34,"endColumn":34},{"line":61,"column":70,"linecode":38,"startColumn":35,"endColumn":49},{"line":61,"column":90,"linecode":38,"startColumn":50,"endColumn":50},{"line":61,"column":98,"linecode":38,"startColumn":51,"endColumn":52},{"line":62,"column":12,"linecode":39,"startColumn":1,"endColumn":9},{"line":62,"column":26,"linecode":39,"startColumn":10,"endColumn":10},{"line":62,"column":34,"linecode":39,"startColumn":11,"endColumn":27},{"line":62,"column":54,"linecode":39,"startColumn":28,"endColumn":36},{"line":62,"column":69,"linecode":39,"startColumn":37,"endColumn":37},{"line":62,"column":73,"linecode":39,"startColumn":38,"endColumn":46},{"line":62,"column":88,"linecode":39,"startColumn":47,"endColumn":48},{"line":63,"column":13,"linecode":40,"startColumn":1,"endColumn":9},{"line":63,"column":27,"linecode":40,"startColumn":10,"endColumn":10},{"line":63,"column":35,"linecode":40,"startColumn":11,"endColumn":27},{"line":63,"column":56,"linecode":40,"startColumn":28,"endColumn":36},{"line":63,"column":71,"linecode":40,"startColumn":37,"endColumn":37},{"line":63,"column":75,"linecode":40,"startColumn":38,"endColumn":46},{"line":63,"column":91,"linecode":40,"startColumn":47,"endColumn":48},{"line":69,"column":12,"linecode":41,"startColumn":1,"endColumn":21},{"line":69,"column":38,"linecode":41,"startColumn":22,"endColumn":22},{"line":69,"column":46,"linecode":41,"startColumn":23,"endColumn":24},{"line":54,"column":13,"linecode":42,"startColumn":1,"endColumn":12},{"line":54,"column":29,"linecode":42,"startColumn":13,"endColumn":13},{"line":54,"column":36,"linecode":42,"startColumn":14,"endColumn":34},{"line":54,"column":62,"linecode":42,"startColumn":35,"endColumn":41},{"line":54,"column":78,"linecode":42,"startColumn":42,"endColumn":42},{"line":54,"column":84,"linecode":42,"startColumn":43,"endColumn":51},{"line":54,"column":101,"linecode":42,"startColumn":52,"endColumn":53},{"line":55,"column":13,"linecode":43,"startColumn":1,"endColumn":27},{"line":55,"column":45,"linecode":43,"startColumn":28,"endColumn":28},{"line":55,"column":53,"linecode":43,"startColumn":29,"endColumn":59},{"line":56,"column":12,"linecode":44,"startColumn":1,"endColumn":13},{"line":56,"column":30,"linecode":44,"startColumn":14,"endColumn":14},{"line":56,"column":38,"linecode":44,"startColumn":15,"endColumn":25},{"line":56,"column":55,"linecode":44,"startColumn":26,"endColumn":39},{"line":56,"column":67,"linecode":44,"startColumn":40,"endColumn":41},{"line":56,"column":74,"linecode":44,"startColumn":42,"endColumn":52},{"line":58,"column":12,"linecode":44,"startColumn":52,"endColumn":53},{"line":58,"column":19,"linecode":44,"startColumn":54,"endColumn":58},{"line":61,"column":12,"linecode":45,"startColumn":1,"endColumn":13},{"line":61,"column":30,"linecode":45,"startColumn":14,"endColumn":14},{"line":61,"column":38,"linecode":45,"startColumn":15,"endColumn":33},{"line":61,"column":62,"linecode":45,"startColumn":34,"endColumn":34},{"line":61,"column":70,"linecode":45,"startColumn":35,"endColumn":49},{"line":61,"column":90,"linecode":45,"startColumn":50,"endColumn":50},{"line":61,"column":98,"linecode":45,"startColumn":51,"endColumn":52},{"line":62,"column":12,"linecode":46,"startColumn":1,"endColumn":9},{"line":62,"column":26,"linecode":46,"startColumn":10,"endColumn":10},{"line":62,"column":34,"linecode":46,"startColumn":11,"endColumn":27},{"line":62,"column":54,"linecode":46,"startColumn":28,"endColumn":34},{"line":62,"column":69,"linecode":46,"startColumn":35,"endColumn":35},{"line":62,"column":73,"linecode":46,"startColumn":36,"endColumn":44},{"line":62,"column":88,"linecode":46,"startColumn":45,"endColumn":46},{"line":63,"column":13,"linecode":47,"startColumn":1,"endColumn":9},{"line":63,"column":27,"linecode":47,"startColumn":10,"endColumn":10},{"line":63,"column":35,"linecode":47,"startColumn":11,"endColumn":27},{"line":63,"column":56,"linecode":47,"startColumn":28,"endColumn":34},{"line":63,"column":71,"linecode":47,"startColumn":35,"endColumn":35},{"line":63,"column":75,"linecode":47,"startColumn":36,"endColumn":44},{"line":63,"column":91,"linecode":47,"startColumn":45,"endColumn":46},{"line":69,"column":12,"linecode":48,"startColumn":1,"endColumn":21},{"line":69,"column":38,"linecode":48,"startColumn":22,"endColumn":22},{"line":69,"column":46,"linecode":48,"startColumn":23,"endColumn":24},{"line":46,"column":13,"linecode":49,"startColumn":1,"endColumn":39},{"line":47,"column":12,"linecode":50,"startColumn":1,"endColumn":2}];*/
//var traces=[{"line":15,"column":10,"linecode":1,"startColumn":1,"endColumn":27},{"line":17,"column":9,"linecode":3,"startColumn":1,"endColumn":45},{"line":18,"column":10,"linecode":4,"startColumn":1,"endColumn":44},{"line":19,"column":10,"linecode":5,"startColumn":1,"endColumn":58},{"line":20,"column":10,"linecode":6,"startColumn":1,"endColumn":61},{"line":21,"column":10,"linecode":7,"startColumn":1,"endColumn":46},{"line":22,"column":10,"linecode":8,"startColumn":1,"endColumn":49},{"line":23,"column":10,"linecode":9,"startColumn":1,"endColumn":56},{"line":24,"column":10,"linecode":10,"startColumn":1,"endColumn":47},{"line":26,"column":10,"linecode":12,"startColumn":1,"endColumn":3},{"line":27,"column":10,"linecode":13,"startColumn":1,"endColumn":57},{"line":28,"column":10,"linecode":14,"startColumn":1,"endColumn":2},{"line":29,"column":10,"linecode":15,"startColumn":1,"endColumn":54},{"line":31,"column":10,"linecode":17,"startColumn":1,"endColumn":28},{"line":32,"column":10,"linecode":18,"startColumn":1,"endColumn":31},{"line":33,"column":12,"linecode":19,"startColumn":1,"endColumn":32},{"line":34,"column":13,"linecode":20,"startColumn":1,"endColumn":27},{"line":35,"column":13,"linecode":21,"startColumn":1,"endColumn":38},{"line":36,"column":13,"linecode":22,"startColumn":1,"endColumn":41},{"line":37,"column":15,"linecode":23,"startColumn":1,"endColumn":57},{"line":38,"column":13,"linecode":24,"startColumn":1,"endColumn":22},{"line":39,"column":13,"linecode":25,"startColumn":1,"endColumn":21},{"line":42,"column":11,"linecode":27,"startColumn":1,"endColumn":14},{"line":54,"column":13,"linecode":28,"startColumn":1,"endColumn":12},{"line":54,"column":29,"linecode":28,"startColumn":13,"endColumn":13},{"line":54,"column":36,"linecode":28,"startColumn":14,"endColumn":34},{"line":54,"column":62,"linecode":28,"startColumn":35,"endColumn":42},{"line":54,"column":78,"linecode":28,"startColumn":43,"endColumn":43},{"line":54,"column":84,"linecode":28,"startColumn":44,"endColumn":52},{"line":54,"column":101,"linecode":28,"startColumn":53,"endColumn":54},{"line":55,"column":13,"linecode":29,"startColumn":1,"endColumn":27},{"line":55,"column":45,"linecode":29,"startColumn":28,"endColumn":28},{"line":55,"column":53,"linecode":29,"startColumn":29,"endColumn":59},{"line":56,"column":12,"linecode":30,"startColumn":1,"endColumn":13},{"line":56,"column":30,"linecode":30,"startColumn":14,"endColumn":14},{"line":56,"column":38,"linecode":30,"startColumn":15,"endColumn":25},{"line":56,"column":55,"linecode":30,"startColumn":26,"endColumn":29},{"line":56,"column":67,"linecode":30,"startColumn":30,"endColumn":31},{"line":56,"column":74,"linecode":30,"startColumn":32,"endColumn":44},{"line":61,"column":12,"linecode":31,"startColumn":1,"endColumn":13},{"line":61,"column":30,"linecode":31,"startColumn":14,"endColumn":14},{"line":61,"column":38,"linecode":31,"startColumn":15,"endColumn":33},{"line":61,"column":62,"linecode":31,"startColumn":34,"endColumn":34},{"line":61,"column":70,"linecode":31,"startColumn":35,"endColumn":49},{"line":61,"column":90,"linecode":31,"startColumn":50,"endColumn":50},{"line":61,"column":98,"linecode":31,"startColumn":51,"endColumn":52},{"line":62,"column":12,"linecode":32,"startColumn":1,"endColumn":9},{"line":62,"column":26,"linecode":32,"startColumn":10,"endColumn":10},{"line":62,"column":34,"linecode":32,"startColumn":11,"endColumn":27},{"line":62,"column":54,"linecode":32,"startColumn":28,"endColumn":35},{"line":62,"column":69,"linecode":32,"startColumn":36,"endColumn":36},{"line":62,"column":73,"linecode":32,"startColumn":37,"endColumn":45},{"line":62,"column":88,"linecode":32,"startColumn":46,"endColumn":47},{"line":63,"column":13,"linecode":33,"startColumn":1,"endColumn":9},{"line":63,"column":27,"linecode":33,"startColumn":10,"endColumn":10},{"line":63,"column":35,"linecode":33,"startColumn":11,"endColumn":27},{"line":63,"column":56,"linecode":33,"startColumn":28,"endColumn":35},{"line":63,"column":71,"linecode":33,"startColumn":36,"endColumn":36},{"line":63,"column":75,"linecode":33,"startColumn":37,"endColumn":45},{"line":63,"column":91,"linecode":33,"startColumn":46,"endColumn":47},{"line":69,"column":12,"linecode":34,"startColumn":1,"endColumn":21},{"line":69,"column":38,"linecode":34,"startColumn":22,"endColumn":22},{"line":69,"column":46,"linecode":34,"startColumn":23,"endColumn":24},{"line":54,"column":13,"linecode":35,"startColumn":1,"endColumn":12},{"line":54,"column":29,"linecode":35,"startColumn":13,"endColumn":13},{"line":54,"column":36,"linecode":35,"startColumn":14,"endColumn":34},{"line":54,"column":62,"linecode":35,"startColumn":35,"endColumn":43},{"line":54,"column":78,"linecode":35,"startColumn":44,"endColumn":44},{"line":54,"column":84,"linecode":35,"startColumn":45,"endColumn":53},{"line":54,"column":101,"linecode":35,"startColumn":54,"endColumn":55},{"line":55,"column":13,"linecode":36,"startColumn":1,"endColumn":27},{"line":55,"column":45,"linecode":36,"startColumn":28,"endColumn":28},{"line":55,"column":53,"linecode":36,"startColumn":29,"endColumn":59},{"line":56,"column":12,"linecode":37,"startColumn":1,"endColumn":13},{"line":56,"column":30,"linecode":37,"startColumn":14,"endColumn":14},{"line":56,"column":38,"linecode":37,"startColumn":15,"endColumn":25},{"line":56,"column":55,"linecode":37,"startColumn":26,"endColumn":41},{"line":56,"column":67,"linecode":37,"startColumn":42,"endColumn":43},{"line":56,"column":74,"linecode":37,"startColumn":43,"endColumn":51},{"line":61,"column":12,"linecode":38,"startColumn":1,"endColumn":13},{"line":61,"column":30,"linecode":38,"startColumn":14,"endColumn":14},{"line":61,"column":38,"linecode":38,"startColumn":15,"endColumn":33},{"line":61,"column":62,"linecode":38,"startColumn":34,"endColumn":34},{"line":61,"column":70,"linecode":38,"startColumn":35,"endColumn":49},{"line":61,"column":90,"linecode":38,"startColumn":50,"endColumn":50},{"line":61,"column":98,"linecode":38,"startColumn":51,"endColumn":52},{"line":62,"column":12,"linecode":39,"startColumn":1,"endColumn":9},{"line":62,"column":26,"linecode":39,"startColumn":10,"endColumn":10},{"line":62,"column":34,"linecode":39,"startColumn":11,"endColumn":27},{"line":62,"column":54,"linecode":39,"startColumn":28,"endColumn":36},{"line":62,"column":69,"linecode":39,"startColumn":37,"endColumn":37},{"line":62,"column":73,"linecode":39,"startColumn":38,"endColumn":46},{"line":62,"column":88,"linecode":39,"startColumn":47,"endColumn":48},{"line":63,"column":13,"linecode":40,"startColumn":1,"endColumn":9},{"line":63,"column":27,"linecode":40,"startColumn":10,"endColumn":10},{"line":63,"column":35,"linecode":40,"startColumn":11,"endColumn":27},{"line":63,"column":56,"linecode":40,"startColumn":28,"endColumn":36},{"line":63,"column":71,"linecode":40,"startColumn":37,"endColumn":37},{"line":63,"column":75,"linecode":40,"startColumn":38,"endColumn":46},{"line":63,"column":91,"linecode":40,"startColumn":47,"endColumn":48},{"line":69,"column":12,"linecode":41,"startColumn":1,"endColumn":21},{"line":69,"column":38,"linecode":41,"startColumn":22,"endColumn":22},{"line":69,"column":46,"linecode":41,"startColumn":23,"endColumn":24},{"line":54,"column":13,"linecode":42,"startColumn":1,"endColumn":12},{"line":54,"column":29,"linecode":42,"startColumn":13,"endColumn":13},{"line":54,"column":36,"linecode":42,"startColumn":14,"endColumn":34},{"line":54,"column":62,"linecode":42,"startColumn":35,"endColumn":41},{"line":54,"column":78,"linecode":42,"startColumn":42,"endColumn":42},{"line":54,"column":84,"linecode":42,"startColumn":43,"endColumn":51},{"line":54,"column":101,"linecode":42,"startColumn":52,"endColumn":53},{"line":55,"column":13,"linecode":43,"startColumn":1,"endColumn":27},{"line":55,"column":45,"linecode":43,"startColumn":28,"endColumn":28},{"line":55,"column":53,"linecode":43,"startColumn":29,"endColumn":59},{"line":56,"column":12,"linecode":44,"startColumn":1,"endColumn":13},{"line":56,"column":30,"linecode":44,"startColumn":14,"endColumn":14},{"line":56,"column":38,"linecode":44,"startColumn":15,"endColumn":25},{"line":56,"column":55,"linecode":44,"startColumn":26,"endColumn":39},{"line":56,"column":67,"linecode":44,"startColumn":40,"endColumn":41},{"line":56,"column":74,"linecode":44,"startColumn":42,"endColumn":51},{"line":58,"column":12,"linecode":44,"startColumn":52,"endColumn":53},{"line":58,"column":19,"linecode":44,"startColumn":54,"endColumn":69},{"line":61,"column":12,"linecode":45,"startColumn":1,"endColumn":13},{"line":61,"column":30,"linecode":45,"startColumn":14,"endColumn":14},{"line":61,"column":38,"linecode":45,"startColumn":15,"endColumn":33},{"line":61,"column":62,"linecode":45,"startColumn":34,"endColumn":34},{"line":61,"column":70,"linecode":45,"startColumn":35,"endColumn":49},{"line":61,"column":90,"linecode":45,"startColumn":50,"endColumn":50},{"line":61,"column":98,"linecode":45,"startColumn":51,"endColumn":52},{"line":62,"column":12,"linecode":46,"startColumn":1,"endColumn":9},{"line":62,"column":26,"linecode":46,"startColumn":10,"endColumn":10},{"line":62,"column":34,"linecode":46,"startColumn":11,"endColumn":27},{"line":62,"column":54,"linecode":46,"startColumn":28,"endColumn":34},{"line":62,"column":69,"linecode":46,"startColumn":35,"endColumn":35},{"line":62,"column":73,"linecode":46,"startColumn":36,"endColumn":44},{"line":62,"column":88,"linecode":46,"startColumn":45,"endColumn":46},{"line":63,"column":13,"linecode":47,"startColumn":1,"endColumn":9},{"line":63,"column":27,"linecode":47,"startColumn":10,"endColumn":10},{"line":63,"column":35,"linecode":47,"startColumn":11,"endColumn":27},{"line":63,"column":56,"linecode":47,"startColumn":28,"endColumn":34},{"line":63,"column":71,"linecode":47,"startColumn":35,"endColumn":35},{"line":63,"column":75,"linecode":47,"startColumn":36,"endColumn":44},{"line":63,"column":91,"linecode":47,"startColumn":45,"endColumn":46},{"line":69,"column":12,"linecode":48,"startColumn":1,"endColumn":21},{"line":69,"column":38,"linecode":48,"startColumn":22,"endColumn":22},{"line":69,"column":46,"linecode":48,"startColumn":23,"endColumn":24},{"line":46,"column":13,"linecode":49,"startColumn":1,"endColumn":39},{"line":47,"column":12,"linecode":50,"startColumn":1,"endColumn":2}];
/*var tracesJokin2=[{"line":15,"column":10,"linecode":1,"startColumn":1,"endColumn":27},{"line":17,"column":9,"linecode":3,"startColumn":1,"endColumn":45},{"line":18,"column":10,"linecode":4,"startColumn":1,"endColumn":44},{"line":19,"column":10,"linecode":5,"startColumn":1,"endColumn":58},{"line":20,"column":10,"linecode":6,"startColumn":1,"endColumn":61},{"line":21,"column":10,"linecode":7,"startColumn":1,"endColumn":46},{"line":22,"column":10,"linecode":8,"startColumn":1,"endColumn":49},{"line":23,"column":10,"linecode":9,"startColumn":1,"endColumn":56},{"line":24,"column":10,"linecode":10,"startColumn":1,"endColumn":47},{"line":26,"column":10,"linecode":12,"startColumn":1,"endColumn":3},{"line":27,"column":10,"linecode":13,"startColumn":1,"endColumn":57},{"line":28,"column":10,"linecode":14,"startColumn":1,"endColumn":2},{"line":29,"column":10,"linecode":15,"startColumn":1,"endColumn":54},{"line":31,"column":10,"linecode":17,"startColumn":1,"endColumn":28},{"line":32,"column":10,"linecode":18,"startColumn":1,"endColumn":31},{"line":33,"column":12,"linecode":19,"startColumn":1,"endColumn":32},{"line":34,"column":13,"linecode":20,"startColumn":1,"endColumn":27},{"line":35,"column":13,"linecode":21,"startColumn":1,"endColumn":38},{"line":36,"column":13,"linecode":22,"startColumn":1,"endColumn":41},{"line":37,"column":15,"linecode":23,"startColumn":1,"endColumn":57},{"line":38,"column":13,"linecode":24,"startColumn":1,"endColumn":22},{"line":39,"column":13,"linecode":25,"startColumn":1,"endColumn":21},{"line":42,"column":11,"linecode":27,"startColumn":1,"endColumn":14},{"line":54,"column":13,"linecode":28,"startColumn":1,"endColumn":12},{"line":54,"column":29,"linecode":28,"startColumn":13,"endColumn":13},{"line":54,"column":36,"linecode":28,"startColumn":14,"endColumn":34},{"line":54,"column":62,"linecode":28,"startColumn":35,"endColumn":42},{"line":54,"column":78,"linecode":28,"startColumn":43,"endColumn":43},{"line":54,"column":84,"linecode":28,"startColumn":44,"endColumn":52},{"line":54,"column":101,"linecode":28,"startColumn":53,"endColumn":54},{"line":55,"column":13,"linecode":29,"startColumn":1,"endColumn":27},{"line":55,"column":45,"linecode":29,"startColumn":28,"endColumn":28},{"line":55,"column":53,"linecode":29,"startColumn":29,"endColumn":59},{"line":56,"column":12,"linecode":30,"startColumn":1,"endColumn":13},{"line":56,"column":30,"linecode":30,"startColumn":14,"endColumn":14},{"line":56,"column":38,"linecode":30,"startColumn":15,"endColumn":25},{"line":56,"column":55,"linecode":30,"startColumn":26,"endColumn":29},{"line":56,"column":67,"linecode":30,"startColumn":30,"endColumn":31},{"line":56,"column":74,"linecode":30,"startColumn":32,"endColumn":44},{"line":61,"column":12,"linecode":31,"startColumn":1,"endColumn":13},{"line":61,"column":30,"linecode":31,"startColumn":14,"endColumn":14},{"line":61,"column":38,"linecode":31,"startColumn":15,"endColumn":23},{"line":61,"column":62,"linecode":31,"startColumn":34,"endColumn":34},{"line":61,"column":70,"linecode":31,"startColumn":35,"endColumn":49},{"line":61,"column":90,"linecode":31,"startColumn":50,"endColumn":50},{"line":61,"column":98,"linecode":31,"startColumn":51,"endColumn":52},{"line":62,"column":12,"linecode":32,"startColumn":1,"endColumn":9},{"line":62,"column":26,"linecode":32,"startColumn":10,"endColumn":10},{"line":62,"column":34,"linecode":32,"startColumn":11,"endColumn":27},{"line":62,"column":54,"linecode":32,"startColumn":28,"endColumn":35},{"line":62,"column":69,"linecode":32,"startColumn":36,"endColumn":36},{"line":62,"column":73,"linecode":32,"startColumn":37,"endColumn":45},{"line":62,"column":88,"linecode":32,"startColumn":46,"endColumn":47},{"line":63,"column":13,"linecode":33,"startColumn":1,"endColumn":9},{"line":63,"column":27,"linecode":33,"startColumn":10,"endColumn":10},{"line":63,"column":35,"linecode":33,"startColumn":11,"endColumn":27},{"line":63,"column":56,"linecode":33,"startColumn":28,"endColumn":35},{"line":63,"column":71,"linecode":33,"startColumn":36,"endColumn":36},{"line":63,"column":75,"linecode":33,"startColumn":37,"endColumn":45},{"line":63,"column":91,"linecode":33,"startColumn":46,"endColumn":47},{"line":65,"column":14,"linecode":34,"startColumn":1,"endColumn":20},{"line":65,"column":36,"linecode":34,"startColumn":21,"endColumn":21},{"line":65,"column":42,"linecode":34,"startColumn":22,"endColumn":45},{"line":65,"column":70,"linecode":34,"startColumn":46,"endColumn":46},{"line":65,"column":76,"linecode":34,"startColumn":47,"endColumn":50},{"line":65,"column":83,"linecode":34,"startColumn":51,"endColumn":51},{"line":65,"column":89,"linecode":34,"startColumn":52,"endColumn":53},{"line":66,"column":14,"linecode":35,"startColumn":1,"endColumn":16},{"line":66,"column":33,"linecode":35,"startColumn":17,"endColumn":17},{"line":66,"column":39,"linecode":35,"startColumn":18,"endColumn":39},{"line":66,"column":67,"linecode":35,"startColumn":40,"endColumn":99},{"line":66,"column":72,"linecode":35,"startColumn":100,"endColumn":108},{"line":66,"column":85,"linecode":35,"startColumn":109,"endColumn":109},{"line":66,"column":91,"linecode":35,"startColumn":110,"endColumn":111},{"line":67,"column":14,"linecode":36,"startColumn":1,"endColumn":2},{"line":67,"column":19,"linecode":36,"startColumn":3,"endColumn":3},{"line":67,"column":25,"linecode":36,"startColumn":4,"endColumn":20},{"line":68,"column":14,"linecode":37,"startColumn":1,"endColumn":17},{"line":68,"column":36,"linecode":37,"startColumn":18,"endColumn":18},{"line":68,"column":44,"linecode":37,"startColumn":19,"endColumn":20},{"line":70,"column":12,"linecode":38,"startColumn":1,"endColumn":21},{"line":70,"column":38,"linecode":38,"startColumn":22,"endColumn":22},{"line":70,"column":46,"linecode":38,"startColumn":23,"endColumn":24},{"line":54,"column":13,"linecode":39,"startColumn":1,"endColumn":12},{"line":54,"column":29,"linecode":39,"startColumn":13,"endColumn":13},{"line":54,"column":36,"linecode":39,"startColumn":14,"endColumn":34},{"line":54,"column":62,"linecode":39,"startColumn":35,"endColumn":43},{"line":54,"column":78,"linecode":39,"startColumn":44,"endColumn":44},{"line":54,"column":84,"linecode":39,"startColumn":45,"endColumn":53},{"line":54,"column":101,"linecode":39,"startColumn":54,"endColumn":55},{"line":55,"column":13,"linecode":40,"startColumn":1,"endColumn":27},{"line":55,"column":45,"linecode":40,"startColumn":28,"endColumn":28},{"line":55,"column":53,"linecode":40,"startColumn":29,"endColumn":59},{"line":56,"column":12,"linecode":41,"startColumn":1,"endColumn":13},{"line":56,"column":30,"linecode":41,"startColumn":14,"endColumn":14},{"line":56,"column":38,"linecode":41,"startColumn":15,"endColumn":25},{"line":56,"column":55,"linecode":41,"startColumn":26,"endColumn":41},{"line":56,"column":67,"linecode":41,"startColumn":42,"endColumn":43},{"line":56,"column":74,"linecode":41,"startColumn":44,"endColumn":49},{"line":61,"column":12,"linecode":42,"startColumn":1,"endColumn":13},{"line":61,"column":30,"linecode":42,"startColumn":14,"endColumn":14},{"line":61,"column":38,"linecode":42,"startColumn":15,"endColumn":33},{"line":61,"column":62,"linecode":42,"startColumn":34,"endColumn":34},{"line":61,"column":70,"linecode":42,"startColumn":35,"endColumn":49},{"line":61,"column":90,"linecode":42,"startColumn":50,"endColumn":50},{"line":61,"column":98,"linecode":42,"startColumn":51,"endColumn":52},{"line":62,"column":12,"linecode":43,"startColumn":1,"endColumn":9},{"line":62,"column":26,"linecode":43,"startColumn":10,"endColumn":10},{"line":62,"column":34,"linecode":43,"startColumn":11,"endColumn":27},{"line":62,"column":54,"linecode":43,"startColumn":28,"endColumn":36},{"line":62,"column":69,"linecode":43,"startColumn":37,"endColumn":37},{"line":62,"column":73,"linecode":43,"startColumn":38,"endColumn":46},{"line":62,"column":88,"linecode":43,"startColumn":47,"endColumn":48},{"line":63,"column":13,"linecode":44,"startColumn":1,"endColumn":9},{"line":63,"column":27,"linecode":44,"startColumn":10,"endColumn":10},{"line":63,"column":35,"linecode":44,"startColumn":11,"endColumn":27},{"line":63,"column":56,"linecode":44,"startColumn":28,"endColumn":36},{"line":63,"column":71,"linecode":44,"startColumn":37,"endColumn":37},{"line":63,"column":75,"linecode":44,"startColumn":38,"endColumn":46},{"line":63,"column":91,"linecode":44,"startColumn":47,"endColumn":48},{"line":70,"column":12,"linecode":45,"startColumn":1,"endColumn":21},{"line":70,"column":38,"linecode":45,"startColumn":22,"endColumn":22},{"line":70,"column":46,"linecode":45,"startColumn":23,"endColumn":24},{"line":46,"column":13,"linecode":46,"startColumn":1,"endColumn":39},{"line":47,"column":13,"linecode":47,"startColumn":1,"endColumn":2},{"line":48,"column":13,"linecode":48,"startColumn":1,"endColumn":1}];*/
//var traces2=[{"line":15,"column":10,"linecode":1,"startColumn":1,"endColumn":27},{"line":17,"column":9,"linecode":3,"startColumn":1,"endColumn":45},{"line":18,"column":10,"linecode":4,"startColumn":1,"endColumn":44},{"line":19,"column":10,"linecode":5,"startColumn":1,"endColumn":58},{"line":20,"column":10,"linecode":6,"startColumn":1,"endColumn":61},{"line":21,"column":10,"linecode":7,"startColumn":1,"endColumn":46},{"line":22,"column":10,"linecode":8,"startColumn":1,"endColumn":49},{"line":23,"column":10,"linecode":9,"startColumn":1,"endColumn":56},{"line":24,"column":10,"linecode":10,"startColumn":1,"endColumn":47},{"line":26,"column":10,"linecode":12,"startColumn":1,"endColumn":3},{"line":27,"column":10,"linecode":13,"startColumn":1,"endColumn":57},{"line":28,"column":10,"linecode":14,"startColumn":1,"endColumn":2},{"line":29,"column":10,"linecode":15,"startColumn":1,"endColumn":54},{"line":31,"column":10,"linecode":17,"startColumn":1,"endColumn":28},{"line":32,"column":10,"linecode":18,"startColumn":1,"endColumn":31},{"line":33,"column":12,"linecode":19,"startColumn":1,"endColumn":32},{"line":34,"column":13,"linecode":20,"startColumn":1,"endColumn":27},{"line":35,"column":13,"linecode":21,"startColumn":1,"endColumn":38},{"line":36,"column":13,"linecode":22,"startColumn":1,"endColumn":41},{"line":37,"column":15,"linecode":23,"startColumn":1,"endColumn":57},{"line":38,"column":13,"linecode":24,"startColumn":1,"endColumn":22},{"line":39,"column":13,"linecode":25,"startColumn":1,"endColumn":21},{"line":42,"column":11,"linecode":27,"startColumn":1,"endColumn":14},{"line":54,"column":13,"linecode":28,"startColumn":1,"endColumn":12},{"line":54,"column":29,"linecode":28,"startColumn":13,"endColumn":13},{"line":54,"column":36,"linecode":28,"startColumn":14,"endColumn":34},{"line":54,"column":62,"linecode":28,"startColumn":35,"endColumn":42},{"line":54,"column":78,"linecode":28,"startColumn":43,"endColumn":43},{"line":54,"column":84,"linecode":28,"startColumn":44,"endColumn":52},{"line":54,"column":101,"linecode":28,"startColumn":53,"endColumn":54},{"line":55,"column":13,"linecode":29,"startColumn":1,"endColumn":27},{"line":55,"column":45,"linecode":29,"startColumn":28,"endColumn":28},{"line":55,"column":53,"linecode":29,"startColumn":29,"endColumn":59},{"line":56,"column":12,"linecode":30,"startColumn":1,"endColumn":13},{"line":56,"column":30,"linecode":30,"startColumn":14,"endColumn":14},{"line":56,"column":38,"linecode":30,"startColumn":15,"endColumn":25},{"line":56,"column":55,"linecode":30,"startColumn":26,"endColumn":29},{"line":56,"column":67,"linecode":30,"startColumn":30,"endColumn":31},{"line":56,"column":74,"linecode":30,"startColumn":32,"endColumn":44},{"line":61,"column":12,"linecode":31,"startColumn":1,"endColumn":13},{"line":61,"column":30,"linecode":31,"startColumn":14,"endColumn":14},{"line":61,"column":38,"linecode":31,"startColumn":15,"endColumn":33},{"line":61,"column":62,"linecode":31,"startColumn":34,"endColumn":34},{"line":61,"column":70,"linecode":31,"startColumn":35,"endColumn":49},{"line":61,"column":90,"linecode":31,"startColumn":50,"endColumn":50},{"line":61,"column":98,"linecode":31,"startColumn":51,"endColumn":52},{"line":62,"column":12,"linecode":32,"startColumn":1,"endColumn":9},{"line":62,"column":26,"linecode":32,"startColumn":10,"endColumn":10},{"line":62,"column":34,"linecode":32,"startColumn":11,"endColumn":27},{"line":62,"column":54,"linecode":32,"startColumn":28,"endColumn":35},{"line":62,"column":69,"linecode":32,"startColumn":36,"endColumn":36},{"line":62,"column":73,"linecode":32,"startColumn":37,"endColumn":45},{"line":62,"column":88,"linecode":32,"startColumn":46,"endColumn":47},{"line":63,"column":13,"linecode":33,"startColumn":1,"endColumn":9},{"line":63,"column":27,"linecode":33,"startColumn":10,"endColumn":10},{"line":63,"column":35,"linecode":33,"startColumn":11,"endColumn":27},{"line":63,"column":56,"linecode":33,"startColumn":28,"endColumn":35},{"line":63,"column":71,"linecode":33,"startColumn":36,"endColumn":36},{"line":63,"column":75,"linecode":33,"startColumn":37,"endColumn":45},{"line":63,"column":91,"linecode":33,"startColumn":46,"endColumn":47},{"line":65,"column":14,"linecode":34,"startColumn":1,"endColumn":20},{"line":65,"column":36,"linecode":34,"startColumn":21,"endColumn":21},{"line":65,"column":42,"linecode":34,"startColumn":22,"endColumn":45},{"line":65,"column":70,"linecode":34,"startColumn":46,"endColumn":46},{"line":65,"column":76,"linecode":34,"startColumn":47,"endColumn":50},{"line":65,"column":83,"linecode":34,"startColumn":51,"endColumn":51},{"line":65,"column":89,"linecode":34,"startColumn":52,"endColumn":53},{"line":66,"column":14,"linecode":35,"startColumn":1,"endColumn":16},{"line":66,"column":33,"linecode":35,"startColumn":17,"endColumn":17},{"line":66,"column":39,"linecode":35,"startColumn":18,"endColumn":39},{"line":66,"column":67,"linecode":35,"startColumn":40,"endColumn":99},{"line":66,"column":72,"linecode":35,"startColumn":100,"endColumn":108},{"line":66,"column":85,"linecode":35,"startColumn":109,"endColumn":109},{"line":66,"column":91,"linecode":35,"startColumn":110,"endColumn":111},{"line":67,"column":14,"linecode":36,"startColumn":1,"endColumn":2},{"line":67,"column":19,"linecode":36,"startColumn":3,"endColumn":3},{"line":67,"column":25,"linecode":36,"startColumn":4,"endColumn":20},{"line":68,"column":14,"linecode":37,"startColumn":1,"endColumn":17},{"line":68,"column":36,"linecode":37,"startColumn":18,"endColumn":18},{"line":68,"column":44,"linecode":37,"startColumn":19,"endColumn":20},{"line":70,"column":12,"linecode":38,"startColumn":1,"endColumn":21},{"line":70,"column":38,"linecode":38,"startColumn":22,"endColumn":22},{"line":70,"column":46,"linecode":38,"startColumn":23,"endColumn":24},{"line":54,"column":13,"linecode":39,"startColumn":1,"endColumn":12},{"line":54,"column":29,"linecode":39,"startColumn":13,"endColumn":13},{"line":54,"column":36,"linecode":39,"startColumn":14,"endColumn":34},{"line":54,"column":62,"linecode":39,"startColumn":35,"endColumn":43},{"line":54,"column":78,"linecode":39,"startColumn":44,"endColumn":44},{"line":54,"column":84,"linecode":39,"startColumn":45,"endColumn":53},{"line":54,"column":101,"linecode":39,"startColumn":54,"endColumn":55},{"line":55,"column":13,"linecode":40,"startColumn":1,"endColumn":27},{"line":55,"column":45,"linecode":40,"startColumn":28,"endColumn":28},{"line":55,"column":53,"linecode":40,"startColumn":29,"endColumn":59},{"line":56,"column":12,"linecode":41,"startColumn":1,"endColumn":13},{"line":56,"column":30,"linecode":41,"startColumn":14,"endColumn":14},{"line":56,"column":38,"linecode":41,"startColumn":15,"endColumn":25},{"line":56,"column":55,"linecode":41,"startColumn":26,"endColumn":41},{"line":56,"column":67,"linecode":41,"startColumn":42,"endColumn":43},{"line":56,"column":74,"linecode":41,"startColumn":44,"endColumn":49},{"line":61,"column":12,"linecode":42,"startColumn":1,"endColumn":13},{"line":61,"column":30,"linecode":42,"startColumn":14,"endColumn":14},{"line":61,"column":38,"linecode":42,"startColumn":15,"endColumn":33},{"line":61,"column":62,"linecode":42,"startColumn":34,"endColumn":34},{"line":61,"column":70,"linecode":42,"startColumn":35,"endColumn":49},{"line":61,"column":90,"linecode":42,"startColumn":50,"endColumn":50},{"line":61,"column":98,"linecode":42,"startColumn":51,"endColumn":52},{"line":62,"column":12,"linecode":43,"startColumn":1,"endColumn":9},{"line":62,"column":26,"linecode":43,"startColumn":10,"endColumn":10},{"line":62,"column":34,"linecode":43,"startColumn":11,"endColumn":27},{"line":62,"column":54,"linecode":43,"startColumn":28,"endColumn":36},{"line":62,"column":69,"linecode":43,"startColumn":37,"endColumn":37},{"line":62,"column":73,"linecode":43,"startColumn":38,"endColumn":46},{"line":62,"column":88,"linecode":43,"startColumn":47,"endColumn":48},{"line":63,"column":13,"linecode":44,"startColumn":1,"endColumn":9},{"line":63,"column":27,"linecode":44,"startColumn":10,"endColumn":10},{"line":63,"column":35,"linecode":44,"startColumn":11,"endColumn":27},{"line":63,"column":56,"linecode":44,"startColumn":28,"endColumn":36},{"line":63,"column":71,"linecode":44,"startColumn":37,"endColumn":37},{"line":63,"column":75,"linecode":44,"startColumn":38,"endColumn":46},{"line":63,"column":91,"linecode":44,"startColumn":47,"endColumn":48},{"line":70,"column":12,"linecode":45,"startColumn":1,"endColumn":21},{"line":70,"column":38,"linecode":45,"startColumn":22,"endColumn":22},{"line":70,"column":46,"linecode":45,"startColumn":23,"endColumn":24},{"line":46,"column":13,"linecode":46,"startColumn":1,"endColumn":39},{"line":47,"column":13,"linecode":47,"startColumn":1,"endColumn":2},{"line":48,"column":13,"linecode":48,"startColumn":1,"endColumn":1}];
//var traces3=[{"line":65,"column":10,"linecode":0,"startColumn":1,"endColumn":27},{"line":66,"column":9,"linecode":0,"startColumn":1,"endColumn":45},{"line":67,"column":10,"linecode":0,"startColumn":1,"endColumn":44}];

var example=1;

function words(str) {var obj = {}, words = str.split(" ");for (var i = 0; i < words.length; ++i) obj[words[i]] = true;return obj;}
CodeMirror.defineMIME("text/x-mofscript", {
  name: "clike",
  keywords: words("texttransformation in var property file main println"),
  atoms: words("String Integer"),
  hooks: {
    "@": function(stream) {
      stream.eatWhile(/[\w\$_]/);
      return "meta";
    }
  }
});

/*function fixTrace(arr){
	for(var i=0;i<arr.length;i++){
		var elem=arr[i];
		if(elem.startPos>elem.endPos){
			elem.endPos=elem.startPos;	
		}
		//if()
	}
}
fixTrace(traces);
var mapOrdered=traces.slice().sort(function(a,b){return a.startPos>b.startPos?1:-1;});
*/
var fileContent={mofscriptFile:null,mappingFile:null,javaFile:null};  
var mofscriptEditor;
var javaEditor;
var currentOverlay={left:null,right:null};
var currentMode=null;
var mofscriptFile="";

/*function findNextByOffset(set,index,startPos){
	var res=-1;
	for(var i=index;i<set.length&&res==-1;i++){
		var act=set[i];
		if(startPos<=act.startPos){
		 res=i;
		}
	}
	return res;
}*/
function capitaliseFirstLetter(string){return string.charAt(0).toUpperCase() + string.slice(1);}

function createButton(place,text,id){
	var nNode=$("<span>").addClass("map"+capitaliseFirstLetter(place)+"Button"+id);
	var nNodeIn=$("<span>").text(text);
	nNodeIn.css({"white-space":"pre","visibility":"hidden"});
	nNode.append(nNodeIn);
	return nNode;
}

function center(cm, line) { 
      var y = cm.charCoords({line: line, ch: 0}, "local").top; 
      var halfHeight = cm.getScrollerElement().offsetHeight / 2; 
      cm.scrollTo(null, y - halfHeight - 5); 
    } 

function markEditors(){
	/*var currentMap=null;var currentIndex=0;var startOffset=0;for(var i=0;i<javaEditor.lineCount()&&currentIndex>-1;i++){
		var line=javaEditor.getLine(i);
		var contInThisLine=true;
		var sOffset=startOffset;
		while(contInThisLine&&currentIndex>-1){
	 	    if(currentMap==null){
	 		   currentIndex=findNextByOffset(mapOrdered,currentIndex,sOffset);
			   if(currentIndex>-1){
	 		   	currentMap=mapOrdered[currentIndex];
		   	   }
	 	    }
		
			if(currentIndex>-1){
				var startDiff=currentMap.startPos-startOffset;

	 	 	   if(startDiff<(line.length+1)&&-1<startDiff){				   
				   		var end=Math.min(currentMap.endPos-startOffset,line.length-1);
	 	 			   	javaEditor.markText({line:i,ch:startDiff},{line:i,ch:end+1},{className:"mapRightMark"+currentIndex,title:"map"+currentIndex});
						var fNode=$(".mapRightMark"+currentIndex)[0];
						if(fNode){					
							var nNode=createButton("right",line.substr(startDiff,end-startDiff+1),currentIndex);
		 	 			   	javaEditor.addWidget({line:i,ch:startDiff},nNode[0],null,"over");
							nNode.css("left", fNode.offsetLeft+"px");		
						}
						
						if(end>line.length){
							contInThisLine=false;
						}else{
							currentMap=null;
		   	 	  		    currentIndex++; 	   	
							sOffset=startOffset+end;							
						}
	 	 	   }else{
				 contInThisLine=false;   	   	
	 	 	   }
	    		
			}
		}		
		
		startOffset=startOffset+line.length+2;
	}*/
	$("[class*=map]").remove();
    var addedToLine={};
	for(var i=0;i<traces.length;i++){
		var map=traces[i];
		var nLine=map.line-1;
		var line=mofscriptEditor.getLine(nLine);
		if (line == undefined){ //
			console.log("line undefined");
			line = "println(prueba)";
		}
		mofscriptEditor.scrollTo(line);
		var start=line.indexOf('(')+1;
		var end=line.lastIndexOf(')')-1;
	   	mofscriptEditor.markText({line:nLine,ch:start},{line:nLine,ch:end+1},{className:"mapLeftMark"+i});
		var fNode=$(".mapLeftMark"+i)[0];
		if(fNode){
			var nNode=addedToLine[nLine];
			if(nNode==null){	
				nNode=createButton("left",line.substr(start,end-start+1),i);
			   	mofscriptEditor.addWidget({line:nLine,ch:start},nNode[0],null,"over");
				nNode.css("left", fNode.offsetLeft+"px");	
				addedToLine[nLine]=nNode;
			}else{
				nNode.addClass("mapLeftButton"+i);
			}
		}

		var nLine2=map.linecode-1;
		var line2=javaEditor.getLine(nLine2);
		javaEditor.scrollTo(line);
		var start2=map.startColumn-1;
		var end2=map.endColumn-1;
	   	javaEditor.markText({line:nLine2,ch:start2},{line:nLine2,ch:end2+1},{className:"mapRightMark"+i,title:"map"+i});
		var fNode2=$(".mapRightMark"+i)[0];
		if(fNode2){	
			var nNode=createButton("right",line2.substr(start2,end2-start2+1),i);
		   	javaEditor.addWidget({line:nLine2,ch:start2},nNode[0],null,"over");
			nNode.css("left", fNode2.offsetLeft+"px");					
		}		
					
	}	


	$("[class*=mapLeftMark]").each(function(){
		var classes=[];
		$($(this).attr('class').split(' ')).each(function() { 
		        if (this.indexOf('mapLeft')==0) {
		            classes[classes.length] = "map"+this.substr('mapLeft'.length);
		        }    
		    });	
		$(this).attr("title",classes.join(" "));
	});
	
	$("[class*=mapLeftButton]").click(function(){
		$(".markHighlighted").removeClass("markHighlighted");
		$(".buttonSelected").removeClass("buttonSelected");
		var b=$(this);
		b.addClass("buttonSelected");
		var clss=b.attr("class").split(" ");
		var centered=false;
		for(var i=0;i<clss.length;i++){
			var cls=clss[i];
			if(cls.indexOf("mapLeftButton")==0){
				var id=cls.substr("mapLeftButton".length);
				$(".mapRightMark"+id).addClass("markHighlighted");	
				if(centered==false){
					centered=true;
					//console.log();
					center(javaEditor,traces[id].linecode-1);					
				}
			}
		}	
	});
	$("[class*=mapRightButton]").click(function(){
		$(".markHighlighted").removeClass("markHighlighted");
		$(".buttonSelected").removeClass("buttonSelected");
		var b=$(this);
		b.addClass("buttonSelected");
		var cls=b.attr("class").split(" ")[0];
		var id=cls.substr("mapRightButton".length);
		$(".mapLeftMark"+id).addClass("markHighlighted");
		center(mofscriptEditor,traces[id].line-1);		
	});	
	
	$('#modeLeft').click(function(){activateMode("left");});
	$('#modeRight').click(function(){activateMode("right");});
	
}

function activateMode(mode){
	if(currentMode!=null){
		if(mode==currentMode){
			return;
		}
	}
	var id=mode=="right"?"modeRight":"modeLeft";
	//Disable mode
	$(".markHighlighted").removeClass("markHighlighted");
	$(".buttonSelected").removeClass("buttonSelected");
	$("[class*=mapLeftButton],[class*=mapRightButton]").addClass("buttonHidden");
	
	//Enable mode
	var antimode=mode=="left"?"right":"left";
	$("[class*=map"+capitaliseFirstLetter(antimode)+"Button]").removeClass("buttonHidden");	
	
	$('[class*=ui-state-highligh]').each(function(){
		var but=$(this);
		var cls=but.attr("class");
		but.attr("class",cls.replace(" ui-state-highlight",""));
		'ui-state-highligh'
	});
	$('#'+id).addClass('ui-state-highlight');
	
	currentMode=mode;
}

/*
function readFile(ev){
	var input=ev.currentTarget;
	if(input.files.length>0){
	    file = input.files[0];
	    fr = new FileReader();
	    fr.onload = function(){
			fileContent[input.id]=fr.result;
			if(input.id=="mofscriptFile"){
				mofscriptEditor.setValue(fileContent["mofscriptFile"]);
			}else if(input.id=="javaFile"){
				javaEditor.setValue(fileContent["javaFile"]);
			}
			
			if(fileContent["mofscriptFile"]!=null&&fileContent["mappingFile"]!=null&&fileContent["javaFile"]!=null){
				$('ul#icons li').removeClass('ui-state-disabled');
				markEditors();
				activateMode("Left");
			}else{
				$('ul#icons li').addClass('ui-state-disabled');				
			}
		};
	    fr.readAsText(file);
	}
}*/

function saveTransformation()
{
	var textToWrite = document.getElementById("mofscriptCode").value;
	var textFileAsBlob = new Blob([textToWrite], {type:'text/plain'});
	var fileNameToSaveAs = document.getElementById("inputFileNameToSaveAs").value;

	var downloadLink = document.createElement("a");
	downloadLink.download = fileNameToSaveAs;
	downloadLink.innerHTML = "Download File";
	if (window.webkitURL != null)
	{
		// Chrome allows the link to be clicked
		// without actually adding it to the DOM.
		downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
	}
	else
	{
		// Firefox requires the link to be added to the DOM
		// before it can be clicked.
		downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
		downloadLink.onclick = destroyClickedElement;
		downloadLink.style.display = "none";
		document.body.appendChild(downloadLink);
	}

	downloadLink.click();
}

$( document ).ready(function() {



	//$('ul#icons li').addClass('ui-state-disabled');
	$("#load").button();
	$('ul#icons li').hover(function () {$(this).addClass('ui-state-hover');}, function () {$(this).removeClass('ui-state-hover');});
  
	var mfId="#mofscriptCode";
	var javaId="#javaCode";
	var mode="text/x-java";
	if(example==1){
		$("#mofscriptCode2").remove();
		$("#javaCode2").remove()
		$("#javaCode3").remove();
		$("#tabLabel li:nth-child(2)").remove();				
	}else if(example==2){	
		mfId="#mofscriptCode2";
		javaId="#javaCode2";
		traces=traces2;		
		$("#mofscriptCode").remove();
		$("#javaCode").remove();
		$("#javaCode3").remove();	
		$("#tabLabel li:nth-child(2)").remove();													
	}else if(example==3){
		$("#mofscriptCode2").remove();
		$("#javaCode").remove();		
		$("#javaCode2").remove();
		$("#tabLabel li:nth-child(1)").remove();
		traces=traces3;			
		javaId="#javaCode3";
		mode="text/txt";
		//$("#javaCode")		
	}
			
    mofscriptEditor = CodeMirror.fromTextArea($(mfId)[0], {
     lineNumbers: true,	
     matchBrackets: true,		   	 
     readOnly: true,	   
     mode: "text/x-mofscript",
	 viewportMargin: Infinity
   });
   javaEditor = CodeMirror.fromTextArea($(javaId)[0], {
     lineNumbers: true,
     readOnly: true,	 
     matchBrackets: true,		   
     mode: mode,
	 viewportMargin: Infinity
   });

   $("#tabs").tabs();  
 	//markEditors(); //commented
  //activateMode("left"); //commented
  
  //coverage analysis
  if(example==3){
	  center(mofscriptEditor,65);
  	$('ul#icons li').addClass('ui-state-disabled');
	$("[class*=mapLeftMark]").addClass("markHighlighted");
	$("[name=modelMenu]").val("All");
  }

	
 	//e es la vble que nos va a pasar js con un evento
    var loadFileOnMOFScriptTextArea = function(e){
       	var file = e.target.files[0];
       	mofscriptFile=file;
   		 if (file) {
   		 	//debugger;
       		var reader = new FileReader();
       		//As readAsText is an asynchronous method we need to setup an event listener for when the file has finished loading.
       		reader.onload = function(e) {
  				var text = reader.result;
  				mofscriptEditor.setValue(text);
  				$("#mofscriptTransformation").css('background-color','#FFF');
			}
        	reader.readAsText(file);
        	//Uso el nombre del archivo para rellenar el campo de "save as"
        	$("#inputFileNameToSaveAs").val(file.name);
   		 }
    };
    function loadMOFScriptOnTextArea(){
		var file = mofscriptFile;
   		 if (file) {
   		 	//debugger;
       		var reader = new FileReader();
       		//As readAsText is an asynchronous method we need to setup an event listener for when the file has finished loading.
       		reader.onload = function(e) {
  				var text = reader.result;
  				mofscriptEditor.setValue(text);
  				$("#mofscriptTransformation").css('background-color','#FFF');
			}
        	reader.readAsText(file);
        	//Uso el nombre del archivo para rellenar el campo de "save as"
        	$("#inputFileNameToSaveAs").val(file.name);
   		 }
	}
     var loadFileOnJavaTextArea = function(e){
       	var file = e.target.files[0];
   		 if (file) {
   		 	//debugger;
       		var reader = new FileReader();
       		//As readAsText is an asynchronous method we need to setup an event listener for when the file has finished loading.
       		reader.onload = function(e) {
  				var text = reader.result;
  				javaEditor.setValue(text);
  				$("#generatedCode").css('background-color','#FFF');
			}
        	reader.readAsText(file);

   		 }
    };
     var loadTraces = function(e){
       	var file = e.target.files[0];
   		 if (file) {
       		var reader = new FileReader();
       		//As readAsText is an asynchronous method we need to setup an event listener for when the file has finished loading.
       		reader.onload = function(e) {
  				var text = reader.result;
  				$("#traces").css('background-color','#FFF');
  				traces = eval(text);
  				//markEditors();
  				//activateMode("left");
			}
        	reader.readAsText(file);
   		 }
    };
     var loadModelSet = function(e){
       	var file = e.target.files[0];
   		 if (file) {
   		 	//debugger;
       		var reader = new FileReader();
       		//As readAsText is an asynchronous method we need to setup an event listener for when the file has finished loading.
       		reader.onload = function(e) {
  				var text = reader.result;
  				javaEditor.setValue(text);
  				activateMode("right"); 
  				$("#modelSet").css('background-color','#FFF');
			}
        	reader.readAsText(file);

   		 }
    };
     var coverage = function(e){
     	//"coverage analysis" is selected
       	if(this.checked) {
       		$("#divGeneratedCode").attr('class', 'column3 hideme');
       		$("#divVisualizeTraces").attr('class', 'hideme');
       		$("#divModelSet").attr('class', 'column3 showme');
       		$("#divCoverageAnalysis").attr('class', 'showme');
       		$("#generatedCode").val("");
       		$("#traces").val("");
       		loadMOFScriptOnTextArea();	
       		$("#mofscriptCode2").remove();
			$("#javaCode").remove();		
			$("#javaCode2").remove();
			$("#tabLabel li:nth-child(1)").remove();
    	}else{ //not coverage analysis
    		$("#divModelSet").attr('class', 'column3 hideme');
    		$("#divCoverageAnalysis").attr('class', 'hideme');
    		$("#divGeneratedCode").attr('class', 'column3 showme');
    		$("#divVisualizeTraces").attr('class', 'showme');
    		$("#modelSet").val("");
    		$("#traces").val("");
    		$("#load").button();
			$('ul#icons li').hover(function () {$(this).addClass('ui-state-hover');}, function () {$(this).removeClass('ui-state-hover');});
			var mfId="#mofscriptCode";
			var javaId="#javaCode";
			var mode="text/x-java";
  			$("#tabs").tabs();  
 			//markEditors(); //commented
  			//activateMode("left"); //commented
    	}
    };
     var visualizeTraces = function(e){
       //check that the three inputs are not empty. If any of it is empty, mark red
       if($("#mofscriptTransformation").val() && $("#traces").val() && $("#generatedCode").val()){
       		markEditors();
  			activateMode("left");
       }else{
       		if($("#mofscriptTransformation").val()==""){
       			$("#mofscriptTransformation").css('background-color','#FF0000');
       		}
       		if($("#traces").val()==""){
       			$("#traces").css('background-color','#FF0000');
       		}
       		if($("#generatedCode").val()==""){
       			$("#generatedCode").css('background-color','#FF0000');
       		}
       }
     
    };

     var coverageAnalysis = function(e){
       //check that the three inputs are not empty. If any of it is empty, mark red
       if($("#mofscriptTransformation").val() && $("#traces").val() && $("#modelSet").val()){
			//traces=traces3;
			var file = $("#traces").value;
   			 if (file) {
       			var reader = new FileReader();
       			//As readAsText is an asynchronous method we need to setup an event listener for when the file has finished loading.
       			reader.onload = function(e) {
  					var text = reader.result;
  					traces = eval(text);
				}
        		reader.readAsText(file);
   			}
   			//loadMOFScriptOnTextArea();			
			//javaId="#javaCode3";
			mode="text/txt";
			$("#tabs").tabs();  
 			markEditors();

  			//activateMode("left"); 
		    center(mofscriptEditor,65);
  			$('ul#icons li').addClass('ui-state-disabled');
			$("[class*=mapLeftMark]").addClass("markHighlighted");
			$("[name=modelMenu]").val("All");
       }else{
       		if($("#mofscriptTransformation").val()==""){
       			$("#mofscriptTransformation").css('background-color','#FF0000');
       		}
       		if($("#traces").val()==""){
       			$("#traces").css('background-color','#FF0000');
       		}
       		if($("#modelSet").val()==""){
       			$("#modelSet").css('background-color','#FF0000');
       		}
       }
     
    };

	$('#mofscriptTransformation').on('change', loadFileOnMOFScriptTextArea);
	$('#generatedCode').on('change', loadFileOnJavaTextArea);
	$('#traces').on('change', loadTraces);
	$('#modelSet').on('change', loadModelSet);
	$('#coverage').on('change', coverage);
	$('#visualizeTraces').on('click', visualizeTraces);
	$('#coverageAnalysis').on('click', coverageAnalysis);
	$('#saveTransformation').on('click', saveTransformation);

  /*$('#mofscriptFile').customFileInput().change(readFile);
  $('#mappingFile').customFileInput().change(readFile);
  $('#javaFile').customFileInput().change(readFile);*/
});