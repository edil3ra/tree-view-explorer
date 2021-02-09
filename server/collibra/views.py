from django.views.generic import TemplateView
from .models import NodeTypes, Nodes, Tables, Columns
from .serializers import NodeTypesSerializer, NodesSerializer, TablesSerializer, ColumnsSerializer
from rest_framework import generics


class HomePageView(TemplateView):
    template_name = 'index.html'

    
class NodeTypesList(generics.ListCreateAPIView):
    queryset = NodeTypes.objects.all()
    serializer_class = NodeTypesSerializer


class NodeTypesDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = NodeTypes.objects.all()
    serializer_class = NodeTypesSerializer


class NodesList(generics.ListCreateAPIView):
    queryset = Nodes.objects.all()
    serializer_class = NodesSerializer


class NodesDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Nodes.objects.all()
    serializer_class = NodesSerializer


class TablesList(generics.ListCreateAPIView):
    queryset = Tables.objects.all()
    serializer_class = TablesSerializer


class TablesDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Tables.objects.all()
    serializer_class = TablesSerializer


class ColumnsList(generics.ListCreateAPIView):
    queryset = Columns.objects.all()
    serializer_class = ColumnsSerializer


class ColumnsDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Columns.objects.all()
    serializer_class = ColumnsSerializer




    
    
