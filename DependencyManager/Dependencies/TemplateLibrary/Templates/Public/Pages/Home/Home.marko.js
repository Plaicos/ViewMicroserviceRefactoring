// Compiled using marko@4.21.1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/grpc-microservice$1.0.0/DedendencyManager/Dependencies/TemplateLibrary/Templates/Public/Pages/Home/Home.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
    _preferred_script_location_tag = marko_loadTag(require("marko/src/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html><head></head><body><header render-mustRequire render-selector=Public/Components/Header></header><section id=hero class=\"d-flex align-items-center\"><div class=container><div class=row><div class=\"col-lg-5 pt-5 pt-lg-0 order-2 order-lg-1\"><h1 style=\"margin-top: 60px;\">HUB da industria cosméticas</h1><h2>Anuncie e venda de forma rápida, prática e transparente</h2><a href=homeCad.html class=\"btn-get-started scrollto\">Cadastre-se</a></div><div class=\"col-lg-7 order-1 order-lg-2 \"><img src=assets/img/imagem1.png class=\"img-fluid \" alt style=\"border-radius: 30px; height: 460px; width: 980px;\"></div></div></div></section><main id=main><section id=about class=about><div class=container><div class=\"row justify-content-between\"><div class=\"col-lg-5 d-flex align-items-center justify-content-center about-img\"><img src=assets/img/sla.png class=img-fluid alt data-aos=zoom-in></div><div class=\"col-lg-6 pt-5 pt-lg-0\"><h3 data-aos=fade-up style=\"margin-top: 60px;\">Descubra como a Plaicos vai crescer suas vendas e dar um boost em seu negócio</h3><div class=row><div class=col-md-6 data-aos=fade-up data-aos-delay=200><i class=\"bx bx-layer\"></i><h4>O QUE É PLAICOS</h4><p>Plataforma da Indústria Cosmética, com um conceito inovador na forma de relacionamento entre fornecedor e indústria. Vem para agilizar a comunicação entre compradores e fornecedores encurtando distâncias</p></div><div class=col-md-6 data-aos=fade-up data-aos-delay=100><i class=\"bx bx-bar-chart-alt-2\"></i><h4>COMO OPERAMOS?</h4><p>Com diversos cadastros de fornecedores e ingredientes no Brasil, na Plaicos você pode pesquisar, avaliar e selecionar as matérias primas, verificar documentação, solicitar cotação, amostra e ainda conversar com seu fornecedor via chat para tirar suas dúvidas.</p></div></div></div></div></div></section><section id=services class=\"services section-bg\"><div class=container><div class=section-title data-aos=fade-up style=\"padding: 60px;\"><h2>FIQUE ATUALIZADO</h2><p>Novidades</p></div><div class=row><div class=\"col-md-6 col-lg-3 d-flex align-items-stretch\" data-aos=zoom-in data-aos-delay=100><div class=icon-box><h4 class=title><a href>Titulo</a></h4><p class=description>Texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto</p></div></div><div class=\"col-md-6 col-lg-3 d-flex align-items-stretch\" data-aos=zoom-in data-aos-delay=200><div class=icon-box><h4 class=title><a href>Titulo</a></h4><p class=description>Texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto</p></div></div><div class=\"col-md-6 col-lg-3 d-flex align-items-stretch\" data-aos=zoom-in data-aos-delay=300><div class=icon-box><h4 class=title><a href>Titulo</a></h4><p class=description>Texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto</p></div></div><div class=\"col-md-6 col-lg-3 d-flex align-items-stretch\" data-aos=zoom-in data-aos-delay=400><div class=icon-box><h4 class=title><a href>Titulo</a></h4><p class=description>Texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto</p></div></div></div></div></section><section id=portfolio class=portfolio><div class=container><div class=section-title data-aos=fade-up style=\"padding: 60px;\"><h2>PORTIFÓLIO</h2><p>Confira alguns de nossos produtos</p></div><div class=row data-aos=fade-up data-aos-delay=100><div class=col-lg-12><ul id=portfolio-flters><li data-filter=* class=filter-active>Todos</li><li data-filter=.filter-cabelos>Cabelos</li><li data-filter=.filter-face>Face</li><li data-filter=.filter-corpo>Corpo</li></ul></div></div><div class=\"row portfolio-container\" data-aos=fade-up data-aos-delay=200><div class=\"col-lg-4 col-md-6 portfolio-item filter-cabelos\"><div class=portfolio-wrap><img src=assets/img/portfolio/portfolio-1.jpg class=img-fluid alt><div class=portfolio-links><a href=assets/img/portfolio/portfolio-1.jpg data-gall=portfolioGallery class=venobox title=\"App 1\"><i class=icofont-plus-circle></i></a><a href=# title=\"Mais detalhes\"><i class=icofont-link></i></a></div><div class=portfolio-info><h4>empresa nome</h4><p>cabelos</p></div></div></div><div class=\"col-lg-4 col-md-6 portfolio-item filter-corpo\"><div class=portfolio-wrap><img src=assets/img/portfolio/portfolio-2.jpg class=img-fluid alt><div class=portfolio-links><a href=assets/img/portfolio/portfolio-2.jpg data-gall=portfolioGallery class=venobox title=\"corpo 3\"><i class=icofont-plus-circle></i></a><a href=# title=\"Mais detalhes\"><i class=icofont-link></i></a></div><div class=portfolio-info><h4>empresa nome</h4><p>corpo</p></div></div></div><div class=\"col-lg-4 col-md-6 portfolio-item filter-cabelos\"><div class=portfolio-wrap><img src=assets/img/portfolio/portfolio-3.jpg class=img-fluid alt><div class=portfolio-links><a href=assets/img/portfolio/portfolio-3.jpg data-gall=portfolioGallery class=venobox title=\"cabelos 2\"><i class=icofont-plus-circle></i></a><a href=# title=\"Mais detalhes\"><i class=icofont-link></i></a></div><div class=portfolio-info><h4>empresa nome</h4><p>cabelos</p></div></div></div><div class=\"col-lg-4 col-md-6 portfolio-item filter-face\"><div class=portfolio-wrap><img src=assets/img/portfolio/portfolio-4.jpg class=img-fluid alt><div class=portfolio-links><a href=assets/img/portfolio/portfolio-4.jpg data-gall=portfolioGallery class=venobox title=\"face 2\"><i class=icofont-plus-circle></i></a><a href=# title=\"Mais detalhes\"><i class=icofont-link></i></a></div><div class=portfolio-info><h4>empresa nome</h4><p>face</p></div></div></div><div class=\"col-lg-4 col-md-6 portfolio-item filter-corpo\"><div class=portfolio-wrap><img src=assets/img/portfolio/portfolio-5.jpg class=img-fluid alt><div class=portfolio-links><a href=assets/img/portfolio/portfolio-5.jpg data-gall=portfolioGallery class=venobox title=\"corpo 2\"><i class=icofont-plus-circle></i></a><a href=# title=\"Mais detalhes\"><i class=icofont-link></i></a></div><div class=portfolio-info><h4>empresa nome</h4><p>corpo</p></div></div></div><div class=\"col-lg-4 col-md-6 portfolio-item filter-cabelos\"><div class=portfolio-wrap><img src=assets/img/portfolio/portfolio-6.jpg class=img-fluid alt><div class=portfolio-links><a href=assets/img/portfolio/portfolio-6.jpg data-gall=portfolioGallery class=venobox title=\"cabelos 3\"><i class=icofont-plus-circle></i></a><a href=# title=\"Mais detalhes\"><i class=icofont-link></i></a></div><div class=portfolio-info><h4>empresa nome</h4><p>cabelos</p></div></div></div><div class=\"col-lg-4 col-md-6 portfolio-item filter-face\"><div class=portfolio-wrap><img src=assets/img/portfolio/portfolio-7.jpg class=img-fluid alt><div class=portfolio-links><a href=assets/img/portfolio/portfolio-7.jpg data-gall=portfolioGallery class=venobox title=\"face 1\"><i class=icofont-plus-circle></i></a><a href=# title=\"Mais detalhes\"><i class=icofont-link></i></a></div><div class=portfolio-info><h4>empresa nome</h4><p>face</p></div></div></div><div class=\"col-lg-4 col-md-6 portfolio-item filter-face\"><div class=portfolio-wrap><img src=assets/img/portfolio/portfolio-8.jpg class=img-fluid alt><div class=portfolio-links><a href=assets/img/portfolio/portfolio-8.jpg data-gall=portfolioGallery class=venobox title=\"face 3\"><i class=icofont-plus-circle></i></a><a href=# title=\"Mais detalhes\"><i class=icofont-link></i></a></div><div class=portfolio-info><h4>empresa nome</h4><p>face</p></div></div></div><div class=\"col-lg-4 col-md-6 portfolio-item filter-corpo\"><div class=portfolio-wrap><img src=assets/img/portfolio/portfolio-9.jpg class=img-fluid alt><div class=portfolio-links><a href=assets/img/portfolio/portfolio-9.jpg data-gall=portfolioGallery class=venobox title=\"corpo 3\"><i class=icofont-plus-circle></i></a><a href=# title=\"Mais detalhes\"><i class=icofont-link></i></a></div><div class=portfolio-info><h4>empresa nome</h4><p>corpo</p></div></div></div></div></div></section><section id=faq class=\"faq section-bg\"><div class=container><div class=section-title data-aos=fade-up style=\"padding: 60px;\"><h2>MAIS</h2><p>Perguntas frequentes</p></div><ul class=faq-list><li data-aos=fade-up data-aos-delay=100><a data-toggle=collapse class href=#faq1>Como posso pesquisar os produtos? <i class=icofont-simple-up></i></a><div id=faq1 class=\"collapse show\" data-parent=.faq-list><p>Há um sistema de buscas que pode ser realizada por: fornecedor, INCI name, CAS number, nome da matéria-prima, categoria, subcategoria, função, tipo, origem, aplicação, facilitando assim sua busca.</p></div></li><li data-aos=fade-up data-aos-delay=200><a data-toggle=collapse href=#faq2 class=collapsed>Como fazer parte? <i class=icofont-simple-up></i></a><div id=faq2 class=collapse data-parent=.faq-list><p>Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.</p></div></li><li data-aos=fade-up data-aos-delay=300><a data-toggle=collapse href=#faq3 class=collapsed>sla sla? <i class=icofont-simple-up></i></a><div id=faq3 class=collapse data-parent=.faq-list><p>Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis</p></div></li><li data-aos=fade-up data-aos-delay=400><a data-toggle=collapse href=#faq4 class=collapsed>sla sla? <i class=icofont-simple-up></i></a><div id=faq4 class=collapse data-parent=.faq-list><p>Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.</p></div></li><li data-aos=fade-up data-aos-delay=500><a data-toggle=collapse href=#faq5 class=collapsed>sla sla? <i class=icofont-simple-up></i></a><div id=faq5 class=collapse data-parent=.faq-list><p>Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in</p></div></li><li data-aos=fade-up data-aos-delay=600><a data-toggle=collapse href=#faq6 class=collapsed>sla sla? <i class=icofont-simple-up></i></a><div id=faq6 class=collapse data-parent=.faq-list><p>Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris vitae ultricies leo integer malesuada nunc vel. Tincidunt eget nullam non nisi est sit amet. Turpis nunc eget lorem dolor sed. Ut venenatis tellus in metus vulputate eu scelerisque. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Nibh tellus molestie nunc non blandit massa enim nec.</p></div></li></ul></div></section><section id=team class=team><div class=container><div class=section-title data-aos=fade-up style=\"padding: 60px;\"><h2>EQUIPE</h2><p>texto texto texto texto</p></div><div class=row><div class=\"col-xl-3 col-lg-4 col-md-6\" data-aos=zoom-in data-aos-delay=100><div class=member><img src=assets/img/team/team-1.jpg class=img-fluid alt><div class=member-info><div class=member-info-content><h4>Walter White</h4><span>Chief Executive Officer</span></div><div class=social><a href><i class=icofont-twitter></i></a><a href><i class=icofont-facebook></i></a><a href><i class=icofont-instagram></i></a><a href><i class=icofont-linkedin></i></a></div></div></div></div><div class=\"col-xl-3 col-lg-4 col-md-6\" data-aos=zoom-in data-aos-delay=200><div class=member><img src=assets/img/team/team-2.jpg class=img-fluid alt><div class=member-info><div class=member-info-content><h4>Sarah Jhonson</h4><span>Product Manager</span></div><div class=social><a href><i class=icofont-twitter></i></a><a href><i class=icofont-facebook></i></a><a href><i class=icofont-instagram></i></a><a href><i class=icofont-linkedin></i></a></div></div></div></div><div class=\"col-xl-3 col-lg-4 col-md-6\" data-aos=zoom-in data-aos-delay=300><div class=member><img src=assets/img/team/team-3.jpg class=img-fluid alt><div class=member-info><div class=member-info-content><h4>William Anderson</h4><span>CTO</span></div><div class=social><a href><i class=icofont-twitter></i></a><a href><i class=icofont-facebook></i></a><a href><i class=icofont-instagram></i></a><a href><i class=icofont-linkedin></i></a></div></div></div></div><div class=\"col-xl-3 col-lg-4 col-md-6\" data-aos=zoom-in data-aos-delay=400><div class=member><img src=assets/img/team/team-4.jpg class=img-fluid alt><div class=member-info><div class=member-info-content><h4>Amanda Jepson</h4><span>Accountant</span></div><div class=social><a href><i class=icofont-twitter></i></a><a href><i class=icofont-facebook></i></a><a href><i class=icofont-instagram></i></a><a href><i class=icofont-linkedin></i></a></div></div></div></div><div class=\"col-xl-3 col-lg-4 col-md-6\" data-aos=zoom-in data-aos-delay=500><div class=member><img src=assets/img/team/team-4.jpg class=img-fluid alt><div class=member-info><div class=member-info-content><h4>Amanda Jepson</h4><span>Accountant</span></div><div class=social><a href><i class=icofont-twitter></i></a><a href><i class=icofont-facebook></i></a><a href><i class=icofont-instagram></i></a><a href><i class=icofont-linkedin></i></a></div></div></div></div><div class=\"col-xl-3 col-lg-4 col-md-6\" data-aos=zoom-in data-aos-delay=600><div class=member><img src=assets/img/team/team-4.jpg class=img-fluid alt><div class=member-info><div class=member-info-content><h4>Amanda Jepson</h4><span>Accountant</span></div><div class=social><a href><i class=icofont-twitter></i></a><a href><i class=icofont-facebook></i></a><a href><i class=icofont-instagram></i></a><a href><i class=icofont-linkedin></i></a></div></div></div></div><div class=\"col-xl-3 col-lg-4 col-md-6\" data-aos=zoom-in data-aos-delay=700><div class=member><img src=assets/img/team/team-4.jpg class=img-fluid alt><div class=member-info><div class=member-info-content><h4>Amanda Jepson</h4><span>Accountant</span></div><div class=social><a href><i class=icofont-twitter></i></a><a href><i class=icofont-facebook></i></a><a href><i class=icofont-instagram></i></a><a href><i class=icofont-linkedin></i></a></div></div></div></div><div class=\"col-xl-3 col-lg-4 col-md-6\" data-aos=zoom-in data-aos-delay=800><div class=member><img src=assets/img/team/team-4.jpg class=img-fluid alt><div class=member-info><div class=member-info-content><h4>Amanda Jepson</h4><span>Accountant</span></div><div class=social><a href><i class=icofont-twitter></i></a><a href><i class=icofont-facebook></i></a><a href><i class=icofont-instagram></i></a><a href><i class=icofont-linkedin></i></a></div></div></div></div></div></div></section><section id=clients class=\"clients section-bg\"><div class=container><div class=section-title data-aos=fade-up style=\"padding: 60px;\"><h2>FORNECEDORES</h2><p>Eles confiaram em nós</p></div><div class=\"owl-carousel clients-carousel\" data-aos=fade-up data-aos-delay=100><img src=assets/img/clients/client-1.png alt><img src=assets/img/clients/client-2.png alt><img src=assets/img/clients/client-3.png alt><img src=assets/img/clients/client-4.png alt><img src=assets/img/clients/client-5.png alt><img src=assets/img/clients/client-6.png alt><img src=assets/img/clients/client-7.png alt><img src=assets/img/clients/client-8.png alt></div></div></section><section id=contact class=contact><div class=container><div class=section-title data-aos=fade-up style=\"padding: 60px;\"><h2>CONTATO</h2><p>Nos envie sua pergunta</p></div><div class=row><div class=\"col-lg-5 d-flex align-items-stretch\" data-aos=fade-up data-aos-delay=100><div class=info><div class=email><i class=icofont-envelope></i><h4>Email:</h4><p>info@example.com</p></div><div class=phone><i class=icofont-phone></i><h4>Call:</h4><p>+1 5589 55488 55s</p></div><img src=assets/img/oioi.svg frameborder=0 style=\"border:0; width: 400px; height: 300px;\"></div></div><div class=\"col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch\" data-aos=fade-up data-aos-delay=200><form action=forms/contact.php method=post role=form class=php-email-form><div class=form-row><div class=\"form-group col-md-6\"><label for=name>Nome</label><input type=text name=name class=form-control id=name data-rule=minlen:4 data-msg=\"Por favor insira seu nome\"><div class=validate></div></div><div class=\"form-group col-md-6\"><label for=name>Email</label><input type=email class=form-control name=email id=email data-rule=email data-msg=\"Por favor insira seu Email\"><div class=validate></div></div></div><div class=form-group><label for=name>Mensagem</label><textarea class=form-control name=message rows=10 data-rule=required data-msg=\"Por favor escreva algo para nós\"></textarea><div class=validate></div></div><div class=mb-3><div class=loading>Loading</div><div class=error-message></div><div class=sent-message>Sua mensagem foi enviada. Obrigada!</div></div><div class=text-center><button type=submit>Enviar</button></div></form></div></div></div><br><br></section></main><a href=# class=back-to-top><i class=icofont-simple-up></i></a><footer render-mustRequire render-selector=Public/Components/Footer></footer><script render-mustRequire render-selector=Common/Components/Script></script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "395");

  _preferred_script_location_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/grpc-microservice$1.0.0/DedendencyManager/Dependencies/TemplateLibrary/Templates/Public/Pages/Home/Home.marko",
    tags: [
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer",
      "marko/src/core-tags/components/preferred-script-location-tag"
    ]
  };
