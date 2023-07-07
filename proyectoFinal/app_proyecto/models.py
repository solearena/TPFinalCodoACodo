from django.db import models

# Create your models here.

class Consulta(models.Model):
    #class Meta:
     #   db_table: "lista_consultas"

    codigo=models.AutoField(primary_key=True)
    nombre=models.CharField(max_length=50)
    email=models.CharField(max_length=50)
    descripcion=models.CharField(max_length=250)

    def __str__(self):
        return f"Nombre: {self.nombre}, Email: {self.email}"
    
    def obtener_campos(self):
        return [
            (field.verbose_name, field.value_from_object(self))
            for field in self.__class__._meta.fields[1:]
        ]


