// Compiled using marko@4.21.10 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/alura-nodejs-1$1.0.0/src/app/views/livros/form/form.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_attr = require("marko/src/runtime/html/helpers/attr"),
    helpers_escape_xml = require("marko/src/runtime/html/helpers/escape-xml"),
    marko_escapeXml = helpers_escape_xml.x,
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
    _preferred_script_location_tag = marko_loadTag(require("marko/src/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html><head><meta charset=utf-8></head><body><h1>Cadastro de livros</h1><form action=/livros method=post>");

  if (data.livro.id) {
    out.w("<div><input type=hidden name=_method value=PUT><input type=hidden id=id name=id" +
      marko_attr("value", data.livro.id) +
      "></div>");
  }

  out.w("<div><label for=titulo>Título:</label><input type=text id=titulo name=titulo" +
    marko_attr("value", data.livro.titulo) +
    " placeholder=\"Insira o título do livro\"></div><div><label for=preco>Preço:</label><input type=text id=preco name=preco" +
    marko_attr("value", data.livro.preco) +
    " placeholder=0.00></div><div><label for=descricao>Descrição:</label><textarea id=descricao name=descricao placeholder=\"Insira a descrição do seu livro\">" +
    marko_escapeXml(data.livro.descricao) +
    "</textarea></div><div><input type=submit value=Salvar></div></form>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "20");

  _preferred_script_location_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/alura-nodejs-1$1.0.0/src/app/views/livros/form/form.marko",
    tags: [
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer",
      "marko/src/core-tags/components/preferred-script-location-tag"
    ]
  };
