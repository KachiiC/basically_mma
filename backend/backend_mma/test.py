from django.contrib.auth.models import User
from django.test import TestCase


def test_should_create_user_with_username() -> None:
    user = User.objects.create_user("Kachi")
    assert user.username == "Kachi"
