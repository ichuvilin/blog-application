package com.chuvilin.service.impl;

import com.chuvilin.dao.NewsDAO;
import com.chuvilin.entity.NewsEntity;
import com.chuvilin.service.NewsService;
import lombok.extern.log4j.Log4j;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@Log4j
public class NewsServiceImpl implements NewsService {

    private final NewsDAO newsDAO;

    public NewsServiceImpl(NewsDAO newsDAO) {
        this.newsDAO = newsDAO;
    }

    @Override
    public String createNews(NewsEntity entity) {
        newsDAO.save(entity);
        return "Все гуд";
    }

    @Override
    public List<NewsEntity> getAllNews() {
        return newsDAO.findAll();
    }

    @Override
    public Optional<NewsEntity> getOneNews(Long id) {
        return newsDAO.findById(id);
    }
}
