from django.db import models

# Create your models here.

class React(models.Model):
    character = models.CharField(max_length=30)
    power = models.CharField(max_length=200)
