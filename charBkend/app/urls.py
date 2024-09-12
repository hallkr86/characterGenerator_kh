from django.urls import path
from .import views
from django.views.generic import RedirectView


urlpatterns = [
    path("reacts/", views.reacts, name="reacts"),
    path("reacts/<slug:slug>/", views.react_detail, name="react-detail"),
    path('', RedirectView.as_view(url='/reacts/', permanent=False)),
]

# Endpoints to get and create items: "http://127.0.0.1:8000/reacts/""
# specific note: http://127.0.0.1:8000/reacts/react-slug"