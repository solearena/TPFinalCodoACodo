from django.urls import path
from .views import ConsultasListView, ConsultasDetailView, ConsultasCreateView, ConsultasDeleteView, ConsultasUpdateView
from .router import router

app_name = "consultas"

urlpatterns = [
    path('', ConsultasListView.as_view(), name = 'all'),
    path('<int:pk>/detail/', ConsultasDetailView.as_view(), name = 'detail'),
    path('create/', ConsultasCreateView.as_view(), name = 'create'),
    path('<int:pk>/update/', ConsultasUpdateView.as_view(), name = 'update'),
    path('<int:pk>/delete/', ConsultasDeleteView.as_view(), name = 'delete')
]

urlpatterns += router.urls