let users=[{"id":1,"name":"Randall","email":"rraywood0@spiegel.de","gender":"Male"},
{"id":2,"name":"Grace","email":"gparaman1@ycombinator.com","gender":"Male"},
{"id":3,"name":"Chalmers","email":"ccraddock2@deviantart.com","gender":"Male"},
{"id":4,"name":"Fianna","email":"fbase3@imgur.com","gender":"Female"},
{"id":5,"name":"Winthrop","email":"wornells4@xinhuanet.com","gender":"Male"},
{"id":6,"name":"Kattie","email":"kallcock5@twitpic.com","gender":"Female"},
{"id":7,"name":"Larine","email":"lkleynen6@techcrunch.com","gender":"Female"},
{"id":8,"name":"Tracey","email":"tmartins7@bing.com","gender":"Male"},
{"id":9,"name":"Orv","email":"odislee8@unc.edu","gender":"Male"},
{"id":10,"name":"Veronica","email":"vsaltmarsh9@mapquest.com","gender":"Female"},
{"id":11,"name":"Geri","email":"gshieldona@amazon.co.uk","gender":"Female"},
{"id":12,"name":"Erie","email":"ehasnneyb@techcrunch.com","gender":"Male"},
{"id":13,"name":"Alick","email":"ahindrickc@loc.gov","gender":"Bigender"},
{"id":14,"name":"Goraud","email":"gchandlerd@google.ca","gender":"Male"},
{"id":15,"name":"Meryl","email":"mrowleye@berkeley.edu","gender":"Male"},
{"id":16,"name":"Perla","email":"polijvef@opensource.org","gender":"Female"},
{"id":17,"name":"Dill","email":"dgarlettg@google.com.br","gender":"Male"},
{"id":18,"name":"Suzanne","email":"smcgeneayh@cafepress.com","gender":"Female"},
{"id":19,"name":"Carolina","email":"cyvensi@geocities.com","gender":"Female"},
{"id":20,"name":"Gussie","email":"ghallumj@dagondesign.com","gender":"Female"},
{"id":21,"name":"Terrill","email":"tpedlowk@china.com.cn","gender":"Male"},
{"id":22,"name":"Holmes","email":"hstebbingl@si.edu","gender":"Male"},
{"id":23,"name":"Isac","email":"icowlasm@simplemachines.org","gender":"Male"},
{"id":24,"name":"Rhonda","email":"rwheelern@myspace.com","gender":"Female"},
{"id":25,"name":"Mayor","email":"mgalbraetho@shop-pro.jp","gender":"Male"},
{"id":26,"name":"Wilburt","email":"wbaudicp@cafepress.com","gender":"Male"},
{"id":27,"name":"Leontyne","email":"lpaxefordq@vinaora.com","gender":"Female"},
{"id":28,"name":"Tonye","email":"tgallaherr@disqus.com","gender":"Female"},
{"id":29,"name":"Delora","email":"dscrases@prnewswire.com","gender":"Female"},
{"id":30,"name":"Willey","email":"wmcilvennyt@dailymail.co.uk","gender":"Male"},
{"id":31,"name":"Minor","email":"mhanneyu@bbc.co.uk","gender":"Male"},
{"id":32,"name":"Malia","email":"msaunperv@gizmodo.com","gender":"Polygender"},
{"id":33,"name":"Ellswerth","email":"elehrahanw@state.gov","gender":"Male"},
{"id":34,"name":"Viole","email":"vrotgex@wordpress.com","gender":"Female"},
{"id":35,"name":"Megen","email":"mmarxseny@indiatimes.com","gender":"Female"},
{"id":36,"name":"Annaliese","email":"awoolveridgez@domainmarket.com","gender":"Female"},
{"id":37,"name":"Cazzie","email":"cwasling10@ucoz.ru","gender":"Male"},
{"id":38,"name":"Frasquito","email":"fdunkley11@ftc.gov","gender":"Male"},
{"id":39,"name":"Gregoor","email":"gbatrick12@photobucket.com","gender":"Male"},
{"id":40,"name":"Goddard","email":"gpartener13@businessweek.com","gender":"Male"},
{"id":41,"name":"Anna","email":"aadolfson14@alibaba.com","gender":"Female"},
{"id":42,"name":"Shanna","email":"scorbin15@sogou.com","gender":"Female"},
{"id":43,"name":"Hannah","email":"hfrankcom16@imgur.com","gender":"Female"},
{"id":44,"name":"Ursola","email":"urushford17@rakuten.co.jp","gender":"Female"},
{"id":45,"name":"Dale","email":"dbaignard18@examiner.com","gender":"Female"},
{"id":46,"name":"Bastian","email":"baland19@tripadvisor.com","gender":"Male"},
{"id":47,"name":"Jennee","email":"jwortt1a@spotify.com","gender":"Female"},
{"id":48,"name":"Chandra","email":"cbeadle1b@constantcontact.com","gender":"Female"},
{"id":49,"name":"Lillis","email":"lsambrook1c@addtoany.com","gender":"Female"},
{"id":50,"name":"Linn","email":"lmulqueen1d@fc2.com","gender":"Female"}]

function displayUsers(){
    let rows=""
    let i=0 
    while(i<users.length){
        rows=rows+`<tr>
                  <td>${users[i].id}</td>
                  <td>${users[i].name}</td>
                  <td>${users[i].email}</td>
                  <td>${users[i].gender.substr(0,1)}</td>
                  </tr>`
            i=i+1;
}
       
    
    document.getElementById("abc").innerHTML=rows
}