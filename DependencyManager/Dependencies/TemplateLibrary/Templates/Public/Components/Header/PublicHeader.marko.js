// Compiled using marko@4.21.1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/grpc-microservice$1.0.0/DependencyManager/Dependencies/TemplateLibrary/Templates/Public/Components/Header/PublicHeader.marko",
    marko_renderer = require("marko/src/runtime/components/renderer");

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<header id=header class=fixed-top style=\"background-color: #71B2AD;\"><div class=\"container-fluid d-flex\"><div class=\"logo mr-auto\"><h1 class=text-light><a href=/><span>Plaicos</span></a></h1></div><nav class=\"nav-menu d-none d-lg-block\"><ul><li class=active><a href=#header>Home</a></li><li><a href=#about>Marketplace</a></li><li><a href=#team>Equipe</a></li><li><a href=#portfolio>Blog</a></li><li><a href=#contact>Contato</a></li><li class=drop-down><a href>Conta</a><ul><li><a href=#>Perfil</a></li><li class=drop-down><a href=#>Dashboard</a><ul><li><a href=#>Deep Drop Down 1</a></li><li><a href=#>Deep Drop Down 2</a></li><li><a href=#>Deep Drop Down 3</a></li><li><a href=#>Deep Drop Down 4</a></li><li><a href=#>Deep Drop Down 5</a></li></ul></li><li><a href=#>Sair</a></li></ul></li><li class=get-started><a href=/log-in>Login</a></li></ul></nav></div></header>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/grpc-microservice$1.0.0/DependencyManager/Dependencies/TemplateLibrary/Templates/Public/Components/Header/PublicHeader.marko"
  };
