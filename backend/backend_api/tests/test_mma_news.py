from django.urls import reverse
from rest_framework.test import APITestCase
from rest_framework import status
from backend_api.models.mma_news_model import MMANews
from backend_api.serializers.mma_news_serializers import MMANewsSerializer


class MMANewsTest(APITestCase):
    news_endpoint = reverse('mma_news')

    mma_news_1 = MMANews(
        title="Adesanya Offers Simple Gameplan For Costa Fight",
        description="UFC middleweight champion Israel Adesanya shares his simple gameplan",
        article="http://tinyurl.com/y23utwzu",
        thumbnail_url="http://tinyurl.com/yysbvw27",
        img_url="http://tinyurl.com/y3dqk23d",
        author="Dan Hiergesell"
    )

    mma_news_2 = MMANews(
        title="Report: Cody Garbrandt stricken with coronavirus ahead of UFC 255 title fight",
        description="To see an updated list of positive coronavirus cases click here.",
        article="http://tinyurl.com/y5s97yp5",
        thumbnail_url="http://tinyurl.com/y49rzvnw",
        img_url="http://tinyurl.com/y5b4bxop",
        author="Jesse Holland"
    )

    expected_news = [mma_news_1, mma_news_2]

    def setUp(self):
        """ Saving existing videos to test"""
        for obj in self.expected_news:
            obj.save()

    def test_get_all_mma_videos(self):
        """ Retrieve all existing videos"""
        serializer = MMANewsSerializer(self.expected_news, many=True)

        response = self.client.get(self.news_endpoint)
        assert response.status_code == status.HTTP_200_OK
        assert response.data == serializer.data

    def test_get_single_news_article(self):
        """ Retrieve an existing news article"""
        news_endpoint = reverse('mma_article', args=[self.mma_news_1.pk])

        mma_news = MMANews.objects.get(pk=self.mma_news_1.pk)

        serializer = MMANewsSerializer(mma_news)

        response = self.client.get(news_endpoint)

        assert response.status_code == status.HTTP_200_OK
        assert response.data == serializer.data

    def test_get_empty_openers(self):
        """ Retrieve no articles from db """
        MMANews.objects.all().delete()

        response = self.client.get(self.news_endpoint)
        assert response.status_code == status.HTTP_200_OK
        assert response.data == []
