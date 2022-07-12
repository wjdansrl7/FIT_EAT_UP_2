from django.contrib.auth.models import AbstractUser
from django.db import models

from backend.settings import common


class User(AbstractUser):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=20)
