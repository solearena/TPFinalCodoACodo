from django.shortcuts import render
from .models import Consulta
from django.views import View
from django.urls import reverse_lazy

from django.views.generic.list import ListView
from django.views.generic.detail import DetailView
from django.views.generic.edit import CreateView, UpdateView, DeleteView


# Create your views here.

class ConsultasBaseView(View):
    template_name = 'consultas.html'
    model = Consulta
    fields = '__all__'
    success_url = reverse_lazy('consultas:all')


class ConsultasListView(ConsultasBaseView, ListView):
    ...

class ConsultasDetailView(ConsultasBaseView, DetailView):
    template_name = 'consulta_detail.html'

class ConsultasCreateView(ConsultasBaseView, CreateView):
    template_name = 'consulta_create.html'
    extra_context = {
        'tipo': 'Crear Consulta'
    }

class ConsultasUpdateView(ConsultasBaseView, UpdateView):
    template_name = 'consulta_create.html'
    extra_context = {
        'tipo': 'Modificar Consulta'
    }

class ConsultasDeleteView(ConsultasBaseView, DeleteView):
    template_name = 'consulta_delete.html'
    extra_context = {
        'tipo': 'Eliminar Consulta'
    }