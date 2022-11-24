package com.chuvilin.service;

import com.chuvilin.entity.NewsEntity;

import java.util.List;
import java.util.Optional;

public interface NewsService {

    String createNews(NewsEntity entity);

    List<NewsEntity> getAllNews();

    Optional<NewsEntity> getOneNews(Long id);
}
