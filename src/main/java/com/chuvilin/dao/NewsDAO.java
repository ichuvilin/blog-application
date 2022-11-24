package com.chuvilin.dao;

import com.chuvilin.entity.NewsEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NewsDAO extends JpaRepository<NewsEntity, Long> {
}
