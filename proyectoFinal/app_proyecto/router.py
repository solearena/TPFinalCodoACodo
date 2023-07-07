from rest_framework import routers
from .viewsets import ConsultaViewSet

router = routers.SimpleRouter()

router.register('api-consulta',ConsultaViewSet)