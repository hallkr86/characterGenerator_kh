from django.shortcuts import render
# from rest_framework.views import APIView
from app. models import React
from app. serializer import ReactSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

# Create your views here.
# class ReactView(APIView):

@api_view(["GET", "POST"])
def reacts(request):
    if request.method == "GET":
        reacts = React.objects.all()
        serializer = ReactSerializer(reacts, many=True)
        return Response(serializer.data)


    elif request.method == "POST": 
        serializer = ReactSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(["GET", "PUT", "DELETE"])
def react_detail(request, slug):
    try:
        react = React.objects.get(slug=slug)
    except React.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == "GET":
        serializer = ReactSerializer(react)
        return Response(serializer.data)

    elif request.method == "PUT":
        serializer = ReactSerializer(react, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == "DELETE":
        react.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

# class ReactListCreateView(generics.ListCreateAPIView):
#     queryset = React.objects.all()
#     serializer_class = ReactSerializer

# class ReactDetailView(generics.RetrieveUpdateDestroyAPIView):
#     queryset = React.objects.all()
#     serializer_class = ReactSerializer


