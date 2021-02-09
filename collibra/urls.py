from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from . import views

# api router could be improved
url_api_patterns = format_suffix_patterns([
    path('api/nodeTypes/', views.NodeTypesList.as_view()),
    path('api/nodeTypes/<int:pk>/', views.NodeTypesDetail.as_view()),
    path('api/nodes/', views.NodesList.as_view()),
    path('api/nodes/<int:pk>/', views.NodesDetail.as_view()),
    path('api/tables/', views.TablesList.as_view()),
    path('api/tables/<int:pk>/', views.TablesDetail.as_view()),
    path('api/columns/', views.ColumnsList.as_view()),
    path('api/columns/<int:pk>/', views.ColumnsDetail.as_view()),
])

urlpatterns = [
    path('', views.HomePageView.as_view(), name='index'),
    *url_api_patterns
]
