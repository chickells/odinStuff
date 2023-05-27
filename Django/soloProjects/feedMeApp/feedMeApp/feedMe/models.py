from django.db import models

# Create your models here.
class Restaurant(models.Model):
    name = models.CharField(max_length=255)
    address = models.CharField(max_length=255)
    website_url = models.URLField(max_length=200)

    def __str__(self):
        return self.name