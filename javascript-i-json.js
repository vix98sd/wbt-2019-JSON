var json = `[
    {
      "naslov1": "Objašnjenje parsiranja",
      "naslov2": "Šta je to parsiranje?",
      "paragraf1": "Parsiranje predstavlja raščlanjivanje podataka prestavljenih u JSON zapisu i kreiranje JavaScript objekata od dobijenih članova. Iako su veoma slični, JSON objekat nije isto što i JavaScript objekat!",
      "paragraf2": "Neke od razlika između JSON strukture i strukture objekata kod JavaScripta su to što kod JSON strukture ime može biti bilo koji validan string, uključujući i beline, dok kod JavaScript-a ovo nije dozvoljeno. Takođe, kod JSON strukture ime mora biti navedeno između dvostrukih navodnika, dok se kod JavaScripta oni ni ne koriste.",
      "paragraf3": "Zbog ovih nepoklapanja u strukturama objekata neophodno je izvršiti “prevođenje” objekta u JSON zapisu u JavaScript objekat.",
      "paragraf4": "Ovaj postupak se naziva parsiranje.",
      "btntxt":"-",
      "btnhref":"-"
    },
    {
      "naslov1": "Koraci u parsiranju",
      "naslov2": "Koji bi to bili koraci u parsiranju?",
      "paragraf1": "∙ Preuzimanje podataka u JSON zapisu sa web servera.",
      "paragraf2": "∙ Smeštanje JSON zapisa u objekat.",
      "paragraf3": "∙ Parsiranje JSON zapisa.",
      "paragraf4": "∙ Smeštanje podataka u za to predviđene varijable.",
      "btntxt":"Pogledaj primere",
      "btnhref":"primeri.html"
    }
]`;

$('#show_cards').click(function(){
    //$.get('js-i-json-cards', function(cards){
        var cards = JSON.parse(json);
        $('#show_cards').addClass("d-none");
        var content = `<div class="jumbotron text-center mb-0 mt-5"><div class="row pt-4">`;

        for(var i = 0; i < cards.length; i++){
            content += `<div class="col-md-6 col-12 pt-2 pt-md-0">
                            <div class="card">
                                <h5 class="card-header">${cards[i].naslov1}</h5>
                                <div class="card-body">
                                    <h5 class="card-title">${cards[i].naslov2}</h5>
                                    <hr class="heading-line">
                                    <p class="card-text">
                                        ${cards[i].paragraf1}
                                    </p>
                                    <p class="card-text">
                                        ${cards[i].paragraf2}
                                    </p>
                                    <p class="card-text">
                                        ${cards[i].paragraf3}
                                    </p>
                                    <p class="card-text">
                                        ${cards[i].paragraf4}
                                    </p>`;

            if(cards[i].btnhref != "-"){
                content += `<a href="${cards[i].btnhref}" class="btn btn-dark">${cards[i].btntxt}</a>`;
            }

            content += `        </div>
                            </div>
                        </div>`;

        }

        content += `</div></div>`;
        $('#cards_holder').append(content);
    //});
    console.log("It works fine!");
});

/*

<div class="row pt-4">

                    <div class="col-md-6 col-12pt-4 pt-md-0">
                        <div class="card">
                            <h5 class="card-header">Objašnjenje parsiranja</h5>
                            <div class="card-body">
                                <h5 class="card-title">Šta je to parsiranje?</h5>
                                <hr class="heading-line">
                                <p class="card-text">
                                    Parsiranje predstavlja raščlanjivanje podataka prestavljenih u JSON zapisu i kreiranje JavaScript objekata od dobijenih članova. Iako su veoma slični, JSON objekat nije isto što i JavaScript objekat!  
                                </p>
                                <p class="card-text">
                                    Neke od razlika između JSON strukture i strukture objekata kod JavaScripta su to što kod JSON strukture ime može biti bilo koji validan string, uključujući i beline, dok kod JavaScript-a ovo nije dozvoljeno. Takođe, kod JSON strukture ime mora biti navedeno između dvostrukih navodnika, dok se kod JavaScripta oni ni ne koriste. 
                                </p>
                                <p class="card-text">
                                    Zbog ovih nepoklapanja u strukturama objekata neophodno je izvršiti “prevođenje” objekta u JSON zapisu u JavaScript objekat. 
                                </p>
                                <p class="card-text">
                                    Ovaj postupak se naziva parsiranje.
                                </p>
                            </div>
                        </div>
                    </div>
                
                    <div class="col-md-6 col-12 pt-4 pt-md-0">
                        <div class="card">
                            <h5 class="card-header">Koraci u parsiranju</h5>
                            <div class="card-body">
                                <h5 class="card-title">Koji bi to bili koraci u parsiranju?</h5>
                                <hr class="heading-line">
                                <p class="card-text">∙ Preuzimanje podataka u JSON zapisu sa web servera.</p>
                                <p class="card-text">∙ Smeštanje JSON zapisa u objekat.</p>
                                <p class="card-text">∙ Parsiranje JSON zapisa.</p>
                                <p class="card-text">∙ Smeštanje podataka u za to predviđene varijable.</p>
                                <a href="primeri.html" class="btn btn-dark">Pogledaj primere</a>
                            </div>
                        </div>
                    </div>

                </div>

*/