from django.views.generic import TemplateView

class LandingPage(TemplateView):
    template_name = "landing.html"

class Index(TemplateView):
    template_name = "pages/index.html"

class Empresa(TemplateView):
    template_name = "pages/empresa.html"

class Portfolio(TemplateView):
    template_name = "pages/portfolio.html"

class Contacto(TemplateView):
    template_name = "pages/contacto.html"