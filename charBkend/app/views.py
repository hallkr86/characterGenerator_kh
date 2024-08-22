from django.shortcuts import render
# from rest_framework.views import APIView
from . models import *
from . serializer import *
# from rest_framework.response import Response

from rest_framework import generics

# Create your views here.
# class ReactView(APIView):
#     def get(self, request):
#         output = [{"character": output.character, "power": output.power}
        
#         for output in React.objects.all()]
#         return Response(output)


#     def post(self, request):
#         serializer = ReactSerializer(data=request.data)
#         if serializer.is_valid(raise_exception=True):
#             serializer.save()
#             return Response(serializer.data)

class ReactView(generics.ListCreateAPIView):
    queryset = React.objects.all()
    serializer_class = ReactSerializer
