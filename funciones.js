function doGet()
{
    return HtmlService.createTemplateFromFile('web').evaluate().setTitle('Agenda Google Apps script');
}

function obtenerDatosHTML(nombre)
{
   return HtmlService.createHtmlOutputFromFile('nombre').getContent();
}
