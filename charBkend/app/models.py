from django.db import models
from django.utils.text import slugify
from django.utils.crypto import get_random_string

# Create your models here.

class React(models.Model):
    
    character = models.CharField(max_length=30)
    power = models.CharField(max_length=200)
    slug = models.SlugField(unique=True, blank=True)

def __str__(self):
        return self.character

def save(self, *args, **kwargs):
        if not self.slug:
            slug_base = slugify(self.character)
            slug_candidate = slug_base
            counter = 1

            while React.objects.filter(slug=slug_candidate).exists():
                slug_candidate = f'{slug_base}-{counter}'
                counter += 1
            self.slug = slug_candidate
        super().save(*args, **kwargs)

